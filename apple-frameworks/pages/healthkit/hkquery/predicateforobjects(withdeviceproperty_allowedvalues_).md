> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquery/predicateforobjects(withdeviceproperty:allowedvalues:)](https://developer.apple.com/documentation/healthkit/hkquery/predicateforobjects(withdeviceproperty:allowedvalues:))

# predicateForObjects(withDeviceProperty:allowedValues:) (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a predicate that matches all objects created by devices with the specified properties.

## Declaration

```swift
class func predicateForObjects(withDeviceProperty key: String, allowedValues: Set<String>) -> NSPredicate
```

## Parameters

- `key`: A string specifying the device’s property. For a list of valid keys, see Valid Device Property Keys.
- `allowedValues`: A set of strings. These strings represent the target property values.

<a id="return-value"></a>

## Return Value

A predicate that matches all objects created by a device whose specified property matches one of the allowed values.

<a id="Discussion"></a>

## Discussion

Use this convenience method to create a predicate that finds all the objects saved by matching devices. These predicates let you match multiple values for a single property. For example, you can create a single predicate that matches a number of different `manufacturer` values.

The following sample shows how to create a predicate that matches a list of device model names.

**Swift**

```swift
let fromDevices = HKQuery.predicateForObjectsWithDeviceProperty(HKDevicePropertyKeyModel, allowedValues:modelNames)
```

**Objective-C**

```objc
NSPredicate *fromDevices = [HKQuery predicateForObjectsWithDeviceProperty:HKDevicePropertyKeyModel allowedValues:modelNames];
```

## Topics

### Valid Device Property Keys

Use these keys to create predicates that match the specified device property.

- [HKDevicePropertyKeyName](../hkdevicepropertykeyname.md): The device’s name.
- [HKDevicePropertyKeyManufacturer](../hkdevicepropertykeymanufacturer.md): The device’s manufacturer.
- [HKDevicePropertyKeyModel](../hkdevicepropertykeymodel.md): The device’s model.
- [HKDevicePropertyKeyHardwareVersion](../hkdevicepropertykeyhardwareversion.md): The device’s hardware version.
- [HKDevicePropertyKeyFirmwareVersion](../hkdevicepropertykeyfirmwareversion.md): The device’s firmware version.
- [HKDevicePropertyKeySoftwareVersion](../hkdevicepropertykeysoftwareversion.md): The device’s software version.
- [HKDevicePropertyKeyLocalIdentifier](../hkdevicepropertykeylocalidentifier.md): A unique identifier for the device on the hardware running the app. For more information, see [localIdentifier](../hkdevice/localidentifier.md).
- [HKDevicePropertyKeyUDIDeviceIdentifier](../hkdevicepropertykeyudideviceidentifier.md): The device’s UDI Device Identifier.

## See Also

### Creating object predicates

- [predicateForObject(with:)](predicateforobject%28with_%29.md): Returns a predicate that matches an object with the specified universally unique identifier (UUID).
- [predicateForObjects(with:)](predicateforobjects%28with_%29.md): Returns a predicate that matches the objects with the specified universally unique identifiers (UUIDs).
- [predicateForObjects(from:)](predicateforobjects%28from_%29-7j3p2.md): Returns a predicate that matches all the objects that were created by the provided source.
- [predicateForObjects(from:)](predicateforobjects%28from_%29-89b4t.md): Returns a predicate that matches all the objects that were created by any of the provided sources.
- [predicateForObjects(from:)](predicateforobjects%28from_%29-9h87f.md): Returns a predicate that matches all the objects that were created by any of the provided devices.
- [predicateForObjects(from:)](predicateforobjects%28from_%29-1ar4g.md): Returns a predicate that matches all the objects that were created by any of the provided source revisions.
- [predicateForObjects(withMetadataKey:)](predicateforobjects%28withmetadatakey_%29.md): Returns a predicate that matches any object whose metadata contains the provided key.
- [predicateForObjects(withMetadataKey:allowedValues:)](predicateforobjects%28withmetadatakey_allowedvalues_%29.md): Returns a predicate that matches objects based on the provided metadata key and an array of target values.
- [predicateForObjects(withMetadataKey:operatorType:value:)](predicateforobjects%28withmetadatakey_operatortype_value_%29.md): Returns a predicate that matches objects based on the provided metadata key, value, and operator.
- [predicateForObjectsWithNoCorrelation()](predicateforobjectswithnocorrelation%28%29.md): Returns a predicate that matches all objects that are not associated with a HealthKit correlation.

# predicateForObjectsWithDeviceProperty:allowedValues: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a predicate that matches all objects created by devices with the specified properties.

## Declaration

```objectivec
+ (NSPredicate *) predicateForObjectsWithDeviceProperty:(NSString *) key allowedValues:(NSSet<NSString *> *) allowedValues;
```

## Parameters

- `key`: A string specifying the device’s property. For a list of valid keys, see Valid Device Property Keys.
- `allowedValues`: A set of strings. These strings represent the target property values.

<a id="return-value"></a>

## Return Value

A predicate that matches all objects created by a device whose specified property matches one of the allowed values.

<a id="Discussion"></a>

## Discussion

Use this convenience method to create a predicate that finds all the objects saved by matching devices. These predicates let you match multiple values for a single property. For example, you can create a single predicate that matches a number of different `manufacturer` values.

The following sample shows how to create a predicate that matches a list of device model names.

**Swift**

```swift
let fromDevices = HKQuery.predicateForObjectsWithDeviceProperty(HKDevicePropertyKeyModel, allowedValues:modelNames)
```

**Objective-C**

```objc
NSPredicate *fromDevices = [HKQuery predicateForObjectsWithDeviceProperty:HKDevicePropertyKeyModel allowedValues:modelNames];
```

## Topics

### Valid Device Property Keys

Use these keys to create predicates that match the specified device property.

- [HKDevicePropertyKeyName](../hkdevicepropertykeyname.md): The device’s name.
- [HKDevicePropertyKeyManufacturer](../hkdevicepropertykeymanufacturer.md): The device’s manufacturer.
- [HKDevicePropertyKeyModel](../hkdevicepropertykeymodel.md): The device’s model.
- [HKDevicePropertyKeyHardwareVersion](../hkdevicepropertykeyhardwareversion.md): The device’s hardware version.
- [HKDevicePropertyKeyFirmwareVersion](../hkdevicepropertykeyfirmwareversion.md): The device’s firmware version.
- [HKDevicePropertyKeySoftwareVersion](../hkdevicepropertykeysoftwareversion.md): The device’s software version.
- [HKDevicePropertyKeyLocalIdentifier](../hkdevicepropertykeylocalidentifier.md): A unique identifier for the device on the hardware running the app. For more information, see [localIdentifier](../hkdevice/localidentifier.md).
- [HKDevicePropertyKeyUDIDeviceIdentifier](../hkdevicepropertykeyudideviceidentifier.md): The device’s UDI Device Identifier.

## See Also

### Creating object predicates

- [predicateForObjectWithUUID:](predicateforobject%28with_%29.md): Returns a predicate that matches an object with the specified universally unique identifier (UUID).
- [predicateForObjectsWithUUIDs:](predicateforobjects%28with_%29.md): Returns a predicate that matches the objects with the specified universally unique identifiers (UUIDs).
- [predicateForObjectsFromSource:](predicateforobjects%28from_%29-7j3p2.md): Returns a predicate that matches all the objects that were created by the provided source.
- [predicateForObjectsFromSources:](predicateforobjects%28from_%29-89b4t.md): Returns a predicate that matches all the objects that were created by any of the provided sources.
- [predicateForObjectsFromDevices:](predicateforobjects%28from_%29-9h87f.md): Returns a predicate that matches all the objects that were created by any of the provided devices.
- [predicateForObjectsFromSourceRevisions:](predicateforobjects%28from_%29-1ar4g.md): Returns a predicate that matches all the objects that were created by any of the provided source revisions.
- [predicateForObjectsWithMetadataKey:](predicateforobjects%28withmetadatakey_%29.md): Returns a predicate that matches any object whose metadata contains the provided key.
- [predicateForObjectsWithMetadataKey:allowedValues:](predicateforobjects%28withmetadatakey_allowedvalues_%29.md): Returns a predicate that matches objects based on the provided metadata key and an array of target values.
- [predicateForObjectsWithMetadataKey:operatorType:value:](predicateforobjects%28withmetadatakey_operatortype_value_%29.md): Returns a predicate that matches objects based on the provided metadata key, value, and operator.
- [predicateForObjectsWithNoCorrelation](predicateforobjectswithnocorrelation%28%29.md): Returns a predicate that matches all objects that are not associated with a HealthKit correlation.
