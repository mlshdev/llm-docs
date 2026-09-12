> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/pushtotalk/ptinstantiationerror-swift.struct/code](https://developer.apple.com/documentation/pushtotalk/ptinstantiationerror-swift.struct/code)

# PTInstantiationError.Code (Swift)

**Framework:** Push to Talk  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Error codes for instantiation operations.

## Declaration

```swift
enum Code
```

## Topics

### Error codes

- [PTInstantiationError.Code.unknown](code/unknown.md): An instantiation error that indicates an unknown error.
- [PTInstantiationError.Code.invalidPlatform](code/invalidplatform.md): An instantiation error that indicates the API isn’t available on the simulator or macOS devices.
- [PTInstantiationError.Code.missingBackgroundMode](code/missingbackgroundmode.md): An instantiation error that indicates the app doesn’t have the background mode in an enabled state.
- [PTInstantiationError.Code.missingPushServerEnvironment](code/missingpushserverenvironment.md): An instantiation error that indicates the app doesn’t have the push notification capability in an enabled state.
- [PTInstantiationError.Code.missingEntitlement](code/missingentitlement.md): An instantiation error that indicates the app is missing the entitlement.
- [PTInstantiationError.Code.instantiationAlreadyInProgress](code/instantiationalreadyinprogress.md): An instantiation error that indicates there’s already an in-flight instantiation request.

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

### Push to Talk errors

- [PTChannelError](../ptchannelerror-swift.struct.md): A structure that represents a channel error.
- [PTChannelError.Code](../ptchannelerror-swift.struct/code.md): Error codes for channel operations.
- [PTInstantiationError](../ptinstantiationerror-swift.struct.md): A structure that represents an instantiation error.
- [PTChannelErrorDomain](../ptchannelerrordomain.md): A string representation of the channel error domain.
- [PTInstantiationErrorDomain](../ptinstantiationerrordomain.md): A string representation of the instantiation error domain.

# PTInstantiationError (Objective-C)

**Framework:** Push to Talk  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Error codes for instantiation operations.

## Declaration

```objectivec
enum PTInstantiationError : NSInteger;
```

## Topics

### Error codes

- [PTInstantiationErrorUnknown](code/unknown.md): An instantiation error that indicates an unknown error.
- [PTInstantiationErrorInvalidPlatform](code/invalidplatform.md): An instantiation error that indicates the API isn’t available on the simulator or macOS devices.
- [PTInstantiationErrorMissingBackgroundMode](code/missingbackgroundmode.md): An instantiation error that indicates the app doesn’t have the background mode in an enabled state.
- [PTInstantiationErrorMissingPushServerEnvironment](code/missingpushserverenvironment.md): An instantiation error that indicates the app doesn’t have the push notification capability in an enabled state.
- [PTInstantiationErrorMissingEntitlement](code/missingentitlement.md): An instantiation error that indicates the app is missing the entitlement.
- [PTInstantiationErrorInstantiationAlreadyInProgress](code/instantiationalreadyinprogress.md): An instantiation error that indicates there’s already an in-flight instantiation request.

## See Also

### Push to Talk errors

- [PTChannelError](../ptchannelerror-swift.struct/code.md): Error codes for channel operations.
- [PTChannelErrorDomain](../ptchannelerrordomain.md): A string representation of the channel error domain.
- [PTInstantiationErrorDomain](../ptinstantiationerrordomain.md): A string representation of the instantiation error domain.
