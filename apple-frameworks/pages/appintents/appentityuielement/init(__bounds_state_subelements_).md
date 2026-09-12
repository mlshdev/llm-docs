> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appentityuielement/init(_:bounds:state:subelements:)](https://developer.apple.com/documentation/appintents/appentityuielement/init(_:bounds:state:subelements:))

# init(\_:bounds:state:subelements:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Creates a wrapper object that combines an app entity with additional information to make it discoverable by Apple Intelligence and Siri.

## Declaration

```swift
init<Entity>(_ entity: Entity, bounds: CGRect, state: AppEntityUIElement.State = .init(), subelements: [AppEntityUIElement] = []) where Entity : AppEntity
```

## Parameters

- `entity`: The app entity that describes the content of an UI element.
- `bounds`: The UI element’s bounds in the local coordinate space of the entity provider’s associated custom view.
- `state`: The object that indicates whether the UI element is selected.
- `subelements`: An array of UI elements that represent a group of UI elements.
