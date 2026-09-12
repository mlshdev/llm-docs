> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmergepolicytype/errormergepolicytype](https://developer.apple.com/documentation/coredata/nsmergepolicytype/errormergepolicytype)

# NSMergePolicyType.errorMergePolicyType (Swift)

**Framework:** Core Data  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The default merge policy for all managed object contexts.

## Declaration

```swift
case errorMergePolicyType
```

<a id="Discussion"></a>

## Discussion

If a save fails because of conflicting objects, you can find the IDs of those objects in error’s `userInfo` dictionary. Use the [NSInsertedObjectsKey](../nsinsertedobjectskey.md) and [NSUpdatedObjectsKey](../nsupdatedobjectskey.md) keys to extract the object IDs.

## See Also

### Policies

- [NSMergePolicyType.mergeByPropertyStoreTrumpMergePolicyType](mergebypropertystoretrumpmergepolicytype.md): A property-based merge policy that applies external changes.
- [NSMergePolicyType.mergeByPropertyObjectTrumpMergePolicyType](mergebypropertyobjecttrumpmergepolicytype.md): A property-based merge policy that applies in-memory changes.
- [NSMergePolicyType.overwriteMergePolicyType](overwritemergepolicytype.md): A merge policy type that overwrites the entire stored object.
- [NSMergePolicyType.rollbackMergePolicyType](rollbackmergepolicytype.md): A merge policy that discards unsaved changes.

# NSErrorMergePolicyType (Objective-C)

**Framework:** Core Data  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The default merge policy for all managed object contexts.

## Declaration

```objectivec
NSErrorMergePolicyType
```

<a id="Discussion"></a>

## Discussion

If a save fails because of conflicting objects, you can find the IDs of those objects in error’s `userInfo` dictionary. Use the [NSInsertedObjectsKey](../nsinsertedobjectskey.md) and [NSUpdatedObjectsKey](../nsupdatedobjectskey.md) keys to extract the object IDs.

## See Also

### Policies

- [NSMergeByPropertyStoreTrumpMergePolicyType](mergebypropertystoretrumpmergepolicytype.md): A property-based merge policy that applies external changes.
- [NSMergeByPropertyObjectTrumpMergePolicyType](mergebypropertyobjecttrumpmergepolicytype.md): A property-based merge policy that applies in-memory changes.
- [NSOverwriteMergePolicyType](overwritemergepolicytype.md): A merge policy type that overwrites the entire stored object.
- [NSRollbackMergePolicyType](rollbackmergepolicytype.md): A merge policy that discards unsaved changes.
