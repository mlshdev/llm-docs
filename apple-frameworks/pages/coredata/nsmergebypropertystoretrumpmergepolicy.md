> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmergebypropertystoretrumpmergepolicy](https://developer.apple.com/documentation/coredata/nsmergebypropertystoretrumpmergepolicy)

# NSMergeByPropertyStoreTrumpMergePolicy (Swift)

**Framework:** Core Data  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A property-based merge policy that applies external changes.

## Declaration

```swift
var NSMergeByPropertyStoreTrumpMergePolicy: AnyObject
```

<a id="Discussion"></a>

## Discussion

A policy that merges conflicts between the persistent store’s version of the object and the current in-memory version by individual property, with external changes trumping in-memory changes.

## See Also

### Policies

- [NSErrorMergePolicy](nserrormergepolicy.md): The default merge policy for all managed object contexts.
- [NSMergeByPropertyObjectTrumpMergePolicy](nsmergebypropertyobjecttrumpmergepolicy.md): A property-based merge policy that applies in-memory changes.
- [NSOverwriteMergePolicy](nsoverwritemergepolicy.md): A merge policy that overwrites the entire stored object.
- [NSRollbackMergePolicy](nsrollbackmergepolicy.md): A merge policy that discards unsaved changes.
- [NSMergePolicyType](nsmergepolicytype.md): Constants that define merge policy types.

# NSMergeByPropertyStoreTrumpMergePolicy (Objective-C)

**Framework:** Core Data  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A property-based merge policy that applies external changes.

## Declaration

```objectivec
extern id NSMergeByPropertyStoreTrumpMergePolicy;
```

<a id="Discussion"></a>

## Discussion

A policy that merges conflicts between the persistent store’s version of the object and the current in-memory version by individual property, with external changes trumping in-memory changes.

## See Also

### Policies

- [NSErrorMergePolicy](nserrormergepolicy.md): The default merge policy for all managed object contexts.
- [NSMergeByPropertyObjectTrumpMergePolicy](nsmergebypropertyobjecttrumpmergepolicy.md): A property-based merge policy that applies in-memory changes.
- [NSOverwriteMergePolicy](nsoverwritemergepolicy.md): A merge policy that overwrites the entire stored object.
- [NSRollbackMergePolicy](nsrollbackmergepolicy.md): A merge policy that discards unsaved changes.
- [NSMergePolicyType](nsmergepolicytype.md): Constants that define merge policy types.
