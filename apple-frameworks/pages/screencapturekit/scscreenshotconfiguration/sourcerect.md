> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/screencapturekit/scscreenshotconfiguration/sourcerect

# sourceRect (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 26.0+ · macOS 26.0+

A rectangle that specifies that the screenshot only samples a subset of the frame input.

## Declaration

```swift
var sourceRect: CGRect { get set }
```

<a id="discussion"></a>

## Discussion

If not set, the screenshot captures the entire frame. Specify the rectangle in points in the display’s logical coordinate system.

# sourceRect (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 26.0+ · macOS 26.0+

A rectangle that specifies that the screenshot only samples a subset of the frame input.

## Declaration

```objectivec
@property (nonatomic, assign) CGRect sourceRect;
```

<a id="discussion"></a>

## Discussion

If not set, the screenshot captures the entire frame. Specify the rectangle in points in the display’s logical coordinate system.
