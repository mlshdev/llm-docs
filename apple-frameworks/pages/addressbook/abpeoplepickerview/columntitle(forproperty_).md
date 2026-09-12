> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abpeoplepickerview/columntitle(forproperty:)](https://developer.apple.com/documentation/addressbook/abpeoplepickerview/columntitle(forproperty:))

# columnTitle(forProperty:) (Swift)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Returns the title of a custom property.

## Declaration

```swift
func columnTitle(forProperty property: String!) -> String!
```

## Parameters

- `property`: The property whose title will be returned.

<a id="return-value"></a>

## Return Value

The title of the custom property.

## See Also

### Working with Properties in the Record List

- [addProperty(\_:)](addproperty%28__%29.md): Adds a property to the group of properties whose values are shown in the record list.
- [displayedProperty](displayedproperty.md): The property currently displayed in the record list.
- [properties()](properties%28%29.md): Returns an array of the properties whose values are shown in the record list.
- [removeProperty(\_:)](removeproperty%28__%29.md): Removes a property from the group of properties whose values are shown in the record list.
- [setColumnTitle(\_:forProperty:)](setcolumntitle%28__forproperty_%29.md): Sets the title displayed in the people picker for a property.

# columnTitleForProperty: (Objective-C)

**Framework:** Address Book  
**Kind:** Instance Method  
**Availability:** macOS 10.3+

Returns the title of a custom property.

## Declaration

```objectivec
- (NSString *) columnTitleForProperty:(NSString *) property;
```

## Parameters

- `property`: The property whose title will be returned.

<a id="return-value"></a>

## Return Value

The title of the custom property.

## See Also

### Working with Properties in the Record List

- [addProperty:](addproperty%28__%29.md): Adds a property to the group of properties whose values are shown in the record list.
- [displayedProperty](displayedproperty.md): The property currently displayed in the record list.
- [properties](properties%28%29.md): Returns an array of the properties whose values are shown in the record list.
- [removeProperty:](removeproperty%28__%29.md): Removes a property from the group of properties whose values are shown in the record list.
- [setColumnTitle:forProperty:](setcolumntitle%28__forproperty_%29.md): Sets the title displayed in the people picker for a property.
