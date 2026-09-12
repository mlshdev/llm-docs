> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/stream/propertykey/socksproxyconfigurationkey](https://developer.apple.com/documentation/foundation/stream/propertykey/socksproxyconfigurationkey)

# socksProxyConfigurationKey (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Value is an `NSDictionary` object containing SOCKS proxy configuration information.

## Declaration

```swift
static let socksProxyConfigurationKey: Stream.PropertyKey
```

<a id="Discussion"></a>

## Discussion

The dictionary returned from the System Configuration framework for SOCKS proxies usually suffices.

## See Also

### Type Properties

- [dataWrittenToMemoryStreamKey](datawrittentomemorystreamkey.md): Value is an `NSData` instance containing the data written to a memory stream.
- [fileCurrentOffsetKey](filecurrentoffsetkey.md): Value is an `NSNumber` object containing the current absolute offset of the stream.
- [networkServiceType](networkservicetype.md): The type of service for the stream. Providing the service type allows the system to properly handle certain attributes of the stream, including routing and suspension behavior. Most streams do not need to set this property. See `Stream Service Types` for a list of possible values.
- [socketSecurityLevelKey](socketsecuritylevelkey.md)

# NSStreamSOCKSProxyConfigurationKey (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Value is an `NSDictionary` object containing SOCKS proxy configuration information.

## Declaration

```objectivec
extern NSStreamPropertyKey const NSStreamSOCKSProxyConfigurationKey;
```

<a id="Discussion"></a>

## Discussion

The dictionary returned from the System Configuration framework for SOCKS proxies usually suffices.

## See Also

### Type Properties

- [NSStreamDataWrittenToMemoryStreamKey](datawrittentomemorystreamkey.md): Value is an `NSData` instance containing the data written to a memory stream.
- [NSStreamFileCurrentOffsetKey](filecurrentoffsetkey.md): Value is an `NSNumber` object containing the current absolute offset of the stream.
- [NSStreamNetworkServiceType](networkservicetype.md): The type of service for the stream. Providing the service type allows the system to properly handle certain attributes of the stream, including routing and suspension behavior. Most streams do not need to set this property. See `Stream Service Types` for a list of possible values.
- [NSStreamSocketSecurityLevelKey](socketsecuritylevelkey.md)
