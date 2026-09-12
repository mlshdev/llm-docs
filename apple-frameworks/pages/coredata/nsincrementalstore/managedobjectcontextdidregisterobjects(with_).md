> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsincrementalstore/managedobjectcontextdidregisterobjects(with:)](https://developer.apple.com/documentation/coredata/nsincrementalstore/managedobjectcontextdidregisterobjects(with:))

# managedObjectContextDidRegisterObjects(with:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Indicates that objects identified by a given array of object IDs are in use in a managed object context.

## Declaration

```swift
func managedObjectContextDidRegisterObjects(with objectIDs: [NSManagedObjectID])
```

## Parameters

- `objectIDs`: An array of object IDs.

<a id="Discussion"></a>

## Discussion

This method and [managedObjectContextDidUnregisterObjects(with:)](managedobjectcontextdidunregisterobjects%28with_%29.md) allow managed object contexts to communicate interest in the row data of specific objects in a manner akin to reference counting. For more details, see [managedObjectContextDidUnregisterObjects(with:)](managedobjectcontextdidunregisterobjects%28with_%29.md).

## See Also

### Responding to Context Changes

- [managedObjectContextDidUnregisterObjects(with:)](managedobjectcontextdidunregisterobjects%28with_%29.md): Indicates that objects identified by a given array of object IDs are no longer being used by a managed object context.

# managedObjectContextDidRegisterObjectsWithIDs: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Indicates that objects identified by a given array of object IDs are in use in a managed object context.

## Declaration

```objectivec
- (void) managedObjectContextDidRegisterObjectsWithIDs:(NSArray<NSManagedObjectID *> *) objectIDs;
```

## Parameters

- `objectIDs`: An array of object IDs.

<a id="Discussion"></a>

## Discussion

This method and [managedObjectContextDidUnregisterObjectsWithIDs:](managedobjectcontextdidunregisterobjects%28with_%29.md) allow managed object contexts to communicate interest in the row data of specific objects in a manner akin to reference counting. For more details, see [managedObjectContextDidUnregisterObjectsWithIDs:](managedobjectcontextdidunregisterobjects%28with_%29.md).

## See Also

### Responding to Context Changes

- [managedObjectContextDidUnregisterObjectsWithIDs:](managedobjectcontextdidunregisterobjects%28with_%29.md): Indicates that objects identified by a given array of object IDs are no longer being used by a managed object context.
