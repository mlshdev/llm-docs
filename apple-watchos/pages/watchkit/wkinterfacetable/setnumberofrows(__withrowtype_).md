> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacetable/setnumberofrows(_:withrowtype:)](https://developer.apple.com/documentation/watchkit/wkinterfacetable/setnumberofrows(_:withrowtype:))

# setNumberOfRows(\_:withRowType:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Creates the specified number of row controllers (of the same type) to use in populating the table with data.

## Declaration

```swift
func setNumberOfRows(_ numberOfRows: Int, withRowType rowType: String)
```

## Parameters

- `numberOfRows`: The total number of rows to display in the table.
- `rowType`: The name of a row controller defined in your storyboard file. This string corresponds to the value in the Identifier attribute of a row controller definition in your storyboard file.

<a id="Discussion"></a>

## Discussion

Use this method when you want to populate a table with rows that are all of the same type. This method removes any existing rows from the table and configures a new set of rows based on the information in the `numberOfRows` and `rowType` parameters. For each row, the method also creates an instance of that row’s class and puts the resulting object in an internal array, which you access using the [rowController(at:)](rowcontroller%28at_%29.md) method. It is your responsibility to configure each new row controller with the data you want to display.

## See Also

### Specifying the Row Types

- [setRowTypes(\_:)](setrowtypes%28__%29.md): Creates the row controllers to use when populating the table with data.

# setNumberOfRows:withRowType: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Creates the specified number of row controllers (of the same type) to use in populating the table with data.

## Declaration

```objectivec
- (void) setNumberOfRows:(NSInteger) numberOfRows withRowType:(NSString *) rowType;
```

## Parameters

- `numberOfRows`: The total number of rows to display in the table.
- `rowType`: The name of a row controller defined in your storyboard file. This string corresponds to the value in the Identifier attribute of a row controller definition in your storyboard file.

<a id="Discussion"></a>

## Discussion

Use this method when you want to populate a table with rows that are all of the same type. This method removes any existing rows from the table and configures a new set of rows based on the information in the `numberOfRows` and `rowType` parameters. For each row, the method also creates an instance of that row’s class and puts the resulting object in an internal array, which you access using the [rowControllerAtIndex:](rowcontroller%28at_%29.md) method. It is your responsibility to configure each new row controller with the data you want to display.

## See Also

### Specifying the Row Types

- [setRowTypes:](setrowtypes%28__%29.md): Creates the row controllers to use when populating the table with data.
