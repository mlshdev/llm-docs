> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkvideogravity/resizeaspect](https://developer.apple.com/documentation/watchkit/wkvideogravity/resizeaspect)

# WKVideoGravity.resizeAspect (Swift)

**Framework:** WatchKit  
**Kind:** Case  
**Availability:** watchOS 2.0+

Content is resized to fit the bounds rectangle, preserving the original aspect ratio of the content. Content that does not completely fill the bounds rectangle is centered in the partial axis.

## Declaration

```swift
case resizeAspect
```

## See Also

### Constants

- [WKVideoGravity.resizeAspectFill](resizeaspectfill.md): Content is resized to fill the bounds rectangle completely while preserving the original aspect ratio of the content. This option results in cropping of the edges of the video in the axis it exceeds.
- [WKVideoGravity.resize](resize.md): Content is resized to fit the entire bounds rectangle. This option does not preserve the original aspect ratio of the content.

# WKVideoGravityResizeAspect (Objective-C)

**Framework:** WatchKit  
**Kind:** Enumeration Case  
**Availability:** watchOS 2.0+

Content is resized to fit the bounds rectangle, preserving the original aspect ratio of the content. Content that does not completely fill the bounds rectangle is centered in the partial axis.

## Declaration

```objectivec
WKVideoGravityResizeAspect
```

## See Also

### Constants

- [WKVideoGravityResizeAspectFill](resizeaspectfill.md): Content is resized to fill the bounds rectangle completely while preserving the original aspect ratio of the content. This option results in cropping of the edges of the video in the axis it exceeds.
- [WKVideoGravityResize](resize.md): Content is resized to fit the entire bounds rectangle. This option does not preserve the original aspect ratio of the content.
