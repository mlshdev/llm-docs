> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/identitylookup/ilmessagefilterextensioncontext](https://developer.apple.com/documentation/identitylookup/ilmessagefilterextensioncontext)

# ILMessageFilterExtensionContext (Swift)

**Framework:** SMS and Call Reporting  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

The extension context for a Message Filter app extension.

## Declaration

```swift
class ILMessageFilterExtensionContext
```

## Topics

### Deferring a Request to the Network

- [deferQueryRequestToNetwork(completion:)](ilmessagefilterextensioncontext/deferqueryrequesttonetwork%28completion_%29.md): Tells the system to pass the current query request to the app extension’s associated network service.

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

### App Extension

- [ILMessageFilterExtension](ilmessagefilterextension.md): The abstract base class for the principal class of a Message Filter app extension.

# ILMessageFilterExtensionContext (Objective-C)

**Framework:** SMS and Call Reporting  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

The extension context for a Message Filter app extension.

## Declaration

```objectivec
@interface ILMessageFilterExtensionContext : NSExtensionContext
```

## Topics

### Deferring a Request to the Network

- [deferQueryRequestToNetworkWithCompletion:](ilmessagefilterextensioncontext/deferqueryrequesttonetwork%28completion_%29.md): Tells the system to pass the current query request to the app extension’s associated network service.

## Relationships

### Inherits From

- [NSExtensionContext](../foundation/nsextensioncontext.md)

## See Also

### App Extension

- [ILMessageFilterExtension](ilmessagefilterextension.md): The abstract base class for the principal class of a Message Filter app extension.
