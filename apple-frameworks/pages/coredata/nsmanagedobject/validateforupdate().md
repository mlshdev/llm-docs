> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobject/validateforupdate()](https://developer.apple.com/documentation/coredata/nsmanagedobject/validateforupdate())

# validateForUpdate() (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Determines whether the managed object’s current state is valid.

## Declaration

```swift
func validateForUpdate() throws
```

<a id="Discussion"></a>

## Discussion

`NSManagedObject`‘s implementation iterates through all of the receiver’s properties validating each in turn. If this results in more than one error, the `userInfo` dictionary in the `NSError` returned in `error` contains a key `NSDetailedErrorsKey`; the corresponding value is an array containing the individual validation errors. If you pass `NULL` as the error, validation will abort after the first failure.

> **Important**

>  Subclasses should invoke super’s implementation before performing their own validation, and should combine any error returned by super’s implementation with their own (see Managed Object Validation).

## See Also

### Managing Data Validation

- [validateValue(\_:forKey:)](validatevalue%28__forkey_%29.md): Validates a property value for a given key.
- [validateForDelete()](validatefordelete%28%29.md): Determines whether the managed object can be deleted in its current state.
- [validateForInsert()](validateforinsert%28%29.md): Determines whether the managed object can be inserted in its current state.
- [Validation error codes](../1535452-validation-error-codes.md): Error codes relating to the validation of managed objects.
- [NSValidationKeyErrorKey](../nsvalidationkeyerrorkey.md): The error key for the attribute that failed to validate.
- [NSValidationObjectErrorKey](../nsvalidationobjecterrorkey.md): The error key for the object that failed to validate.
- [NSValidationPredicateErrorKey](../nsvalidationpredicateerrorkey.md): The error key for the predicate that failed to validate.
- [NSValidationValueErrorKey](../nsvalidationvalueerrorkey.md): The error key for the value that failed to validate.

# validateForUpdate: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Determines whether the managed object’s current state is valid.

## Declaration

```objectivec
- (BOOL) validateForUpdate:(NSError **) error;
```

## Parameters

- `error`: If the receiver’s current state is invalid, upon return contains an instance of `NSError` that describes the problem.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver’s current state is valid, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

`NSManagedObject`‘s implementation iterates through all of the receiver’s properties validating each in turn. If this results in more than one error, the `userInfo` dictionary in the `NSError` returned in `error` contains a key `NSDetailedErrorsKey`; the corresponding value is an array containing the individual validation errors. If you pass `NULL` as the error, validation will abort after the first failure.

> **Important**

>  Subclasses should invoke super’s implementation before performing their own validation, and should combine any error returned by super’s implementation with their own (see Managed Object Validation).

## See Also

### Managing Data Validation

- [validateValue:forKey:error:](validatevalue%28__forkey_%29.md): Validates a property value for a given key.
- [validateForDelete:](validatefordelete%28%29.md): Determines whether the managed object can be deleted in its current state.
- [validateForInsert:](validateforinsert%28%29.md): Determines whether the managed object can be inserted in its current state.
- [Validation error codes](../1535452-validation-error-codes.md): Error codes relating to the validation of managed objects.
- [NSValidationKeyErrorKey](../nsvalidationkeyerrorkey.md): The error key for the attribute that failed to validate.
- [NSValidationObjectErrorKey](../nsvalidationobjecterrorkey.md): The error key for the object that failed to validate.
- [NSValidationPredicateErrorKey](../nsvalidationpredicateerrorkey.md): The error key for the predicate that failed to validate.
- [NSValidationValueErrorKey](../nsvalidationvalueerrorkey.md): The error key for the value that failed to validate.
