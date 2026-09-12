> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appentityuielement](https://developer.apple.com/documentation/appintents/appentityuielement)

# AppEntityUIElement

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

A type that wraps your app entity and adds information to make a custom view’s content discoverable by Apple Intelligence.

## Declaration

```swift
struct AppEntityUIElement
```

## Mentioned In

- [Providing contextual cues to Apple Intelligence and Siri](providing-contextual-cues-to-apple-intelligence-and-siri.md)

<a id="overview"></a>

## Overview

A custom view where your app manages state for the user interface or you use custom drawing to render the interface. For example, you might use a custom list or tab implementation and manage selection and other states in the app, or you might use Metal to render the interface. If either applies to your app’s interface, make content discoverable by Apple Intelligence using `appEntityUIElementProvider` and provide the system with a list of `AppEntityUIElements`.

When your app uses a custom view and your app manages its state or you use custom drawing to render a UI element, you need to implement your own `appEntityUIElementProvider`. This closure provides the system with `AppEntityUIElement` objects that combine the app entity for your content and additional information with spatial and state information to help the system understand onscreen content.

For more information, refer to doc:providing-contextual-cues-to-Apple-Intelligence-and-Siri and [App Intents](../appintents.md).

## Topics

### Structures

- [AppEntityUIElement.State](appentityuielement/state-swift.struct.md): The current UI state of the entity that’s visible onscreen.

### Initializers

- [init(\_:bounds:state:subelements:)](appentityuielement/init%28__bounds_state_subelements_%29.md): Creates a wrapper object that combines an app entity with additional information to make it discoverable by Apple Intelligence and Siri.
- [init(identifier:bounds:state:subelements:)](appentityuielement/init%28identifier_bounds_state_subelements_%29.md): Creates a wrapper object that combines an app entity with additional information to make it discoverable by Apple Intelligence and Siri.

### Instance Properties

- [bounds](appentityuielement/bounds.md): The bounds of the content in the view’s local coordinate space.
- [identifier](appentityuielement/identifier.md): The identifier of the app entity that represents the UI element.
- [state](appentityuielement/state-swift.property.md): The property that indicates if the UI element is selected.
- [subelements](appentityuielement/subelements.md): An array of UI elements that represent subelements in the view hierarchy.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### View-entity association

- [AppEntityUIElementsContext](appentityuielementscontext.md): Contextual information for UI elements you make discoverable by Apple Intelligence.
