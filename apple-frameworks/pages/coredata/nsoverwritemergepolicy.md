> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coredata/nsoverwritemergepolicy

# NSOverwriteMergePolicy (Swift)

**Framework:** Core Data  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A merge policy that overwrites the entire stored object.

## Declaration

```swift
var NSOverwriteMergePolicy: AnyObject
```

<a id="Discussion"></a>

## Discussion

This policy merges conflicts between the persistent store’s version of the object and the current in-memory version by saving the entire in-memory object to the persistent store.

## See Also

### Policies

- [NSErrorMergePolicy](nserrormergepolicy.md): The default merge policy for all managed object contexts.
- [NSMergeByPropertyStoreTrumpMergePolicy](nsmergebypropertystoretrumpmergepolicy.md): A property-based merge policy that applies external changes.
- [NSMergeByPropertyObjectTrumpMergePolicy](nsmergebypropertyobjecttrumpmergepolicy.md): A property-based merge policy that applies in-memory changes.
- [NSRollbackMergePolicy](nsrollbackmergepolicy.md): A merge policy that discards unsaved changes.
- [NSMergePolicyType](nsmergepolicytype.md): Constants that define merge policy types.

# NSOverwriteMergePolicy (Objective-C)

**Framework:** Core Data  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A merge policy that overwrites the entire stored object.

## Declaration

```objectivec
extern id NSOverwriteMergePolicy;
```

<a id="Discussion"></a>

## Discussion

This policy merges conflicts between the persistent store’s version of the object and the current in-memory version by saving the entire in-memory object to the persistent store.

## See Also

### Policies

- [NSErrorMergePolicy](nserrormergepolicy.md): The default merge policy for all managed object contexts.
- [NSMergeByPropertyStoreTrumpMergePolicy](nsmergebypropertystoretrumpmergepolicy.md): A property-based merge policy that applies external changes.
- [NSMergeByPropertyObjectTrumpMergePolicy](nsmergebypropertyobjecttrumpmergepolicy.md): A property-based merge policy that applies in-memory changes.
- [NSRollbackMergePolicy](nsrollbackmergepolicy.md): A merge policy that discards unsaved changes.
- [NSMergePolicyType](nsmergepolicytype.md): Constants that define merge policy types.
