> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scscreenshotoutput/hdrimage](https://developer.apple.com/documentation/screencapturekit/scscreenshotoutput/hdrimage)

# hdrImage (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 26.0+ · macOS 26.0+

An output property that specifies the high dynamic range version of the screenshot.

## Declaration

```swift
var hdrImage: CGImage? { get set }
```

<a id="discussion"></a>

## Discussion

The output [CGImage](../../coregraphics/cgimage.md) uses the extended sRGB color space.

# hdrImage (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 26.0+ · macOS 26.0+

An output property that specifies the high dynamic range version of the screenshot.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) CGImageRef hdrImage;
```

<a id="discussion"></a>

## Discussion

The output [CGImageRef](../../coregraphics/cgimage.md) uses the extended sRGB color space.
