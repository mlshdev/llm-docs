> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquery/predicateforobject(with:)](https://developer.apple.com/documentation/healthkit/hkquery/predicateforobject(with:))

# predicateForObject(with:) (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Returns a predicate that matches an object with the specified universally unique identifier (UUID).

## Declaration

```swift
class func predicateForObject(with UUID: UUID) -> NSPredicate
```

## Parameters

- `UUID`: The target UUID.

<a id="return-value"></a>

## Return Value

A predicate that matches a specific object based on its UUID.

<a id="Discussion"></a>

## Discussion

HealthKit assigns a UUID to each object when it is saved to the HealthKit store. HealthKit uses these IDs to uniquely identify objects from the store. Use this convenience method to create a predicate that matches the object with the provided UUID. The following sample uses both the convenience method and a predicate format string to create equivalent predicates.

**Swift**

```swift
let uuid = HKQuery.predicateForObjectWithUUID(myUUID)
let explicitUUID = NSPredicate(format: "%K == %@", HKPredicateKeyPathUUID, myUUID)
```

**Objective-C**

```objc
NSPredicate *uuid = [HKQuery predicateForObjectWithUUID:myUUID];
 
NSPredicate *explicitUUID = [NSPredicate predicateWithFormat:@"%K == %@",
                             HKPredicateKeyPathUUID,
                             myUUID];
```

## See Also

### Related Documentation

- [HKPredicateKeyPathUUID](../hkpredicatekeypathuuid.md): The key path for accessing the object’s UUID inside a predicate format string.
- [uuid](../hkobject/uuid.md): The universally unique identifier (UUID) for this HealthKit object.

### Creating object predicates

- [predicateForObjects(with:)](predicateforobjects%28with_%29.md): Returns a predicate that matches the objects with the specified universally unique identifiers (UUIDs).
- [predicateForObjects(from:)](predicateforobjects%28from_%29-7j3p2.md): Returns a predicate that matches all the objects that were created by the provided source.
- [predicateForObjects(from:)](predicateforobjects%28from_%29-89b4t.md): Returns a predicate that matches all the objects that were created by any of the provided sources.
- [predicateForObjects(from:)](predicateforobjects%28from_%29-9h87f.md): Returns a predicate that matches all the objects that were created by any of the provided devices.
- [predicateForObjects(withDeviceProperty:allowedValues:)](predicateforobjects%28withdeviceproperty_allowedvalues_%29.md): Returns a predicate that matches all objects created by devices with the specified properties.
- [predicateForObjects(from:)](predicateforobjects%28from_%29-1ar4g.md): Returns a predicate that matches all the objects that were created by any of the provided source revisions.
- [predicateForObjects(withMetadataKey:)](predicateforobjects%28withmetadatakey_%29.md): Returns a predicate that matches any object whose metadata contains the provided key.
- [predicateForObjects(withMetadataKey:allowedValues:)](predicateforobjects%28withmetadatakey_allowedvalues_%29.md): Returns a predicate that matches objects based on the provided metadata key and an array of target values.
- [predicateForObjects(withMetadataKey:operatorType:value:)](predicateforobjects%28withmetadatakey_operatortype_value_%29.md): Returns a predicate that matches objects based on the provided metadata key, value, and operator.
- [predicateForObjectsWithNoCorrelation()](predicateforobjectswithnocorrelation%28%29.md): Returns a predicate that matches all objects that are not associated with a HealthKit correlation.

# predicateForObjectWithUUID: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Returns a predicate that matches an object with the specified universally unique identifier (UUID).

## Declaration

```objectivec
+ (NSPredicate *) predicateForObjectWithUUID:(NSUUID *) UUID;
```

## Parameters

- `UUID`: The target UUID.

<a id="return-value"></a>

## Return Value

A predicate that matches a specific object based on its UUID.

<a id="Discussion"></a>

## Discussion

HealthKit assigns a UUID to each object when it is saved to the HealthKit store. HealthKit uses these IDs to uniquely identify objects from the store. Use this convenience method to create a predicate that matches the object with the provided UUID. The following sample uses both the convenience method and a predicate format string to create equivalent predicates.

**Swift**

```swift
let uuid = HKQuery.predicateForObjectWithUUID(myUUID)
let explicitUUID = NSPredicate(format: "%K == %@", HKPredicateKeyPathUUID, myUUID)
```

**Objective-C**

```objc
NSPredicate *uuid = [HKQuery predicateForObjectWithUUID:myUUID];
 
NSPredicate *explicitUUID = [NSPredicate predicateWithFormat:@"%K == %@",
                             HKPredicateKeyPathUUID,
                             myUUID];
```

## See Also

### Related Documentation

- [HKPredicateKeyPathUUID](../hkpredicatekeypathuuid.md): The key path for accessing the object’s UUID inside a predicate format string.
- [UUID](../hkobject/uuid.md): The universally unique identifier (UUID) for this HealthKit object.

### Creating object predicates

- [predicateForObjectsWithUUIDs:](predicateforobjects%28with_%29.md): Returns a predicate that matches the objects with the specified universally unique identifiers (UUIDs).
- [predicateForObjectsFromSource:](predicateforobjects%28from_%29-7j3p2.md): Returns a predicate that matches all the objects that were created by the provided source.
- [predicateForObjectsFromSources:](predicateforobjects%28from_%29-89b4t.md): Returns a predicate that matches all the objects that were created by any of the provided sources.
- [predicateForObjectsFromDevices:](predicateforobjects%28from_%29-9h87f.md): Returns a predicate that matches all the objects that were created by any of the provided devices.
- [predicateForObjectsWithDeviceProperty:allowedValues:](predicateforobjects%28withdeviceproperty_allowedvalues_%29.md): Returns a predicate that matches all objects created by devices with the specified properties.
- [predicateForObjectsFromSourceRevisions:](predicateforobjects%28from_%29-1ar4g.md): Returns a predicate that matches all the objects that were created by any of the provided source revisions.
- [predicateForObjectsWithMetadataKey:](predicateforobjects%28withmetadatakey_%29.md): Returns a predicate that matches any object whose metadata contains the provided key.
- [predicateForObjectsWithMetadataKey:allowedValues:](predicateforobjects%28withmetadatakey_allowedvalues_%29.md): Returns a predicate that matches objects based on the provided metadata key and an array of target values.
- [predicateForObjectsWithMetadataKey:operatorType:value:](predicateforobjects%28withmetadatakey_operatortype_value_%29.md): Returns a predicate that matches objects based on the provided metadata key, value, and operator.
- [predicateForObjectsWithNoCorrelation](predicateforobjectswithnocorrelation%28%29.md): Returns a predicate that matches all objects that are not associated with a HealthKit correlation.
