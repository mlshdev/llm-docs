> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/focusedscenevalue(_:_:)](https://developer.apple.com/documentation/swiftui/view/focusedscenevalue(_:_:))

# focusedSceneValue(\_:\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Modifies this view by injecting a value that you provide for use by other views whose state depends on the focused scene.

## Declaration

```swift
nonisolated func focusedSceneValue<T>(_ keyPath: WritableKeyPath<FocusedValues, T?>, _ value: T) -> some View

```

## Parameters

- `keyPath`: The key path to associate `value` with when adding it to the existing table of published focus values.
- `value`: The focus value to publish.

<a id="return-value"></a>

## Return Value

A modified representation of this view.

<a id="discussion"></a>

## Discussion

Use this method instead of [focusedValue(\_:\_:)](focusedvalue%28____%29.md) for values that must be visible regardless of where focus is located in the active scene. For example, if an app needs a command for moving focus to a particular text field in the sidebar, it could use this modifier to publish a button action that’s visible to command views as long as the scene is active, and regardless of where focus happens to be in it.

```swift
struct Sidebar: View {
    @FocusState var isFiltering: Bool

    var body: some View {
        VStack {
            TextField(...)
                .focused(when: $isFiltering)
                .focusedSceneValue(\.filterAction) {
                    isFiltering = true
                }
        }
    }
}

struct NavigationCommands: Commands {
    @FocusedValue(\.filterAction) var filterAction

    var body: some Commands {
        CommandMenu("Navigate") {
            Button("Filter in Sidebar") {
                filterAction?()
            }
        }
        .disabled(filterAction == nil)
    }
}

extension FocusedValues {
    @Entry var filterAction: (() -> Void)?
}
```

## See Also

### Exposing value types to focused views

- [focusedValue(\_:)](focusedvalue%28__%29.md): Sets the focused value for the given object type.
- [focusedValue(\_:\_:)](focusedvalue%28____%29.md): Modifies this view by injecting a value that you provide for use by other views whose state depends on the focused view hierarchy.
- [focusedSceneValue(\_:)](focusedscenevalue%28__%29.md): Sets the focused value for the given object type at a scene-wide scope.
- [FocusedValues](../focusedvalues.md): A collection of state exported by the focused scene or view and its ancestors.
