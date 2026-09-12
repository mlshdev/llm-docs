> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icdevice/productkind](https://developer.apple.com/documentation/imagecapturecore/icdevice/productkind)

# productKind (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

The device’s type.

## Declaration

```swift
var productKind: String? { get }
```

<a id="Discussion"></a>

## Discussion

Possible values are `"iPhone"`, `"iPod"`, and `"Camera"`.

## See Also

### Identifying a Device

- [name](name.md): The device’s name as reported by the device module, or if no device module is in control of this device, by the device transport.
- [icon](icon.md): The device’s icon image.
- [uuidString](uuidstring.md): A string representation of the device’s universally unique identifier (UUID).
- [persistentIDString](persistentidstring.md): A string representation of the device’s persistent ID.
- [serialNumberString](serialnumberstring.md): The device’s serial number.

# productKind (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

The device’s type.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * productKind;
```

<a id="Discussion"></a>

## Discussion

Possible values are `"iPhone"`, `"iPod"`, and `"Camera"`.

## See Also

### Identifying a Device

- [name](name.md): The device’s name as reported by the device module, or if no device module is in control of this device, by the device transport.
- [icon](icon.md): The device’s icon image.
- [UUIDString](uuidstring.md): A string representation of the device’s universally unique identifier (UUID).
- [persistentIDString](persistentidstring.md): A string representation of the device’s persistent ID.
- [serialNumberString](serialnumberstring.md): The device’s serial number.
