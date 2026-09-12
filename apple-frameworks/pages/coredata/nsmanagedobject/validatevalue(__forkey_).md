> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobject/validatevalue(_:forkey:)](https://developer.apple.com/documentation/coredata/nsmanagedobject/validatevalue(_:forkey:))

# validateValue(\_:forKey:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Validates a property value for a given key.

## Declaration

```swift
func validateValue(_ value: AutoreleasingUnsafeMutablePointer<AnyObject?>, forKey key: String) throws
```

## Parameters

- `value`: A pointer to an object.
- `key`: The name of one of the receiver’s properties.

<a id="Discussion"></a>

## Discussion

This method is responsible for two things: coercing the value into an appropriate type for the object, and validating it according to the object’s rules.

The default implementation provided by `NSManagedObject` consults the object’s entity description to coerce the value and to check for basic errors, such as a null value when that isn’t allowed and the length of strings when a field width is specified for the attribute. It then searches for a method of the form `validate<Key>:error:` and invokes it if it exists.

You can implement methods of the form `validate<Key>:error:` to perform validation that is not possible using the constraints available in the property description. If it finds an unacceptable value, your validation method should return [false](https://developer.apple.com/documentation/swift/false) and in `error` an `NSError` object that describes the problem. For more details, see Managed Object Validation. For inter-property validation (to check for combinations of values that are invalid), see [validateForUpdate()](validateforupdate%28%29.md) and related methods.

## See Also

### Managing Data Validation

- [validateForDelete()](validatefordelete%28%29.md): Determines whether the managed object can be deleted in its current state.
- [validateForInsert()](validateforinsert%28%29.md): Determines whether the managed object can be inserted in its current state.
- [validateForUpdate()](validateforupdate%28%29.md): Determines whether the managed object’s current state is valid.
- [Validation error codes](../1535452-validation-error-codes.md): Error codes relating to the validation of managed objects.
- [NSValidationKeyErrorKey](../nsvalidationkeyerrorkey.md): The error key for the attribute that failed to validate.
- [NSValidationObjectErrorKey](../nsvalidationobjecterrorkey.md): The error key for the object that failed to validate.
- [NSValidationPredicateErrorKey](../nsvalidationpredicateerrorkey.md): The error key for the predicate that failed to validate.
- [NSValidationValueErrorKey](../nsvalidationvalueerrorkey.md): The error key for the value that failed to validate.

# validateValue:forKey:error: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Validates a property value for a given key.

## Declaration

```objectivec
- (BOOL) validateValue:(id*) value forKey:(NSString *) key error:(NSError **) error;
```

## Parameters

- `value`: A pointer to an object.
- `key`: The name of one of the receiver’s properties.
- `error`: If `value` is not a valid value for `key` (and cannot be coerced), upon return contains an instance of `NSError` that describes the problem.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `value` is a valid value for `key` (or if `value` can be coerced into a valid value for `key`), otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method is responsible for two things: coercing the value into an appropriate type for the object, and validating it according to the object’s rules.

The default implementation provided by `NSManagedObject` consults the object’s entity description to coerce the value and to check for basic errors, such as a null value when that isn’t allowed and the length of strings when a field width is specified for the attribute. It then searches for a method of the form `validate<Key>:error:` and invokes it if it exists.

You can implement methods of the form `validate<Key>:error:` to perform validation that is not possible using the constraints available in the property description. If it finds an unacceptable value, your validation method should return [false](https://developer.apple.com/documentation/swift/false) and in `error` an `NSError` object that describes the problem. For more details, see Managed Object Validation. For inter-property validation (to check for combinations of values that are invalid), see [validateForUpdate:](validateforupdate%28%29.md) and related methods.

## See Also

### Managing Data Validation

- [validateForDelete:](validatefordelete%28%29.md): Determines whether the managed object can be deleted in its current state.
- [validateForInsert:](validateforinsert%28%29.md): Determines whether the managed object can be inserted in its current state.
- [validateForUpdate:](validateforupdate%28%29.md): Determines whether the managed object’s current state is valid.
- [Validation error codes](../1535452-validation-error-codes.md): Error codes relating to the validation of managed objects.
- [NSValidationKeyErrorKey](../nsvalidationkeyerrorkey.md): The error key for the attribute that failed to validate.
- [NSValidationObjectErrorKey](../nsvalidationobjecterrorkey.md): The error key for the object that failed to validate.
- [NSValidationPredicateErrorKey](../nsvalidationpredicateerrorkey.md): The error key for the predicate that failed to validate.
- [NSValidationValueErrorKey](../nsvalidationvalueerrorkey.md): The error key for the value that failed to validate.
