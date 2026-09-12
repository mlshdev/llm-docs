> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfurlerror](https://developer.apple.com/documentation/corefoundation/cfurlerror)

# CFURLError (Swift)

**Framework:** Core Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ (deprecated in 7.0) · iPadOS 2.0+ (deprecated in 7.0) · Mac Catalyst 2.0+ (deprecated in 7.0) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

`CFURL` error codes.

> Use CFError codes instead

## Declaration

```swift
enum CFURLError
```

## Topics

### Constants

- [CFURLError.unknownError](cfurlerror/unknownerror.md): Deprecated. Indicates an unknown error.
- [CFURLError.unknownSchemeError](cfurlerror/unknownschemeerror.md): Deprecated. Indicates that the scheme is not recognized.
- [CFURLError.resourceNotFoundError](cfurlerror/resourcenotfounderror.md): Deprecated. Indicates a resource was not found.
- [CFURLError.resourceAccessViolationError](cfurlerror/resourceaccessviolationerror.md): Deprecated. Indicates an error in accessing a resource.
- [CFURLError.remoteHostUnavailableError](cfurlerror/remotehostunavailableerror.md): Deprecated. Indicates a remote host is unavailable.
- [CFURLError.improperArgumentsError](cfurlerror/improperargumentserror.md): Deprecated. Indicates one or more arguments are improper.
- [CFURLError.unknownPropertyKeyError](cfurlerror/unknownpropertykeyerror.md): Deprecated. Indicates a property key is unknown.
- [CFURLError.propertyKeyUnavailableError](cfurlerror/propertykeyunavailableerror.md): Deprecated. Indicates a property key was unavailable.
- [CFURLError.timeoutError](cfurlerror/timeouterror.md): Deprecated. Indicates a timeout.

### Initializers

- [init(rawValue:)](cfurlerror/init%28rawvalue_%29.md): Deprecated.

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

- [File URL Properties](file-url-properties.md): Properties for file URL resources.
- [HTTP URL Properties](http-url-properties.md): Properties for HTTP URL resources.

# CFURLError (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ (deprecated in 7.0) · iPadOS 2.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.9) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

`CFURL` error codes.

> Use CFError codes instead

## Declaration

```objectivec
enum CFURLError : CFIndex;
```

## Topics

### Constants

- [kCFURLUnknownError](cfurlerror/unknownerror.md): Deprecated. Indicates an unknown error.
- [kCFURLUnknownSchemeError](cfurlerror/unknownschemeerror.md): Deprecated. Indicates that the scheme is not recognized.
- [kCFURLResourceNotFoundError](cfurlerror/resourcenotfounderror.md): Deprecated. Indicates a resource was not found.
- [kCFURLResourceAccessViolationError](cfurlerror/resourceaccessviolationerror.md): Deprecated. Indicates an error in accessing a resource.
- [kCFURLRemoteHostUnavailableError](cfurlerror/remotehostunavailableerror.md): Deprecated. Indicates a remote host is unavailable.
- [kCFURLImproperArgumentsError](cfurlerror/improperargumentserror.md): Deprecated. Indicates one or more arguments are improper.
- [kCFURLUnknownPropertyKeyError](cfurlerror/unknownpropertykeyerror.md): Deprecated. Indicates a property key is unknown.
- [kCFURLPropertyKeyUnavailableError](cfurlerror/propertykeyunavailableerror.md): Deprecated. Indicates a property key was unavailable.
- [kCFURLTimeoutError](cfurlerror/timeouterror.md): Deprecated. Indicates a timeout.

## See Also

### Constants

- [File URL Properties](file-url-properties.md): Properties for file URL resources.
- [HTTP URL Properties](http-url-properties.md): Properties for HTTP URL resources.
