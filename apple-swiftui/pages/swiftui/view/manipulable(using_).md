> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/manipulable(using:)](https://developer.apple.com/documentation/swiftui/view/manipulable(using:))

# manipulable(using:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** visionOS 26.0+

Allows the view to be manipulated using a manipulation gesture attached to a different view.

## Declaration

```swift
@export(implementation) nonisolated func manipulable(using gestureState: Manipulable.GestureState) -> some View

```

## Parameters

- `gestureState`: The manipulation gesture state that’s updated by a manipulation gesture added to a different view.

<a id="return-value"></a>

## Return Value

A view that can be manipulated by a manipulation gesture attached to a different view.

<a id="discussion"></a>

## Discussion

Use this view modifier alongside [manipulationGesture(updating:coordinateSpace:operations:inertia:isEnabled:onChanged:)](manipulationgesture%28updating_coordinatespace_operations_inertia_isenabled_onchanged_%29.md) when you want to allow a person to manipulate a view by interacting with a different view.

In the following example, a person can begin a manipulation gesture attached to a deck of cards which, in turn, manipulates a single card instead of the entire deck:

```swift
struct CardDeck: View {
    @State private var manipulationState = Manipulable.GestureState()

    var body: some View {
        ZStack {
            Model3D(named: "CardDeck")
                .manipulationGesture(updating: $manipulationState)
            Model3D(named: "Card")
                .manipulable(using: manipulationState)
                .opacity(manipulationState.isActive ? 1 : 0)
        }
    }
}
```

> **See Also**

> [manipulationGesture(updating:coordinateSpace:operations:inertia:isEnabled:onChanged:)](manipulationgesture%28updating_coordinatespace_operations_inertia_isenabled_onchanged_%29.md)

## See Also

### Hand interactions

- [handGestureShortcut(\_:isEnabled:)](handgestureshortcut%28__isenabled_%29.md): Assigns a hand gesture shortcut to the modified control.
- [handPointerBehavior(\_:)](handpointerbehavior%28__%29.md): Sets the behavior of the hand pointer while the user is interacting with the view.
- [manipulable(coordinateSpace:operations:inertia:isEnabled:onChanged:)](manipulable%28coordinatespace_operations_inertia_isenabled_onchanged_%29.md): Allows this view to be manipulated using common hand gestures.
- [manipulable(transform:coordinateSpace:operations:inertia:isEnabled:onChanged:)](manipulable%28transform_coordinatespace_operations_inertia_isenabled_onchanged_%29.md): Applies the given 3D affine transform to the view and allows it to be manipulated using common hand gestures.
- [manipulationGesture(updating:coordinateSpace:operations:inertia:isEnabled:onChanged:)](manipulationgesture%28updating_coordinatespace_operations_inertia_isenabled_onchanged_%29.md): Adds a manipulation gesture to this view without allowing this view to be manipulable itself.
