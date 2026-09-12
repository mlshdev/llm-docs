> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icdevice/userdata](https://developer.apple.com/documentation/imagecapturecore/icdevice/userdata)

# userData (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

A bookkeeping object for client convenience.

## Declaration

```swift
var userData: NSMutableDictionary? { get }
```

## See Also

### Configuring a Device’s Characteristics

- [autolaunchApplicationPath](autolaunchapplicationpath.md): The file system path of an application to launch automatically when this device is added.
- [isRemote](isremote.md): A Boolean value indicating whether the device is published by the Image Capture device-sharing facility.

# userData (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

A bookkeeping object for client convenience.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSMutableDictionary * userData;
```

## See Also

### Configuring a Device’s Characteristics

- [autolaunchApplicationPath](autolaunchapplicationpath.md): The file system path of an application to launch automatically when this device is added.
- [remote](isremote.md): A Boolean value indicating whether the device is published by the Image Capture device-sharing facility.
