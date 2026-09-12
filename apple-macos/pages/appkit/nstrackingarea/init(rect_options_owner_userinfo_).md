> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstrackingarea/init(rect:options:owner:userinfo:)](https://developer.apple.com/documentation/appkit/nstrackingarea/init(rect:options:owner:userinfo:))

# init(rect:options:owner:userInfo:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.5+

Initializes and returns an object defining a region of a view to receive mouse-tracking events, mouse-moved events, cursor-update events, or possibly all these events.

## Declaration

```swift
init(rect: NSRect, options: NSTrackingArea.Options = [], owner: Any?, userInfo: [AnyHashable : Any]? = nil)
```

## Parameters

- `rect`: A rectangle that defines a region of a target view, in the view’s coordinate system, for tracking events related to mouse tracking and cursor updating. The specified rectangle should not exceed the view’s bounds rectangle.
- `options`: One or more constants that specify the type of tracking area, the situations when the area is active, and special behaviors of the tracking area. See the description of [NSTrackingArea.Options](options-swift.struct.md) and related constants for details. You must specify one or more options for the initialized object for the type of tracking area and for when the tracking area is active; zero is not a valid value.
- `owner`: The object to receive the requested mouse-tracking, mouse-moved, or cursor-update messages. It does not necessarily have to be the view associated with the created `NSTrackingArea` object, but should be an object capable of responding to the `NSResponder` methods [mouseEntered(with:)](../nsresponder/mouseentered%28with_%29.md), [mouseExited(with:)](../nsresponder/mouseexited%28with_%29.md), [mouseMoved(with:)](../nsresponder/mousemoved%28with_%29.md), and [cursorUpdate(with:)](../nsresponder/cursorupdate%28with_%29.md).
- `userInfo`: A dictionary containing arbitrary data for each mouse-entered, mouse-exited, and cursor-update event. When handling such an event you can obtain the dictionary by sending [userData](../nsevent/userdata.md) to the `NSEvent` object. (The dictionary is not available for mouse-moved events.) This parameter may be `nil`.

<a id="return-value"></a>

## Return Value

The newly-initialized tracking area object.

<a id="Discussion"></a>

## Discussion

After creating and initializing an `NSTrackingArea` object with this method, you must add it to a target view using the [addTrackingArea(\_:)](../nsview/addtrackingarea%28__%29.md) method. When changes in the view require changes in the geometry of its tracking areas, the Application Kit invokes [updateTrackingAreas()](../nsview/updatetrackingareas%28%29.md). The view should implement this method to replace the current `NSTrackingArea` object with one with a recomputed area.

<a id="Special-Considerations"></a>

### Special Considerations

Beginning with OS X v10.5, the [init(rect:options:owner:userInfo:)](init%28rect_options_owner_userinfo_%29.md), along with the [addTrackingArea(\_:)](../nsview/addtrackingarea%28__%29.md) method of `NSView`, replace the `NSView` method [addTrackingRect(\_:owner:userData:assumeInside:)](../nsview/addtrackingrect%28__owner_userdata_assumeinside_%29.md).

## See Also

### Related Documentation

- [userInfo](userinfo.md): The dictionary containing the data associated with the receiver when it was created.
- [rect](rect.md): The rectangle defining the area encompassed by the receiver.
- [owner](owner.md): The object owning the receiver, which is the recipient of mouse-tracking, mouse-movement, and cursor-update messages.
- [options](options-swift.property.md): The options specified for the receiver.
- [NSTrackingArea](../nstrackingarea.md): A region of a view that generates mouse-tracking and cursor-update events when the pointer is over that region.

# initWithRect:options:owner:userInfo: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Initializes and returns an object defining a region of a view to receive mouse-tracking events, mouse-moved events, cursor-update events, or possibly all these events.

## Declaration

```objectivec
- (instancetype) initWithRect:(NSRect) rect options:(NSTrackingAreaOptions) options owner:(id) owner userInfo:(NSDictionary<id,id> *) userInfo;
```

## Parameters

- `rect`: A rectangle that defines a region of a target view, in the view’s coordinate system, for tracking events related to mouse tracking and cursor updating. The specified rectangle should not exceed the view’s bounds rectangle.
- `options`: One or more constants that specify the type of tracking area, the situations when the area is active, and special behaviors of the tracking area. See the description of [NSTrackingAreaOptions](options-swift.struct.md) and related constants for details. You must specify one or more options for the initialized object for the type of tracking area and for when the tracking area is active; zero is not a valid value.
- `owner`: The object to receive the requested mouse-tracking, mouse-moved, or cursor-update messages. It does not necessarily have to be the view associated with the created `NSTrackingArea` object, but should be an object capable of responding to the `NSResponder` methods [mouseEntered:](../nsresponder/mouseentered%28with_%29.md), [mouseExited:](../nsresponder/mouseexited%28with_%29.md), [mouseMoved:](../nsresponder/mousemoved%28with_%29.md), and [cursorUpdate:](../nsresponder/cursorupdate%28with_%29.md).
- `userInfo`: A dictionary containing arbitrary data for each mouse-entered, mouse-exited, and cursor-update event. When handling such an event you can obtain the dictionary by sending [userData](../nsevent/userdata.md) to the `NSEvent` object. (The dictionary is not available for mouse-moved events.) This parameter may be `nil`.

<a id="return-value"></a>

## Return Value

The newly-initialized tracking area object.

<a id="Discussion"></a>

## Discussion

After creating and initializing an `NSTrackingArea` object with this method, you must add it to a target view using the [addTrackingArea:](../nsview/addtrackingarea%28__%29.md) method. When changes in the view require changes in the geometry of its tracking areas, the Application Kit invokes [updateTrackingAreas](../nsview/updatetrackingareas%28%29.md). The view should implement this method to replace the current `NSTrackingArea` object with one with a recomputed area.

<a id="Special-Considerations"></a>

### Special Considerations

Beginning with OS X v10.5, the [initWithRect:options:owner:userInfo:](init%28rect_options_owner_userinfo_%29.md), along with the [addTrackingArea:](../nsview/addtrackingarea%28__%29.md) method of `NSView`, replace the `NSView` method [addTrackingRect:owner:userData:assumeInside:](../nsview/addtrackingrect%28__owner_userdata_assumeinside_%29.md).

## See Also

### Related Documentation

- [userInfo](userinfo.md): The dictionary containing the data associated with the receiver when it was created.
- [rect](rect.md): The rectangle defining the area encompassed by the receiver.
- [owner](owner.md): The object owning the receiver, which is the recipient of mouse-tracking, mouse-movement, and cursor-update messages.
- [options](options-swift.property.md): The options specified for the receiver.
- [NSTrackingArea](../nstrackingarea.md): A region of a view that generates mouse-tracking and cursor-update events when the pointer is over that region.
