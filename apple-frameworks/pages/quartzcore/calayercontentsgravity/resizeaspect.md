> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayercontentsgravity/resizeaspect](https://developer.apple.com/documentation/quartzcore/calayercontentsgravity/resizeaspect)

# resizeAspect (Swift)

**Framework:** Core Animation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

The content is resized to fit the bounds rectangle, preserving the aspect of the content. If the content does not completely fill the bounds rectangle, the content is centered in the partial axis.

## Declaration

```swift
static let resizeAspect: CALayerContentsGravity
```

## See Also

### Constants

- [center](center.md): The content is horizontally and vertically centered in the bounds rectangle.
- [top](top.md): The content is horizontally centered at the top-edge of the bounds rectangle.
- [bottom](bottom.md): The content is horizontally centered at the bottom-edge of the bounds rectangle.
- [left](left.md): The content is vertically centered at the left-edge of the bounds rectangle.
- [right](right.md): The content is vertically centered at the right-edge of the bounds rectangle.
- [topLeft](topleft.md): The content is positioned in the top-left corner of the bounds rectangle.
- [topRight](topright.md): The content is positioned in the top-right corner of the bounds rectangle.
- [bottomLeft](bottomleft.md): The content is positioned in the bottom-left corner of the bounds rectangle.
- [bottomRight](bottomright.md): The content is positioned in the bottom-right corner of the bounds rectangle.
- [resize](resize.md): The content is resized to fit the entire bounds rectangle.
- [resizeAspectFill](resizeaspectfill.md): The content is resized to completely fill the bounds rectangle, while still preserving the aspect of the content. The content is centered in the axis it exceeds.

# kCAGravityResizeAspect (Objective-C)

**Framework:** Core Animation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

The content is resized to fit the bounds rectangle, preserving the aspect of the content. If the content does not completely fill the bounds rectangle, the content is centered in the partial axis.

## Declaration

```objectivec
extern CALayerContentsGravity const kCAGravityResizeAspect;
```

## See Also

### Constants

- [kCAGravityCenter](center.md): The content is horizontally and vertically centered in the bounds rectangle.
- [kCAGravityTop](top.md): The content is horizontally centered at the top-edge of the bounds rectangle.
- [kCAGravityBottom](bottom.md): The content is horizontally centered at the bottom-edge of the bounds rectangle.
- [kCAGravityLeft](left.md): The content is vertically centered at the left-edge of the bounds rectangle.
- [kCAGravityRight](right.md): The content is vertically centered at the right-edge of the bounds rectangle.
- [kCAGravityTopLeft](topleft.md): The content is positioned in the top-left corner of the bounds rectangle.
- [kCAGravityTopRight](topright.md): The content is positioned in the top-right corner of the bounds rectangle.
- [kCAGravityBottomLeft](bottomleft.md): The content is positioned in the bottom-left corner of the bounds rectangle.
- [kCAGravityBottomRight](bottomright.md): The content is positioned in the bottom-right corner of the bounds rectangle.
- [kCAGravityResize](resize.md): The content is resized to fit the entire bounds rectangle.
- [kCAGravityResizeAspectFill](resizeaspectfill.md): The content is resized to completely fill the bounds rectangle, while still preserving the aspect of the content. The content is centered in the axis it exceeds.
