> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cberror-swift.struct/code](https://developer.apple.com/documentation/corebluetooth/cberror-swift.struct/code)

# CBError.Code (Swift)

**Framework:** Core Bluetooth  
**Kind:** Enumeration  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

The codes for errors that Core Bluetooth returns during Bluetooth transactions.

## Declaration

```swift
enum Code
```

## Topics

### Error Codes

- [CBError.Code.unknown](code/unknown.md): An unknown error occurred.
- [CBError.Code.invalidParameters](code/invalidparameters.md): The specified parameters are invalid.
- [CBError.Code.invalidHandle](code/invalidhandle.md): The specified attribute handle is invalid.
- [CBError.Code.notConnected](code/notconnected.md): The device isn’t currently connected.
- [CBError.Code.outOfSpace](code/outofspace.md): The device has run out of space to complete the intended operation.
- [CBError.Code.operationCancelled](code/operationcancelled.md): The error represents a canceled operation.
- [CBError.Code.connectionTimeout](code/connectiontimeout.md): The connection timed out.
- [CBError.Code.peripheralDisconnected](code/peripheraldisconnected.md): The peripheral disconnected.
- [CBError.Code.uuidNotAllowed](code/uuidnotallowed.md): The specified UUID isn’t permitted.
- [CBError.Code.alreadyAdvertising](code/alreadyadvertising.md): The peripheral is already advertising.
- [CBError.Code.connectionFailed](code/connectionfailed.md): The connection failed.
- [CBError.Code.connectionLimitReached](code/connectionlimitreached.md): The device already has the maximum number of connections.
- [CBError.Code.operationNotSupported](code/operationnotsupported.md): The operation isn’t supported.
- [unknownDevice](code/unknowndevice.md): The device is unknown.
- [CBError.Code.unkownDevice](code/unkowndevice.md): Deprecated. A misspelled version of the unknown device error code.

### Enumeration Cases

- [CBError.Code.channelSoundingConfigurationFailed](code/channelsoundingconfigurationfailed.md)
- [CBError.Code.channelSoundingProcedureFailed](code/channelsoundingprocedurefailed.md)
- [CBError.Code.encryptionTimedOut](code/encryptiontimedout.md)
- [CBError.Code.leGattExceededBackgroundNotificationLimit](code/legattexceededbackgroundnotificationlimit.md)
- [CBError.Code.leGattNearBackgroundNotificationLimit](code/legattnearbackgroundnotificationlimit.md)
- [CBError.Code.peerRemovedPairingInformation](code/peerremovedpairinginformation.md)
- [CBError.Code.tooManyLEPairedDevices](code/toomanylepaireddevices.md)

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [CBError](../cberror-swift.struct.md): An error that Core Bluetooth returns during Bluetooth transactions.
- [CBErrorDomain](../cberrordomain.md): The domain for Core Bluetooth errors.
- [CBATTError](../cbatterror-swift.struct.md): An error that Core Bluetooth returns while using Attribute Protocol (ATT).
- [CBATTErrorDomain](../cbatterrordomain.md): The domain for Core Bluetooth ATT errors.
- [CBATTError.Code](../cbatterror-swift.struct/code.md): The possible errors returned by a GATT server (a remote peripheral) during Bluetooth low energy ATT transactions.
- [CBATTError](../cbatterror-swift.struct.md): An error that Core Bluetooth returns while using Attribute Protocol (ATT).

# CBError (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Enumeration  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

The codes for errors that Core Bluetooth returns during Bluetooth transactions.

## Declaration

```objectivec
enum CBError : NSInteger;
```

## Topics

### Error Codes

- [CBErrorUnknown](code/unknown.md): An unknown error occurred.
- [CBErrorInvalidParameters](code/invalidparameters.md): The specified parameters are invalid.
- [CBErrorInvalidHandle](code/invalidhandle.md): The specified attribute handle is invalid.
- [CBErrorNotConnected](code/notconnected.md): The device isn’t currently connected.
- [CBErrorOutOfSpace](code/outofspace.md): The device has run out of space to complete the intended operation.
- [CBErrorOperationCancelled](code/operationcancelled.md): The error represents a canceled operation.
- [CBErrorConnectionTimeout](code/connectiontimeout.md): The connection timed out.
- [CBErrorPeripheralDisconnected](code/peripheraldisconnected.md): The peripheral disconnected.
- [CBErrorUUIDNotAllowed](code/uuidnotallowed.md): The specified UUID isn’t permitted.
- [CBErrorAlreadyAdvertising](code/alreadyadvertising.md): The peripheral is already advertising.
- [CBErrorConnectionFailed](code/connectionfailed.md): The connection failed.
- [CBErrorConnectionLimitReached](code/connectionlimitreached.md): The device already has the maximum number of connections.
- [CBErrorOperationNotSupported](code/operationnotsupported.md): The operation isn’t supported.
- [CBErrorUnknownDevice](../cberror-c.enum/cberrorunknowndevice.md): The device is unknown.
- [CBErrorUnkownDevice](code/unkowndevice.md): Deprecated. A misspelled version of the unknown device error code.

### Enumeration Cases

- [CBErrorChannelSoundingConfigurationFailed](code/channelsoundingconfigurationfailed.md)
- [CBErrorChannelSoundingProcedureFailed](code/channelsoundingprocedurefailed.md)
- [CBErrorEncryptionTimedOut](code/encryptiontimedout.md)
- [CBErrorLeGattExceededBackgroundNotificationLimit](code/legattexceededbackgroundnotificationlimit.md)
- [CBErrorLeGattNearBackgroundNotificationLimit](code/legattnearbackgroundnotificationlimit.md)
- [CBErrorPeerRemovedPairingInformation](code/peerremovedpairinginformation.md)
- [CBErrorTooManyLEPairedDevices](code/toomanylepaireddevices.md)

## See Also

### Errors

- [CBErrorDomain](../cberrordomain.md): The domain for Core Bluetooth errors.
- [CBATTErrorDomain](../cbatterrordomain.md): The domain for Core Bluetooth ATT errors.
- [CBATTError](../cbatterror-swift.struct/code.md): The possible errors returned by a GATT server (a remote peripheral) during Bluetooth low energy ATT transactions.
