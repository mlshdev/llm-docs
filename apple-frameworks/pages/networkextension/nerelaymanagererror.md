> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nerelaymanagererror](https://developer.apple.com/documentation/networkextension/nerelaymanagererror)

# NERelayManagerError (Swift)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Error codes specific to relay managers.

## Declaration

```swift
enum NERelayManagerError
```

## Topics

### Error codes

- [NERelayManagerError.configurationInvalid](nerelaymanagererror/configurationinvalid.md): An error code that indicates the relay manager is invalid.
- [NERelayManagerError.configurationDisabled](nerelaymanagererror/configurationdisabled.md): An error code that indicates the relay manager isn’t enabled.
- [NERelayManagerError.configurationStale](nerelaymanagererror/configurationstale.md): An error code that indicates the relay manager isn’t loaded.
- [NERelayManagerError.configurationCannotBeRemoved](nerelaymanagererror/configurationcannotberemoved.md): An error code that indicates removing the relay manager failed.

### Initializers

- [init(rawValue:)](nerelaymanagererror/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Handling errors

- [NERelayErrorDomain](nerelayerrordomain.md): The domain for errors resulting from calls to the relay manager.

# NERelayManagerError (Objective-C)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Error codes specific to relay managers.

## Declaration

```objectivec
enum NERelayManagerError : NSInteger;
```

## Topics

### Error codes

- [NERelayManagerErrorConfigurationInvalid](nerelaymanagererror/configurationinvalid.md): An error code that indicates the relay manager is invalid.
- [NERelayManagerErrorConfigurationDisabled](nerelaymanagererror/configurationdisabled.md): An error code that indicates the relay manager isn’t enabled.
- [NERelayManagerErrorConfigurationStale](nerelaymanagererror/configurationstale.md): An error code that indicates the relay manager isn’t loaded.
- [NERelayManagerErrorConfigurationCannotBeRemoved](nerelaymanagererror/configurationcannotberemoved.md): An error code that indicates removing the relay manager failed.

## See Also

### Handling errors

- [NERelayErrorDomain](nerelayerrordomain.md): The domain for errors resulting from calls to the relay manager.
