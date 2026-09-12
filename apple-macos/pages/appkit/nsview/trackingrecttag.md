> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/trackingrecttag](https://developer.apple.com/documentation/appkit/nsview/trackingrecttag)

# NSView.TrackingRectTag (Swift)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

This type describes the rectangle used to track the mouse.

## Declaration

```swift
typealias TrackingRectTag = Int
```

<a id="Discussion"></a>

## Discussion

If the value of this type is 0, it is invalid. See the methods [addTrackingRect(\_:owner:userData:assumeInside:)](addtrackingrect%28__owner_userdata_assumeinside_%29.md) and [removeTrackingRect(\_:)](removetrackingrect%28__%29.md).

## See Also

### Managing Tracking Rectangles

- [addTrackingRect(\_:owner:userData:assumeInside:)](addtrackingrect%28__owner_userdata_assumeinside_%29.md): Establishes an area for tracking mouse-entered and mouse-exited events within the view and returns a tag that identifies the tracking rectangle.
- [removeTrackingRect(\_:)](removetrackingrect%28__%29.md): Removes the tracking rectangle identified by a tag.

# NSTrackingRectTag (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

This type describes the rectangle used to track the mouse.

## Declaration

```objectivec
typedef NSInteger NSTrackingRectTag;
```

<a id="Discussion"></a>

## Discussion

If the value of this type is 0, it is invalid. See the methods [addTrackingRect:owner:userData:assumeInside:](addtrackingrect%28__owner_userdata_assumeinside_%29.md) and [removeTrackingRect:](removetrackingrect%28__%29.md).

## See Also

### Managing Tracking Rectangles

- [addTrackingRect:owner:userData:assumeInside:](addtrackingrect%28__owner_userdata_assumeinside_%29.md): Establishes an area for tracking mouse-entered and mouse-exited events within the view and returns a tag that identifies the tracking rectangle.
- [removeTrackingRect:](removetrackingrect%28__%29.md): Removes the tracking rectangle identified by a tag.
