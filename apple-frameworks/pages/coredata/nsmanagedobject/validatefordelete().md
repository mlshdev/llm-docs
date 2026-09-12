> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobject/validatefordelete()](https://developer.apple.com/documentation/coredata/nsmanagedobject/validatefordelete())

# validateForDelete() (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Determines whether the managed object can be deleted in its current state.

## Declaration

```swift
func validateForDelete() throws
```

<a id="Discussion"></a>

## Discussion

An object cannot be deleted if it has a relationship has a “deny” delete rule and that relationship has a destination object.

`NSManagedObject`‘s implementation sends the receiver’s entity description a message which performs basic checking based on the presence or absence of values.

> **Important**

>  Subclasses should invoke super’s implementation before performing their own validation, and should combine any error returned by super’s implementation with their own (see Managed Object Validation).

## See Also

### Managing Data Validation

- [validateValue(\_:forKey:)](validatevalue%28__forkey_%29.md): Validates a property value for a given key.
- [validateForInsert()](validateforinsert%28%29.md): Determines whether the managed object can be inserted in its current state.
- [validateForUpdate()](validateforupdate%28%29.md): Determines whether the managed object’s current state is valid.
- [Validation error codes](../1535452-validation-error-codes.md): Error codes relating to the validation of managed objects.
- [NSValidationKeyErrorKey](../nsvalidationkeyerrorkey.md): The error key for the attribute that failed to validate.
- [NSValidationObjectErrorKey](../nsvalidationobjecterrorkey.md): The error key for the object that failed to validate.
- [NSValidationPredicateErrorKey](../nsvalidationpredicateerrorkey.md): The error key for the predicate that failed to validate.
- [NSValidationValueErrorKey](../nsvalidationvalueerrorkey.md): The error key for the value that failed to validate.

# validateForDelete: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Determines whether the managed object can be deleted in its current state.

## Declaration

```objectivec
- (BOOL) validateForDelete:(NSError **) error;
```

## Parameters

- `error`: If the receiver cannot be deleted in its current state, upon return contains an instance of `NSError` that describes the problem.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver can be deleted in its current state, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

An object cannot be deleted if it has a relationship has a “deny” delete rule and that relationship has a destination object.

`NSManagedObject`‘s implementation sends the receiver’s entity description a message which performs basic checking based on the presence or absence of values.

> **Important**

>  Subclasses should invoke super’s implementation before performing their own validation, and should combine any error returned by super’s implementation with their own (see Managed Object Validation).

## See Also

### Managing Data Validation

- [validateValue:forKey:error:](validatevalue%28__forkey_%29.md): Validates a property value for a given key.
- [validateForInsert:](validateforinsert%28%29.md): Determines whether the managed object can be inserted in its current state.
- [validateForUpdate:](validateforupdate%28%29.md): Determines whether the managed object’s current state is valid.
- [Validation error codes](../1535452-validation-error-codes.md): Error codes relating to the validation of managed objects.
- [NSValidationKeyErrorKey](../nsvalidationkeyerrorkey.md): The error key for the attribute that failed to validate.
- [NSValidationObjectErrorKey](../nsvalidationobjecterrorkey.md): The error key for the object that failed to validate.
- [NSValidationPredicateErrorKey](../nsvalidationpredicateerrorkey.md): The error key for the predicate that failed to validate.
- [NSValidationValueErrorKey](../nsvalidationvalueerrorkey.md): The error key for the value that failed to validate.
