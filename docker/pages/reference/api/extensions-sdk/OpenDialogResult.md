> Commit-pinned source for Docker main: [content/reference/api/extensions-sdk/OpenDialogResult.md](https://github.com/docker/docs/blob/652986790ecf1ddf1081149f29da132a95207a04/content/reference/api/extensions-sdk/OpenDialogResult.md)

# Interface: OpenDialogResult

**`Since`**

0.2.3

## Properties

### canceled

• `Readonly` **canceled**: `boolean`

Whether the dialog was canceled.

***

### filePaths

• `Readonly` **filePaths**: `string`\[]

An array of file paths chosen by the user. If the dialog is cancelled this will be an empty array.

***

### bookmarks

• `Optional` `Readonly` **bookmarks**: `string`\[]

macOS only. An array matching the `filePaths` array of `base64` encoded strings which contains security scoped bookmark data. `securityScopedBookmarks` must be enabled for this to be populated.
