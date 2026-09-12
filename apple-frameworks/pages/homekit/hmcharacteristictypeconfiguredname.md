> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmcharacteristictypeconfiguredname](https://developer.apple.com/documentation/homekit/hmcharacteristictypeconfiguredname)

# HMCharacteristicTypeConfiguredName (Swift)

**Framework:** HomeKit  
**Kind:** Global Variable  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A `UTF‑8` encoded user visible name on an accessory.

## Declaration

```swift
let HMCharacteristicTypeConfiguredName: String
```

<a id="Overview"></a>

## Overview

The `HMCharacteristicTypeConfiguredName` must not be defined as an empty string unless you define a nonempty `HMCharacteristicTypeName`. The initial value will be the current or default name that is set on the television. `HMCharacteristicTypeConfiguredName` is an editable text from either the accessory or the controller. When it’s an empty string, use [HMCharacteristicTypeName](hmcharacteristictypename.md) as the name for this input source.

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
- [HMCharacteristicTypeActiveIdentifier](hmcharacteristictypeactiveidentifier.md): An index that maps to the current active Input Source service.
- [HMCharacteristicTypeIdentifier](hmcharacteristictypeidentifier.md): The identifier for an accessory.
- [HMCharacteristicTypeInputDeviceType](hmcharacteristictypeinputdevicetype.md): The accessory input device type.
- [HMCharacteristicTypeInputSourceType](hmcharacteristictypeinputsourcetype.md): The accessory input source type.

# HMCharacteristicTypeConfiguredName (Objective-C)

**Framework:** HomeKit  
**Kind:** Global Variable  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A `UTF‑8` encoded user visible name on an accessory.

## Declaration

```objectivec
extern NSString * const HMCharacteristicTypeConfiguredName;
```

<a id="Overview"></a>

## Overview

The `HMCharacteristicTypeConfiguredName` must not be defined as an empty string unless you define a nonempty `HMCharacteristicTypeName`. The initial value will be the current or default name that is set on the television. `HMCharacteristicTypeConfiguredName` is an editable text from either the accessory or the controller. When it’s an empty string, use [HMCharacteristicTypeName](hmcharacteristictypename.md) as the name for this input source.

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
- [HMCharacteristicTypeActiveIdentifier](hmcharacteristictypeactiveidentifier.md): An index that maps to the current active Input Source service.
- [HMCharacteristicTypeIdentifier](hmcharacteristictypeidentifier.md): The identifier for an accessory.
- [HMCharacteristicTypeInputDeviceType](hmcharacteristictypeinputdevicetype.md): The accessory input device type.
- [HMCharacteristicTypeInputSourceType](hmcharacteristictypeinputsourcetype.md): The accessory input source type.
