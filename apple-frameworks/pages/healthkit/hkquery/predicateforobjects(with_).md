> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquery/predicateforobjects(with:)](https://developer.apple.com/documentation/healthkit/hkquery/predicateforobjects(with:))

# predicateForObjects(with:) (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Returns a predicate that matches the objects with the specified  universally unique identifiers (UUIDs).

## Declaration

```swift
class func predicateForObjects(with UUIDs: Set<UUID>) -> NSPredicate
```

## Parameters

- `UUIDs`: The set of UUIDs to be matched.

<a id="return-value"></a>

## Return Value

A predicate that matches the specified objects based on their UUIDs.

<a id="Discussion"></a>

## Discussion

HealthKit assigns a UUID to each object when it is saved to the HealthKit store. HealthKit uses these IDs to uniquely identify objects from the store. Use this convenience method to create a predicate that checks an object’s UUID against the provided set of UUIDs. The following sample uses both the convenience method and a predicate format string to create equivalent predicates.

**Swift**

```swift
let uuids = HKQuery.predicateForObjectsWithUUIDs(myUUIDs)
 
let explicitUUIDs =
    NSPredicate(format: "%K IN %@", HKPredicateKeyPathUUID, myUUIDs)
```

**Objective-C**

```objc
NSPredicate *uuids = [HKQuery predicateForObjectsWithUUIDs:myUUIDs];
 
NSPredicate *explicitUUIDs = [NSPredicate predicateWithFormat:@"%K IN %@",
                              HKPredicateKeyPathUUID,
                              myUUIDs];
```

## See Also

### Related Documentation

- [HKPredicateKeyPathUUID](../hkpredicatekeypathuuid.md): The key path for accessing the object’s UUID inside a predicate format string.
- [uuid](../hkobject/uuid.md): The universally unique identifier (UUID) for this HealthKit object.

### Creating object predicates

- [predicateForObject(with:)](predicateforobject%28with_%29.md): Returns a predicate that matches an object with the specified universally unique identifier (UUID).
- [predicateForObjects(from:)](predicateforobjects%28from_%29-7j3p2.md): Returns a predicate that matches all the objects that were created by the provided source.
- [predicateForObjects(from:)](predicateforobjects%28from_%29-89b4t.md): Returns a predicate that matches all the objects that were created by any of the provided sources.
- [predicateForObjects(from:)](predicateforobjects%28from_%29-9h87f.md): Returns a predicate that matches all the objects that were created by any of the provided devices.
- [predicateForObjects(withDeviceProperty:allowedValues:)](predicateforobjects%28withdeviceproperty_allowedvalues_%29.md): Returns a predicate that matches all objects created by devices with the specified properties.
- [predicateForObjects(from:)](predicateforobjects%28from_%29-1ar4g.md): Returns a predicate that matches all the objects that were created by any of the provided source revisions.
- [predicateForObjects(withMetadataKey:)](predicateforobjects%28withmetadatakey_%29.md): Returns a predicate that matches any object whose metadata contains the provided key.
- [predicateForObjects(withMetadataKey:allowedValues:)](predicateforobjects%28withmetadatakey_allowedvalues_%29.md): Returns a predicate that matches objects based on the provided metadata key and an array of target values.
- [predicateForObjects(withMetadataKey:operatorType:value:)](predicateforobjects%28withmetadatakey_operatortype_value_%29.md): Returns a predicate that matches objects based on the provided metadata key, value, and operator.
- [predicateForObjectsWithNoCorrelation()](predicateforobjectswithnocorrelation%28%29.md): Returns a predicate that matches all objects that are not associated with a HealthKit correlation.

# predicateForObjectsWithUUIDs: (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

Returns a predicate that matches the objects with the specified  universally unique identifiers (UUIDs).

## Declaration

```objectivec
+ (NSPredicate *) predicateForObjectsWithUUIDs:(NSSet<NSUUID *> *) UUIDs;
```

## Parameters

- `UUIDs`: The set of UUIDs to be matched.

<a id="return-value"></a>

## Return Value

A predicate that matches the specified objects based on their UUIDs.

<a id="Discussion"></a>

## Discussion

HealthKit assigns a UUID to each object when it is saved to the HealthKit store. HealthKit uses these IDs to uniquely identify objects from the store. Use this convenience method to create a predicate that checks an object’s UUID against the provided set of UUIDs. The following sample uses both the convenience method and a predicate format string to create equivalent predicates.

**Swift**

```swift
let uuids = HKQuery.predicateForObjectsWithUUIDs(myUUIDs)
 
let explicitUUIDs =
    NSPredicate(format: "%K IN %@", HKPredicateKeyPathUUID, myUUIDs)
```

**Objective-C**

```objc
NSPredicate *uuids = [HKQuery predicateForObjectsWithUUIDs:myUUIDs];
 
NSPredicate *explicitUUIDs = [NSPredicate predicateWithFormat:@"%K IN %@",
                              HKPredicateKeyPathUUID,
                              myUUIDs];
```

## See Also

### Related Documentation

- [HKPredicateKeyPathUUID](../hkpredicatekeypathuuid.md): The key path for accessing the object’s UUID inside a predicate format string.
- [UUID](../hkobject/uuid.md): The universally unique identifier (UUID) for this HealthKit object.

### Creating object predicates

- [predicateForObjectWithUUID:](predicateforobject%28with_%29.md): Returns a predicate that matches an object with the specified universally unique identifier (UUID).
- [predicateForObjectsFromSource:](predicateforobjects%28from_%29-7j3p2.md): Returns a predicate that matches all the objects that were created by the provided source.
- [predicateForObjectsFromSources:](predicateforobjects%28from_%29-89b4t.md): Returns a predicate that matches all the objects that were created by any of the provided sources.
- [predicateForObjectsFromDevices:](predicateforobjects%28from_%29-9h87f.md): Returns a predicate that matches all the objects that were created by any of the provided devices.
- [predicateForObjectsWithDeviceProperty:allowedValues:](predicateforobjects%28withdeviceproperty_allowedvalues_%29.md): Returns a predicate that matches all objects created by devices with the specified properties.
- [predicateForObjectsFromSourceRevisions:](predicateforobjects%28from_%29-1ar4g.md): Returns a predicate that matches all the objects that were created by any of the provided source revisions.
- [predicateForObjectsWithMetadataKey:](predicateforobjects%28withmetadatakey_%29.md): Returns a predicate that matches any object whose metadata contains the provided key.
- [predicateForObjectsWithMetadataKey:allowedValues:](predicateforobjects%28withmetadatakey_allowedvalues_%29.md): Returns a predicate that matches objects based on the provided metadata key and an array of target values.
- [predicateForObjectsWithMetadataKey:operatorType:value:](predicateforobjects%28withmetadatakey_operatortype_value_%29.md): Returns a predicate that matches objects based on the provided metadata key, value, and operator.
- [predicateForObjectsWithNoCorrelation](predicateforobjectswithnocorrelation%28%29.md): Returns a predicate that matches all objects that are not associated with a HealthKit correlation.
