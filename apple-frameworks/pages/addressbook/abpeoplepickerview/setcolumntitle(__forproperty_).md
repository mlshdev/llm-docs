> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abpeoplepickerview/setcolumntitle(_:forproperty:)](https://developer.apple.com/documentation/addressbook/abpeoplepickerview/setcolumntitle(_:forproperty:))

# setColumnTitle(\_:forProperty:) (Swift)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Sets the title displayed in the people picker for a property.

## Declaration

```swift
func setColumnTitle(_ title: String!, forProperty property: String!)
```

## Parameters

- `title`: The title to be set.
- `property`: The property being titled.

## See Also

### Working with Properties in the Record List

- [addProperty(\_:)](addproperty%28__%29.md): Adds a property to the group of properties whose values are shown in the record list.
- [columnTitle(forProperty:)](columntitle%28forproperty_%29.md): Returns the title of a custom property.
- [displayedProperty](displayedproperty.md): The property currently displayed in the record list.
- [properties()](properties%28%29.md): Returns an array of the properties whose values are shown in the record list.
- [removeProperty(\_:)](removeproperty%28__%29.md): Removes a property from the group of properties whose values are shown in the record list.

# setColumnTitle:forProperty: (Objective-C)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Sets the title displayed in the people picker for a property.

## Declaration

```objectivec
- (void) setColumnTitle:(NSString *) title forProperty:(NSString *) property;
```

## Parameters

- `title`: The title to be set.
- `property`: The property being titled.

## See Also

### Working with Properties in the Record List

- [addProperty:](addproperty%28__%29.md): Adds a property to the group of properties whose values are shown in the record list.
- [columnTitleForProperty:](columntitle%28forproperty_%29.md): Returns the title of a custom property.
- [displayedProperty](displayedproperty.md): The property currently displayed in the record list.
- [properties](properties%28%29.md): Returns an array of the properties whose values are shown in the record list.
- [removeProperty:](removeproperty%28__%29.md): Removes a property from the group of properties whose values are shown in the record list.
