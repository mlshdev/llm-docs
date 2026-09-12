> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxcalldirectoryprovider](https://developer.apple.com/documentation/callkit/cxcalldirectoryprovider)

# CXCallDirectoryProvider (Swift)

**Framework:** CallKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+

The principal object for a Call Directory app extension for a host app.

## Declaration

```swift
class CXCallDirectoryProvider
```

## Mentioned In

- [Identifying and blocking calls](identifying-and-blocking-calls.md)

## Topics

### Beginning a Request

- [beginRequest(with:)](cxcalldirectoryprovider/beginrequest%28with_%29.md): Tells the extension to prepare for a host app’s request.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSExtensionRequestHandling](../foundation/nsextensionrequesthandling.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Caller ID

- [Identifying and blocking calls](identifying-and-blocking-calls.md): Create a Call Directory app extension to identify and block incoming callers by their phone number.
- [CXCallDirectoryExtensionContext](cxcalldirectoryextensioncontext.md): A programmatic interface for adding identification and blocking entries to a Call Directory app extension.
- [CXCallDirectoryExtensionContextDelegate](cxcalldirectoryextensioncontextdelegate.md): A collection of methods a Call Directory extension context object calls when a request fails.
- [CXCallDirectoryManager](cxcalldirectorymanager.md): The programmatic interface to an object that manages a Call Directory app extension.

# CXCallDirectoryProvider (Objective-C)

**Framework:** CallKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

The principal object for a Call Directory app extension for a host app.

## Declaration

```objectivec
@interface CXCallDirectoryProvider : NSObject
```

## Mentioned In

- [Identifying and blocking calls](identifying-and-blocking-calls.md)

## Topics

### Beginning a Request

- [beginRequestWithExtensionContext:](cxcalldirectoryprovider/beginrequest%28with_%29.md): Tells the extension to prepare for a host app’s request.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSExtensionRequestHandling](../foundation/nsextensionrequesthandling.md)

## See Also

### Caller ID

- [Identifying and blocking calls](identifying-and-blocking-calls.md): Create a Call Directory app extension to identify and block incoming callers by their phone number.
- [CXCallDirectoryExtensionContext](cxcalldirectoryextensioncontext.md): A programmatic interface for adding identification and blocking entries to a Call Directory app extension.
- [CXCallDirectoryExtensionContextDelegate](cxcalldirectoryextensioncontextdelegate.md): A collection of methods a Call Directory extension context object calls when a request fails.
- [CXCallDirectoryManager](cxcalldirectorymanager.md): The programmatic interface to an object that manages a Call Directory app extension.
