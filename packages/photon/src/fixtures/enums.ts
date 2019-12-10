export const enums = /* GraphQL */ `
  datasource my_db {
    provider = "sqlite"
    url  = "file:db/migration_engine.db"
    default = true
  }

  model User {
    id String @id @default(cuid())
    name String
    email String @unique
    status String
    nicknames String[]
    permissions Permission[]
    favoriteTree Tree
    location Location
    posts Post[]
    someFloats Float[]
  }

  model Post {
    id String @id @default(cuid())
    name String
    email String @unique
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
  }

  model Test {
    id String @id @default(uuid())
    name String
  }

  model Location {
    id Int @id
    city String
  }

  enum Tree {
    ARBORVITAE
    YELLOWBIRCH
    BLACKASH
    DOUGLASFIR
    OAK
  }

  enum Permission {
    ADMIN
    USER
    OWNER
    COLLABORATOR
  }
`
