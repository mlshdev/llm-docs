> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquery/predicateforobjects(from:)-89b4t](https://developer.apple.com/documentation/healthkit/hkquery/predicateforobjects(from:)-89b4t)

# predicateForObjects(from:) (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Returns a predicate that matches all the objects that were created by any of the provided sources.

## Declaration

```swift
class func predicateForObjects(from sources: Set<HKSource>) -> NSPredicate
```

## Parameters

- `sources`: A set of sources that have saved data to the HealthKit store.

<a id="return-value"></a>

## Return Value

A predicate that matches all the objects created by any of the provided sources.

<a id="Discussion"></a>

## Discussion

Use this convenience method to create a predicate that finds all the objects from a specified set of apps or devices. The following sample uses both the convenience method and a predicate format string to create equivalent predicates.

**Swift**

```swift
let fromSources = HKQuery.predicateForObjectsFromSources(sources)
 
let explicitFromSources =
    NSPredicate(format: "%K IN %@", HKPredicateKeyPathSource, sources)
```

**Objective-C**

```objc
NSPredicate *fromSources = [HKQuery predicateForObjectsFromSources:sources];
 
NSPredicate *explicitFromSources = [NSPredicate predicateWithFormat:@"%K IN %@",
                                   HKPredicateKeyPathSource,
                                   sources];
```

## See Also

### Related Documentation

- [source](../hkobject/source.md): Deprecated. A HealthKit source, representing the app or device that created this object.
- [HKSourceQuery](../hksourcequery.md): A query that returns a list of sources, such as apps and devices, that have saved matching queries to the HealthKit store.

### Creating object predicates

- [predicateForObject(with:)](predicateforobject%28with_%29.md): Returns a predicate that matches an object with the specified universally unique identifier (UUID).
- [predicateForObjects(with:)](predicateforobjects%28with_%29.md): Returns a predicate that matches the objects with the specified universally unique identifiers (UUIDs).
- [predicateForObjects(from:)](predicateforobjects%28from_%29-7j3p2.md): Returns a predicate that matches all the objects that were created by the provided source.
- [predicateForObjects(from:)](predicateforobjects%28from_%29-9h87f.md): Returns a predicate that matches all the objects that were created by any of the provided devices.
- [predicateForObjects(withDeviceProperty:allowedValues:)](predicateforobjects%28withdeviceproperty_allowedvalues_%29.md): Returns a predicate that matches all objects created by devices with the specified properties.
- [predicateForObjects(from:)](predicateforobjects%28from_%29-1ar4g.md): Returns a predicate that matches all the objects that were created by any of the provided source revisions.
- [predicateForObjects(withMetadataKey:)](predicateforobjects%28withmetadatakey_%29.md): Returns a predicate that matches any object whose metadata contains the provided key.
- [predicateForObjects(withMetadataKey:allowedValues:)](predicateforobjects%28withmetadatakey_allowedvalues_%29.md): Returns a predicate that matches objects based on the provided metadata key and an array of target values.
- [predicateForObjects(withMetadataKey:operatorType:value:)](predicateforobjects%28withmetadatakey_operatortype_value_%29.md): Returns a predicate that matches objects based on the provided metadata key, value, and operator.
- [predicateForObjectsWithNoCorrelation()](predicateforobjectswithnocorrelation%28%29.md): Returns a predicate that matches all objects that are not associated with a HealthKit correlation.

# predicateForObjectsFromSources: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Returns a predicate that matches all the objects that were created by any of the provided sources.

## Declaration

```objectivec
+ (NSPredicate *) predicateForObjectsFromSources:(NSSet<HKSource *> *) sources;
```

## Parameters

- `sources`: A set of sources that have saved data to the HealthKit store.

<a id="return-value"></a>

## Return Value

A predicate that matches all the objects created by any of the provided sources.

<a id="Discussion"></a>

## Discussion

Use this convenience method to create a predicate that finds all the objects from a specified set of apps or devices. The following sample uses both the convenience method and a predicate format string to create equivalent predicates.

**Swift**

```swift
let fromSources = HKQuery.predicateForObjectsFromSources(sources)
 
let explicitFromSources =
    NSPredicate(format: "%K IN %@", HKPredicateKeyPathSource, sources)
```

**Objective-C**

```objc
NSPredicate *fromSources = [HKQuery predicateForObjectsFromSources:sources];
 
NSPredicate *explicitFromSources = [NSPredicate predicateWithFormat:@"%K IN %@",
                                   HKPredicateKeyPathSource,
                                   sources];
```

## See Also

### Related Documentation

- [source](../hkobject/source.md): Deprecated. A HealthKit source, representing the app or device that created this object.
- [HKSourceQuery](../hksourcequery.md): A query that returns a list of sources, such as apps and devices, that have saved matching queries to the HealthKit store.

### Creating object predicates

- [predicateForObjectWithUUID:](predicateforobject%28with_%29.md): Returns a predicate that matches an object with the specified universally unique identifier (UUID).
- [predicateForObjectsWithUUIDs:](predicateforobjects%28with_%29.md): Returns a predicate that matches the objects with the specified universally unique identifiers (UUIDs).
- [predicateForObjectsFromSource:](predicateforobjects%28from_%29-7j3p2.md): Returns a predicate that matches all the objects that were created by the provided source.
- [predicateForObjectsFromDevices:](predicateforobjects%28from_%29-9h87f.md): Returns a predicate that matches all the objects that were created by any of the provided devices.
- [predicateForObjectsWithDeviceProperty:allowedValues:](predicateforobjects%28withdeviceproperty_allowedvalues_%29.md): Returns a predicate that matches all objects created by devices with the specified properties.
- [predicateForObjectsFromSourceRevisions:](predicateforobjects%28from_%29-1ar4g.md): Returns a predicate that matches all the objects that were created by any of the provided source revisions.
- [predicateForObjectsWithMetadataKey:](predicateforobjects%28withmetadatakey_%29.md): Returns a predicate that matches any object whose metadata contains the provided key.
- [predicateForObjectsWithMetadataKey:allowedValues:](predicateforobjects%28withmetadatakey_allowedvalues_%29.md): Returns a predicate that matches objects based on the provided metadata key and an array of target values.
- [predicateForObjectsWithMetadataKey:operatorType:value:](predicateforobjects%28withmetadatakey_operatortype_value_%29.md): Returns a predicate that matches objects based on the provided metadata key, value, and operator.
- [predicateForObjectsWithNoCorrelation](predicateforobjectswithnocorrelation%28%29.md): Returns a predicate that matches all objects that are not associated with a HealthKit correlation.
