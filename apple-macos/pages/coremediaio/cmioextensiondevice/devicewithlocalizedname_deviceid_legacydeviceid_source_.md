> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensiondevice/devicewithlocalizedname:deviceid:legacydeviceid:source:](https://developer.apple.com/documentation/coremediaio/cmioextensiondevice/devicewithlocalizedname:deviceid:legacydeviceid:source:)

# deviceWithLocalizedName:deviceID:legacyDeviceID:source:

**Interface language:** Objective-C

**Framework:** Core Media I/O  
**Kind:** Type Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Returns a new extension device with an optional legacy device identifier.

## Declaration

```objectivec
+ (instancetype) deviceWithLocalizedName:(NSString *) localizedName deviceID:(NSUUID *) deviceID legacyDeviceID:(NSString *) legacyDeviceID source:(id<CMIOExtensionDeviceSource>) source;
```

## Parameters

- `localizedName`: A localized name for the device.
- `deviceID`: A universally unique device identifier value.
- `legacyDeviceID`: A string device identifier for backward compatibility with existing CMIO DAL clients. The value you provide can differ from the value of `deviceID.UUIDString`.

  Set this argument to `nil` if your device has no backward-compatibility requirements.
- `source`: An extension-specific object that conforms to the [CMIOExtensionDeviceSource](../cmioextensiondevicesource.md) protocol.

<a id="return-value"></a>

## Return Value

A new device instance.

## See Also

### Creating a Device

- [deviceWithLocalizedName:deviceID:source:](devicewithlocalizedname_deviceid_source_.md): Returns a new extension device.
- [initWithLocalizedName:deviceID:source:](init%28localizedname_deviceid_source_%29.md): Creates an extension device.
- [initWithLocalizedName:deviceID:legacyDeviceID:source:](init%28localizedname_deviceid_legacydeviceid_source_%29.md): Creates an extension device with an optional legacy device identifier.
