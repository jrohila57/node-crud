# node-crud

## install sequelize

```
npm install --save sequelize
npm install --save-dev sequelize-cli
```

## install the sequelize driver

```
npm install --save pg pg-hstore # Postgres
```
## init sequelize
```
npx sequelize-cli init
```
## create sample moodel
```
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string

```