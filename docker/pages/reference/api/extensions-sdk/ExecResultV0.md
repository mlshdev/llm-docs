> Commit-pinned source for Docker main: [content/reference/api/extensions-sdk/ExecResultV0.md](https://github.com/docker/docs/blob/ca60e92629079de412f38632876ab208d84267ef/content/reference/api/extensions-sdk/ExecResultV0.md)

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
