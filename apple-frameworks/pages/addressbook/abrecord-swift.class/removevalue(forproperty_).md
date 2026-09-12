> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abrecord-swift.class/removevalue(forproperty:)](https://developer.apple.com/documentation/addressbook/abrecord-swift.class/removevalue(forproperty:))

# removeValue(forProperty:) (Swift)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Removes the value for a given property.

## Declaration

```swift
func removeValue(forProperty property: String!) -> Bool
```

## Parameters

- `property`: The property whose value will be removed.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the value is removed successfully; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

When you next call [value(forProperty:)](value%28forproperty_%29.md) on that property, it returns `nil`.

If property is `nil`, this method raises an exception.

For a list of the available properties, see [Accessing Address Book Records](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/AddressBook/Tasks/AccessingData.html#//apple_ref/doc/uid/20001023) in [Address Book Programming Guide for Mac](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/AddressBook/AddressBook.html#//apple_ref/doc/uid/10000117i).

## See Also

### Retrieving and Setting Values

- [setValue(\_:forProperty:)](setvalue%28__forproperty_%29.md): Sets the value of a given property for a record.
- [setValue(\_:forProperty:error:)](setvalue%28__forproperty_error_%29.md): Sets the value of a given property for a record, returning error information.
- [value(forProperty:)](value%28forproperty_%29.md): Returns the value of a given property for a record.

# removeValueForProperty: (Objective-C)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS

Removes the value for a given property.

## Declaration

```objectivec
- (BOOL) removeValueForProperty:(NSString *) property;
```

## Parameters

- `property`: The property whose value will be removed.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the value is removed successfully; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

When you next call [valueForProperty:](value%28forproperty_%29.md) on that property, it returns `nil`.

If property is `nil`, this method raises an exception.

For a list of the available properties, see [Accessing Address Book Records](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/AddressBook/Tasks/AccessingData.html#//apple_ref/doc/uid/20001023) in [Address Book Programming Guide for Mac](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/AddressBook/AddressBook.html#//apple_ref/doc/uid/10000117i).

## See Also

### Retrieving and Setting Values

- [setValue:forProperty:](setvalue%28__forproperty_%29.md): Sets the value of a given property for a record.
- [setValue:forProperty:error:](setvalue%28__forproperty_error_%29.md): Sets the value of a given property for a record, returning error information.
- [valueForProperty:](value%28forproperty_%29.md): Returns the value of a given property for a record.
