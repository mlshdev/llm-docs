> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/sccontentfilter/iscameraenabled](https://developer.apple.com/documentation/screencapturekit/sccontentfilter/iscameraenabled)

# isCameraEnabled (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

## Declaration

```swift
var isCameraEnabled: Bool { get }
```

<a id="discussion"></a>

## Discussion

Indicates whether the camera is enabled via the picker.

Readonly - camera enable state determined by user via system picker when showsCameraControl is enabled in SCContentSharingPickerConfiguration.

# cameraEnabled (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isCameraEnabled) BOOL cameraEnabled;
```

<a id="discussion"></a>

## Discussion

Indicates whether the camera is enabled via the picker.

Readonly - camera enable state determined by user via system picker when showsCameraControl is enabled in SCContentSharingPickerConfiguration.
