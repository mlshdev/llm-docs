> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsrollbackmergepolicy](https://developer.apple.com/documentation/coredata/nsrollbackmergepolicy)

# NSRollbackMergePolicy (Swift)

**Framework:** Core Data  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A merge policy that discards unsaved changes.

## Declaration

```swift
var NSRollbackMergePolicy: AnyObject
```

<a id="Discussion"></a>

## Discussion

This policy merges conflicts between the persistent store’s version of the object and the current in-memory version by discarding unsaved changes.

## See Also

### Policies

- [NSErrorMergePolicy](nserrormergepolicy.md): The default merge policy for all managed object contexts.
- [NSMergeByPropertyStoreTrumpMergePolicy](nsmergebypropertystoretrumpmergepolicy.md): A property-based merge policy that applies external changes.
- [NSMergeByPropertyObjectTrumpMergePolicy](nsmergebypropertyobjecttrumpmergepolicy.md): A property-based merge policy that applies in-memory changes.
- [NSOverwriteMergePolicy](nsoverwritemergepolicy.md): A merge policy that overwrites the entire stored object.
- [NSMergePolicyType](nsmergepolicytype.md): Constants that define merge policy types.

# NSRollbackMergePolicy (Objective-C)

**Framework:** Core Data  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A merge policy that discards unsaved changes.

## Declaration

```objectivec
extern id NSRollbackMergePolicy;
```

<a id="Discussion"></a>

## Discussion

This policy merges conflicts between the persistent store’s version of the object and the current in-memory version by discarding unsaved changes.

## See Also

### Policies

- [NSErrorMergePolicy](nserrormergepolicy.md): The default merge policy for all managed object contexts.
- [NSMergeByPropertyStoreTrumpMergePolicy](nsmergebypropertystoretrumpmergepolicy.md): A property-based merge policy that applies external changes.
- [NSMergeByPropertyObjectTrumpMergePolicy](nsmergebypropertyobjecttrumpmergepolicy.md): A property-based merge policy that applies in-memory changes.
- [NSOverwriteMergePolicy](nsoverwritemergepolicy.md): A merge policy that overwrites the entire stored object.
- [NSMergePolicyType](nsmergepolicytype.md): Constants that define merge policy types.
