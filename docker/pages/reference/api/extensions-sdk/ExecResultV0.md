> Commit-pinned source for Docker main: [content/reference/api/extensions-sdk/ExecResultV0.md](https://github.com/docker/docs/blob/14df09affa43a67a6a8f7927a3578a4e4ff1bc28/content/reference/api/extensions-sdk/ExecResultV0.md)

# Interface: ExecResultV0

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

## Methods

### lines

▸ **lines**(): `string`\[]

Split output lines.

#### Returns

`string`\[]

The list of lines.

***

### parseJsonLines

▸ **parseJsonLines**(): `any`\[]

Parse each output line as a JSON object.

#### Returns

`any`\[]

The list of lines where each line is a JSON object.

***

### parseJsonObject

▸ **parseJsonObject**(): `any`

Parse a well-formed JSON output.

#### Returns

`any`

The JSON object.
