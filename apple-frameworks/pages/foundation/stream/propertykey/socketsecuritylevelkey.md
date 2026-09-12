> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/stream/propertykey/socketsecuritylevelkey](https://developer.apple.com/documentation/foundation/stream/propertykey/socketsecuritylevelkey)

# socketSecurityLevelKey (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```swift
static let socketSecurityLevelKey: Stream.PropertyKey
```

<a id="Discussion"></a>

## Discussion

The security level of the target stream. See `Secure-Socket Layer (SSL) Security Level` for a list of possible values.

## See Also

### Type Properties

- [dataWrittenToMemoryStreamKey](datawrittentomemorystreamkey.md): Value is an `NSData` instance containing the data written to a memory stream.
- [fileCurrentOffsetKey](filecurrentoffsetkey.md): Value is an `NSNumber` object containing the current absolute offset of the stream.
- [networkServiceType](networkservicetype.md): The type of service for the stream. Providing the service type allows the system to properly handle certain attributes of the stream, including routing and suspension behavior. Most streams do not need to set this property. See `Stream Service Types` for a list of possible values.
- [socksProxyConfigurationKey](socksproxyconfigurationkey.md): Value is an `NSDictionary` object containing SOCKS proxy configuration information.

# NSStreamSocketSecurityLevelKey (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```objectivec
extern NSStreamPropertyKey const NSStreamSocketSecurityLevelKey;
```

<a id="Discussion"></a>

## Discussion

The security level of the target stream. See `Secure-Socket Layer (SSL) Security Level` for a list of possible values.

## See Also

### Type Properties

- [NSStreamDataWrittenToMemoryStreamKey](datawrittentomemorystreamkey.md): Value is an `NSData` instance containing the data written to a memory stream.
- [NSStreamFileCurrentOffsetKey](filecurrentoffsetkey.md): Value is an `NSNumber` object containing the current absolute offset of the stream.
- [NSStreamNetworkServiceType](networkservicetype.md): The type of service for the stream. Providing the service type allows the system to properly handle certain attributes of the stream, including routing and suspension behavior. Most streams do not need to set this property. See `Stream Service Types` for a list of possible values.
- [NSStreamSOCKSProxyConfigurationKey](socksproxyconfigurationkey.md): Value is an `NSDictionary` object containing SOCKS proxy configuration information.
