> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibility/hearingdeviceear](https://developer.apple.com/documentation/uikit/uiaccessibility/hearingdeviceear)

# UIAccessibility.HearingDeviceEar (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Constants that specify how a person is using a hearing device.

## Declaration

```swift
struct HearingDeviceEar
```

## Topics

### Constants

- [left](hearingdeviceear/left.md): A constant that represents the left ear.
- [right](hearingdeviceear/right.md): A constant that represents the right ear.
- [both](hearingdeviceear/both.md): A constant that represents both ears.

### Initializers

- [init(rawValue:)](hearingdeviceear/init%28rawvalue_%29.md): Creates a structure that represents a hearing-device ear with the specified raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Convenience functions

- [focusedElement(using:)](focusedelement%28using_%29.md): Returns the accessibility element that’s currently in focus by the specified assistive app.
- [hearingDevicePairedEar](hearingdevicepairedear.md): The current pairing status of Made for iPhone hearing devices.
- [registerGestureConflictWithZoom()](registergestureconflictwithzoom%28%29.md): Warns users that app-specific gestures conflict with the system-defined Zoom accessibility gestures.
- [requestGuidedAccessSession(enabled:completionHandler:)](requestguidedaccesssession%28enabled_completionhandler_%29.md): Transitions the app to or from Single App mode asynchronously.
- [zoomFocusChanged(zoomType:toFrame:in:)](zoomfocuschanged%28zoomtype_toframe_in_%29.md): Notifies the system when the app’s focus changes to a new location.

# UIAccessibilityHearingDeviceEar (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Constants that specify how a person is using a hearing device.

## Declaration

```objectivec
enum UIAccessibilityHearingDeviceEar : NSUInteger;
```

## Topics

### Constants

- [UIAccessibilityHearingDeviceEarLeft](hearingdeviceear/left.md): A constant that represents the left ear.
- [UIAccessibilityHearingDeviceEarRight](hearingdeviceear/right.md): A constant that represents the right ear.
- [UIAccessibilityHearingDeviceEarBoth](hearingdeviceear/both.md): A constant that represents both ears.

### Initializers

- [UIAccessibilityHearingDeviceEarNone](../uiaccessibilityhearingdeviceear/uiaccessibilityhearingdeviceearnone.md): A constant that represents neither ear.

## See Also

### Convenience functions

- [UIAccessibilityFocusedElement](focusedelement%28using_%29.md): Returns the accessibility element that’s currently in focus by the specified assistive app.
- [UIAccessibilityHearingDevicePairedEar](hearingdevicepairedear.md): The current pairing status of Made for iPhone hearing devices.
- [UIAccessibilityRegisterGestureConflictWithZoom](registergestureconflictwithzoom%28%29.md): Warns users that app-specific gestures conflict with the system-defined Zoom accessibility gestures.
- [UIAccessibilityRequestGuidedAccessSession](requestguidedaccesssession%28enabled_completionhandler_%29.md): Transitions the app to or from Single App mode asynchronously.
- [UIAccessibilityZoomFocusChanged](zoomfocuschanged%28zoomtype_toframe_in_%29.md): Notifies the system when the app’s focus changes to a new location.
