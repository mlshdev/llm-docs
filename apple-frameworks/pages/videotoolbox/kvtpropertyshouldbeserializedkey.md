> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtpropertyshouldbeserializedkey](https://developer.apple.com/documentation/videotoolbox/kvtpropertyshouldbeserializedkey)

# kVTPropertyShouldBeSerializedKey (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

Dictionary key to access the serializable status of a property.

## Declaration

```swift
let kVTPropertyShouldBeSerializedKey: CFString
```

<a id="Discussion"></a>

## Discussion

The associated value is a [CFBoolean](../corefoundation/cfboolean.md). The default value is `false`.

## See Also

### Properties

- [kVTPropertyTypeKey](kvtpropertytypekey.md): Dictionary key used to access the property type.
- [Property Type Constants](property-type-constants.md): Supported constant values for `kVTPropertyTypeKey`.
- [kVTPropertyReadWriteStatusKey](kvtpropertyreadwritestatuskey.md): Dictionary key to access the read/write status of a property.
- [Read/Write Status Constants](read-write-status-constants.md): Supported constant values for `kVTPropertyReadWriteStatusKey`.
- [kVTPropertySupportedValueListKey](kvtpropertysupportedvaluelistkey.md): Dictionary key to access the array of of supported values.
- [kVTPropertySupportedValueMaximumKey](kvtpropertysupportedvaluemaximumkey.md): Dictionary key to access the maximum value of a property.
- [kVTPropertySupportedValueMinimumKey](kvtpropertysupportedvalueminimumkey.md): Dictionary key to access the minimum value of a property.
- [kVTPropertyDocumentationKey](kvtpropertydocumentationkey.md): Dictionary key to access any documentation intended for developers only.

# kVTPropertyShouldBeSerializedKey (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

Dictionary key to access the serializable status of a property.

## Declaration

```objectivec
extern CFStringRef const kVTPropertyShouldBeSerializedKey;
```

<a id="Discussion"></a>

## Discussion

The associated value is a [CFBooleanRef](../corefoundation/cfboolean.md). The default value is `false`.

## See Also

### Properties

- [kVTPropertyTypeKey](kvtpropertytypekey.md): Dictionary key used to access the property type.
- [Property Type Constants](property-type-constants.md): Supported constant values for `kVTPropertyTypeKey`.
- [kVTPropertyReadWriteStatusKey](kvtpropertyreadwritestatuskey.md): Dictionary key to access the read/write status of a property.
- [Read/Write Status Constants](read-write-status-constants.md): Supported constant values for `kVTPropertyReadWriteStatusKey`.
- [kVTPropertySupportedValueListKey](kvtpropertysupportedvaluelistkey.md): Dictionary key to access the array of of supported values.
- [kVTPropertySupportedValueMaximumKey](kvtpropertysupportedvaluemaximumkey.md): Dictionary key to access the maximum value of a property.
- [kVTPropertySupportedValueMinimumKey](kvtpropertysupportedvalueminimumkey.md): Dictionary key to access the minimum value of a property.
- [kVTPropertyDocumentationKey](kvtpropertydocumentationkey.md): Dictionary key to access any documentation intended for developers only.
