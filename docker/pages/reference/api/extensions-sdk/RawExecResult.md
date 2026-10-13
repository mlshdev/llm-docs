> Pinned source for Docker main: [content/reference/api/extensions-sdk/RawExecResult.md](https://github.com/docker/docs/blob/db384a4bd8b8f7eefbd6ed3796e49b5bfa517aad/content/reference/api/extensions-sdk/RawExecResult.md)

# Interface: RawExecResult

**`Since`**

0.2.0

## Hierarchy

- **`RawExecResult`**

  ↳ [`ExecResult`](https://docs.docker.com/reference/api/extensions-sdk/ExecResult/)

## Properties

### cmd

• `Optional` `Readonly` **cmd**: `string`

***

### killed

• `Optional` `Readonly` **killed**: `boolean`

***

### signal

• `Optional` `Readonly` **signal**: `string`

***

### code

• `Optional` `Readonly` **code**: `number`

***

### stdout

• `Readonly` **stdout**: `string`

***

### stderr

• `Readonly` **stderr**: `string`
