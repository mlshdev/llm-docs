> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacetable/setrowtypes(_:)](https://developer.apple.com/documentation/watchkit/wkinterfacetable/setrowtypes(_:))

# setRowTypes(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Creates the row controllers to use when populating the table with data.

## Declaration

```swift
func setRowTypes(_ rowTypes: [String])
```

## Parameters

- `rowTypes`: An array of strings, each of which corresponds to the name of a row controller defined in your storyboard file. The total number of items in this array is the number of rows to be created in the table.

<a id="Discussion"></a>

## Discussion

Use this method when you want to display more than one type of row in your table. This method removes any existing rows from the table and configures a new set of rows based on the information in the `rowTypes` parameter. For each row, the method also creates an instance of that row’s class and puts the resulting object in an internal array, which you access using the [rowController(at:)](rowcontroller%28at_%29.md) method. It is your responsibility to configure each new row controller with the data you want to display.

The order of the strings in the `rowTypes` parameter determines the order of the row controller objects you retrieve using the [rowController(at:)](rowcontroller%28at_%29.md) method, with the first row type used to create the row controller at index 0, the second row type used to create the row controller at index 1, and so on.

## See Also

### Related Documentation

- [App Programming Guide for watchOS](https://developer.apple.com/library/archive/documentation/General/Conceptual/WatchKitProgrammingGuide/index.html#//apple_ref/doc/uid/TP40014969)

### Specifying the Row Types

- [setNumberOfRows(\_:withRowType:)](setnumberofrows%28__withrowtype_%29.md): Creates the specified number of row controllers (of the same type) to use in populating the table with data.

# setRowTypes: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Creates the row controllers to use when populating the table with data.

## Declaration

```objectivec
- (void) setRowTypes:(NSArray<NSString *> *) rowTypes;
```

## Parameters

- `rowTypes`: An array of strings, each of which corresponds to the name of a row controller defined in your storyboard file. The total number of items in this array is the number of rows to be created in the table.

<a id="Discussion"></a>

## Discussion

Use this method when you want to display more than one type of row in your table. This method removes any existing rows from the table and configures a new set of rows based on the information in the `rowTypes` parameter. For each row, the method also creates an instance of that row’s class and puts the resulting object in an internal array, which you access using the [rowControllerAtIndex:](rowcontroller%28at_%29.md) method. It is your responsibility to configure each new row controller with the data you want to display.

The order of the strings in the `rowTypes` parameter determines the order of the row controller objects you retrieve using the [rowControllerAtIndex:](rowcontroller%28at_%29.md) method, with the first row type used to create the row controller at index 0, the second row type used to create the row controller at index 1, and so on.

## See Also

### Related Documentation

- [App Programming Guide for watchOS](https://developer.apple.com/library/archive/documentation/General/Conceptual/WatchKitProgrammingGuide/index.html#//apple_ref/doc/uid/TP40014969)

### Specifying the Row Types

- [setNumberOfRows:withRowType:](setnumberofrows%28__withrowtype_%29.md): Creates the specified number of row controllers (of the same type) to use in populating the table with data.
