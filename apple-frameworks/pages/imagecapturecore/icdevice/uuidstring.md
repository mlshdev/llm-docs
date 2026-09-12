> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icdevice/uuidstring](https://developer.apple.com/documentation/imagecapturecore/icdevice/uuidstring)

# uuidString (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

A string representation of the device’s universally unique identifier (UUID).

## Declaration

```swift
var uuidString: String? { get }
```

## See Also

### Identifying a Device

- [name](name.md): The device’s name as reported by the device module, or if no device module is in control of this device, by the device transport.
- [productKind](productkind.md): The device’s type.
- [icon](icon.md): The device’s icon image.
- [persistentIDString](persistentidstring.md): A string representation of the device’s persistent ID.
- [serialNumberString](serialnumberstring.md): The device’s serial number.

# UUIDString (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

A string representation of the device’s universally unique identifier (UUID).

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * UUIDString;
```

## See Also

### Identifying a Device

- [name](name.md): The device’s name as reported by the device module, or if no device module is in control of this device, by the device transport.
- [productKind](productkind.md): The device’s type.
- [icon](icon.md): The device’s icon image.
- [persistentIDString](persistentidstring.md): A string representation of the device’s persistent ID.
- [serialNumberString](serialnumberstring.md): The device’s serial number.
