> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspropertydescription/validationpredicates](https://developer.apple.com/documentation/coredata/nspropertydescription/validationpredicates)

# validationPredicates (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The validation predicates of the receiver.

## Declaration

```swift
var validationPredicates: [NSPredicate] { get }
```

## See Also

### Supporting Validation

- [validationWarnings](validationwarnings.md): The error strings associated with the receiver’s validation predicates.
- [setValidationPredicates(\_:withValidationWarnings:)](setvalidationpredicates%28__withvalidationwarnings_%29.md): Sets the validation predicates and warnings of the receiver.

# validationPredicates (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The validation predicates of the receiver.

## Declaration

```objectivec
@property (strong, readonly) NSArray<NSPredicate *> * validationPredicates;
```

## See Also

### Supporting Validation

- [validationWarnings](validationwarnings.md): The error strings associated with the receiver’s validation predicates.
- [setValidationPredicates:withValidationWarnings:](setvalidationpredicates%28__withvalidationwarnings_%29.md): Sets the validation predicates and warnings of the receiver.
