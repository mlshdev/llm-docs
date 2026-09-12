> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abpeoplepickerview/removeproperty(_:)](https://developer.apple.com/documentation/addressbook/abpeoplepickerview/removeproperty(_:))

# removeProperty(\_:) (Swift)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Removes a property from the group of properties whose values are shown in the record list.

## Declaration

```swift
func removeProperty(_ property: String!)
```

## Parameters

- `property`: The property to remove.

<a id="Discussion"></a>

## Discussion

For additional information about properties see [Using Property Lists](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/AddressBook/Tasks/AccessingData.html#//apple_ref/doc/uid/20001023-103048).

## See Also

### Working with Properties in the Record List

- [addProperty(\_:)](addproperty%28__%29.md): Adds a property to the group of properties whose values are shown in the record list.
- [columnTitle(forProperty:)](columntitle%28forproperty_%29.md): Returns the title of a custom property.
- [displayedProperty](displayedproperty.md): The property currently displayed in the record list.
- [properties()](properties%28%29.md): Returns an array of the properties whose values are shown in the record list.
- [setColumnTitle(\_:forProperty:)](setcolumntitle%28__forproperty_%29.md): Sets the title displayed in the people picker for a property.

# removeProperty: (Objective-C)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Removes a property from the group of properties whose values are shown in the record list.

## Declaration

```objectivec
- (void) removeProperty:(NSString *) property;
```

## Parameters

- `property`: The property to remove.

<a id="Discussion"></a>

## Discussion

For additional information about properties see [Using Property Lists](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/AddressBook/Tasks/AccessingData.html#//apple_ref/doc/uid/20001023-103048).

## See Also

### Working with Properties in the Record List

- [addProperty:](addproperty%28__%29.md): Adds a property to the group of properties whose values are shown in the record list.
- [columnTitleForProperty:](columntitle%28forproperty_%29.md): Returns the title of a custom property.
- [displayedProperty](displayedproperty.md): The property currently displayed in the record list.
- [properties](properties%28%29.md): Returns an array of the properties whose values are shown in the record list.
- [setColumnTitle:forProperty:](setcolumntitle%28__forproperty_%29.md): Sets the title displayed in the people picker for a property.
