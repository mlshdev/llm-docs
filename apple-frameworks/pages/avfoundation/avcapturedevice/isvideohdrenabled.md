> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/isvideohdrenabled](https://developer.apple.com/documentation/avfoundation/avcapturedevice/isvideohdrenabled)

# isVideoHDREnabled (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that indicates whether the device streams high dynamic range video buffers, also known as extended dynamic range (EDR).

## Declaration

```swift
var isVideoHDREnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The device ignores the value of this property when [activeColorSpace](activecolorspace.md) is HLG BT2020 color space because HDR is effectively always on and can’t be disabled.

Before changing the value of this property, you must call [lockForConfiguration()](lockforconfiguration%28%29.md) to acquire exclusive access to the device’s configuration properties. Otherwise, setting the value of this property raises an exception. When you finish configuring the device, call [unlockForConfiguration()](unlockforconfiguration%28%29.md) to release the lock and allow other devices to configure the settings.

Note that setting this property may cause a lengthy reconfiguration of the device, similar to setting a new active format or capture session preset. If you’re setting either the active format or the [sessionPreset](../avcapturesession/sessionpreset.md) *and* this property, you should bracket these operations with [beginConfiguration()](../avcapturesession/beginconfiguration%28%29.md) and session [commitConfiguration()](../avcapturesession/commitconfiguration%28%29.md) to minimize reconfiguration time.

This property is key-value observable.

## See Also

### Configuring HDR settings

- [automaticallyAdjustsVideoHDREnabled](automaticallyadjustsvideohdrenabled.md): A Boolean value that indicates whether the device automatically manages the state of high dynamic range (HDR) video streaming.

# videoHDREnabled (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that indicates whether the device streams high dynamic range video buffers, also known as extended dynamic range (EDR).

## Declaration

```objectivec
@property (nonatomic, getter=isVideoHDREnabled) BOOL videoHDREnabled;
```

<a id="Discussion"></a>

## Discussion

The device ignores the value of this property when [activeColorSpace](activecolorspace.md) is HLG BT2020 color space because HDR is effectively always on and can’t be disabled.

Before changing the value of this property, you must call [lockForConfiguration:](lockforconfiguration%28%29.md) to acquire exclusive access to the device’s configuration properties. Otherwise, setting the value of this property raises an exception. When you finish configuring the device, call [unlockForConfiguration](unlockforconfiguration%28%29.md) to release the lock and allow other devices to configure the settings.

Note that setting this property may cause a lengthy reconfiguration of the device, similar to setting a new active format or capture session preset. If you’re setting either the active format or the [sessionPreset](../avcapturesession/sessionpreset.md) *and* this property, you should bracket these operations with [beginConfiguration](../avcapturesession/beginconfiguration%28%29.md) and session [commitConfiguration](../avcapturesession/commitconfiguration%28%29.md) to minimize reconfiguration time.

This property is key-value observable.

## See Also

### Configuring HDR settings

- [automaticallyAdjustsVideoHDREnabled](automaticallyadjustsvideohdrenabled.md): A Boolean value that indicates whether the device automatically manages the state of high dynamic range (HDR) video streaming.
