> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icdevice/persistentidstring](https://developer.apple.com/documentation/imagecapturecore/icdevice/persistentidstring)

# persistentIDString (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** macOS 10.4+

A string representation of the device’s persistent ID.

## Declaration

```swift
var persistentIDString: String? { get }
```

## See Also

### Identifying a Device

- [name](name.md): The device’s name as reported by the device module, or if no device module is in control of this device, by the device transport.
- [productKind](productkind.md): The device’s type.
- [icon](icon.md): The device’s icon image.
- [uuidString](uuidstring.md): A string representation of the device’s universally unique identifier (UUID).
- [serialNumberString](serialnumberstring.md): The device’s serial number.

# persistentIDString (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** macOS 10.4+

A string representation of the device’s persistent ID.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSString * persistentIDString;
```

## See Also

### Identifying a Device

- [name](name.md): The device’s name as reported by the device module, or if no device module is in control of this device, by the device transport.
- [productKind](productkind.md): The device’s type.
- [icon](icon.md): The device’s icon image.
- [UUIDString](uuidstring.md): A string representation of the device’s universally unique identifier (UUID).
- [serialNumberString](serialnumberstring.md): The device’s serial number.
