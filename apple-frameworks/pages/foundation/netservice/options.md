> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/netservice/options](https://developer.apple.com/documentation/foundation/netservice/options)

# NetService.Options (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

These constants specify options for a network service.

## Declaration

```swift
struct Options
```

## Topics

### Constants

- [noAutoRename](options/noautorename.md): Specifies that the network service should not rename itself in the event of a name collision.
- [listenForConnections](options/listenforconnections.md)

### Initializers

- [init(rawValue:)](options/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Constants

- [NSNetServices Errors](../nsnetservices-errors.md): If an error occurs, the delegate error-handling methods return a dictionary with the following keys.
- [NetService.ErrorCode](errorcode-swift.enum.md): These constants identify errors that can occur when accessing net services.

# NSNetServiceOptions (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

These constants specify options for a network service.

## Declaration

```objectivec
enum NSNetServiceOptions : NSUInteger;
```

## Topics

### Constants

- [NSNetServiceNoAutoRename](options/noautorename.md): Specifies that the network service should not rename itself in the event of a name collision.
- [NSNetServiceListenForConnections](options/listenforconnections.md)

## See Also

### Constants

- [NSNetServices Errors](../nsnetservices-errors.md): If an error occurs, the delegate error-handling methods return a dictionary with the following keys.
- [NSNetServicesError](errorcode-swift.enum.md): These constants identify errors that can occur when accessing net services.
