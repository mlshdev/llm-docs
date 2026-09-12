> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/adservices/aaattributionerror/code](https://developer.apple.com/documentation/adservices/aaattributionerror/code)

# AAAttributionError.Code (Swift)

**Framework:** AdServices  
**Kind:** Enumeration  
**Availability:** iOS 14.3+ · iPadOS 14.3+ · Mac Catalyst 14.3+ · macOS 11.1+ · visionOS 1.0+

The error code that the parent class issues.

## Declaration

```swift
enum Code
```

## Topics

### Creating an error code

- [init(rawValue:)](code/init%28rawvalue_%29.md): Creates an error code structure with the specified raw value.

### Determining the cause of an error

- [AAAttributionError.Code.internalError](code/internalerror.md): The server is unable to provide a token because of an internal error.
- [AAAttributionError.Code.networkError](code/networkerror.md): The server is unable to provide a token because the internet isn’t available.
- [AAAttributionError.Code.platformNotSupported](code/platformnotsupported.md): The server is unable to provide a token because of an unsupported operating system.

### Getting information about error codes

- [localizedDescription](https://developer.apple.com/documentation/swift/error/localizeddescription): Retrieve the localized description for this error.

### Comparing errors

- [!=(\_:\_:)](https://developer.apple.com/documentation/swift/!=%28_:_:%29-18co7): Returns a Boolean value indicating whether any corresponding components of the two tuples are not equal.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [AAAttributionError](../aaattributionerror.md): The error code that the parent class issues.
- [AAAttributionErrorDomain](../aaattributionerrordomain.md): The framework attribution error domain.

# AAAttributionErrorCode (Objective-C)

**Framework:** AdServices  
**Kind:** Enumeration  
**Availability:** iOS 14.3+ · iPadOS 14.3+ · Mac Catalyst 14.3+ · macOS 11.1+ · visionOS 1.0+

The error code that the parent class issues.

## Declaration

```objectivec
enum AAAttributionErrorCode : NSInteger;
```

## Topics

### Determining the cause of an error

- [AAAttributionErrorCodeInternalError](code/internalerror.md): The server is unable to provide a token because of an internal error.
- [AAAttributionErrorCodeNetworkError](code/networkerror.md): The server is unable to provide a token because the internet isn’t available.
- [AAAttributionErrorCodePlatformNotSupported](code/platformnotsupported.md): The server is unable to provide a token because of an unsupported operating system.

## See Also

### Errors

- [AAAttributionErrorDomain](../aaattributionerrordomain.md): The framework attribution error domain.
