> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibility/focusedelement(using:)](https://developer.apple.com/documentation/uikit/uiaccessibility/focusedelement(using:))

# focusedElement(using:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Returns the accessibility element that’s currently in focus by the specified assistive app.

## Declaration

```swift
@MainActor static func focusedElement(using assistiveTechnologyIdentifier: UIAccessibility.AssistiveTechnologyIdentifier?) -> Any?
```

<a id="return-value"></a>

## Return Value

The element that is currently focused by the specified assistive technology or the element that was most recently focused, if no technology is specified.

## See Also

### Convenience functions

- [hearingDevicePairedEar](hearingdevicepairedear.md): The current pairing status of Made for iPhone hearing devices.
- [UIAccessibility.HearingDeviceEar](hearingdeviceear.md): Constants that specify how a person is using a hearing device.
- [registerGestureConflictWithZoom()](registergestureconflictwithzoom%28%29.md): Warns users that app-specific gestures conflict with the system-defined Zoom accessibility gestures.
- [requestGuidedAccessSession(enabled:completionHandler:)](requestguidedaccesssession%28enabled_completionhandler_%29.md): Transitions the app to or from Single App mode asynchronously.
- [zoomFocusChanged(zoomType:toFrame:in:)](zoomfocuschanged%28zoomtype_toframe_in_%29.md): Notifies the system when the app’s focus changes to a new location.

# UIAccessibilityFocusedElement (Objective-C)

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Returns the accessibility element that’s currently in focus by the specified assistive app.

## Declaration

```objectivec
extern idUIAccessibilityFocusedElement(UIAccessibilityAssistiveTechnologyIdentifier assistiveTechnologyIdentifier);
```

<a id="return-value"></a>

## Return Value

The element that is currently focused by the specified assistive technology or the element that was most recently focused, if no technology is specified.

## See Also

### Convenience functions

- [UIAccessibilityHearingDevicePairedEar](hearingdevicepairedear.md): The current pairing status of Made for iPhone hearing devices.
- [UIAccessibilityHearingDeviceEar](hearingdeviceear.md): Constants that specify how a person is using a hearing device.
- [UIAccessibilityRegisterGestureConflictWithZoom](registergestureconflictwithzoom%28%29.md): Warns users that app-specific gestures conflict with the system-defined Zoom accessibility gestures.
- [UIAccessibilityRequestGuidedAccessSession](requestguidedaccesssession%28enabled_completionhandler_%29.md): Transitions the app to or from Single App mode asynchronously.
- [UIAccessibilityZoomFocusChanged](zoomfocuschanged%28zoomtype_toframe_in_%29.md): Notifies the system when the app’s focus changes to a new location.
