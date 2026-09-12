> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icdevice/icon](https://developer.apple.com/documentation/imagecapturecore/icdevice/icon)

# icon (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

The device’s icon image.

## Declaration

```swift
var icon: CGImage? { get }
```

## See Also

### Identifying a Device

- [name](name.md): The device’s name as reported by the device module, or if no device module is in control of this device, by the device transport.
- [productKind](productkind.md): The device’s type.
- [uuidString](uuidstring.md): A string representation of the device’s universally unique identifier (UUID).
- [persistentIDString](persistentidstring.md): A string representation of the device’s persistent ID.
- [serialNumberString](serialnumberstring.md): The device’s serial number.

# icon (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

The device’s icon image.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) CGImageRef icon;
```

## See Also

### Identifying a Device

- [name](name.md): The device’s name as reported by the device module, or if no device module is in control of this device, by the device transport.
- [productKind](productkind.md): The device’s type.
- [UUIDString](uuidstring.md): A string representation of the device’s universally unique identifier (UUID).
- [persistentIDString](persistentidstring.md): A string representation of the device’s persistent ID.
- [serialNumberString](serialnumberstring.md): The device’s serial number.
