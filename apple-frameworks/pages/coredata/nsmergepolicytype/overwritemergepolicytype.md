> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmergepolicytype/overwritemergepolicytype](https://developer.apple.com/documentation/coredata/nsmergepolicytype/overwritemergepolicytype)

# NSMergePolicyType.overwriteMergePolicyType (Swift)

**Framework:** Core Data  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A merge policy type that overwrites the entire stored object.

## Declaration

```swift
case overwriteMergePolicyType
```

<a id="Discussion"></a>

## Discussion

This policy merges conflicts between the persistent store’s version of the object and the current in-memory version by saving the entire in-memory object to the persistent store.

## See Also

### Policies

- [NSMergePolicyType.errorMergePolicyType](errormergepolicytype.md): The default merge policy for all managed object contexts.
- [NSMergePolicyType.mergeByPropertyStoreTrumpMergePolicyType](mergebypropertystoretrumpmergepolicytype.md): A property-based merge policy that applies external changes.
- [NSMergePolicyType.mergeByPropertyObjectTrumpMergePolicyType](mergebypropertyobjecttrumpmergepolicytype.md): A property-based merge policy that applies in-memory changes.
- [NSMergePolicyType.rollbackMergePolicyType](rollbackmergepolicytype.md): A merge policy that discards unsaved changes.

# NSOverwriteMergePolicyType (Objective-C)

**Framework:** Core Data  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A merge policy type that overwrites the entire stored object.

## Declaration

```objectivec
NSOverwriteMergePolicyType
```

<a id="Discussion"></a>

## Discussion

This policy merges conflicts between the persistent store’s version of the object and the current in-memory version by saving the entire in-memory object to the persistent store.

## See Also

### Policies

- [NSErrorMergePolicyType](errormergepolicytype.md): The default merge policy for all managed object contexts.
- [NSMergeByPropertyStoreTrumpMergePolicyType](mergebypropertystoretrumpmergepolicytype.md): A property-based merge policy that applies external changes.
- [NSMergeByPropertyObjectTrumpMergePolicyType](mergebypropertyobjecttrumpmergepolicytype.md): A property-based merge policy that applies in-memory changes.
- [NSRollbackMergePolicyType](rollbackmergepolicytype.md): A merge policy that discards unsaved changes.
