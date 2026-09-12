> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neapppushmanagererror-swift.struct/code](https://developer.apple.com/documentation/networkextension/neapppushmanagererror-swift.struct/code)

# NEAppPushManagerError.Code (Swift)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Error codes that the local push API declares.

## Declaration

```swift
enum Code
```

## Topics

### Error codes

- [NEAppPushManagerError.Code.configurationInvalid](code/configurationinvalid.md): An error code that indicates the app push configuration is invalid.
- [NEAppPushManagerError.Code.configurationNotLoaded](code/configurationnotloaded.md): An error code that indicates the manager hasn’t loaded the app push configuration.
- [NEAppPushManagerError.Code.inactiveSession](code/inactivesession.md): An error code that indicates an invalid attempt to perform an operation on an inactive session.
- [NEAppPushManagerError.Code.internalError](code/internalerror.md): An error code that indicates an internal error in the local push connectivity framework.

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

### Handling errors

- [NEAppPushManagerError](../neapppushmanagererror-swift.struct.md): An error that the push manager encounters.
- [NEAppPushErrorDomain](../neapppusherrordomain.md): The error domain string for local push errors.

# NEAppPushManagerError (Objective-C)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Error codes that the local push API declares.

## Declaration

```objectivec
enum NEAppPushManagerError : NSInteger;
```

## Topics

### Error codes

- [NEAppPushManagerErrorConfigurationInvalid](code/configurationinvalid.md): An error code that indicates the app push configuration is invalid.
- [NEAppPushManagerErrorConfigurationNotLoaded](code/configurationnotloaded.md): An error code that indicates the manager hasn’t loaded the app push configuration.
- [NEAppPushManagerErrorInactiveSession](code/inactivesession.md): An error code that indicates an invalid attempt to perform an operation on an inactive session.
- [NEAppPushManagerErrorInternalError](code/internalerror.md): An error code that indicates an internal error in the local push connectivity framework.

## See Also

### Handling errors

- [NEAppPushErrorDomain](../neapppusherrordomain.md): The error domain string for local push errors.
