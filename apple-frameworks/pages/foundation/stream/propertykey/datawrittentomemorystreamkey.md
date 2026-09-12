> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/stream/propertykey/datawrittentomemorystreamkey](https://developer.apple.com/documentation/foundation/stream/propertykey/datawrittentomemorystreamkey)

# dataWrittenToMemoryStreamKey (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Value is an `NSData` instance containing the data written to a memory stream.

## Declaration

```swift
static let dataWrittenToMemoryStreamKey: Stream.PropertyKey
```

<a id="Discussion"></a>

## Discussion

Use this property when you have an output-stream object instantiated to collect written data in memory. The value of this property is read-only.

## See Also

### Type Properties

- [fileCurrentOffsetKey](filecurrentoffsetkey.md): Value is an `NSNumber` object containing the current absolute offset of the stream.
- [networkServiceType](networkservicetype.md): The type of service for the stream. Providing the service type allows the system to properly handle certain attributes of the stream, including routing and suspension behavior. Most streams do not need to set this property. See `Stream Service Types` for a list of possible values.
- [socketSecurityLevelKey](socketsecuritylevelkey.md)
- [socksProxyConfigurationKey](socksproxyconfigurationkey.md): Value is an `NSDictionary` object containing SOCKS proxy configuration information.

# NSStreamDataWrittenToMemoryStreamKey (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Value is an `NSData` instance containing the data written to a memory stream.

## Declaration

```objectivec
extern NSStreamPropertyKey const NSStreamDataWrittenToMemoryStreamKey;
```

<a id="Discussion"></a>

## Discussion

Use this property when you have an output-stream object instantiated to collect written data in memory. The value of this property is read-only.

## See Also

### Type Properties

- [NSStreamFileCurrentOffsetKey](filecurrentoffsetkey.md): Value is an `NSNumber` object containing the current absolute offset of the stream.
- [NSStreamNetworkServiceType](networkservicetype.md): The type of service for the stream. Providing the service type allows the system to properly handle certain attributes of the stream, including routing and suspension behavior. Most streams do not need to set this property. See `Stream Service Types` for a list of possible values.
- [NSStreamSocketSecurityLevelKey](socketsecuritylevelkey.md)
- [NSStreamSOCKSProxyConfigurationKey](socksproxyconfigurationkey.md): Value is an `NSDictionary` object containing SOCKS proxy configuration information.
