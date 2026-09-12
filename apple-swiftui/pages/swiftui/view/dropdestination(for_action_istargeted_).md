> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/dropdestination(for:action:istargeted:)](https://developer.apple.com/documentation/swiftui/view/dropdestination(for:action:istargeted:))

# dropDestination(for:action:isTargeted:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ (deprecated in 27.0) · iPadOS 16.0+ (deprecated in 27.0) · Mac Catalyst 16.0+ (deprecated in 27.0) · macOS 13.0+ (deprecated in 27.0) · visionOS 1.0+

Defines the destination of a drag and drop operation that handles the dropped content with a closure that you specify.

> Use [dropDestination(for:isEnabled:action:)](dropdestination%28for_isenabled_action_%29.md) with an `action` that takes a [DropSession](../dropsession.md) instead.

## Declaration

```swift
nonisolated func dropDestination<T>(for payloadType: T.Type = T.self, action: @escaping ([T], CGPoint) -> Bool, isTargeted: @escaping (Bool) -> Void = { _ in }) -> some View where T : Transferable

```

## Parameters

- `payloadType`: The expected type of the dropped models.
- `action`: A closure that takes the dropped content and responds appropriately. The first parameter to `action` contains the dropped items. The second parameter contains the drop location in this view’s coordinate space. Return `true` if the drop operation was successful; otherwise, return `false`.
- `isTargeted`: A closure that is called when a drag and drop operation enters or exits the drop target area. The received value is `true` when the cursor is inside the area, and `false` when the cursor is outside.

<a id="return-value"></a>

## Return Value

A view that provides a drop destination for a drag operation of the specified type.

<a id="discussion"></a>

## Discussion

The dropped content can be provided as binary data, file URLs, or file promises.

The drop destination is the same size and position as this view.

```swift
@State private var isDropTargeted = false

var body: some View {
    Color.pink
        .frame(width: 400, height: 400)
        .dropDestination(for: String.self) { receivedTitles, location in
            animateDrop(at: location)
            process(titles: receivedTitles)
        } isTargeted: {
            isDropTargeted = $0
        }
}

func process(titles: [String]) { ... }
func animateDrop(at: CGPoint) { ... }
```

## See Also

### Input and events modifiers

- [onChange(of:perform:)](onchange%28of_perform_%29.md): Deprecated. Adds an action to perform when the given value changes.
- [onTapGesture(count:coordinateSpace:perform:)](ontapgesture%28count_coordinatespace_perform_%29-36x9h.md): Deprecated. Adds an action to perform when this view recognizes a tap gesture, and provides the action with the location of the interaction.
- [onLongPressGesture(minimumDuration:maximumDistance:pressing:perform:)](onlongpressgesture%28minimumduration_maximumdistance_pressing_perform_%29.md): Deprecated. Adds an action to perform when this view recognizes a long press gesture.
- [onLongPressGesture(minimumDuration:pressing:perform:)](onlongpressgesture%28minimumduration_pressing_perform_%29.md): Deprecated. Adds an action to perform when this view recognizes a long press gesture.
- [onPasteCommand(of:perform:)](onpastecommand%28of_perform_%29-4f78f.md): Deprecated. Adds an action to perform in response to the system’s Paste command.
- [onPasteCommand(of:validator:perform:)](onpastecommand%28of_validator_perform_%29-964k1.md): Deprecated. Adds an action to perform in response to the system’s Paste command with items that you validate.
- [onDrop(of:delegate:)](ondrop%28of_delegate_%29-2vr9o.md): Deprecated. Defines the destination for a drag and drop operation with the same size and position as this view, with behavior controlled by the given delegate.
- [onDrop(of:isTargeted:perform:)](ondrop%28of_istargeted_perform_%29.md): Defines the destination of a drag-and-drop operation that handles the dropped content with a closure that you specify.
- [focusable(\_:onFocusChange:)](focusable%28__onfocuschange_%29.md): Deprecated. Specifies if the view is focusable and, if so, adds an action to perform when the view comes into focus.
- [onContinuousHover(coordinateSpace:perform:)](oncontinuoushover%28coordinatespace_perform_%29-8gyrl.md): Deprecated. Adds an action to perform when the pointer enters, moves within, and exits the view’s bounds.
