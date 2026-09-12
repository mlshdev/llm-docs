> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/focusedvalue(_:_:)](https://developer.apple.com/documentation/swiftui/view/focusedvalue(_:_:))

# focusedValue(\_:\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Modifies this view by injecting a value that you provide for use by other views whose state depends on the focused view hierarchy.

## Declaration

```swift
nonisolated func focusedValue<Value>(_ keyPath: WritableKeyPath<FocusedValues, Value?>, _ value: Value) -> some View

```

## Parameters

- `keyPath`: The key path to associate `value` with when adding it to the existing table of exported focus values.
- `value`: The focus value to export.

<a id="return-value"></a>

## Return Value

A modified representation of this view.

## See Also

### Exposing value types to focused views

- [focusedValue(\_:)](focusedvalue%28__%29.md): Sets the focused value for the given object type.
- [focusedSceneValue(\_:)](focusedscenevalue%28__%29.md): Sets the focused value for the given object type at a scene-wide scope.
- [focusedSceneValue(\_:\_:)](focusedscenevalue%28____%29.md): Modifies this view by injecting a value that you provide for use by other views whose state depends on the focused scene.
- [FocusedValues](../focusedvalues.md): A collection of state exported by the focused scene or view and its ancestors.
