> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmcharacteristictypeactiveidentifier](https://developer.apple.com/documentation/homekit/hmcharacteristictypeactiveidentifier)

# HMCharacteristicTypeActiveIdentifier (Swift)

**Framework:** HomeKit  
**Kind:** Global Variable  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

An index that maps to the current active Input Source service.

## Declaration

```swift
let HMCharacteristicTypeActiveIdentifier: String
```

<a id="discussion"></a>

## Discussion

This characteristic describes the current input source of a television by referencing the [HMServiceTypeInputSource](hmservicetypeinputsource.md). The Active Identifier characteristic’s value should be a valid value within the identifiers of the Input Source service instances linked to the television service. The value of the characteristic is a `UInt32` integer.

## See Also

### Accessory identification

- [HMCharacteristicTypeName](hmcharacteristictypename.md): The name of the accessory.
- [HMCharacteristicTypeIdentify](hmcharacteristictypeidentify.md): A control you can use to ask the accessory to identify itself.
- [HMCharacteristicTypeVersion](hmcharacteristictypeversion.md): The version of the accessory.
- [HMCharacteristicTypeLogs](hmcharacteristictypelogs.md): Log data for the accessory.
- [HMCharacteristicTypeAdminOnlyAccess](hmcharacteristictypeadminonlyaccess.md): An indicator of whether the accessory accepts only administrator access.
- [HMCharacteristicTypeHardwareVersion](hmcharacteristictypehardwareversion.md): The hardware version of the accessory.
- [HMCharacteristicTypeSoftwareVersion](hmcharacteristictypesoftwareversion.md): The software version of the accessory.
- [HMCharacteristicTypeLabelIndex](hmcharacteristictypelabelindex.md): The index of the label for the service on an accessory with multiple instances of the same service.
- [HMCharacteristicTypeLabelNamespace](hmcharacteristictypelabelnamespace.md): The naming schema used to label the services on an accessory with multiple services of the same type.
- [HMCharacteristicTypeIdentifier](hmcharacteristictypeidentifier.md): The identifier for an accessory.
- [HMCharacteristicTypeInputDeviceType](hmcharacteristictypeinputdevicetype.md): The accessory input device type.
- [HMCharacteristicTypeInputSourceType](hmcharacteristictypeinputsourcetype.md): The accessory input source type.
- [HMCharacteristicTypeConfiguredName](hmcharacteristictypeconfiguredname.md): A `UTF‑8` encoded user visible name on an accessory.

# HMCharacteristicTypeActiveIdentifier (Objective-C)

**Framework:** HomeKit  
**Kind:** Global Variable  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

An index that maps to the current active Input Source service.

## Declaration

```objectivec
extern NSString * const HMCharacteristicTypeActiveIdentifier;
```

<a id="discussion"></a>

## Discussion

This characteristic describes the current input source of a television by referencing the [HMServiceTypeInputSource](hmservicetypeinputsource.md). The Active Identifier characteristic’s value should be a valid value within the identifiers of the Input Source service instances linked to the television service. The value of the characteristic is a `UInt32` integer.

## See Also

### Accessory identification

- [HMCharacteristicTypeName](hmcharacteristictypename.md): The name of the accessory.
- [HMCharacteristicTypeIdentify](hmcharacteristictypeidentify.md): A control you can use to ask the accessory to identify itself.
- [HMCharacteristicTypeVersion](hmcharacteristictypeversion.md): The version of the accessory.
- [HMCharacteristicTypeLogs](hmcharacteristictypelogs.md): Log data for the accessory.
- [HMCharacteristicTypeAdminOnlyAccess](hmcharacteristictypeadminonlyaccess.md): An indicator of whether the accessory accepts only administrator access.
- [HMCharacteristicTypeHardwareVersion](hmcharacteristictypehardwareversion.md): The hardware version of the accessory.
- [HMCharacteristicTypeSoftwareVersion](hmcharacteristictypesoftwareversion.md): The software version of the accessory.
- [HMCharacteristicTypeLabelIndex](hmcharacteristictypelabelindex.md): The index of the label for the service on an accessory with multiple instances of the same service.
- [HMCharacteristicTypeLabelNamespace](hmcharacteristictypelabelnamespace.md): The naming schema used to label the services on an accessory with multiple services of the same type.
- [HMCharacteristicTypeIdentifier](hmcharacteristictypeidentifier.md): The identifier for an accessory.
- [HMCharacteristicTypeInputDeviceType](hmcharacteristictypeinputdevicetype.md): The accessory input device type.
- [HMCharacteristicTypeInputSourceType](hmcharacteristictypeinputsourcetype.md): The accessory input source type.
- [HMCharacteristicTypeConfiguredName](hmcharacteristictypeconfiguredname.md): A `UTF‑8` encoded user visible name on an accessory.
