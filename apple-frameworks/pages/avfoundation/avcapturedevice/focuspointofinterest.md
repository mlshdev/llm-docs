> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/focuspointofinterest](https://developer.apple.com/documentation/avfoundation/avcapturedevice/focuspointofinterest)

# focusPointOfInterest (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

The point of interest for focusing.

## Declaration

```swift
var focusPointOfInterest: CGPoint { get set }
```

<a id="Discussion"></a>

## Discussion

Setting a value for this property doesn’t initiate a focusing operation. To focus the camera on a point of interest, first set this property’s value, then set the [focusMode](focusmode-swift.property.md) property to [AVCaptureDevice.FocusMode.autoFocus](focusmode-swift.enum/autofocus.md) or [AVCaptureDevice.FocusMode.continuousAutoFocus](focusmode-swift.enum/continuousautofocus.md).

This property’s [CGPoint](../../corefoundation/cgpoint.md) value uses a coordinate system where `{0,0}` is the top-left of the picture area and `{1,1}` is the bottom-right. This coordinate system is always relative to a landscape device orientation with the home button on the right, regardless of the actual device orientation. You can convert between this coordinate system and view coordinates using [AVCaptureVideoPreviewLayer](../avcapturevideopreviewlayer.md) methods.

Before changing the value of this property, you must call [lockForConfiguration()](lockforconfiguration%28%29.md) to acquire exclusive access to the device’s configuration properties. Otherwise, setting the value of this property raises an exception. When you finish configuring the device, call [unlockForConfiguration()](unlockforconfiguration%28%29.md) to release the lock and allow other devices to configure the settings.

This property is key-value observable.

## See Also

### Setting a focus point of interest

- [isFocusPointOfInterestSupported](isfocuspointofinterestsupported.md): A Boolean value that indicates whether the device supports a point of interest for focus.

# focusPointOfInterest (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.7+ · tvOS 17.0+

The point of interest for focusing.

## Declaration

```objectivec
@property (nonatomic) CGPoint focusPointOfInterest;
```

<a id="Discussion"></a>

## Discussion

Setting a value for this property doesn’t initiate a focusing operation. To focus the camera on a point of interest, first set this property’s value, then set the [focusMode](focusmode-swift.property.md) property to [AVCaptureFocusModeAutoFocus](focusmode-swift.enum/autofocus.md) or [AVCaptureFocusModeContinuousAutoFocus](focusmode-swift.enum/continuousautofocus.md).

This property’s [CGPoint](../../corefoundation/cgpoint.md) value uses a coordinate system where `{0,0}` is the top-left of the picture area and `{1,1}` is the bottom-right. This coordinate system is always relative to a landscape device orientation with the home button on the right, regardless of the actual device orientation. You can convert between this coordinate system and view coordinates using [AVCaptureVideoPreviewLayer](../avcapturevideopreviewlayer.md) methods.

Before changing the value of this property, you must call [lockForConfiguration:](lockforconfiguration%28%29.md) to acquire exclusive access to the device’s configuration properties. Otherwise, setting the value of this property raises an exception. When you finish configuring the device, call [unlockForConfiguration](unlockforconfiguration%28%29.md) to release the lock and allow other devices to configure the settings.

This property is key-value observable.

## See Also

### Setting a focus point of interest

- [focusPointOfInterestSupported](isfocuspointofinterestsupported.md): A Boolean value that indicates whether the device supports a point of interest for focus.
