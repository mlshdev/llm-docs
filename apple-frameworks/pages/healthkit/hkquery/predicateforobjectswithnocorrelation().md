> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquery/predicateforobjectswithnocorrelation()](https://developer.apple.com/documentation/healthkit/hkquery/predicateforobjectswithnocorrelation())

# predicateForObjectsWithNoCorrelation() (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Returns a predicate that matches all objects that are not associated with a HealthKit correlation.

## Declaration

```swift
class func predicateForObjectsWithNoCorrelation() -> NSPredicate
```

<a id="return-value"></a>

## Return Value

A predicate that matches all objects that are not associated with any HealthKit correlations.

<a id="Discussion"></a>

## Discussion

Use this convenience method to create a predicate that matches all objects not associated with a [HKCorrelation](../hkcorrelation.md) object. The following sample uses both the convenience method and a predicate format string to create equivalent predicates.

**Swift**

```swift
let noncorrelated = HKQuery.predicateForObjectsWithNoCorrelation()
 
let explicitNoncorrelated =
    NSPredicate(format: "%K == nil", HKPredicateKeyPathCorrelation)
```

**Objective-C**

```objc
NSPredicate *noncorrelated = [HKQuery predicateForObjectsWithNoCorrelation];
 
NSPredicate *explicitNoncorrelated =
[NSPredicate predicateWithFormat:@"%K == nil", HKPredicateKeyPathCorrelation];
```

## See Also

### Related Documentation

- [HKPredicateKeyPathCorrelation](../hkpredicatekeypathcorrelation.md): The key path for accessing the object’s correlation inside a predicate format string.
- [HKCorrelation](../hkcorrelation.md): A sample that groups multiple related samples into a single entry.

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
- [predicateForObjects(withMetadataKey:operatorType:value:)](predicateforobjects%28withmetadatakey_operatortype_value_%29.md): Returns a predicate that matches objects based on the provided metadata key, value, and operator.

# predicateForObjectsWithNoCorrelation (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Returns a predicate that matches all objects that are not associated with a HealthKit correlation.

## Declaration

```objectivec
+ (NSPredicate *) predicateForObjectsWithNoCorrelation;
```

<a id="return-value"></a>

## Return Value

A predicate that matches all objects that are not associated with any HealthKit correlations.

<a id="Discussion"></a>

## Discussion

Use this convenience method to create a predicate that matches all objects not associated with a [HKCorrelation](../hkcorrelation.md) object. The following sample uses both the convenience method and a predicate format string to create equivalent predicates.

**Swift**

```swift
let noncorrelated = HKQuery.predicateForObjectsWithNoCorrelation()
 
let explicitNoncorrelated =
    NSPredicate(format: "%K == nil", HKPredicateKeyPathCorrelation)
```

**Objective-C**

```objc
NSPredicate *noncorrelated = [HKQuery predicateForObjectsWithNoCorrelation];
 
NSPredicate *explicitNoncorrelated =
[NSPredicate predicateWithFormat:@"%K == nil", HKPredicateKeyPathCorrelation];
```

## See Also

### Related Documentation

- [HKPredicateKeyPathCorrelation](../hkpredicatekeypathcorrelation.md): The key path for accessing the object’s correlation inside a predicate format string.
- [HKCorrelation](../hkcorrelation.md): A sample that groups multiple related samples into a single entry.

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
- [predicateForObjectsWithMetadataKey:operatorType:value:](predicateforobjects%28withmetadatakey_operatortype_value_%29.md): Returns a predicate that matches objects based on the provided metadata key, value, and operator.
