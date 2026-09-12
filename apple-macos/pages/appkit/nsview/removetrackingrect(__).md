> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/removetrackingrect(_:)](https://developer.apple.com/documentation/appkit/nsview/removetrackingrect(_:))

# removeTrackingRect(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes the tracking rectangle identified by a tag.

## Declaration

```swift
func removeTrackingRect(_ tag: NSView.TrackingRectTag)
```

## Parameters

- `tag`: An integer value identifying a tracking rectangle. It was returned by a previously sent [addTrackingRect(\_:owner:userData:assumeInside:)](addtrackingrect%28__owner_userdata_assumeinside_%29.md) message.

## See Also

### Related Documentation

- [removeTrackingArea(\_:)](removetrackingarea%28__%29.md): Removes a given tracking area from the view.

### Managing Tracking Rectangles

- [addTrackingRect(\_:owner:userData:assumeInside:)](addtrackingrect%28__owner_userdata_assumeinside_%29.md): Establishes an area for tracking mouse-entered and mouse-exited events within the view and returns a tag that identifies the tracking rectangle.
- [NSView.TrackingRectTag](trackingrecttag.md): This type describes the rectangle used to track the mouse.

# removeTrackingRect: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes the tracking rectangle identified by a tag.

## Declaration

```objectivec
- (void) removeTrackingRect:(NSTrackingRectTag) tag;
```

## Parameters

- `tag`: An integer value identifying a tracking rectangle. It was returned by a previously sent [addTrackingRect:owner:userData:assumeInside:](addtrackingrect%28__owner_userdata_assumeinside_%29.md) message.

## See Also

### Related Documentation

- [removeTrackingArea:](removetrackingarea%28__%29.md): Removes a given tracking area from the view.

### Managing Tracking Rectangles

- [addTrackingRect:owner:userData:assumeInside:](addtrackingrect%28__owner_userdata_assumeinside_%29.md): Establishes an area for tracking mouse-entered and mouse-exited events within the view and returns a tag that identifies the tracking rectangle.
- [NSTrackingRectTag](trackingrecttag.md): This type describes the rectangle used to track the mouse.
