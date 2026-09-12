> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibility/registergestureconflictwithzoom()](https://developer.apple.com/documentation/uikit/uiaccessibility/registergestureconflictwithzoom())

# registerGestureConflictWithZoom() (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Warns users that app-specific gestures conflict with the system-defined Zoom accessibility gestures.

## Declaration

```swift
@MainActor static func registerGestureConflictWithZoom()
```

<a id="Discussion"></a>

## Discussion

Use this function if your application uses multi-finger gestures that conflict with the gestures used by system Zoom (that is, three-finger gestures). When this is the case, the user is presented with the choice of turning off Zoom or continuing.

## See Also

### Convenience functions

- [focusedElement(using:)](focusedelement%28using_%29.md): Returns the accessibility element that’s currently in focus by the specified assistive app.
- [hearingDevicePairedEar](hearingdevicepairedear.md): The current pairing status of Made for iPhone hearing devices.
- [UIAccessibility.HearingDeviceEar](hearingdeviceear.md): Constants that specify how a person is using a hearing device.
- [requestGuidedAccessSession(enabled:completionHandler:)](requestguidedaccesssession%28enabled_completionhandler_%29.md): Transitions the app to or from Single App mode asynchronously.
- [zoomFocusChanged(zoomType:toFrame:in:)](zoomfocuschanged%28zoomtype_toframe_in_%29.md): Notifies the system when the app’s focus changes to a new location.

# UIAccessibilityRegisterGestureConflictWithZoom (Objective-C)

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Warns users that app-specific gestures conflict with the system-defined Zoom accessibility gestures.

## Declaration

```objectivec
extern void UIAccessibilityRegisterGestureConflictWithZoom();
```

<a id="Discussion"></a>

## Discussion

Use this function if your application uses multi-finger gestures that conflict with the gestures used by system Zoom (that is, three-finger gestures). When this is the case, the user is presented with the choice of turning off Zoom or continuing.

## See Also

### Convenience functions

- [UIAccessibilityFocusedElement](focusedelement%28using_%29.md): Returns the accessibility element that’s currently in focus by the specified assistive app.
- [UIAccessibilityHearingDevicePairedEar](hearingdevicepairedear.md): The current pairing status of Made for iPhone hearing devices.
- [UIAccessibilityHearingDeviceEar](hearingdeviceear.md): Constants that specify how a person is using a hearing device.
- [UIAccessibilityRequestGuidedAccessSession](requestguidedaccesssession%28enabled_completionhandler_%29.md): Transitions the app to or from Single App mode asynchronously.
- [UIAccessibilityZoomFocusChanged](zoomfocuschanged%28zoomtype_toframe_in_%29.md): Notifies the system when the app’s focus changes to a new location.
