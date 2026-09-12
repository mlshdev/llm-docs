> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquery/predicateforobjects(withmetadatakey:allowedvalues:)](https://developer.apple.com/documentation/healthkit/hkquery/predicateforobjects(withmetadatakey:allowedvalues:))

# predicateForObjects(withMetadataKey:allowedValues:) (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Returns a predicate that matches objects based on the provided metadata key and an array of target values.

## Declaration

```swift
class func predicateForObjects(withMetadataKey key: String, allowedValues: [Any]) -> NSPredicate
```

## Parameters

- `key`: The metadata key for the value to be matched. For a list of preset keys, see Metadata Keys. You may also search using custom keys.
- `allowedValues`: An array of valid values. These values must be [NSString](../../foundation/nsstring.md), [NSNumber](../../foundation/nsnumber.md), or [NSDate](../../foundation/nsdate.md) instances.

<a id="return-value"></a>

## Return Value

A predicate that matches objects based on the provided metadata key and an array of target values..

<a id="Discussion"></a>

## Discussion

Use this convenience method to create a predicate that matches objects based on their metadata. When this predicate is evaluated, it gets the metadata’s value for the provided key. Then the predicate checks that value against the `allowedValues` array. If the array contains a matching value, the predicate returns [true](https://developer.apple.com/documentation/swift/true); otherwise, it returns [false](https://developer.apple.com/documentation/swift/false).

The following sample uses both the convenience method and a predicate format string to create equivalent predicates.

**Swift**

```swift
let metadataValues =
    HKQuery.predicateForObjectsWithMetadataKey(HKMetadataKeyFoodType,
                                               allowedValues: ["Pizza", "Tofu"])
 
 
let explicitMetadataKey = NSPredicate(format: "%K.%K IN %@",
                                      HKPredicateKeyPathMetadata, HKMetadataKeyFoodType, ["Pizza", "Tofu"])
```

**Objective-C**

```objc
NSPredicate *metadataValues =
    [HKQuery predicateForObjectsWithMetadataKey:HKMetadataKeyFoodType
                                  allowedValues:@[@"Pizza", @"Tofu"]];
 
NSPredicate *explicitMetadataValues =
    [NSPredicate predicateWithFormat:@"%K.%K in %@",
     HKPredicateKeyPathMetadata,
     HKMetadataKeyFoodType,
     @[@"Pizza", @"Tofu"]];
```

## See Also

### Related Documentation

- [HKPredicateKeyPathMetadata](../hkpredicatekeypathmetadata.md): The key path for accessing the object’s metadata dictionary inside a predicate format string.
- [metadata](../hkobject/metadata.md): The metadata for this HealthKit object.

### Creating object predicates

- [predicateForObject(with:)](predicateforobject%28with_%29.md): Returns a predicate that matches an object with the specified universally unique identifier (UUID).
- [predicateForObjects(with:)](predicateforobjects%28with_%29.md): Returns a predicate that matches the objects with the specified universally unique identifiers (UUIDs).
- [predicateForObjects(from:)](predicateforobjects%28from_%29-7j3p2.md): Returns a predicate that matches all the objects that were created by the provided source.
- [predicateForObjects(from:)](predicateforobjects%28from_%29-89b4t.md): Returns a predicate that matches all the objects that were created by any of the provided sources.
- [predicateForObjects(from:)](predicateforobjects%28from_%29-9h87f.md): Returns a predicate that matches all the objects that were created by any of the provided devices.
- [predicateForObjects(withDeviceProperty:allowedValues:)](predicateforobjects%28withdeviceproperty_allowedvalues_%29.md): Returns a predicate that matches all objects created by devices with the specified properties.
- [predicateForObjects(from:)](predicateforobjects%28from_%29-1ar4g.md): Returns a predicate that matches all the objects that were created by any of the provided source revisions.
- [predicateForObjects(withMetadataKey:)](predicateforobjects%28withmetadatakey_%29.md): Returns a predicate that matches any object whose metadata contains the provided key.
- [predicateForObjects(withMetadataKey:operatorType:value:)](predicateforobjects%28withmetadatakey_operatortype_value_%29.md): Returns a predicate that matches objects based on the provided metadata key, value, and operator.
- [predicateForObjectsWithNoCorrelation()](predicateforobjectswithnocorrelation%28%29.md): Returns a predicate that matches all objects that are not associated with a HealthKit correlation.

# predicateForObjectsWithMetadataKey:allowedValues: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Returns a predicate that matches objects based on the provided metadata key and an array of target values.

## Declaration

```objectivec
+ (NSPredicate *) predicateForObjectsWithMetadataKey:(NSString *) key allowedValues:(NSArray *) allowedValues;
```

## Parameters

- `key`: The metadata key for the value to be matched. For a list of preset keys, see Metadata Keys. You may also search using custom keys.
- `allowedValues`: An array of valid values. These values must be [NSString](../../foundation/nsstring.md), [NSNumber](../../foundation/nsnumber.md), or [NSDate](../../foundation/nsdate.md) instances.

<a id="return-value"></a>

## Return Value

A predicate that matches objects based on the provided metadata key and an array of target values..

<a id="Discussion"></a>

## Discussion

Use this convenience method to create a predicate that matches objects based on their metadata. When this predicate is evaluated, it gets the metadata’s value for the provided key. Then the predicate checks that value against the `allowedValues` array. If the array contains a matching value, the predicate returns [true](https://developer.apple.com/documentation/swift/true); otherwise, it returns [false](https://developer.apple.com/documentation/swift/false).

The following sample uses both the convenience method and a predicate format string to create equivalent predicates.

**Swift**

```swift
let metadataValues =
    HKQuery.predicateForObjectsWithMetadataKey(HKMetadataKeyFoodType,
                                               allowedValues: ["Pizza", "Tofu"])
 
 
let explicitMetadataKey = NSPredicate(format: "%K.%K IN %@",
                                      HKPredicateKeyPathMetadata, HKMetadataKeyFoodType, ["Pizza", "Tofu"])
```

**Objective-C**

```objc
NSPredicate *metadataValues =
    [HKQuery predicateForObjectsWithMetadataKey:HKMetadataKeyFoodType
                                  allowedValues:@[@"Pizza", @"Tofu"]];
 
NSPredicate *explicitMetadataValues =
    [NSPredicate predicateWithFormat:@"%K.%K in %@",
     HKPredicateKeyPathMetadata,
     HKMetadataKeyFoodType,
     @[@"Pizza", @"Tofu"]];
```

## See Also

### Related Documentation

- [HKPredicateKeyPathMetadata](../hkpredicatekeypathmetadata.md): The key path for accessing the object’s metadata dictionary inside a predicate format string.
- [metadata](../hkobject/metadata.md): The metadata for this HealthKit object.

### Creating object predicates

- [predicateForObjectWithUUID:](predicateforobject%28with_%29.md): Returns a predicate that matches an object with the specified universally unique identifier (UUID).
- [predicateForObjectsWithUUIDs:](predicateforobjects%28with_%29.md): Returns a predicate that matches the objects with the specified universally unique identifiers (UUIDs).
- [predicateForObjectsFromSource:](predicateforobjects%28from_%29-7j3p2.md): Returns a predicate that matches all the objects that were created by the provided source.
- [predicateForObjectsFromSources:](predicateforobjects%28from_%29-89b4t.md): Returns a predicate that matches all the objects that were created by any of the provided sources.
- [predicateForObjectsFromDevices:](predicateforobjects%28from_%29-9h87f.md): Returns a predicate that matches all the objects that were created by any of the provided devices.
- [predicateForObjectsWithDeviceProperty:allowedValues:](predicateforobjects%28withdeviceproperty_allowedvalues_%29.md): Returns a predicate that matches all objects created by devices with the specified properties.
- [predicateForObjectsFromSourceRevisions:](predicateforobjects%28from_%29-1ar4g.md): Returns a predicate that matches all the objects that were created by any of the provided source revisions.
- [predicateForObjectsWithMetadataKey:](predicateforobjects%28withmetadatakey_%29.md): Returns a predicate that matches any object whose metadata contains the provided key.
- [predicateForObjectsWithMetadataKey:operatorType:value:](predicateforobjects%28withmetadatakey_operatortype_value_%29.md): Returns a predicate that matches objects based on the provided metadata key, value, and operator.
- [predicateForObjectsWithNoCorrelation](predicateforobjectswithnocorrelation%28%29.md): Returns a predicate that matches all objects that are not associated with a HealthKit correlation.
