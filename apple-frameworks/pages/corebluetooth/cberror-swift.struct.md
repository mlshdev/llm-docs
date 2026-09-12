> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cberror-swift.struct](https://developer.apple.com/documentation/corebluetooth/cberror-swift.struct)

# CBError

**Framework:** Core Bluetooth  
**Kind:** Structure  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

An error that Core Bluetooth returns during Bluetooth transactions.

## Declaration

```swift
struct CBError
```

## Topics

### Error Codes

- [unknown](cberror-swift.struct/unknown.md): An unknown error occurred.
- [invalidParameters](cberror-swift.struct/invalidparameters.md): The specified parameters are invalid.
- [invalidHandle](cberror-swift.struct/invalidhandle.md): The specified attribute handle is invalid.
- [notConnected](cberror-swift.struct/notconnected.md): The device isn’t currently connected.
- [outOfSpace](cberror-swift.struct/outofspace.md): The device has run out of space to complete the intended operation.
- [operationCancelled](cberror-swift.struct/operationcancelled.md): The error represents a canceled operation.
- [connectionTimeout](cberror-swift.struct/connectiontimeout.md): The connection timed out.
- [peripheralDisconnected](cberror-swift.struct/peripheraldisconnected.md): The peripheral disconnected.
- [uuidNotAllowed](cberror-swift.struct/uuidnotallowed.md): The specified UUID isn’t permitted.
- [alreadyAdvertising](cberror-swift.struct/alreadyadvertising.md): The peripheral is already advertising.
- [connectionFailed](cberror-swift.struct/connectionfailed.md): The connection failed.
- [connectionLimitReached](cberror-swift.struct/connectionlimitreached.md): The device already has the maximum number of connections.
- [operationNotSupported](cberror-swift.struct/operationnotsupported.md): The operation isn’t supported.
- [unknownDevice](cberror-swift.struct/unknowndevice.md): The device is unknown.
- [unkownDevice](cberror-swift.struct/unkowndevice.md): Deprecated. A misspelled version of the unknown device error code.

### Type Properties

- [encryptionTimedOut](cberror-swift.struct/encryptiontimedout.md)
- [leGattExceededBackgroundNotificationLimit](cberror-swift.struct/legattexceededbackgroundnotificationlimit.md)
- [leGattNearBackgroundNotificationLimit](cberror-swift.struct/legattnearbackgroundnotificationlimit.md)
- [peerRemovedPairingInformation](cberror-swift.struct/peerremovedpairinginformation.md)
- [tooManyLEPairedDevices](cberror-swift.struct/toomanylepaireddevices.md)
- [channelSoundingConfigurationFailed](cberror-swift.struct/channelsoundingconfigurationfailed.md)
- [channelSoundingProcedureFailed](cberror-swift.struct/channelsoundingprocedurefailed.md)
- [errorDomain](cberror-swift.struct/errordomain.md)

### Enumerations

- [CBError.Code](cberror-swift.struct/code.md): The codes for errors that Core Bluetooth returns during Bluetooth transactions.

## Relationships

### Conforms To

- [CustomNSError](../foundation/customnserror.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [CBErrorDomain](cberrordomain.md): The domain for Core Bluetooth errors.
- [CBError.Code](cberror-swift.struct/code.md): The codes for errors that Core Bluetooth returns during Bluetooth transactions.
- [CBATTError](cbatterror-swift.struct.md): An error that Core Bluetooth returns while using Attribute Protocol (ATT).
- [CBATTErrorDomain](cbatterrordomain.md): The domain for Core Bluetooth ATT errors.
- [CBATTError.Code](cbatterror-swift.struct/code.md): The possible errors returned by a GATT server (a remote peripheral) during Bluetooth low energy ATT transactions.
- [CBATTError](cbatterror-swift.struct.md): An error that Core Bluetooth returns while using Attribute Protocol (ATT).
