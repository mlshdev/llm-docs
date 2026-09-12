> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkvideogravity/resize](https://developer.apple.com/documentation/watchkit/wkvideogravity/resize)

# WKVideoGravity.resize (Swift)

**Framework:** WatchKit  
**Kind:** Case  
**Availability:** watchOS 2.0+

Content is resized to fit the entire bounds rectangle. This option does not preserve the original aspect ratio of the content.

## Declaration

```swift
case resize
```

## See Also

### Constants

- [WKVideoGravity.resizeAspect](resizeaspect.md): Content is resized to fit the bounds rectangle, preserving the original aspect ratio of the content. Content that does not completely fill the bounds rectangle is centered in the partial axis.
- [WKVideoGravity.resizeAspectFill](resizeaspectfill.md): Content is resized to fill the bounds rectangle completely while preserving the original aspect ratio of the content. This option results in cropping of the edges of the video in the axis it exceeds.

# WKVideoGravityResize (Objective-C)

**Framework:** WatchKit  
**Kind:** Enumeration Case  
**Availability:** watchOS 2.0+

Content is resized to fit the entire bounds rectangle. This option does not preserve the original aspect ratio of the content.

## Declaration

```objectivec
WKVideoGravityResize
```

## See Also

### Constants

- [WKVideoGravityResizeAspect](resizeaspect.md): Content is resized to fit the bounds rectangle, preserving the original aspect ratio of the content. Content that does not completely fill the bounds rectangle is centered in the partial axis.
- [WKVideoGravityResizeAspectFill](resizeaspectfill.md): Content is resized to fill the bounds rectangle completely while preserving the original aspect ratio of the content. This option results in cropping of the edges of the video in the axis it exceeds.
