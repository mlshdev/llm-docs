> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/imagecapturecore/icdevice/autolaunchapplicationpath

# autolaunchApplicationPath (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** macOS 10.4+

The file system path of an application to launch automatically when this device is added.

## Declaration

```swift
var autolaunchApplicationPath: String? { get set }
```

## See Also

### Configuring a Device’s Characteristics

- [userData](userdata.md): A bookkeeping object for client convenience.
- [isRemote](isremote.md): A Boolean value indicating whether the device is published by the Image Capture device-sharing facility.

# autolaunchApplicationPath (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** macOS 10.4+

The file system path of an application to launch automatically when this device is added.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSString * autolaunchApplicationPath;
```

## See Also

### Configuring a Device’s Characteristics

- [userData](userdata.md): A bookkeeping object for client convenience.
- [remote](isremote.md): A Boolean value indicating whether the device is published by the Image Capture device-sharing facility.
