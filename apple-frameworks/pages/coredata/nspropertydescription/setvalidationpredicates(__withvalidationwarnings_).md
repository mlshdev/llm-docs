> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspropertydescription/setvalidationpredicates(_:withvalidationwarnings:)](https://developer.apple.com/documentation/coredata/nspropertydescription/setvalidationpredicates(_:withvalidationwarnings:))

# setValidationPredicates(\_:withValidationWarnings:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sets the validation predicates and warnings of the receiver.

## Declaration

```swift
func setValidationPredicates(_ validationPredicates: [NSPredicate]?, withValidationWarnings validationWarnings: [String]?)
```

## Parameters

- `validationPredicates`: An array containing the validation predicates for the receiver.
- `validationWarnings`: An array containing the validation warnings for the receiver.

<a id="Discussion"></a>

## Discussion

The `validationPredicates` and `validationWarnings` arrays should contain the same number of elements, and corresponding elements should appear at the same index in each array.

Instead of implementing individual validation methods, you can use this method to provide a list of predicates that are evaluated against the managed objects and a list of corresponding error messages (which can be localized).

<a id="Special-Considerations"></a>

### Special Considerations

This method raises an exception if the receiver’s model has been used by an object graph manager.

## See Also

### Supporting Validation

- [validationPredicates](validationpredicates.md): The validation predicates of the receiver.
- [validationWarnings](validationwarnings.md): The error strings associated with the receiver’s validation predicates.

# setValidationPredicates:withValidationWarnings: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sets the validation predicates and warnings of the receiver.

## Declaration

```objectivec
- (void) setValidationPredicates:(NSArray<NSPredicate *> *) validationPredicates withValidationWarnings:(NSArray<NSString *> *) validationWarnings;
```

## Parameters

- `validationPredicates`: An array containing the validation predicates for the receiver.
- `validationWarnings`: An array containing the validation warnings for the receiver.

<a id="Discussion"></a>

## Discussion

The `validationPredicates` and `validationWarnings` arrays should contain the same number of elements, and corresponding elements should appear at the same index in each array.

Instead of implementing individual validation methods, you can use this method to provide a list of predicates that are evaluated against the managed objects and a list of corresponding error messages (which can be localized).

<a id="Special-Considerations"></a>

### Special Considerations

This method raises an exception if the receiver’s model has been used by an object graph manager.

## See Also

### Supporting Validation

- [validationPredicates](validationpredicates.md): The validation predicates of the receiver.
- [validationWarnings](validationwarnings.md): The error strings associated with the receiver’s validation predicates.
