> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icdevicebrowser/preferreddevice](https://developer.apple.com/documentation/imagecapturecore/icdevicebrowser/preferreddevice)

# preferredDevice (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** macOS 10.4+

Returns a device object that the client application should select when it launches.

## Declaration

```swift
var preferredDevice: ICDevice? { get }
```

<a id="Discussion"></a>

## Discussion

If the client application that calls this method is the autolaunch application associated with a device, and that device is the last one attached (through USB, FireWire, or network), then that device is the preferred device.

Call this method in the implementation of [deviceBrowser(\_:didAdd:moreComing:)](../icdevicebrowserdelegate/devicebrowser%28__didadd_morecoming_%29.md) if the value of `moreComing` is `false`; or in the implementation of [deviceBrowserDidEnumerateLocalDevices(\_:)](../icdevicebrowserdelegate/devicebrowserdidenumeratelocaldevices%28__%29.md).

# preferredDevice (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** macOS 10.4+

Returns a device object that the client application should select when it launches.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) ICDevice * preferredDevice;
```

<a id="Discussion"></a>

## Discussion

If the client application that calls this method is the autolaunch application associated with a device, and that device is the last one attached (through USB, FireWire, or network), then that device is the preferred device.

Call this method in the implementation of [deviceBrowser:didAddDevice:moreComing:](../icdevicebrowserdelegate/devicebrowser%28__didadd_morecoming_%29.md) if the value of `moreComing` is `false`; or in the implementation of [deviceBrowserDidEnumerateLocalDevices:](../icdevicebrowserdelegate/devicebrowserdidenumeratelocaldevices%28__%29.md).
