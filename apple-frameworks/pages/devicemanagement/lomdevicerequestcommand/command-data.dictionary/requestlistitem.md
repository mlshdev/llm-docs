> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/lomdevicerequestcommand/command-data.dictionary/requestlistitem](https://developer.apple.com/documentation/devicemanagement/lomdevicerequestcommand/command-data.dictionary/requestlistitem)

# LOMDeviceRequestCommand.Command.RequestListItem

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 11.0+

A dictionary that contains a requested action to perform on a device using lights-out management (LOM).

## Declaration

```
object LOMDeviceRequestCommand.Command.RequestListItem
```

## Properties

- `DeviceDNSName` — `string` (required): The DNS name of the device. This should match the `dNSName` in [SCEP.PayloadContent.SubjectAltName](../../scep/payloadcontent-data.dictionary/subjectaltname-data.dictionary.md) or an equivalent in a PKCS12 identity.
- `DeviceRequestType` — `string` (required): The requested action to perform on the device.
  **Allowed values:** `PowerON`, `PowerOFF`, `Reset`
- `DeviceRequestUUID` — `string` (required): The unique identifier of the request.
- `LOMProtocolVersion` — `integer` (required): The LOM protocol version that the device supports. Provide the same value that `LOMProtocolVersion` receives in the [LOMSetupRequestResponse](../../lomsetuprequestresponse.md).
- `PrimaryIPv6AddressList` — `[string]` (required): An array that contains the IPv6 addresses for primary LOM-compatible Ethernet interfaces for the device.
- `SecondaryIPv6AddressList` — `[string]` (required): An array that contains the IPv6 addresses for secondary LOM-compatible Ethernet interfaces for the device.
