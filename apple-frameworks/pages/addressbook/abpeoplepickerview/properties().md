> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abpeoplepickerview/properties()](https://developer.apple.com/documentation/addressbook/abpeoplepickerview/properties())

# properties() (Swift)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Returns an array of the properties whose values are shown in the record list.

## Declaration

```swift
func properties() -> [Any]!
```

<a id="Discussion"></a>

## Discussion

For additional information about properties see [Using Property Lists](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/AddressBook/Tasks/AccessingData.html#//apple_ref/doc/uid/20001023-103048).

## See Also

### Working with Properties in the Record List

- [addProperty(\_:)](addproperty%28__%29.md): Adds a property to the group of properties whose values are shown in the record list.
- [columnTitle(forProperty:)](columntitle%28forproperty_%29.md): Returns the title of a custom property.
- [displayedProperty](displayedproperty.md): The property currently displayed in the record list.
- [removeProperty(\_:)](removeproperty%28__%29.md): Removes a property from the group of properties whose values are shown in the record list.
- [setColumnTitle(\_:forProperty:)](setcolumntitle%28__forproperty_%29.md): Sets the title displayed in the people picker for a property.

# properties (Objective-C)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Returns an array of the properties whose values are shown in the record list.

## Declaration

```objectivec
- (NSArray *) properties;
```

<a id="Discussion"></a>

## Discussion

For additional information about properties see [Using Property Lists](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/AddressBook/Tasks/AccessingData.html#//apple_ref/doc/uid/20001023-103048).

## See Also

### Working with Properties in the Record List

- [addProperty:](addproperty%28__%29.md): Adds a property to the group of properties whose values are shown in the record list.
- [columnTitleForProperty:](columntitle%28forproperty_%29.md): Returns the title of a custom property.
- [displayedProperty](displayedproperty.md): The property currently displayed in the record list.
- [removeProperty:](removeproperty%28__%29.md): Removes a property from the group of properties whose values are shown in the record list.
- [setColumnTitle:forProperty:](setcolumntitle%28__forproperty_%29.md): Sets the title displayed in the people picker for a property.
