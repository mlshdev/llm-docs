> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/unlockuseraccountcommand/command-data.dictionary](https://developer.apple.com/documentation/devicemanagement/unlockuseraccountcommand/command-data.dictionary)

# UnlockUserAccountCommand.Command

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 10.13+

The command to unlock a user account that the system locked because of too many failed password attempts.

## Declaration

```
object UnlockUserAccountCommand.Command
```

## Properties

- `RequestRequiresNetworkTether` — `boolean`: If `true`, the device needs to be network-tethered to run the command.
  **Default:** `false`
- `RequestType` — `string` (required): The request type for this command.
  **Allowed values:** `UnlockUserAccount`
- `UserName` — `string` (required): The user name of the local account, which can be any local account on the system, not just a managed user account.
