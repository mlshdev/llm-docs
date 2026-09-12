> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/focusedscenevalue(_:)](https://developer.apple.com/documentation/swiftui/view/focusedscenevalue(_:))

# focusedSceneValue(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Sets the focused value for the given object type at a scene-wide scope.

## Declaration

```swift
@export(implementation) nonisolated func focusedSceneValue<T>(_ object: T?) -> some View where T : AnyObject, T : Observable

```

## Mentioned In

- [Building and customizing the menu bar with SwiftUI](../building-and-customizing-the-menu-bar-with-swiftui.md)

<a id="discussion"></a>

## Discussion

> **Important**

> This initializer only accepts objects conforming to the `Observable` protocol. For reading environment objects that conform to `ObservableObject`, use `focusedObject(_:)`, instead.

To read this value, use the `FocusedValue` property wrapper.

## See Also

### Exposing value types to focused views

- [focusedValue(\_:)](focusedvalue%28__%29.md): Sets the focused value for the given object type.
- [focusedValue(\_:\_:)](focusedvalue%28____%29.md): Modifies this view by injecting a value that you provide for use by other views whose state depends on the focused view hierarchy.
- [focusedSceneValue(\_:\_:)](focusedscenevalue%28____%29.md): Modifies this view by injecting a value that you provide for use by other views whose state depends on the focused scene.
- [FocusedValues](../focusedvalues.md): A collection of state exported by the focused scene or view and its ancestors.
