> Pinned source for Docker main: [content/reference/api/extensions-sdk/RawExecResult.md](https://github.com/docker/docs/blob/d40e4d2c029e471aa18744e28bebe179d96abb6f/content/reference/api/extensions-sdk/RawExecResult.md)

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
