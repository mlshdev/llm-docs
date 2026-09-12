> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibility/requestguidedaccesssession(enabled:completionhandler:)](https://developer.apple.com/documentation/uikit/uiaccessibility/requestguidedaccesssession(enabled:completionhandler:))

# requestGuidedAccessSession(enabled:completionHandler:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Transitions the app to or from Single App mode asynchronously.

## Declaration

```swift
@MainActor static func requestGuidedAccessSession(enabled enable: Bool, completionHandler: @escaping @MainActor @Sendable (Bool) -> Void)
```

## Parameters

- `enable`: Specify [true](https://developer.apple.com/documentation/swift/true) to put the device into Single App mode for this app or [false](https://developer.apple.com/documentation/swift/false) to exit Single App mode.
- `completionHandler`: The block that notifies your app of the success or failure of the operation. This block takes the following parameter:

  - **didSucceed**: If [true](https://developer.apple.com/documentation/swift/true), the app transitioned to or from Single App mode successfully. If [false](https://developer.apple.com/documentation/swift/false), the app or device is not eligible for Single App mode or there was some other error.

<a id="Discussion"></a>

## Discussion

You can use this method to lock your app into Single App mode and to release it from that mode later. For example, a test-taking app might enter this mode at the beginning of a test and exit it when the user completes the test. Entering Single App mode is supported only for devices that are supervised using Mobile Device Management (MDM), and the app itself must be enabled for this mode by MDM. You must balance each call to enter Single App mode with a call to exit that mode.

Because entering or exiting Single App mode might take some time, this method executes asynchronously and notifies you of the results using the `completionHandler` block.

## See Also

### Convenience functions

- [focusedElement(using:)](focusedelement%28using_%29.md): Returns the accessibility element that’s currently in focus by the specified assistive app.
- [hearingDevicePairedEar](hearingdevicepairedear.md): The current pairing status of Made for iPhone hearing devices.
- [UIAccessibility.HearingDeviceEar](hearingdeviceear.md): Constants that specify how a person is using a hearing device.
- [registerGestureConflictWithZoom()](registergestureconflictwithzoom%28%29.md): Warns users that app-specific gestures conflict with the system-defined Zoom accessibility gestures.
- [zoomFocusChanged(zoomType:toFrame:in:)](zoomfocuschanged%28zoomtype_toframe_in_%29.md): Notifies the system when the app’s focus changes to a new location.

# UIAccessibilityRequestGuidedAccessSession (Objective-C)

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Transitions the app to or from Single App mode asynchronously.

## Declaration

```objectivec
extern void UIAccessibilityRequestGuidedAccessSession(BOOL enable, void (^)(_Bool)completionHandler);
```

## Parameters

- `enable`: Specify [true](https://developer.apple.com/documentation/swift/true) to put the device into Single App mode for this app or [false](https://developer.apple.com/documentation/swift/false) to exit Single App mode.
- `completionHandler`: The block that notifies your app of the success or failure of the operation. This block takes the following parameter:

  - **didSucceed**: If [true](https://developer.apple.com/documentation/swift/true), the app transitioned to or from Single App mode successfully. If [false](https://developer.apple.com/documentation/swift/false), the app or device is not eligible for Single App mode or there was some other error.

<a id="Discussion"></a>

## Discussion

You can use this method to lock your app into Single App mode and to release it from that mode later. For example, a test-taking app might enter this mode at the beginning of a test and exit it when the user completes the test. Entering Single App mode is supported only for devices that are supervised using Mobile Device Management (MDM), and the app itself must be enabled for this mode by MDM. You must balance each call to enter Single App mode with a call to exit that mode.

Because entering or exiting Single App mode might take some time, this method executes asynchronously and notifies you of the results using the `completionHandler` block.

## See Also

### Convenience functions

- [UIAccessibilityFocusedElement](focusedelement%28using_%29.md): Returns the accessibility element that’s currently in focus by the specified assistive app.
- [UIAccessibilityHearingDevicePairedEar](hearingdevicepairedear.md): The current pairing status of Made for iPhone hearing devices.
- [UIAccessibilityHearingDeviceEar](hearingdeviceear.md): Constants that specify how a person is using a hearing device.
- [UIAccessibilityRegisterGestureConflictWithZoom](registergestureconflictwithzoom%28%29.md): Warns users that app-specific gestures conflict with the system-defined Zoom accessibility gestures.
- [UIAccessibilityZoomFocusChanged](zoomfocuschanged%28zoomtype_toframe_in_%29.md): Notifies the system when the app’s focus changes to a new location.
