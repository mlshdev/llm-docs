> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/statusaccountlistmailoutgoingaccountobject](https://developer.apple.com/documentation/devicemanagement/statusaccountlistmailoutgoingaccountobject)

# StatusAccountListMailOutgoingAccountObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.1+

An outgoing Mail account.

## Declaration

```
object StatusAccountListMailOutgoingAccountObject
```

## Properties

- `_removed` — `boolean`: If `true`, the device removed the account and the status item object only contains this key and the `identifier` key.
  **Default:** `false`
- `declaration-identifier` — `string`: The identifier of the declaration that installed the account. Only present if a declaration installed the account.
- `hostname` — `string`: The server host name for the account.
- `identifier` — `string` (required): The unique identifier for the account.
- `port` — `integer`: The server port for the account.
- `username` — `string`: The user name for the account.
- `visible-name` — `string`: The name of the account.
