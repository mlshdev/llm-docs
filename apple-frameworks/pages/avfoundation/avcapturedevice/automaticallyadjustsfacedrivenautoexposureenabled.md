> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/automaticallyadjustsfacedrivenautoexposureenabled](https://developer.apple.com/documentation/avfoundation/avcapturedevice/automaticallyadjustsfacedrivenautoexposureenabled)

# automaticallyAdjustsFaceDrivenAutoExposureEnabled (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · tvOS 17.0+

A Boolean value that indicates whether the device automatically adjusts face-driven autoexposure.

## Declaration

```swift
var automaticallyAdjustsFaceDrivenAutoExposureEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property defaults to [true](https://developer.apple.com/documentation/swift/true) for devices that support autoexposure. If your app requires explicitly setting the state of [isFaceDrivenAutoExposureEnabled](isfacedrivenautoexposureenabled.md), set this value to [false](https://developer.apple.com/documentation/swift/false).

To set this property value, you must call the device’s [lockForConfiguration()](lockforconfiguration%28%29.md) method to obtain exclusive access to configure it. Otherwise, attempting to set a value raises an exception. When you finish configuring the device, call [unlockForConfiguration()](unlockforconfiguration%28%29.md) to release the lock.

## See Also

### Configuring face-driven automatic exposure

- [isFaceDrivenAutoExposureEnabled](isfacedrivenautoexposureenabled.md): A Boolean value that indicates whether the device has face-driven autoexposure enabled.

# automaticallyAdjustsFaceDrivenAutoExposureEnabled (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · tvOS 17.0+

A Boolean value that indicates whether the device automatically adjusts face-driven autoexposure.

## Declaration

```objectivec
@property (nonatomic) BOOL automaticallyAdjustsFaceDrivenAutoExposureEnabled;
```

<a id="Discussion"></a>

## Discussion

The value of this property defaults to [true](https://developer.apple.com/documentation/swift/true) for devices that support autoexposure. If your app requires explicitly setting the state of [faceDrivenAutoExposureEnabled](isfacedrivenautoexposureenabled.md), set this value to [false](https://developer.apple.com/documentation/swift/false).

To set this property value, you must call the device’s [lockForConfiguration:](lockforconfiguration%28%29.md) method to obtain exclusive access to configure it. Otherwise, attempting to set a value raises an exception. When you finish configuring the device, call [unlockForConfiguration](unlockforconfiguration%28%29.md) to release the lock.

## See Also

### Configuring face-driven automatic exposure

- [faceDrivenAutoExposureEnabled](isfacedrivenautoexposureenabled.md): A Boolean value that indicates whether the device has face-driven autoexposure enabled.
