> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/checkoutrequest](https://developer.apple.com/documentation/devicemanagement/checkoutrequest)

# CheckOutRequest

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 4.0+ · macOS 10.7+ · tvOS 10.2+ · visionOS 1.1+ · watchOS 10.0+

The check out request details.

## Declaration

```
object CheckOutRequest
```

## Properties

- `EnrollmentID` — `string` (required): The per-enrollment identifier for the device. The system requires this value if the enrollment type is a user enrollment.

  Available: iOS 13+ | iPadOS 13+ | macOS 10.15+ | visionOS 1.1+
- `MessageType` — `string` (required): The message type, which requires a value of `CheckOut`.
  **Allowed values:** `CheckOut`
- `Topic` — `string` (required): The topic the device subscribes to.
- `UDID` — `string` (required): The device’s UDID (unique device identifier). The system requires this value if the enrollment type is a device enrollment.
