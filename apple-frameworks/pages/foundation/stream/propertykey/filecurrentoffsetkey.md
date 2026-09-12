> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/stream/propertykey/filecurrentoffsetkey](https://developer.apple.com/documentation/foundation/stream/propertykey/filecurrentoffsetkey)

# fileCurrentOffsetKey (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Value is an `NSNumber` object containing the current absolute offset of the stream.

## Declaration

```swift
static let fileCurrentOffsetKey: Stream.PropertyKey
```

## See Also

### Type Properties

- [dataWrittenToMemoryStreamKey](datawrittentomemorystreamkey.md): Value is an `NSData` instance containing the data written to a memory stream.
- [networkServiceType](networkservicetype.md): The type of service for the stream. Providing the service type allows the system to properly handle certain attributes of the stream, including routing and suspension behavior. Most streams do not need to set this property. See `Stream Service Types` for a list of possible values.
- [socketSecurityLevelKey](socketsecuritylevelkey.md)
- [socksProxyConfigurationKey](socksproxyconfigurationkey.md): Value is an `NSDictionary` object containing SOCKS proxy configuration information.

# NSStreamFileCurrentOffsetKey (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Value is an `NSNumber` object containing the current absolute offset of the stream.

## Declaration

```objectivec
extern NSStreamPropertyKey const NSStreamFileCurrentOffsetKey;
```

## See Also

### Type Properties

- [NSStreamDataWrittenToMemoryStreamKey](datawrittentomemorystreamkey.md): Value is an `NSData` instance containing the data written to a memory stream.
- [NSStreamNetworkServiceType](networkservicetype.md): The type of service for the stream. Providing the service type allows the system to properly handle certain attributes of the stream, including routing and suspension behavior. Most streams do not need to set this property. See `Stream Service Types` for a list of possible values.
- [NSStreamSocketSecurityLevelKey](socketsecuritylevelkey.md)
- [NSStreamSOCKSProxyConfigurationKey](socksproxyconfigurationkey.md): Value is an `NSDictionary` object containing SOCKS proxy configuration information.
