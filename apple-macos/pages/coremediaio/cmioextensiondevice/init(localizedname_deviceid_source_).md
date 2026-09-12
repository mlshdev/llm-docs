> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensiondevice/init(localizedname:deviceid:source:)](https://developer.apple.com/documentation/coremediaio/cmioextensiondevice/init(localizedname:deviceid:source:))

# init(localizedName:deviceID:source:) (Swift)

**Framework:** Core Media I/O  
**Kind:** Initializer  
**Availability:** Mac Catalyst 15.4+ · macOS 10.7+

Creates an extension device.

## Declaration

```swift
convenience init(localizedName: String, deviceID: UUID, source: any CMIOExtensionDeviceSource)
```

## Parameters

- `localizedName`: A localized name for the device.
- `deviceID`: A universally unique device identifier value.
- `source`: An extension-specific object that conforms to the [CMIOExtensionDeviceSource](../cmioextensiondevicesource.md) protocol.

## See Also

### Creating a Device

- [init(localizedName:deviceID:legacyDeviceID:source:)](init%28localizedname_deviceid_legacydeviceid_source_%29.md): Creates an extension device with an optional legacy device identifier.

# initWithLocalizedName:deviceID:source: (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 15.4+

Creates an extension device.

## Declaration

```objectivec
- (instancetype) initWithLocalizedName:(NSString *) localizedName deviceID:(NSUUID *) deviceID source:(id<CMIOExtensionDeviceSource>) source;
```

## Parameters

- `localizedName`: A localized name for the device.
- `deviceID`: A universally unique device identifier value.
- `source`: An extension-specific object that conforms to the [CMIOExtensionDeviceSource](../cmioextensiondevicesource.md) protocol.

## See Also

### Creating a Device

- [deviceWithLocalizedName:deviceID:source:](devicewithlocalizedname_deviceid_source_.md): Returns a new extension device.
- [deviceWithLocalizedName:deviceID:legacyDeviceID:source:](devicewithlocalizedname_deviceid_legacydeviceid_source_.md): Returns a new extension device with an optional legacy device identifier.
- [initWithLocalizedName:deviceID:legacyDeviceID:source:](init%28localizedname_deviceid_legacydeviceid_source_%29.md): Creates an extension device with an optional legacy device identifier.
