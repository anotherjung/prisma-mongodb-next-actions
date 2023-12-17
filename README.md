# install

npx create-next-app@13.5.6 --ts --app --tailwind --use-pmpm

pnpm add prisma --save-dev

pnpm exec prisma init
- creates prisma/schema.prisma

prisma/schema.prisma
- change provider = "mongodb"
- add models

.env
- add key value DATABASE_URL=
- append db name, blog
- add gitignore 

npx prisma db push
- new 

npx prisma db pull
- introspection, sync local schema from remote

pnpm add @prisma/client 

npx prisma generate

## install seed

pnpm add --save-dev typescript ts-node @types/node

package.json
```
  "prisma": {
    "seed": "ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed.ts"
  },
  "scripts" {
    "postinstall": "prisma generate"
  }
  ...
```

npx prisma db seed

npx ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed.ts

npx ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/update.ts

npx ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/delete.ts

## updating schema

npx prisma db push && npx prisma generate

