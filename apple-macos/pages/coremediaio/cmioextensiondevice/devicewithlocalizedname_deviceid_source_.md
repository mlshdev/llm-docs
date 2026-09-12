> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensiondevice/devicewithlocalizedname:deviceid:source:](https://developer.apple.com/documentation/coremediaio/cmioextensiondevice/devicewithlocalizedname:deviceid:source:)

# deviceWithLocalizedName:deviceID:source:

**Interface language:** Objective-C

**Framework:** Core Media I/O  
**Kind:** Type Method  
**Availability:** Mac Catalyst 15.4+ · macOS 10.7+

Returns a new extension device.

## Declaration

```objectivec
+ (instancetype) deviceWithLocalizedName:(NSString *) localizedName deviceID:(NSUUID *) deviceID source:(id<CMIOExtensionDeviceSource>) source;
```

## Parameters

- `localizedName`: A localized name for the device.
- `deviceID`: A universally unique device identifier value.
- `source`: An extension-specific object that conforms to the [CMIOExtensionDeviceSource](../cmioextensiondevicesource.md) protocol.

<a id="return-value"></a>

## Return Value

A new device instance.

## See Also

### Creating a Device

- [deviceWithLocalizedName:deviceID:legacyDeviceID:source:](devicewithlocalizedname_deviceid_legacydeviceid_source_.md): Returns a new extension device with an optional legacy device identifier.
- [initWithLocalizedName:deviceID:source:](init%28localizedname_deviceid_source_%29.md): Creates an extension device.
- [initWithLocalizedName:deviceID:legacyDeviceID:source:](init%28localizedname_deviceid_legacydeviceid_source_%29.md): Creates an extension device with an optional legacy device identifier.
