> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/manipulable(coordinatespace:operations:inertia:isenabled:onchanged:)](https://developer.apple.com/documentation/swiftui/view/manipulable(coordinatespace:operations:inertia:isenabled:onchanged:))

# manipulable(coordinateSpace:operations:inertia:isEnabled:onChanged:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** visionOS 26.0+

Allows this view to be manipulated using common hand gestures.

## Declaration

```swift
@export(implementation) nonisolated func manipulable(coordinateSpace: some CoordinateSpaceProtocol = .local, operations: Manipulable.Operation.Set = .all, inertia: Manipulable.Inertia = .medium, isEnabled: Bool = true, onChanged: ((Manipulable.Event) -> Void)? = nil) -> some View

```

## Parameters

- `coordinateSpace`: The coordinate space of the manipulation gesture event locations.
- `operations`: The set of allowed operations that can be applied when a person manipulates this view.
- `inertia`: The inertia of this view that defines how much it resists being manipulated.
- `isEnabled`: The Boolean value that indicates whether the manipulation gesture added by this view modifier is enabled or not.
- `onChanged`: The action to perform with each new manipulation gesture event.

<a id="return-value"></a>

## Return Value

A view that can be manipulated using common hand gestures.

<a id="discussion"></a>

## Discussion

When a person ends the manipulation gesture, the view will return to its initial transform from before the gesture began.

```swift
Model3D(named: "ToyRocket")
    .manipulable()
```

## See Also

### Hand interactions

- [handGestureShortcut(\_:isEnabled:)](handgestureshortcut%28__isenabled_%29.md): Assigns a hand gesture shortcut to the modified control.
- [handPointerBehavior(\_:)](handpointerbehavior%28__%29.md): Sets the behavior of the hand pointer while the user is interacting with the view.
- [manipulable(transform:coordinateSpace:operations:inertia:isEnabled:onChanged:)](manipulable%28transform_coordinatespace_operations_inertia_isenabled_onchanged_%29.md): Applies the given 3D affine transform to the view and allows it to be manipulated using common hand gestures.
- [manipulable(using:)](manipulable%28using_%29.md): Allows the view to be manipulated using a manipulation gesture attached to a different view.
- [manipulationGesture(updating:coordinateSpace:operations:inertia:isEnabled:onChanged:)](manipulationgesture%28updating_coordinatespace_operations_inertia_isenabled_onchanged_%29.md): Adds a manipulation gesture to this view without allowing this view to be manipulable itself.
