> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmcharacteristictypelabelindex](https://developer.apple.com/documentation/homekit/hmcharacteristictypelabelindex)

# HMCharacteristicTypeLabelIndex (Swift)

**Framework:** HomeKit  
**Kind:** Global Variable  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 10.3+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 3.2+

The index of the label for the service on an accessory with multiple instances of the same service.

## Declaration

```swift
let HMCharacteristicTypeLabelIndex: String
```

<a id="Discussion"></a>

## Discussion

The corresponding value is an integer that’s greater than or equal to `1`. When the value for the label namespace characteristic is [HMCharacteristicValueLabelNamespace.dot](hmcharacteristicvaluelabelnamespace/dot.md), the label index indicates the number of dots, like `.`, `..`, `...`, and so on. When the value for the label namespace characteristic is [HMCharacteristicValueLabelNamespace.numeral](hmcharacteristicvaluelabelnamespace/numeral.md), the label index indicates the arabic numeral, like `1`, `2`, `3`, and so on.

## See Also

### Accessory identification

- [HMCharacteristicTypeName](hmcharacteristictypename.md): The name of the accessory.
- [HMCharacteristicTypeIdentify](hmcharacteristictypeidentify.md): A control you can use to ask the accessory to identify itself.
- [HMCharacteristicTypeVersion](hmcharacteristictypeversion.md): The version of the accessory.
- [HMCharacteristicTypeLogs](hmcharacteristictypelogs.md): Log data for the accessory.
- [HMCharacteristicTypeAdminOnlyAccess](hmcharacteristictypeadminonlyaccess.md): An indicator of whether the accessory accepts only administrator access.
- [HMCharacteristicTypeHardwareVersion](hmcharacteristictypehardwareversion.md): The hardware version of the accessory.
- [HMCharacteristicTypeSoftwareVersion](hmcharacteristictypesoftwareversion.md): The software version of the accessory.
- [HMCharacteristicTypeLabelNamespace](hmcharacteristictypelabelnamespace.md): The naming schema used to label the services on an accessory with multiple services of the same type.
- [HMCharacteristicTypeActiveIdentifier](hmcharacteristictypeactiveidentifier.md): An index that maps to the current active Input Source service.
- [HMCharacteristicTypeIdentifier](hmcharacteristictypeidentifier.md): The identifier for an accessory.
- [HMCharacteristicTypeInputDeviceType](hmcharacteristictypeinputdevicetype.md): The accessory input device type.
- [HMCharacteristicTypeInputSourceType](hmcharacteristictypeinputsourcetype.md): The accessory input source type.
- [HMCharacteristicTypeConfiguredName](hmcharacteristictypeconfiguredname.md): A `UTF‑8` encoded user visible name on an accessory.

# HMCharacteristicTypeLabelIndex (Objective-C)

**Framework:** HomeKit  
**Kind:** Global Variable  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 14.0+ · tvOS 10.2+ · visionOS 1.0+ · watchOS 3.2+

The index of the label for the service on an accessory with multiple instances of the same service.

## Declaration

```objectivec
extern NSString * const HMCharacteristicTypeLabelIndex;
```

<a id="Discussion"></a>

## Discussion

The corresponding value is an integer that’s greater than or equal to `1`. When the value for the label namespace characteristic is [HMCharacteristicValueLabelNamespaceDot](hmcharacteristicvaluelabelnamespace/dot.md), the label index indicates the number of dots, like `.`, `..`, `...`, and so on. When the value for the label namespace characteristic is [HMCharacteristicValueLabelNamespaceNumeral](hmcharacteristicvaluelabelnamespace/numeral.md), the label index indicates the arabic numeral, like `1`, `2`, `3`, and so on.

## See Also

### Accessory identification

- [HMCharacteristicTypeName](hmcharacteristictypename.md): The name of the accessory.
- [HMCharacteristicTypeIdentify](hmcharacteristictypeidentify.md): A control you can use to ask the accessory to identify itself.
- [HMCharacteristicTypeVersion](hmcharacteristictypeversion.md): The version of the accessory.
- [HMCharacteristicTypeLogs](hmcharacteristictypelogs.md): Log data for the accessory.
- [HMCharacteristicTypeAdminOnlyAccess](hmcharacteristictypeadminonlyaccess.md): An indicator of whether the accessory accepts only administrator access.
- [HMCharacteristicTypeHardwareVersion](hmcharacteristictypehardwareversion.md): The hardware version of the accessory.
- [HMCharacteristicTypeSoftwareVersion](hmcharacteristictypesoftwareversion.md): The software version of the accessory.
- [HMCharacteristicTypeLabelNamespace](hmcharacteristictypelabelnamespace.md): The naming schema used to label the services on an accessory with multiple services of the same type.
- [HMCharacteristicTypeActiveIdentifier](hmcharacteristictypeactiveidentifier.md): An index that maps to the current active Input Source service.
- [HMCharacteristicTypeIdentifier](hmcharacteristictypeidentifier.md): The identifier for an accessory.
- [HMCharacteristicTypeInputDeviceType](hmcharacteristictypeinputdevicetype.md): The accessory input device type.
- [HMCharacteristicTypeInputSourceType](hmcharacteristictypeinputsourcetype.md): The accessory input source type.
- [HMCharacteristicTypeConfiguredName](hmcharacteristictypeconfiguredname.md): A `UTF‑8` encoded user visible name on an accessory.
