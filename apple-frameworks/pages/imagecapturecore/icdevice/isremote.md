> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icdevice/isremote](https://developer.apple.com/documentation/imagecapturecore/icdevice/isremote)

# isRemote (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** macOS 10.4+

A Boolean value indicating whether the device is published by the Image Capture device-sharing facility.

## Declaration

```swift
var isRemote: Bool { get }
```

## See Also

### Configuring a Device’s Characteristics

- [userData](userdata.md): A bookkeeping object for client convenience.
- [autolaunchApplicationPath](autolaunchapplicationpath.md): The file system path of an application to launch automatically when this device is added.

# remote (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** macOS 10.4+

A Boolean value indicating whether the device is published by the Image Capture device-sharing facility.

## Declaration

```objectivec
@property (readonly, getter=isRemote) BOOL remote;
```

## See Also

### Configuring a Device’s Characteristics

- [userData](userdata.md): A bookkeeping object for client convenience.
- [autolaunchApplicationPath](autolaunchapplicationpath.md): The file system path of an application to launch automatically when this device is added.
