> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/merge-policies](https://developer.apple.com/documentation/coredata/merge-policies)

# Merge Policies (Swift)

**Framework:** Core Data  
**Kind:** API Collection

Define standard ways to handle conflicts during a save operation.

<a id="overview"></a>

## Overview

`NSErrorMergePolicy` is the default policy. It is the only policy that requires action to correct any conflicts. The other policies make a save go through silently by making changes that follow rules specific to that policy.

## Topics

### Policies

- [NSErrorMergePolicy](nserrormergepolicy.md): The default merge policy for all managed object contexts.
- [NSMergeByPropertyStoreTrumpMergePolicy](nsmergebypropertystoretrumpmergepolicy.md): A property-based merge policy that applies external changes.
- [NSMergeByPropertyObjectTrumpMergePolicy](nsmergebypropertyobjecttrumpmergepolicy.md): A property-based merge policy that applies in-memory changes.
- [NSOverwriteMergePolicy](nsoverwritemergepolicy.md): A merge policy that overwrites the entire stored object.
- [NSRollbackMergePolicy](nsrollbackmergepolicy.md): A merge policy that discards unsaved changes.
- [NSMergePolicyType](nsmergepolicytype.md): Constants that define merge policy types.

## See Also

### Defining Merge Policies

- [error](nsmergepolicy/error.md): The default merge policy for all managed object contexts.
- [mergeByPropertyStoreTrump](nsmergepolicy/mergebypropertystoretrump.md): A property-based merge policy that applies external changes.
- [mergeByPropertyObjectTrump](nsmergepolicy/mergebypropertyobjecttrump.md): A property-based merge policy that applies in-memory changes.
- [overwrite](nsmergepolicy/overwrite.md): A merge policy that overwrites the entire stored object.
- [rollback](nsmergepolicy/rollback.md): A merge policy that discards unsaved changes.

# Merge Policies (Objective-C)

**Framework:** Core Data  
**Kind:** API Collection

Define standard ways to handle conflicts during a save operation.

<a id="overview"></a>

## Overview

`NSErrorMergePolicy` is the default policy. It is the only policy that requires action to correct any conflicts. The other policies make a save go through silently by making changes that follow rules specific to that policy.

## Topics

### Policies

- [NSErrorMergePolicy](nserrormergepolicy.md): The default merge policy for all managed object contexts.
- [NSMergeByPropertyStoreTrumpMergePolicy](nsmergebypropertystoretrumpmergepolicy.md): A property-based merge policy that applies external changes.
- [NSMergeByPropertyObjectTrumpMergePolicy](nsmergebypropertyobjecttrumpmergepolicy.md): A property-based merge policy that applies in-memory changes.
- [NSOverwriteMergePolicy](nsoverwritemergepolicy.md): A merge policy that overwrites the entire stored object.
- [NSRollbackMergePolicy](nsrollbackmergepolicy.md): A merge policy that discards unsaved changes.
- [NSMergePolicyType](nsmergepolicytype.md): Constants that define merge policy types.

## See Also

### Defining Merge Policies

- [errorMergePolicy](nsmergepolicy/error.md): The default merge policy for all managed object contexts.
- [mergeByPropertyStoreTrumpMergePolicy](nsmergepolicy/mergebypropertystoretrump.md): A property-based merge policy that applies external changes.
- [mergeByPropertyObjectTrumpMergePolicy](nsmergepolicy/mergebypropertyobjecttrump.md): A property-based merge policy that applies in-memory changes.
- [overwriteMergePolicy](nsmergepolicy/overwrite.md): A merge policy that overwrites the entire stored object.
- [rollbackMergePolicy](nsmergepolicy/rollback.md): A merge policy that discards unsaved changes.
