> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmergepolicytype/mergebypropertyobjecttrumpmergepolicytype](https://developer.apple.com/documentation/coredata/nsmergepolicytype/mergebypropertyobjecttrumpmergepolicytype)

# NSMergePolicyType.mergeByPropertyObjectTrumpMergePolicyType (Swift)

**Framework:** Core Data  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A property-based merge policy that applies in-memory changes.

## Declaration

```swift
case mergeByPropertyObjectTrumpMergePolicyType
```

## Mentioned In

- [Configuring Entities](../configuring-entities.md)

<a id="Discussion"></a>

## Discussion

A policy that merges conflicts between the persistent store’s version of the object and the current in-memory version by individual property, with in-memory changes trumping external changes.

## See Also

### Policies

- [NSMergePolicyType.errorMergePolicyType](errormergepolicytype.md): The default merge policy for all managed object contexts.
- [NSMergePolicyType.mergeByPropertyStoreTrumpMergePolicyType](mergebypropertystoretrumpmergepolicytype.md): A property-based merge policy that applies external changes.
- [NSMergePolicyType.overwriteMergePolicyType](overwritemergepolicytype.md): A merge policy type that overwrites the entire stored object.
- [NSMergePolicyType.rollbackMergePolicyType](rollbackmergepolicytype.md): A merge policy that discards unsaved changes.

# NSMergeByPropertyObjectTrumpMergePolicyType (Objective-C)

**Framework:** Core Data  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A property-based merge policy that applies in-memory changes.

## Declaration

```objectivec
NSMergeByPropertyObjectTrumpMergePolicyType
```

## Mentioned In

- [Configuring Entities](../configuring-entities.md)

<a id="Discussion"></a>

## Discussion

A policy that merges conflicts between the persistent store’s version of the object and the current in-memory version by individual property, with in-memory changes trumping external changes.

## See Also

### Policies

- [NSErrorMergePolicyType](errormergepolicytype.md): The default merge policy for all managed object contexts.
- [NSMergeByPropertyStoreTrumpMergePolicyType](mergebypropertystoretrumpmergepolicytype.md): A property-based merge policy that applies external changes.
- [NSOverwriteMergePolicyType](overwritemergepolicytype.md): A merge policy type that overwrites the entire stored object.
- [NSRollbackMergePolicyType](rollbackmergepolicytype.md): A merge policy that discards unsaved changes.
