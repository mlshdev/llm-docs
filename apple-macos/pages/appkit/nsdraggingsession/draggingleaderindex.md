> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdraggingsession/draggingleaderindex](https://developer.apple.com/documentation/appkit/nsdraggingsession/draggingleaderindex)

# draggingLeaderIndex (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The index of the dragging item under the cursor.

## Declaration

```swift
var draggingLeaderIndex: Int { get set }
```

<a id="Discussion"></a>

## Discussion

The index is to an element in the array passed as the first parameter to the [NSView](../nsview.md) method [beginDraggingSession(with:event:source:)](../nsview/begindraggingsession%28with_event_source_%29.md).

The default is the [NSDraggingItem](../nsdraggingitem.md) closest to the `location` field in the event parameter that was passed to the [beginDraggingSession(with:event:source:)](../nsview/begindraggingsession%28with_event_source_%29.md) method.

# draggingLeaderIndex (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The index of the dragging item under the cursor.

## Declaration

```objectivec
@property NSInteger draggingLeaderIndex;
```

<a id="Discussion"></a>

## Discussion

The index is to an element in the array passed as the first parameter to the [NSView](../nsview.md) method [beginDraggingSessionWithItems:event:source:](../nsview/begindraggingsession%28with_event_source_%29.md).

The default is the [NSDraggingItem](../nsdraggingitem.md) closest to the `location` field in the event parameter that was passed to the [beginDraggingSessionWithItems:event:source:](../nsview/begindraggingsession%28with_event_source_%29.md) method.
