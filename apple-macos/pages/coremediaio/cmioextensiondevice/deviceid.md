> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremediaio/cmioextensiondevice/deviceid

# deviceID (Swift)

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

A universally unique device identifier value.

## Declaration

```swift
var deviceID: UUID { get }
```

## See Also

### Identifying a Device

- [localizedName](localizedname.md): A localized name for a device.
- [legacyDeviceID](legacydeviceid.md): A legacy device identifier.

# deviceID (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

A universally unique device identifier value.

## Declaration

```objectivec
@property (atomic, copy, readonly) NSUUID * deviceID;
```

## See Also

### Identifying a Device

- [localizedName](localizedname.md): A localized name for a device.
- [legacyDeviceID](legacydeviceid.md): A legacy device identifier.
