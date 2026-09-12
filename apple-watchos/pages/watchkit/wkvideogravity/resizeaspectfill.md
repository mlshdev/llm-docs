> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkvideogravity/resizeaspectfill](https://developer.apple.com/documentation/watchkit/wkvideogravity/resizeaspectfill)

# WKVideoGravity.resizeAspectFill (Swift)

**Framework:** WatchKit  
**Kind:** Case  
**Availability:** watchOS 2.0+

Content is resized to fill the bounds rectangle completely while preserving the original aspect ratio of the content. This option results in cropping of the edges of the video in the axis it exceeds.

## Declaration

```swift
case resizeAspectFill
```

## See Also

### Constants

- [WKVideoGravity.resizeAspect](resizeaspect.md): Content is resized to fit the bounds rectangle, preserving the original aspect ratio of the content. Content that does not completely fill the bounds rectangle is centered in the partial axis.
- [WKVideoGravity.resize](resize.md): Content is resized to fit the entire bounds rectangle. This option does not preserve the original aspect ratio of the content.

# WKVideoGravityResizeAspectFill (Objective-C)

**Framework:** WatchKit  
**Kind:** Enumeration Case  
**Availability:** watchOS 2.0+

Content is resized to fill the bounds rectangle completely while preserving the original aspect ratio of the content. This option results in cropping of the edges of the video in the axis it exceeds.

## Declaration

```objectivec
WKVideoGravityResizeAspectFill
```

## See Also

### Constants

- [WKVideoGravityResizeAspect](resizeaspect.md): Content is resized to fit the bounds rectangle, preserving the original aspect ratio of the content. Content that does not completely fill the bounds rectangle is centered in the partial axis.
- [WKVideoGravityResize](resize.md): Content is resized to fit the entire bounds rectangle. This option does not preserve the original aspect ratio of the content.
