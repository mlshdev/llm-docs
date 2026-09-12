> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appentityuielementscontext](https://developer.apple.com/documentation/appintents/appentityuielementscontext)

# AppEntityUIElementsContext

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Contextual information for UI elements you make discoverable by Apple Intelligence.

## Declaration

```swift
struct AppEntityUIElementsContext
```

<a id="overview"></a>

## Overview

When you implement your custom app entity provider to make a custom view’s content discoverable by Apple Intelligence and Siri, you provide the system with [AppEntityUIElement](appentityuielement.md) objects that combine the app entity for a view’s content with additional information. The `AppEntityUIElementsContext` holds this additional information that the system uses to understand where content appears onscreen.

## Topics

### Instance Properties

- [bounds](appentityuielementscontext/bounds.md): The bounds that the system uses to understand the location of a UI element within the local coordinate space.
- [requests](appentityuielementscontext/requests.md): The set of requests for elements from the system.

### Enumerations

- [AppEntityUIElementsContext.ElementsRequest](appentityuielementscontext/elementsrequest.md): A type that describes which UI elements the system is requesting.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### View-entity association

- [AppEntityUIElement](appentityuielement.md): A type that wraps your app entity and adds information to make a custom view’s content discoverable by Apple Intelligence.
