> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibility/zoomfocuschanged(zoomtype:toframe:in:)](https://developer.apple.com/documentation/uikit/uiaccessibility/zoomfocuschanged(zoomtype:toframe:in:))

# zoomFocusChanged(zoomType:toFrame:in:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Notifies the system when the app’s focus changes to a new location.

## Declaration

```swift
@MainActor static func zoomFocusChanged(zoomType type: UIAccessibility.ZoomType, toFrame frame: CGRect, in view: UIView)
```

## Parameters

- `type`: A `UIKit Functions` constant that identifies the type of Zoom.
- `frame`: The frame that’s currently zoomed, in screen coordinates.
- `view`: The view that contains the zoomed frame.

## See Also

### Convenience functions

- [focusedElement(using:)](focusedelement%28using_%29.md): Returns the accessibility element that’s currently in focus by the specified assistive app.
- [hearingDevicePairedEar](hearingdevicepairedear.md): The current pairing status of Made for iPhone hearing devices.
- [UIAccessibility.HearingDeviceEar](hearingdeviceear.md): Constants that specify how a person is using a hearing device.
- [registerGestureConflictWithZoom()](registergestureconflictwithzoom%28%29.md): Warns users that app-specific gestures conflict with the system-defined Zoom accessibility gestures.
- [requestGuidedAccessSession(enabled:completionHandler:)](requestguidedaccesssession%28enabled_completionhandler_%29.md): Transitions the app to or from Single App mode asynchronously.

# UIAccessibilityZoomFocusChanged (Objective-C)

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Notifies the system when the app’s focus changes to a new location.

## Declaration

```objectivec
extern void UIAccessibilityZoomFocusChanged(UIAccessibilityZoomType type, CGRect frame, UIView *view);
```

## Parameters

- `type`: A `UIKit Functions` constant that identifies the type of Zoom.
- `frame`: The frame that’s currently zoomed, in screen coordinates.
- `view`: The view that contains the zoomed frame.

## See Also

### Convenience functions

- [UIAccessibilityFocusedElement](focusedelement%28using_%29.md): Returns the accessibility element that’s currently in focus by the specified assistive app.
- [UIAccessibilityHearingDevicePairedEar](hearingdevicepairedear.md): The current pairing status of Made for iPhone hearing devices.
- [UIAccessibilityHearingDeviceEar](hearingdeviceear.md): Constants that specify how a person is using a hearing device.
- [UIAccessibilityRegisterGestureConflictWithZoom](registergestureconflictwithzoom%28%29.md): Warns users that app-specific gestures conflict with the system-defined Zoom accessibility gestures.
- [UIAccessibilityRequestGuidedAccessSession](requestguidedaccesssession%28enabled_completionhandler_%29.md): Transitions the app to or from Single App mode asynchronously.
