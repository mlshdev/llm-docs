> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/deleteusercommand/command-data.dictionary](https://developer.apple.com/documentation/devicemanagement/deleteusercommand/command-data.dictionary)

# DeleteUserCommand.Command

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 9.3+ · macOS 10.13+

The command to delete a user’s account from a device.

## Declaration

```
object DeleteUserCommand.Command
```

## Properties

- `DeleteAllUsers` — `boolean`: If `true`, the system attempts to delete all users from the device. If `ForceDeletion` is `false`, the system generates an error instead and doesn’t delete users who have data that’s pending sync.

  Available: iOS 14+ | iPadOS 14+  
  **Default:** `false`
- `ForceDeletion` — `boolean`: If `true`, the system deletes the account even if the user has data that’s pending sync to the cloud.

  Available: iOS 9.3+ | iPadOS 9.3+  
  **Default:** `false`
- `RequestRequiresNetworkTether` — `boolean`: If `true`, the device needs to be network-tethered to run the command.
  **Default:** `false`
- `RequestType` — `string` (required): The request type for this command.
  **Allowed values:** `DeleteUser`
- `UserName` — `string`: The user name of the account to delete. The device requires this key when the value for `DeleteAllUsers` is absent or `false`.
