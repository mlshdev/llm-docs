> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/layerrenderer/drawable/iscontentcaptureprotected](https://developer.apple.com/documentation/compositorservices/layerrenderer/drawable/iscontentcaptureprotected)

# isContentCaptureProtected (Swift)

**Framework:** Compositor Services  
**Kind:** Instance Property  
**Availability:** visionOS 26.0+

Returns whether content capture is protected and it is safe to draw content that should be protected from capture.

## Declaration

```swift
var isContentCaptureProtected: Bool { get }
```

<a id="discussion"></a>

## Discussion

Use this function to ensure that drawing that is only meant for eyes in the device is not drawn when false. Only adopt if app has adopted SwiftUI `activatesContentCaptureProtected` scene modifier and drawing will have content that is not desired to meant to be captured. For `cp_drawable_target_capture` this will always return false as it is upto the renderer to handle drawing content that will be captured beyond the built-in displays.

# cp_drawable_is_content_capture_protected (Objective-C)

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** visionOS 26.0+

Returns whether content capture is protected and it is safe to draw content that should be protected from capture.

## Declaration

```objectivec
bool cp_drawable_is_content_capture_protected(cp_drawable_t drawable);
```

## Parameters

- `drawable`: The drawable for a frame.

<a id="return-value"></a>

## Return Value

Whether it is safe to draw content that is for built-in display only. When this value is true, any capture of content being displayed on the built-in display will be obscured by the system. If false, it cannot be assumed that content will not be seen by users outside of the device, both live and recorded.

<a id="discussion"></a>

## Discussion

Use this function to ensure that drawing that is only meant for eyes in the device is not drawn when false. Only adopt if app has adopted SwiftUI `activatesContentCaptureProtected` scene modifier and drawing will have content that is not desired to meant to be captured. For `cp_drawable_target_capture` this will always return false as it is upto the renderer to handle drawing content that will be captured beyond the built-in displays.
