> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/addtrackingrect(_:owner:userdata:assumeinside:)](https://developer.apple.com/documentation/appkit/nsview/addtrackingrect(_:owner:userdata:assumeinside:))

# addTrackingRect(\_:owner:userData:assumeInside:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Establishes an area for tracking mouse-entered and mouse-exited events within the view and returns a tag that identifies the tracking rectangle.

## Declaration

```swift
func addTrackingRect(_ rect: NSRect, owner: Any, userData data: UnsafeMutableRawPointer?, assumeInside flag: Bool) -> NSView.TrackingRectTag
```

## Parameters

- `rect`: A rectangle that defines a region of the view for tracking mouse-entered and mouse-exited events.
- `owner`: The object that gets sent the event messages. It can be the view itself or some other object (such as an NSCursor or a custom drawing tool object), as long as it responds to both [mouseEntered(with:)](../nsresponder/mouseentered%28with_%29.md) and [mouseExited(with:)](../nsresponder/mouseexited%28with_%29.md).
- `data`: Data stored in the [NSEvent](../nsevent.md) object for each tracking event.
- `flag`: If [true](https://developer.apple.com/documentation/swift/true), the first event will be generated when the cursor leaves `aRect`, regardless if the cursor is inside `aRect` when the tracking rectangle is added. If [false](https://developer.apple.com/documentation/swift/false) the first event will be generated when the cursor leaves `aRect` if the cursor is initially inside `aRect`, or when the cursor enters `aRect` if the cursor is initially outside `aRect`.  You usually want to set this flag to [false](https://developer.apple.com/documentation/swift/false).

<a id="return-value"></a>

## Return Value

A tag that identifies the tracking rectangle. It is stored in the associated [NSEvent](../nsevent.md) objects and can be used to remove the tracking rectangle.

<a id="Discussion"></a>

## Discussion

Tracking rectangles provide a general mechanism that can be used to trigger actions based on the cursor location (for example, a status bar or hint field that provides information on the item the cursor lies over). To simply change the cursor over a particular area, use [addCursorRect(\_:cursor:)](addcursorrect%28__cursor_%29.md). If you must use tracking rectangles to change the cursor, the [NSCursor](../nscursor.md) class specification describes the additional methods that must be invoked to change cursors by using tracking rectangles.

In macOS 10.5 and later, tracking areas provide a greater range of functionality (see [addTrackingArea(\_:)](addtrackingarea%28__%29.md)).

## See Also

### Related Documentation

- [addTrackingArea(\_:)](addtrackingarea%28__%29.md): Adds a given tracking area to the view.
- [userData](../nsevent/userdata.md): The data associated with a mouse-tracking event.

### Managing Tracking Rectangles

- [removeTrackingRect(\_:)](removetrackingrect%28__%29.md): Removes the tracking rectangle identified by a tag.
- [NSView.TrackingRectTag](trackingrecttag.md): This type describes the rectangle used to track the mouse.

# addTrackingRect:owner:userData:assumeInside: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Establishes an area for tracking mouse-entered and mouse-exited events within the view and returns a tag that identifies the tracking rectangle.

## Declaration

```objectivec
- (NSTrackingRectTag) addTrackingRect:(NSRect) rect owner:(id) owner userData:(void *) data assumeInside:(BOOL) flag;
```

## Parameters

- `rect`: A rectangle that defines a region of the view for tracking mouse-entered and mouse-exited events.
- `owner`: The object that gets sent the event messages. It can be the view itself or some other object (such as an NSCursor or a custom drawing tool object), as long as it responds to both [mouseEntered:](../nsresponder/mouseentered%28with_%29.md) and [mouseExited:](../nsresponder/mouseexited%28with_%29.md).
- `data`: Data stored in the [NSEvent](../nsevent.md) object for each tracking event.
- `flag`: If [true](https://developer.apple.com/documentation/swift/true), the first event will be generated when the cursor leaves `aRect`, regardless if the cursor is inside `aRect` when the tracking rectangle is added. If [false](https://developer.apple.com/documentation/swift/false) the first event will be generated when the cursor leaves `aRect` if the cursor is initially inside `aRect`, or when the cursor enters `aRect` if the cursor is initially outside `aRect`.  You usually want to set this flag to [false](https://developer.apple.com/documentation/swift/false).

<a id="return-value"></a>

## Return Value

A tag that identifies the tracking rectangle. It is stored in the associated [NSEvent](../nsevent.md) objects and can be used to remove the tracking rectangle.

<a id="Discussion"></a>

## Discussion

Tracking rectangles provide a general mechanism that can be used to trigger actions based on the cursor location (for example, a status bar or hint field that provides information on the item the cursor lies over). To simply change the cursor over a particular area, use [addCursorRect:cursor:](addcursorrect%28__cursor_%29.md). If you must use tracking rectangles to change the cursor, the [NSCursor](../nscursor.md) class specification describes the additional methods that must be invoked to change cursors by using tracking rectangles.

In macOS 10.5 and later, tracking areas provide a greater range of functionality (see [addTrackingArea:](addtrackingarea%28__%29.md)).

## See Also

### Related Documentation

- [addTrackingArea:](addtrackingarea%28__%29.md): Adds a given tracking area to the view.
- [userData](../nsevent/userdata.md): The data associated with a mouse-tracking event.

### Managing Tracking Rectangles

- [removeTrackingRect:](removetrackingrect%28__%29.md): Removes the tracking rectangle identified by a tag.
- [NSTrackingRectTag](trackingrecttag.md): This type describes the rectangle used to track the mouse.
