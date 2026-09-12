> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/netservice/errorcode-swift.enum](https://developer.apple.com/documentation/foundation/netservice/errorcode-swift.enum)

# NetService.ErrorCode (Swift)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

These constants identify errors that can occur when accessing net services.

## Declaration

```swift
enum ErrorCode
```

## Topics

### Constants

- [NetService.ErrorCode.unknownError](errorcode-swift.enum/unknownerror.md): An unknown error occurred.
- [NetService.ErrorCode.collisionError](errorcode-swift.enum/collisionerror.md): The service could not be published because the name is already in use. The name could be in use locally or on another system.
- [NetService.ErrorCode.notFoundError](errorcode-swift.enum/notfounderror.md): The service could not be found on the network.
- [NetService.ErrorCode.activityInProgress](errorcode-swift.enum/activityinprogress.md): The net service cannot process the request at this time. No additional information about the network state is known.
- [NetService.ErrorCode.badArgumentError](errorcode-swift.enum/badargumenterror.md): An invalid argument was used when creating the `NSNetService` object.
- [NetService.ErrorCode.cancelledError](errorcode-swift.enum/cancellederror.md): The client canceled the action.
- [NetService.ErrorCode.invalidError](errorcode-swift.enum/invaliderror.md): The net service was improperly configured.
- [NetService.ErrorCode.timeoutError](errorcode-swift.enum/timeouterror.md): The net service has timed out.

### Enumeration Cases

- [NetService.ErrorCode.missingRequiredConfigurationError](errorcode-swift.enum/missingrequiredconfigurationerror.md): Missing required configuration for local network access.

### Initializers

- [init(rawValue:)](errorcode-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [NSNetServices Errors](../nsnetservices-errors.md): If an error occurs, the delegate error-handling methods return a dictionary with the following keys.
- [NetService.Options](options.md): These constants specify options for a network service.

# NSNetServicesError (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

These constants identify errors that can occur when accessing net services.

## Declaration

```objectivec
enum NSNetServicesError : NSInteger;
```

## Topics

### Constants

- [NSNetServicesUnknownError](errorcode-swift.enum/unknownerror.md): An unknown error occurred.
- [NSNetServicesCollisionError](errorcode-swift.enum/collisionerror.md): The service could not be published because the name is already in use. The name could be in use locally or on another system.
- [NSNetServicesNotFoundError](errorcode-swift.enum/notfounderror.md): The service could not be found on the network.
- [NSNetServicesActivityInProgress](errorcode-swift.enum/activityinprogress.md): The net service cannot process the request at this time. No additional information about the network state is known.
- [NSNetServicesBadArgumentError](errorcode-swift.enum/badargumenterror.md): An invalid argument was used when creating the `NSNetService` object.
- [NSNetServicesCancelledError](errorcode-swift.enum/cancellederror.md): The client canceled the action.
- [NSNetServicesInvalidError](errorcode-swift.enum/invaliderror.md): The net service was improperly configured.
- [NSNetServicesTimeoutError](errorcode-swift.enum/timeouterror.md): The net service has timed out.

### Enumeration Cases

- [NSNetServicesMissingRequiredConfigurationError](errorcode-swift.enum/missingrequiredconfigurationerror.md): Missing required configuration for local network access.

## See Also

### Constants

- [NSNetServices Errors](../nsnetservices-errors.md): If an error occurs, the delegate error-handling methods return a dictionary with the following keys.
- [NSNetServiceOptions](options.md): These constants specify options for a network service.
