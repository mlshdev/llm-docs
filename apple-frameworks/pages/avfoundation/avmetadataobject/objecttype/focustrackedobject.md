> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetadataobject/objecttype/focustrackedobject](https://developer.apple.com/documentation/avfoundation/avmetadataobject/objecttype/focustrackedobject)

# focusTrackedObject (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

An identifier for an instance of [AVMetadataFocusTrackedObject](../../avmetadatafocustrackedobject.md).

## Declaration

```swift
static let focusTrackedObject: AVMetadataObject.ObjectType
```

<a id="discussion"></a>

## Discussion

This metadata object type is only available when the source [AVCaptureDevice](../../avcapturedevice.md)’s `activeFormat` has `AVCaptureDeviceFormat/isContinuousAutoFocusTrackingSupported` equal to `true`. It can therefore appear and disappear from [availableMetadataObjectTypes](../../avcapturemetadataoutput/availablemetadataobjecttypes.md) as the active format changes; observers should not assume it is statically available for the lifetime of the session.

# AVMetadataObjectTypeFocusTrackedObject (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

An identifier for an instance of [AVMetadataFocusTrackedObject](../../avmetadatafocustrackedobject.md).

## Declaration

```objectivec
extern AVMetadataObjectType const AVMetadataObjectTypeFocusTrackedObject;
```

<a id="discussion"></a>

## Discussion

This metadata object type is only available when the source [AVCaptureDevice](../../avcapturedevice.md)’s `activeFormat` has `AVCaptureDeviceFormat/isContinuousAutoFocusTrackingSupported` equal to `true`. It can therefore appear and disappear from [availableMetadataObjectTypes](../../avcapturemetadataoutput/availablemetadataobjecttypes.md) as the active format changes; observers should not assume it is statically available for the lifetime of the session.
