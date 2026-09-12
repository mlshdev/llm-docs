> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abpeoplepickerview/addproperty(_:)](https://developer.apple.com/documentation/addressbook/abpeoplepickerview/addproperty(_:))

# addProperty(\_:) (Swift)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Adds a property to the group of properties whose values are shown in the record list.

## Declaration

```swift
func addProperty(_ property: String!)
```

## Parameters

- `property`: The property to add.

<a id="Discussion"></a>

## Discussion

For additional information about properties see Constants.

## See Also

### Working with Properties in the Record List

- [columnTitle(forProperty:)](columntitle%28forproperty_%29.md): Returns the title of a custom property.
- [displayedProperty](displayedproperty.md): The property currently displayed in the record list.
- [properties()](properties%28%29.md): Returns an array of the properties whose values are shown in the record list.
- [removeProperty(\_:)](removeproperty%28__%29.md): Removes a property from the group of properties whose values are shown in the record list.
- [setColumnTitle(\_:forProperty:)](setcolumntitle%28__forproperty_%29.md): Sets the title displayed in the people picker for a property.

# addProperty: (Objective-C)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Adds a property to the group of properties whose values are shown in the record list.

## Declaration

```objectivec
- (void) addProperty:(NSString *) property;
```

## Parameters

- `property`: The property to add.

<a id="Discussion"></a>

## Discussion

For additional information about properties see Constants.

## See Also

### Working with Properties in the Record List

- [columnTitleForProperty:](columntitle%28forproperty_%29.md): Returns the title of a custom property.
- [displayedProperty](displayedproperty.md): The property currently displayed in the record list.
- [properties](properties%28%29.md): Returns an array of the properties whose values are shown in the record list.
- [removeProperty:](removeproperty%28__%29.md): Removes a property from the group of properties whose values are shown in the record list.
- [setColumnTitle:forProperty:](setcolumntitle%28__forproperty_%29.md): Sets the title displayed in the people picker for a property.
