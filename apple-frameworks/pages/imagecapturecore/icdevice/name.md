> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icdevice/name](https://developer.apple.com/documentation/imagecapturecore/icdevice/name)

# name (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

The device’s name as reported by the device module, or if no device module is in control of this device, by the device transport.

## Declaration

```swift
var name: String? { get }
```

<a id="Discussion"></a>

## Discussion

## See Also

### Identifying a Device

- [productKind](productkind.md): The device’s type.
- [icon](icon.md): The device’s icon image.
- [uuidString](uuidstring.md): A string representation of the device’s universally unique identifier (UUID).
- [persistentIDString](persistentidstring.md): A string representation of the device’s persistent ID.
- [serialNumberString](serialnumberstring.md): The device’s serial number.

# name (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

The device’s name as reported by the device module, or if no device module is in control of this device, by the device transport.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * name;
```

<a id="Discussion"></a>

## Discussion

## See Also

### Identifying a Device

- [productKind](productkind.md): The device’s type.
- [icon](icon.md): The device’s icon image.
- [UUIDString](uuidstring.md): A string representation of the device’s universally unique identifier (UUID).
- [persistentIDString](persistentidstring.md): A string representation of the device’s persistent ID.
- [serialNumberString](serialnumberstring.md): The device’s serial number.
