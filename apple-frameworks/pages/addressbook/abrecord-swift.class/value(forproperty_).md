> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abrecord-swift.class/value(forproperty:)](https://developer.apple.com/documentation/addressbook/abrecord-swift.class/value(forproperty:))

# value(forProperty:) (Swift)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Returns the value of a given property for a record.

## Declaration

```swift
func value(forProperty property: String!) -> Any!
```

## Parameters

- `property`: The property whose value will be returned.

<a id="return-value"></a>

## Return Value

The value of the given property.

<a id="Discussion"></a>

## Discussion

The type of the value depends on the property type (see [Property Types](../property_types.md) for a list of possible property types). Note that the returned value is always of an immutable type (for example, an `NSString` type, not an `NSMutableString` type, is returned).

If `property` is `nil`, this method raises an exception. If `property` is invalid, this method returns `nil`.

For a list of the available properties, see [Accessing Address Book Records](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/AddressBook/Tasks/AccessingData.html#//apple_ref/doc/uid/20001023) in [Address Book Programming Guide for Mac](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/AddressBook/AddressBook.html#//apple_ref/doc/uid/10000117i).

## See Also

### Retrieving and Setting Values

- [removeValue(forProperty:)](removevalue%28forproperty_%29.md): Removes the value for a given property.
- [setValue(\_:forProperty:)](setvalue%28__forproperty_%29.md): Sets the value of a given property for a record.
- [setValue(\_:forProperty:error:)](setvalue%28__forproperty_error_%29.md): Sets the value of a given property for a record, returning error information.

# valueForProperty: (Objective-C)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Returns the value of a given property for a record.

## Declaration

```objectivec
- (id) valueForProperty:(NSString *) property;
```

## Parameters

- `property`: The property whose value will be returned.

<a id="return-value"></a>

## Return Value

The value of the given property.

<a id="Discussion"></a>

## Discussion

The type of the value depends on the property type (see [Property Types](../property_types.md) for a list of possible property types). Note that the returned value is always of an immutable type (for example, an `NSString` type, not an `NSMutableString` type, is returned).

If `property` is `nil`, this method raises an exception. If `property` is invalid, this method returns `nil`.

For a list of the available properties, see [Accessing Address Book Records](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/AddressBook/Tasks/AccessingData.html#//apple_ref/doc/uid/20001023) in [Address Book Programming Guide for Mac](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/AddressBook/AddressBook.html#//apple_ref/doc/uid/10000117i).

## See Also

### Retrieving and Setting Values

- [removeValueForProperty:](removevalue%28forproperty_%29.md): Removes the value for a given property.
- [setValue:forProperty:](setvalue%28__forproperty_%29.md): Sets the value of a given property for a record.
- [setValue:forProperty:error:](setvalue%28__forproperty_error_%29.md): Sets the value of a given property for a record, returning error information.
