> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nserrormergepolicy](https://developer.apple.com/documentation/coredata/nserrormergepolicy)

# NSErrorMergePolicy (Swift)

**Framework:** Core Data  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The default merge policy for all managed object contexts.

## Declaration

```swift
var NSErrorMergePolicy: AnyObject
```

<a id="Discussion"></a>

## Discussion

If a save fails because of conflicting objects, you can find the IDs of those objects in error’s `userInfo` dictionary. Use the [NSInsertedObjectsKey](nsinsertedobjectskey.md) and [NSUpdatedObjectsKey](nsupdatedobjectskey.md) keys to extract the object IDs.

## See Also

### Policies

- [NSMergeByPropertyStoreTrumpMergePolicy](nsmergebypropertystoretrumpmergepolicy.md): A property-based merge policy that applies external changes.
- [NSMergeByPropertyObjectTrumpMergePolicy](nsmergebypropertyobjecttrumpmergepolicy.md): A property-based merge policy that applies in-memory changes.
- [NSOverwriteMergePolicy](nsoverwritemergepolicy.md): A merge policy that overwrites the entire stored object.
- [NSRollbackMergePolicy](nsrollbackmergepolicy.md): A merge policy that discards unsaved changes.
- [NSMergePolicyType](nsmergepolicytype.md): Constants that define merge policy types.

# NSErrorMergePolicy (Objective-C)

**Framework:** Core Data  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The default merge policy for all managed object contexts.

## Declaration

```objectivec
extern id NSErrorMergePolicy;
```

<a id="Discussion"></a>

## Discussion

If a save fails because of conflicting objects, you can find the IDs of those objects in error’s `userInfo` dictionary. Use the [NSInsertedObjectsKey](nsinsertedobjectskey.md) and [NSUpdatedObjectsKey](nsupdatedobjectskey.md) keys to extract the object IDs.

## See Also

### Policies

- [NSMergeByPropertyStoreTrumpMergePolicy](nsmergebypropertystoretrumpmergepolicy.md): A property-based merge policy that applies external changes.
- [NSMergeByPropertyObjectTrumpMergePolicy](nsmergebypropertyobjecttrumpmergepolicy.md): A property-based merge policy that applies in-memory changes.
- [NSOverwriteMergePolicy](nsoverwritemergepolicy.md): A merge policy that overwrites the entire stored object.
- [NSRollbackMergePolicy](nsrollbackmergepolicy.md): A merge policy that discards unsaved changes.
- [NSMergePolicyType](nsmergepolicytype.md): Constants that define merge policy types.
