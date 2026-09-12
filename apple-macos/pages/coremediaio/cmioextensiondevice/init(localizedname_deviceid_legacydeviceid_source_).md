> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensiondevice/init(localizedname:deviceid:legacydeviceid:source:)](https://developer.apple.com/documentation/coremediaio/cmioextensiondevice/init(localizedname:deviceid:legacydeviceid:source:))

# init(localizedName:deviceID:legacyDeviceID:source:) (Swift)

**Framework:** Core Media I/O  
**Kind:** Initializer  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Creates an extension device with an optional legacy device identifier.

## Declaration

```swift
init(localizedName: String, deviceID: UUID, legacyDeviceID: String?, source: any CMIOExtensionDeviceSource)
```

## Parameters

- `localizedName`: A localized name for the device.
- `deviceID`: A universally unique device identifier value.
- `legacyDeviceID`: A string device identifier for backward compatibility with existing CMIO DAL clients. The value you provide can differ from the value of `deviceID.UUIDString`.

  Set this argument to `nil` if your device has no backward-compatibility requirements.
- `source`: An extension-specific object that conforms to the [CMIOExtensionDeviceSource](../cmioextensiondevicesource.md) protocol.

## See Also

### Creating a Device

- [init(localizedName:deviceID:source:)](init%28localizedname_deviceid_source_%29.md): Creates an extension device.

# initWithLocalizedName:deviceID:legacyDeviceID:source: (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Creates an extension device with an optional legacy device identifier.

## Declaration

```objectivec
- (instancetype) initWithLocalizedName:(NSString *) localizedName deviceID:(NSUUID *) deviceID legacyDeviceID:(NSString *) legacyDeviceID source:(id<CMIOExtensionDeviceSource>) source;
```

## Parameters

- `localizedName`: A localized name for the device.
- `deviceID`: A universally unique device identifier value.
- `legacyDeviceID`: A string device identifier for backward compatibility with existing CMIO DAL clients. The value you provide can differ from the value of `deviceID.UUIDString`.

  Set this argument to `nil` if your device has no backward-compatibility requirements.
- `source`: An extension-specific object that conforms to the [CMIOExtensionDeviceSource](../cmioextensiondevicesource.md) protocol.

## See Also

### Creating a Device

- [deviceWithLocalizedName:deviceID:source:](devicewithlocalizedname_deviceid_source_.md): Returns a new extension device.
- [deviceWithLocalizedName:deviceID:legacyDeviceID:source:](devicewithlocalizedname_deviceid_legacydeviceid_source_.md): Returns a new extension device with an optional legacy device identifier.
- [initWithLocalizedName:deviceID:source:](init%28localizedname_deviceid_source_%29.md): Creates an extension device.
