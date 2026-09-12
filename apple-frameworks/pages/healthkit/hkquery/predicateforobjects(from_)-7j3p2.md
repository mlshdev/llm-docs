> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquery/predicateforobjects(from:)-7j3p2](https://developer.apple.com/documentation/healthkit/hkquery/predicateforobjects(from:)-7j3p2)

# predicateForObjects(from:) (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Returns a predicate that matches all the objects that were created by the provided source.

## Declaration

```swift
class func predicateForObjects(from source: HKSource) -> NSPredicate
```

## Parameters

- `source`: The source that saved data into the HealthKit store. The source object represents either an app or a devices capable of saving data directly into the HealthKit store (for example, a linked Bluetooth heart rate monitor).

<a id="return-value"></a>

## Return Value

A predicate that matches all the objects created by the provided source.

<a id="Discussion"></a>

## Discussion

Use this convenience method to create a predicate that finds all the objects from a specific app or device. The following sample uses both the convenience method and a predicate format string to create equivalent predicates.

**Swift**

```swift
let fromSource = HKQuery.predicateForObjectsFromSource(source)
 
let explicitFromSource =
    NSPredicate(format: "%K == %@", HKPredicateKeyPathSource, source)
```

**Objective-C**

```objc
NSPredicate *fromSource = [HKQuery predicateForObjectsFromSource:source];
 
NSPredicate *explicitFromSource = [NSPredicate predicateWithFormat:@"%K == %@",
                                   HKPredicateKeyPathSource,
                                   source];
```

## See Also

### Related Documentation

- [source](../hkobject/source.md): Deprecated. A HealthKit source, representing the app or device that created this object.
- [HKSourceQuery](../hksourcequery.md): A query that returns a list of sources, such as apps and devices, that have saved matching queries to the HealthKit store.

### Creating object predicates

- [predicateForObject(with:)](predicateforobject%28with_%29.md): Returns a predicate that matches an object with the specified universally unique identifier (UUID).
- [predicateForObjects(with:)](predicateforobjects%28with_%29.md): Returns a predicate that matches the objects with the specified universally unique identifiers (UUIDs).
- [predicateForObjects(from:)](predicateforobjects%28from_%29-89b4t.md): Returns a predicate that matches all the objects that were created by any of the provided sources.
- [predicateForObjects(from:)](predicateforobjects%28from_%29-9h87f.md): Returns a predicate that matches all the objects that were created by any of the provided devices.
- [predicateForObjects(withDeviceProperty:allowedValues:)](predicateforobjects%28withdeviceproperty_allowedvalues_%29.md): Returns a predicate that matches all objects created by devices with the specified properties.
- [predicateForObjects(from:)](predicateforobjects%28from_%29-1ar4g.md): Returns a predicate that matches all the objects that were created by any of the provided source revisions.
- [predicateForObjects(withMetadataKey:)](predicateforobjects%28withmetadatakey_%29.md): Returns a predicate that matches any object whose metadata contains the provided key.
- [predicateForObjects(withMetadataKey:allowedValues:)](predicateforobjects%28withmetadatakey_allowedvalues_%29.md): Returns a predicate that matches objects based on the provided metadata key and an array of target values.
- [predicateForObjects(withMetadataKey:operatorType:value:)](predicateforobjects%28withmetadatakey_operatortype_value_%29.md): Returns a predicate that matches objects based on the provided metadata key, value, and operator.
- [predicateForObjectsWithNoCorrelation()](predicateforobjectswithnocorrelation%28%29.md): Returns a predicate that matches all objects that are not associated with a HealthKit correlation.

# predicateForObjectsFromSource: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Returns a predicate that matches all the objects that were created by the provided source.

## Declaration

```objectivec
+ (NSPredicate *) predicateForObjectsFromSource:(HKSource *) source;
```

## Parameters

- `source`: The source that saved data into the HealthKit store. The source object represents either an app or a devices capable of saving data directly into the HealthKit store (for example, a linked Bluetooth heart rate monitor).

<a id="return-value"></a>

## Return Value

A predicate that matches all the objects created by the provided source.

<a id="Discussion"></a>

## Discussion

Use this convenience method to create a predicate that finds all the objects from a specific app or device. The following sample uses both the convenience method and a predicate format string to create equivalent predicates.

**Swift**

```swift
let fromSource = HKQuery.predicateForObjectsFromSource(source)
 
let explicitFromSource =
    NSPredicate(format: "%K == %@", HKPredicateKeyPathSource, source)
```

**Objective-C**

```objc
NSPredicate *fromSource = [HKQuery predicateForObjectsFromSource:source];
 
NSPredicate *explicitFromSource = [NSPredicate predicateWithFormat:@"%K == %@",
                                   HKPredicateKeyPathSource,
                                   source];
```

## See Also

### Related Documentation

- [source](../hkobject/source.md): Deprecated. A HealthKit source, representing the app or device that created this object.
- [HKSourceQuery](../hksourcequery.md): A query that returns a list of sources, such as apps and devices, that have saved matching queries to the HealthKit store.

### Creating object predicates

- [predicateForObjectWithUUID:](predicateforobject%28with_%29.md): Returns a predicate that matches an object with the specified universally unique identifier (UUID).
- [predicateForObjectsWithUUIDs:](predicateforobjects%28with_%29.md): Returns a predicate that matches the objects with the specified universally unique identifiers (UUIDs).
- [predicateForObjectsFromSources:](predicateforobjects%28from_%29-89b4t.md): Returns a predicate that matches all the objects that were created by any of the provided sources.
- [predicateForObjectsFromDevices:](predicateforobjects%28from_%29-9h87f.md): Returns a predicate that matches all the objects that were created by any of the provided devices.
- [predicateForObjectsWithDeviceProperty:allowedValues:](predicateforobjects%28withdeviceproperty_allowedvalues_%29.md): Returns a predicate that matches all objects created by devices with the specified properties.
- [predicateForObjectsFromSourceRevisions:](predicateforobjects%28from_%29-1ar4g.md): Returns a predicate that matches all the objects that were created by any of the provided source revisions.
- [predicateForObjectsWithMetadataKey:](predicateforobjects%28withmetadatakey_%29.md): Returns a predicate that matches any object whose metadata contains the provided key.
- [predicateForObjectsWithMetadataKey:allowedValues:](predicateforobjects%28withmetadatakey_allowedvalues_%29.md): Returns a predicate that matches objects based on the provided metadata key and an array of target values.
- [predicateForObjectsWithMetadataKey:operatorType:value:](predicateforobjects%28withmetadatakey_operatortype_value_%29.md): Returns a predicate that matches objects based on the provided metadata key, value, and operator.
- [predicateForObjectsWithNoCorrelation](predicateforobjectswithnocorrelation%28%29.md): Returns a predicate that matches all objects that are not associated with a HealthKit correlation.
