> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkobjecttype/characteristictype(foridentifier:)](https://developer.apple.com/documentation/healthkit/hkobjecttype/characteristictype(foridentifier:))

# characteristicType(forIdentifier:) (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 27.0) · iPadOS 8.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 13.0+ · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Returns the shared characteristic type for the provided identifier.

## Declaration

```swift
class func characteristicType(forIdentifier identifier: HKCharacteristicTypeIdentifier) -> HKCharacteristicType?
```

## Parameters

- `identifier`: A characteristic type identifier. For a list of valid identifiers, see [HKCharacteristicTypeIdentifier](../hkcharacteristictypeidentifier.md).

<a id="return-value"></a>

## Return Value

The shared `HKCharacteristicType` instance based on the provided identifier.

<a id="Discussion"></a>

## Discussion

This method returns an instance of the [HKCharacteristicType](../hkcharacteristictype.md) concrete subclass. Characteristic types represent data that doesn’t typically change over time. Unlike the other object types, characteristic types cannot be used to create new HealthKit objects. Instead, users must enter and edit their characteristic data using the Health app. Characteristic types are used only when asking for permission to read data from the HealthKit store.

## See Also

### Creating characteristic types

- [HKCharacteristicTypeIdentifier](../hkcharacteristictypeidentifier.md): The identifiers that create characteristic type objects.

# characteristicTypeForIdentifier: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the shared characteristic type for the provided identifier.

## Declaration

```objectivec
+ (HKCharacteristicType *) characteristicTypeForIdentifier:(HKCharacteristicTypeIdentifier) identifier;
```

## Parameters

- `identifier`: A characteristic type identifier. For a list of valid identifiers, see [HKCharacteristicTypeIdentifier](../hkcharacteristictypeidentifier.md).

<a id="return-value"></a>

## Return Value

The shared `HKCharacteristicType` instance based on the provided identifier.

<a id="Discussion"></a>

## Discussion

This method returns an instance of the [HKCharacteristicType](../hkcharacteristictype.md) concrete subclass. Characteristic types represent data that doesn’t typically change over time. Unlike the other object types, characteristic types cannot be used to create new HealthKit objects. Instead, users must enter and edit their characteristic data using the Health app. Characteristic types are used only when asking for permission to read data from the HealthKit store.

## See Also

### Creating characteristic types

- [HKCharacteristicTypeIdentifier](../hkcharacteristictypeidentifier.md): The identifiers that create characteristic type objects.
