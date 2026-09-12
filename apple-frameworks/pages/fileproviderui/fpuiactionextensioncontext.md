> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileproviderui/fpuiactionextensioncontext](https://developer.apple.com/documentation/fileproviderui/fpuiactionextensioncontext)

# FPUIActionExtensionContext (Swift)

**Framework:** File Provider UI  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.15+ · visionOS 1.0+

An extension context provided to File Provider UI extensions.

## Declaration

```swift
class FPUIActionExtensionContext
```

## Mentioned In

- [Adding Actions to the Context Menu](adding-actions-to-the-context-menu.md)

## Topics

### Completing the Action

- [completeRequest()](fpuiactionextensioncontext/completerequest%28%29.md): Marks the action as complete.
- [cancelRequest(withError:)](fpuiactionextensioncontext/cancelrequest%28witherror_%29.md): Cancels the action and returns the provided error.

### Identifying the Domain

- [domainIdentifier](fpuiactionextensioncontext/domainidentifier.md): The identifier for the domain managed by the current file provider.
- [NSFileProviderDomainIdentifier](../fileprovider/nsfileproviderdomainidentifier.md): A unique identifier for a file provider’s domain.

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

### Working with Actions

- [prepare(forAction:itemIdentifiers:)](fpuiactionextensionviewcontroller/prepare%28foraction_itemidentifiers_%29.md): Performs any necessary setup or configuration for the specified action.
- [prepare(forError:)](fpuiactionextensionviewcontroller/prepare%28forerror_%29.md): Performs any necessary setup or configuration when an authentication error occurs.
- [extensionContext](fpuiactionextensionviewcontroller/extensioncontext.md): The extension context provided by the host app.

# FPUIActionExtensionContext (Objective-C)

**Framework:** File Provider UI  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · macOS 10.15+ · visionOS 1.0+

An extension context provided to File Provider UI extensions.

## Declaration

```objectivec
@interface FPUIActionExtensionContext : NSExtensionContext
```

## Mentioned In

- [Adding Actions to the Context Menu](adding-actions-to-the-context-menu.md)

## Topics

### Completing the Action

- [completeRequest](fpuiactionextensioncontext/completerequest%28%29.md): Marks the action as complete.
- [cancelRequestWithError:](fpuiactionextensioncontext/cancelrequest%28witherror_%29.md): Cancels the action and returns the provided error.

### Identifying the Domain

- [domainIdentifier](fpuiactionextensioncontext/domainidentifier.md): The identifier for the domain managed by the current file provider.
- [NSFileProviderDomainIdentifier](../fileprovider/nsfileproviderdomainidentifier.md): A unique identifier for a file provider’s domain.

## Relationships

### Inherits From

- [NSExtensionContext](../foundation/nsextensioncontext.md)

## See Also

### Working with Actions

- [prepareForActionWithIdentifier:itemIdentifiers:](fpuiactionextensionviewcontroller/prepare%28foraction_itemidentifiers_%29.md): Performs any necessary setup or configuration for the specified action.
- [prepareForError:](fpuiactionextensionviewcontroller/prepare%28forerror_%29.md): Performs any necessary setup or configuration when an authentication error occurs.
- [extensionContext](fpuiactionextensionviewcontroller/extensioncontext.md): The extension context provided by the host app.
