> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icdevice/serialnumberstring](https://developer.apple.com/documentation/imagecapturecore/icdevice/serialnumberstring)

# serialNumberString (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** macOS 10.4+

The device’s serial number.

## Declaration

```swift
var serialNumberString: String? { get }
```

<a id="Discussion"></a>

## Discussion

## See Also

### Identifying a Device

- [name](name.md): The device’s name as reported by the device module, or if no device module is in control of this device, by the device transport.
- [productKind](productkind.md): The device’s type.
- [icon](icon.md): The device’s icon image.
- [uuidString](uuidstring.md): A string representation of the device’s universally unique identifier (UUID).
- [persistentIDString](persistentidstring.md): A string representation of the device’s persistent ID.

# serialNumberString (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** macOS 10.4+

The device’s serial number.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSString * serialNumberString;
```

<a id="Discussion"></a>

## Discussion

## See Also

### Identifying a Device

- [name](name.md): The device’s name as reported by the device module, or if no device module is in control of this device, by the device transport.
- [productKind](productkind.md): The device’s type.
- [icon](icon.md): The device’s icon image.
- [UUIDString](uuidstring.md): A string representation of the device’s universally unique identifier (UUID).
- [persistentIDString](persistentidstring.md): A string representation of the device’s persistent ID.
