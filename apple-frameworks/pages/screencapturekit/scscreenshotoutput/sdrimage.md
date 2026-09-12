> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scscreenshotoutput/sdrimage](https://developer.apple.com/documentation/screencapturekit/scscreenshotoutput/sdrimage)

# sdrImage (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 26.0+ · macOS 26.0+

An output property that specifies the standard dynamic range version of the screenshot.

## Declaration

```swift
var sdrImage: CGImage? { get set }
```

<a id="discussion"></a>

## Discussion

The output [CGImage](../../coregraphics/cgimage.md) uses the same color space as the content capture display.

# sdrImage (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 26.0+ · macOS 26.0+

An output property that specifies the standard dynamic range version of the screenshot.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) CGImageRef sdrImage;
```

<a id="discussion"></a>

## Discussion

The output [CGImageRef](../../coregraphics/cgimage.md) uses the same color space as the content capture display.
