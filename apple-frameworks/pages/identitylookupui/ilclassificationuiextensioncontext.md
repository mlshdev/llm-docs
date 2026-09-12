> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitylookupui/ilclassificationuiextensioncontext](https://developer.apple.com/documentation/identitylookupui/ilclassificationuiextensioncontext)

# ILClassificationUIExtensionContext (Swift)

**Framework:** IdentityLookupUI  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

An object that manages the state of the current request.

## Declaration

```swift
class ILClassificationUIExtensionContext
```

## Topics

### Readying the Response

- [isReadyForClassificationResponse](ilclassificationuiextensioncontext/isreadyforclassificationresponse.md): A Boolean value that determines whether the extension has enough information to complete the report.

## Relationships

### Inherits From

- [NSExtensionContext](../foundation/nsextensioncontext.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing the Request

- [extensionContext](ilclassificationuiextensionviewcontroller/extensioncontext.md): The context for the current request.

# ILClassificationUIExtensionContext (Objective-C)

**Framework:** IdentityLookupUI  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

An object that manages the state of the current request.

## Declaration

```objectivec
@interface ILClassificationUIExtensionContext : NSExtensionContext
```

## Topics

### Readying the Response

- [readyForClassificationResponse](ilclassificationuiextensioncontext/isreadyforclassificationresponse.md): A Boolean value that determines whether the extension has enough information to complete the report.

## Relationships

### Inherits From

- [NSExtensionContext](../foundation/nsextensioncontext.md)

## See Also

### Managing the Request

- [extensionContext](ilclassificationuiextensionviewcontroller/extensioncontext.md): The context for the current request.
