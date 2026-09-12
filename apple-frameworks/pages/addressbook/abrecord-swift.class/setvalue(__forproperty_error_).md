> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abrecord-swift.class/setvalue(_:forproperty:error:)](https://developer.apple.com/documentation/addressbook/abrecord-swift.class/setvalue(_:forproperty:error:))

# setValue(\_:forProperty:error:) (Swift)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Sets the value of a given property for a record, returning error information.

## Declaration

```swift
func setValue(_ value: Any!, forProperty property: String!, error: ()) throws
```

## Parameters

- `value`: The value to set for `property`.
- `property`: The property whose value will be set.
- `error`: A pointer to an error object that is set to an [NSError](../../foundation/nserror.md) instance if an error occurs.

<a id="Discussion"></a>

## Discussion

The type of the value must match the property’s type (see [Property Types](../property_types.md) for a list of possible property types). If `property` is `nil` or if `value` is not of the correct type, this method raises an exception. If `property` is a multivalue list property, this method checks to see if the values in the multivalue list are the same type. If the multivalue list contains mixed types, the value will not be set successfully.

For a list of the available properties, see [Accessing Address Book Records](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/AddressBook/Tasks/AccessingData.html#//apple_ref/doc/uid/20001023) in [Address Book Programming Guide for Mac](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/AddressBook/AddressBook.html#//apple_ref/doc/uid/10000117i).

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Retrieving and Setting Values

- [removeValue(forProperty:)](removevalue%28forproperty_%29.md): Removes the value for a given property.
- [setValue(\_:forProperty:)](setvalue%28__forproperty_%29.md): Sets the value of a given property for a record.
- [value(forProperty:)](value%28forproperty_%29.md): Returns the value of a given property for a record.

# setValue:forProperty:error: (Objective-C)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Sets the value of a given property for a record, returning error information.

## Declaration

```objectivec
- (BOOL) setValue:(id) value forProperty:(NSString *) property error:(NSError **) error;
```

## Parameters

- `value`: The value to set for `property`.
- `property`: The property whose value will be set.
- `error`: A pointer to an error object that is set to an [NSError](../../foundation/nserror.md) instance if an error occurs.

<a id="return-value"></a>

## Return Value

`true` if the value was set successfully; otherwise, `false`.

<a id="Discussion"></a>

## Discussion

The type of the value must match the property’s type (see [Property Types](../property_types.md) for a list of possible property types). If `property` is `nil` or if `value` is not of the correct type, this method raises an exception. If `property` is a multivalue list property, this method checks to see if the values in the multivalue list are the same type. If the multivalue list contains mixed types, the value will not be set successfully.

For a list of the available properties, see [Accessing Address Book Records](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/AddressBook/Tasks/AccessingData.html#//apple_ref/doc/uid/20001023) in [Address Book Programming Guide for Mac](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/AddressBook/AddressBook.html#//apple_ref/doc/uid/10000117i).

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Retrieving and Setting Values

- [removeValueForProperty:](removevalue%28forproperty_%29.md): Removes the value for a given property.
- [setValue:forProperty:](setvalue%28__forproperty_%29.md): Sets the value of a given property for a record.
- [valueForProperty:](value%28forproperty_%29.md): Returns the value of a given property for a record.
