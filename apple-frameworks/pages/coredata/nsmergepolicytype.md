> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmergepolicytype](https://developer.apple.com/documentation/coredata/nsmergepolicytype)

# NSMergePolicyType (Swift)

**Framework:** Core Data  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that define merge policy types.

## Declaration

```swift
enum NSMergePolicyType
```

## Topics

### Policies

- [NSMergePolicyType.errorMergePolicyType](nsmergepolicytype/errormergepolicytype.md): The default merge policy for all managed object contexts.
- [NSMergePolicyType.mergeByPropertyStoreTrumpMergePolicyType](nsmergepolicytype/mergebypropertystoretrumpmergepolicytype.md): A property-based merge policy that applies external changes.
- [NSMergePolicyType.mergeByPropertyObjectTrumpMergePolicyType](nsmergepolicytype/mergebypropertyobjecttrumpmergepolicytype.md): A property-based merge policy that applies in-memory changes.
- [NSMergePolicyType.overwriteMergePolicyType](nsmergepolicytype/overwritemergepolicytype.md): A merge policy type that overwrites the entire stored object.
- [NSMergePolicyType.rollbackMergePolicyType](nsmergepolicytype/rollbackmergepolicytype.md): A merge policy that discards unsaved changes.

### Initializers

- [init(rawValue:)](nsmergepolicytype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Policies

- [NSErrorMergePolicy](nserrormergepolicy.md): The default merge policy for all managed object contexts.
- [NSMergeByPropertyStoreTrumpMergePolicy](nsmergebypropertystoretrumpmergepolicy.md): A property-based merge policy that applies external changes.
- [NSMergeByPropertyObjectTrumpMergePolicy](nsmergebypropertyobjecttrumpmergepolicy.md): A property-based merge policy that applies in-memory changes.
- [NSOverwriteMergePolicy](nsoverwritemergepolicy.md): A merge policy that overwrites the entire stored object.
- [NSRollbackMergePolicy](nsrollbackmergepolicy.md): A merge policy that discards unsaved changes.

# NSMergePolicyType (Objective-C)

**Framework:** Core Data  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that define merge policy types.

## Declaration

```objectivec
enum NSMergePolicyType : NSUInteger;
```

## Topics

### Policies

- [NSErrorMergePolicyType](nsmergepolicytype/errormergepolicytype.md): The default merge policy for all managed object contexts.
- [NSMergeByPropertyStoreTrumpMergePolicyType](nsmergepolicytype/mergebypropertystoretrumpmergepolicytype.md): A property-based merge policy that applies external changes.
- [NSMergeByPropertyObjectTrumpMergePolicyType](nsmergepolicytype/mergebypropertyobjecttrumpmergepolicytype.md): A property-based merge policy that applies in-memory changes.
- [NSOverwriteMergePolicyType](nsmergepolicytype/overwritemergepolicytype.md): A merge policy type that overwrites the entire stored object.
- [NSRollbackMergePolicyType](nsmergepolicytype/rollbackmergepolicytype.md): A merge policy that discards unsaved changes.

## See Also

### Policies

- [NSErrorMergePolicy](nserrormergepolicy.md): The default merge policy for all managed object contexts.
- [NSMergeByPropertyStoreTrumpMergePolicy](nsmergebypropertystoretrumpmergepolicy.md): A property-based merge policy that applies external changes.
- [NSMergeByPropertyObjectTrumpMergePolicy](nsmergebypropertyobjecttrumpmergepolicy.md): A property-based merge policy that applies in-memory changes.
- [NSOverwriteMergePolicy](nsoverwritemergepolicy.md): A merge policy that overwrites the entire stored object.
- [NSRollbackMergePolicy](nsrollbackmergepolicy.md): A merge policy that discards unsaved changes.
