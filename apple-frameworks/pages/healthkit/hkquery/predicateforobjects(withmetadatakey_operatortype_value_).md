> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquery/predicateforobjects(withmetadatakey:operatortype:value:)](https://developer.apple.com/documentation/healthkit/hkquery/predicateforobjects(withmetadatakey:operatortype:value:))

# predicateForObjects(withMetadataKey:operatorType:value:) (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Returns a predicate that matches objects based on the provided metadata key, value, and operator.

## Declaration

```swift
class func predicateForObjects(withMetadataKey key: String, operatorType: NSComparisonPredicate.Operator, value: Any) -> NSPredicate
```

## Parameters

- `key`: The metadata key for the value to be matched. For a list of preset keys, see [Metadata Keys](../metadata-keys.md). You may also search using custom keys.
- `operatorType`: Defines the relationship used to match the metadata’s value with the provided value.
- `value`: The target value. These values must be [NSString](../../foundation/nsstring.md), [NSNumber](../../foundation/nsnumber.md), or [NSDate](../../foundation/nsdate.md) instances.

<a id="return-value"></a>

## Return Value

A predicate that matches objects based on the specified metadata key, operator, and value.

<a id="Discussion"></a>

## Discussion

Use this convenience method to create a predicate that matches objects based on their metadata, an operator, and a target value. When this predicate is evaluated, it gets the metadata’s value for the provided key. Then the predicate compares that value with the target value using the provided operator.

The following sample uses both the convenience method and a predicate format string to create equivalent predicates.

**Swift**

```swift
let metadataOperator =
    HKQuery.predicateForObjectsWithMetadataKey(AccuracyCustomMetadataKey,
                                               operatorType: NSPredicateOperatorType.GreaterThanPredicateOperatorType,
                                               value: 75.0)
 
let explicitMetadataOperator = NSPredicate(format: "%K.%K > %d",
                                           HKPredicateKeyPathMetadata, AccuracyCustomMetadataKey,
                                           75.0)
```

**Objective-C**

```objc
NSPredicate *metadataOperator =
    [HKQuery predicateForObjectsWithMetadataKey:AccuracyCustomMetadataKey
                                   operatorType:NSGreaterThanPredicateOperatorType
                                          value:@75.0];
 
NSPredicate *explicitMetadataOperator =
    [NSPredicate predicateWithFormat:@"%K.%K > %d",
     HKPredicateKeyPathMetadata,
     AccuracyCustomMetadataKey,
     @75.0];
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
- [predicateForObjects(withMetadataKey:allowedValues:)](predicateforobjects%28withmetadatakey_allowedvalues_%29.md): Returns a predicate that matches objects based on the provided metadata key and an array of target values.
- [predicateForObjectsWithNoCorrelation()](predicateforobjectswithnocorrelation%28%29.md): Returns a predicate that matches all objects that are not associated with a HealthKit correlation.

# predicateForObjectsWithMetadataKey:operatorType:value: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Returns a predicate that matches objects based on the provided metadata key, value, and operator.

## Declaration

```objectivec
+ (NSPredicate *) predicateForObjectsWithMetadataKey:(NSString *) key operatorType:(NSPredicateOperatorType) operatorType value:(id) value;
```

## Parameters

- `key`: The metadata key for the value to be matched. For a list of preset keys, see [Metadata Keys](../metadata-keys.md). You may also search using custom keys.
- `operatorType`: Defines the relationship used to match the metadata’s value with the provided value.
- `value`: The target value. These values must be [NSString](../../foundation/nsstring.md), [NSNumber](../../foundation/nsnumber.md), or [NSDate](../../foundation/nsdate.md) instances.

<a id="return-value"></a>

## Return Value

A predicate that matches objects based on the specified metadata key, operator, and value.

<a id="Discussion"></a>

## Discussion

Use this convenience method to create a predicate that matches objects based on their metadata, an operator, and a target value. When this predicate is evaluated, it gets the metadata’s value for the provided key. Then the predicate compares that value with the target value using the provided operator.

The following sample uses both the convenience method and a predicate format string to create equivalent predicates.

**Swift**

```swift
let metadataOperator =
    HKQuery.predicateForObjectsWithMetadataKey(AccuracyCustomMetadataKey,
                                               operatorType: NSPredicateOperatorType.GreaterThanPredicateOperatorType,
                                               value: 75.0)
 
let explicitMetadataOperator = NSPredicate(format: "%K.%K > %d",
                                           HKPredicateKeyPathMetadata, AccuracyCustomMetadataKey,
                                           75.0)
```

**Objective-C**

```objc
NSPredicate *metadataOperator =
    [HKQuery predicateForObjectsWithMetadataKey:AccuracyCustomMetadataKey
                                   operatorType:NSGreaterThanPredicateOperatorType
                                          value:@75.0];
 
NSPredicate *explicitMetadataOperator =
    [NSPredicate predicateWithFormat:@"%K.%K > %d",
     HKPredicateKeyPathMetadata,
     AccuracyCustomMetadataKey,
     @75.0];
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
- [predicateForObjectsWithMetadataKey:allowedValues:](predicateforobjects%28withmetadatakey_allowedvalues_%29.md): Returns a predicate that matches objects based on the provided metadata key and an array of target values.
- [predicateForObjectsWithNoCorrelation](predicateforobjectswithnocorrelation%28%29.md): Returns a predicate that matches all objects that are not associated with a HealthKit correlation.
