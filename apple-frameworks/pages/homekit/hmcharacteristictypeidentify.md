> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmcharacteristictypeidentify](https://developer.apple.com/documentation/homekit/hmcharacteristictypeidentify)

# HMCharacteristicTypeIdentify (Swift)

**Framework:** HomeKit  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

A control you can use to ask the accessory to identify itself.

## Declaration

```swift
let HMCharacteristicTypeIdentify: String
```

<a id="Discussion"></a>

## Discussion

Use the corresponding write-only Boolean value to ask the accessory to identify itself in the physical world. The identification mechanism, if supported, is specific to the accessory. For example, a light bulb might change state briefly, flashing on or off, to indicate that it has received this command.

## See Also

### Accessory identification

- [HMCharacteristicTypeName](hmcharacteristictypename.md): The name of the accessory.
- [HMCharacteristicTypeVersion](hmcharacteristictypeversion.md): The version of the accessory.
- [HMCharacteristicTypeLogs](hmcharacteristictypelogs.md): Log data for the accessory.
- [HMCharacteristicTypeAdminOnlyAccess](hmcharacteristictypeadminonlyaccess.md): An indicator of whether the accessory accepts only administrator access.
- [HMCharacteristicTypeHardwareVersion](hmcharacteristictypehardwareversion.md): The hardware version of the accessory.
- [HMCharacteristicTypeSoftwareVersion](hmcharacteristictypesoftwareversion.md): The software version of the accessory.
- [HMCharacteristicTypeLabelIndex](hmcharacteristictypelabelindex.md): The index of the label for the service on an accessory with multiple instances of the same service.
- [HMCharacteristicTypeLabelNamespace](hmcharacteristictypelabelnamespace.md): The naming schema used to label the services on an accessory with multiple services of the same type.
- [HMCharacteristicTypeActiveIdentifier](hmcharacteristictypeactiveidentifier.md): An index that maps to the current active Input Source service.
- [HMCharacteristicTypeIdentifier](hmcharacteristictypeidentifier.md): The identifier for an accessory.
- [HMCharacteristicTypeInputDeviceType](hmcharacteristictypeinputdevicetype.md): The accessory input device type.
- [HMCharacteristicTypeInputSourceType](hmcharacteristictypeinputsourcetype.md): The accessory input source type.
- [HMCharacteristicTypeConfiguredName](hmcharacteristictypeconfiguredname.md): A `UTF‑8` encoded user visible name on an accessory.

# HMCharacteristicTypeIdentify (Objective-C)

**Framework:** HomeKit  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

A control you can use to ask the accessory to identify itself.

## Declaration

```objectivec
extern NSString * const HMCharacteristicTypeIdentify;
```

<a id="Discussion"></a>

## Discussion

Use the corresponding write-only Boolean value to ask the accessory to identify itself in the physical world. The identification mechanism, if supported, is specific to the accessory. For example, a light bulb might change state briefly, flashing on or off, to indicate that it has received this command.

## See Also

### Accessory identification

- [HMCharacteristicTypeName](hmcharacteristictypename.md): The name of the accessory.
- [HMCharacteristicTypeVersion](hmcharacteristictypeversion.md): The version of the accessory.
- [HMCharacteristicTypeLogs](hmcharacteristictypelogs.md): Log data for the accessory.
- [HMCharacteristicTypeAdminOnlyAccess](hmcharacteristictypeadminonlyaccess.md): An indicator of whether the accessory accepts only administrator access.
- [HMCharacteristicTypeHardwareVersion](hmcharacteristictypehardwareversion.md): The hardware version of the accessory.
- [HMCharacteristicTypeSoftwareVersion](hmcharacteristictypesoftwareversion.md): The software version of the accessory.
- [HMCharacteristicTypeLabelIndex](hmcharacteristictypelabelindex.md): The index of the label for the service on an accessory with multiple instances of the same service.
- [HMCharacteristicTypeLabelNamespace](hmcharacteristictypelabelnamespace.md): The naming schema used to label the services on an accessory with multiple services of the same type.
- [HMCharacteristicTypeActiveIdentifier](hmcharacteristictypeactiveidentifier.md): An index that maps to the current active Input Source service.
- [HMCharacteristicTypeIdentifier](hmcharacteristictypeidentifier.md): The identifier for an accessory.
- [HMCharacteristicTypeInputDeviceType](hmcharacteristictypeinputdevicetype.md): The accessory input device type.
- [HMCharacteristicTypeInputSourceType](hmcharacteristictypeinputsourcetype.md): The accessory input source type.
- [HMCharacteristicTypeConfiguredName](hmcharacteristictypeconfiguredname.md): A `UTF‑8` encoded user visible name on an accessory.
