> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/stream/propertykey/networkservicetype

# networkServiceType (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The type of service for the stream. Providing the service type allows the system to properly handle certain attributes of the stream, including routing and suspension behavior. Most streams do not need to set this property. See `Stream Service Types` for a list of possible values.

## Declaration

```swift
static let networkServiceType: Stream.PropertyKey
```

## See Also

### Type Properties

- [dataWrittenToMemoryStreamKey](datawrittentomemorystreamkey.md): Value is an `NSData` instance containing the data written to a memory stream.
- [fileCurrentOffsetKey](filecurrentoffsetkey.md): Value is an `NSNumber` object containing the current absolute offset of the stream.
- [socketSecurityLevelKey](socketsecuritylevelkey.md)
- [socksProxyConfigurationKey](socksproxyconfigurationkey.md): Value is an `NSDictionary` object containing SOCKS proxy configuration information.

# NSStreamNetworkServiceType (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The type of service for the stream. Providing the service type allows the system to properly handle certain attributes of the stream, including routing and suspension behavior. Most streams do not need to set this property. See `Stream Service Types` for a list of possible values.

## Declaration

```objectivec
extern NSStreamPropertyKey const NSStreamNetworkServiceType;
```

## See Also

### Type Properties

- [NSStreamDataWrittenToMemoryStreamKey](datawrittentomemorystreamkey.md): Value is an `NSData` instance containing the data written to a memory stream.
- [NSStreamFileCurrentOffsetKey](filecurrentoffsetkey.md): Value is an `NSNumber` object containing the current absolute offset of the stream.
- [NSStreamSocketSecurityLevelKey](socketsecuritylevelkey.md)
- [NSStreamSOCKSProxyConfigurationKey](socksproxyconfigurationkey.md): Value is an `NSDictionary` object containing SOCKS proxy configuration information.
