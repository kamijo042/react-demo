## MongoDBの用意
[MongoDB Atlas](https://www.mongodb.com/ja-jp/atlas/database)からMongoDBを接続できるようにする。
 ※ ユーザー名、パスワードをどこかにメモっておくこと

「Try Free」をクリックし、参考URLから設定を進める。
ユーザー登録、ネットワークを登録し、以下のコマンドで、DBにログインできるようにする。


- (参考)
[MongoDB Atlasで無料かつ手軽にDB環境を利用してみる](https://qiita.com/n0bisuke/items/4d4a4599ee7ce9cf4fd9)

```jsunicoderegexp
# コマンドでログインする場合
$ brew install mongosh
$ mongosh "mongodb+srv://cluster0.nftp5.mongodb.net/myFirstDatabase" --apiVersion 1 --username <username>
```
```jsunicoderegexp
# Nodeからアクセスする場合
mongodb+srv://<username>:<password>@cluster0.nftp5.mongodb.net/?retryWrites=true&w=majority
```

## MongoDBの基本操作
データベースを作成(DB名をstudyとする)
```jsunicoderegexp
use study
```
データベースの状態を確認
```jsunicoderegexp
db.stats()
```

試しに、studyデータベースにuserコレクションを作成。
そこに4件のドキュメントが保存する。
```jsunicoderegexp
db.user.insert({name:'mr.sample01', age:15, gender:'m', hobbies:['programming']});
db.user.insert({name:'mr.sample02', age:20, gender:'m', hobbies:['vi']});
db.user.insert({name:'ms.sample03', age:35, gender:'f', hobbies:['programming', 'vi']});
db.user.insert({name:'ms.sample04', age:40, gender:'f', hobbies:['cooking']});
```

find `db.user.find()` で、ドキュメントが登録されているか、確認する。
```jsunicoderegexp
> db.user.find()
[
  {
    _id: ObjectId("62acfde77a7da86870e0ac99"),
    name: 'mr.a',
    age: 10,
    gender: 'm',
    hobbies: [ 'programming' ]
  },
  {
    _id: ObjectId("62acfded7a7da86870e0ac9a"),
    name: 'mr.b',
    age: 20,
    gender: 'm',
    hobbies: [ 'vi' ]
  },
  {
    _id: ObjectId("62acfdf27a7da86870e0ac9b"),
    name: 'ms.c',
    age: 30,
    gender: 'f',
    hobbies: [ 'programming', 'vi' ]
  },
  {
    _id: ObjectId("62acfdf77a7da86870e0ac9c"),
    name: 'ms.d',
    age: 40,
    gender: 'f',
    hobbies: [ 'cooking' ]
  }
]
```

名前から検索してみる。ms.sample03を検索。
```jsunicoderegexp
> db.user.find( {name:'ms.sample03'} )
[
  {
    _id: ObjectId("62ad00837a7da86870e0ac9f"),
    name: 'ms.sample03',
    age: 35,
    gender: 'f',
    hobbies: [ 'programming', 'vi' ]
  }
]
```
年齢が２０歳以上の人を検索。
```jsunicoderegexp
> db.user.find({age:{$gte:20}})
[
  {
    _id: ObjectId("62ad00837a7da86870e0ac9e"),
    name: 'mr.sample02',
    age: 20,
    gender: 'm',
    hobbies: [ 'vi' ]
  },
  {
    _id: ObjectId("62ad00837a7da86870e0ac9f"),
    name: 'ms.sample03',
    age: 35,
    gender: 'f',
    hobbies: [ 'programming', 'vi' ]
  },
  {
    _id: ObjectId("62ad00847a7da86870e0aca0"),
    name: 'ms.sample04',
    age: 40,
    gender: 'f',
    hobbies: [ 'cooking' ]
  }
]
```
20歳以上の男性を探す
```jsunicoderegexp
> db.user.find({age:{$gte:20}, gender:'m'})
[
  {
    _id: ObjectId("62ad00837a7da86870e0ac9e"),
    name: 'mr.sample02',
    age: 20,
    gender: 'm',
    hobbies: [ 'vi' ]
  }
]
```

配列を使った検索例
```jsunicoderegexp
> db.user.find({hobbies:'programming'})
[
  {
    _id: ObjectId("62ad00837a7da86870e0ac9d"),
    name: 'mr.sample01',
    age: 15,
    gender: 'm',
    hobbies: [ 'programming' ]
  },
  {
    _id: ObjectId("62ad00837a7da86870e0ac9f"),
    name: 'ms.sample03',
    age: 35,
    gender: 'f',
    hobbies: [ 'programming', 'vi' ]
  }
]
```
検索のFieldを指定する
```jsunicoderegexp
> db.user.find({}, {name:1, _id:0})
[
  { name: 'mr.sample01' },
  { name: 'mr.sample02' },
  { name: 'ms.sample03' },
  { name: 'ms.sample04' }
]
```

MongoDBを修了する
```jsunicoderegexp
> .exit
```

以上がMongoDBの基本操作となります。
