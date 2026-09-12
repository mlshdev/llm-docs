> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/iscontinuousautofocustrackingsubjectacquired](https://developer.apple.com/documentation/avfoundation/avcapturedevice/iscontinuousautofocustrackingsubjectacquired)

# isContinuousAutoFocusTrackingSubjectAcquired (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

Indicates whether the device is actively tracking a subject in the scene to maintain focus.

## Declaration

```swift
var isContinuousAutoFocusTrackingSubjectAcquired: Bool { get }
```

<a id="discussion"></a>

## Discussion

Returns `true` when the capture device is actively tracking a subject in the scene, and `false` otherwise. The subject is initially identified by [focusPointOfInterest](focuspointofinterest.md) when focus mode is set to `AVCaptureFocusModeContinuousAutoFocus` with [isContinuousAutoFocusTrackingEnabled](iscontinuousautofocustrackingenabled.md) set to `true`. This property is key-value observable and reflects only whether a subject is actively tracked, not which one. To identify the tracked subject, include [focusTrackedObject](../avmetadataobject/objecttype/focustrackedobject.md) in the `metadataObjectTypes` of [AVCaptureMetadataOutput](../avcapturemetadataoutput.md). The [AVMetadataFocusTrackedObject](../avmetadatafocustrackedobject.md) delivered by the metadata output represents the subject currently tracked for continuous autofocus.

# continuousAutoFocusTrackingSubjectAcquired (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

Indicates whether the device is actively tracking a subject in the scene to maintain focus.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isContinuousAutoFocusTrackingSubjectAcquired) BOOL continuousAutoFocusTrackingSubjectAcquired;
```

<a id="discussion"></a>

## Discussion

Returns `true` when the capture device is actively tracking a subject in the scene, and `false` otherwise. The subject is initially identified by [focusPointOfInterest](focuspointofinterest.md) when focus mode is set to `AVCaptureFocusModeContinuousAutoFocus` with [continuousAutoFocusTrackingEnabled](iscontinuousautofocustrackingenabled.md) set to `true`. This property is key-value observable and reflects only whether a subject is actively tracked, not which one. To identify the tracked subject, include [AVMetadataObjectTypeFocusTrackedObject](../avmetadataobject/objecttype/focustrackedobject.md) in the `metadataObjectTypes` of [AVCaptureMetadataOutput](../avcapturemetadataoutput.md). The [AVMetadataFocusTrackedObject](../avmetadatafocustrackedobject.md) delivered by the metadata output represents the subject currently tracked for continuous autofocus.
