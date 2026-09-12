> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibility/hearingdevicepairedear](https://developer.apple.com/documentation/uikit/uiaccessibility/hearingdevicepairedear)

# hearingDevicePairedEar (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The current pairing status of Made for iPhone hearing devices.

## Declaration

```swift
@MainActor static var hearingDevicePairedEar: UIAccessibility.HearingDeviceEar { get }
```

## See Also

### Convenience functions

- [focusedElement(using:)](focusedelement%28using_%29.md): Returns the accessibility element that’s currently in focus by the specified assistive app.
- [UIAccessibility.HearingDeviceEar](hearingdeviceear.md): Constants that specify how a person is using a hearing device.
- [registerGestureConflictWithZoom()](registergestureconflictwithzoom%28%29.md): Warns users that app-specific gestures conflict with the system-defined Zoom accessibility gestures.
- [requestGuidedAccessSession(enabled:completionHandler:)](requestguidedaccesssession%28enabled_completionhandler_%29.md): Transitions the app to or from Single App mode asynchronously.
- [zoomFocusChanged(zoomType:toFrame:in:)](zoomfocuschanged%28zoomtype_toframe_in_%29.md): Notifies the system when the app’s focus changes to a new location.

# UIAccessibilityHearingDevicePairedEar (Objective-C)

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The current pairing status of Made for iPhone hearing devices.

## Declaration

```objectivec
extern UIAccessibilityHearingDeviceEar UIAccessibilityHearingDevicePairedEar();
```

## See Also

### Convenience functions

- [UIAccessibilityFocusedElement](focusedelement%28using_%29.md): Returns the accessibility element that’s currently in focus by the specified assistive app.
- [UIAccessibilityHearingDeviceEar](hearingdeviceear.md): Constants that specify how a person is using a hearing device.
- [UIAccessibilityRegisterGestureConflictWithZoom](registergestureconflictwithzoom%28%29.md): Warns users that app-specific gestures conflict with the system-defined Zoom accessibility gestures.
- [UIAccessibilityRequestGuidedAccessSession](requestguidedaccesssession%28enabled_completionhandler_%29.md): Transitions the app to or from Single App mode asynchronously.
- [UIAccessibilityZoomFocusChanged](zoomfocuschanged%28zoomtype_toframe_in_%29.md): Notifies the system when the app’s focus changes to a new location.
