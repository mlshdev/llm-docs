> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/swipeactionscontainer()](https://developer.apple.com/documentation/swiftui/view/swipeactionscontainer())

# swipeActionsContainer()

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Coordinates swipe action dismissal and mutual exclusion across rows in a container.

## Declaration

```swift
nonisolated func swipeActionsContainer() -> some View

```

<a id="discussion"></a>

## Discussion

Apply this modifier to a `ScrollView` or other container that holds rows using the [swipeActions(edge:allowsFullSwipe:content:)](swipeactions%28edge_allowsfullswipe_content_%29.md) modifier. The container ensures that:

- Only one row’s swipe actions are revealed at a time.
- Scrolling the container dismisses any open actions.
- Tapping outside the active row dismisses its actions.

`List` provides this coordination automatically. Use `swipeActionsContainer()` when building custom row-based layouts that use `ScrollView`, `LazyVStack`, or similar containers.

```swift
ScrollView {
    LazyVStack {
        ForEach(items) { item in
            ItemRow(item)
                .swipeActions {
                    Button("Delete", role: .destructive) {
                        delete(item)
                    }
                }
        }
    }
}
.swipeActionsContainer()
```

Applying this modifier to a `List` is a no-op, since `List` already provides this coordination.

## See Also

### Container controls

- [swipeActions(edge:allowsFullSwipe:content:onPresentationChanged:)](swipeactions%28edge_allowsfullswipe_content_onpresentationchanged_%29.md): Adds custom swipe actions to a row in a list or container, notifying you when the actions are revealed or dismissed.
