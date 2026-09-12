> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cberror-swift.struct/notconnected](https://developer.apple.com/documentation/corebluetooth/cberror-swift.struct/notconnected)

# notConnected

**Framework:** Core Bluetooth  
**Kind:** Type Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The device isn’t currently connected.

## Declaration

```swift
static var notConnected: CBError.Code { get }
```

## See Also

### Error Codes

- [unknown](unknown.md): An unknown error occurred.
- [invalidParameters](invalidparameters.md): The specified parameters are invalid.
- [invalidHandle](invalidhandle.md): The specified attribute handle is invalid.
- [outOfSpace](outofspace.md): The device has run out of space to complete the intended operation.
- [operationCancelled](operationcancelled.md): The error represents a canceled operation.
- [connectionTimeout](connectiontimeout.md): The connection timed out.
- [peripheralDisconnected](peripheraldisconnected.md): The peripheral disconnected.
- [uuidNotAllowed](uuidnotallowed.md): The specified UUID isn’t permitted.
- [alreadyAdvertising](alreadyadvertising.md): The peripheral is already advertising.
- [connectionFailed](connectionfailed.md): The connection failed.
- [connectionLimitReached](connectionlimitreached.md): The device already has the maximum number of connections.
- [operationNotSupported](operationnotsupported.md): The operation isn’t supported.
- [unknownDevice](unknowndevice.md): The device is unknown.
- [unkownDevice](unkowndevice.md): Deprecated. A misspelled version of the unknown device error code.
