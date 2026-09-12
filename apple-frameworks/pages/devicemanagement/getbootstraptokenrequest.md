> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/getbootstraptokenrequest](https://developer.apple.com/documentation/devicemanagement/getbootstraptokenrequest)

# GetBootstrapTokenRequest

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 10.15+ · visionOS 26.0+

The get bootstrap token request details.

## Declaration

```
object GetBootstrapTokenRequest
```

## Properties

- `AwaitingConfiguration` — `boolean`: If `true`, the device is awaiting a [Device Configured](device-configured-command.md) command before proceeding through Setup Assistant.
  **Default:** `false`
- `MessageType` — `string` (required): The message type, which requires a value of `GetBootstrapToken`.
  **Allowed values:** `GetBootstrapToken`

## Mentioned In

- [Deploying software updates using declarative management](deploying-software-updates-using-declarative-management.md)

## See Also

### Requests and responses

- [GetBootstrapTokenResponse](getbootstraptokenresponse.md): The get bootstrap token response details.
