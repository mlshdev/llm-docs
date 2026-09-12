> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacetable/rowcontroller(at:)](https://developer.apple.com/documentation/watchkit/wkinterfacetable/rowcontroller(at:))

# rowController(at:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Returns the row controller for the row at the specified index in the table.

## Declaration

```swift
func rowController(at index: Int) -> Any?
```

## Parameters

- `index`: The zero-based index of the row. This parameter must be between zero and the total number of rows specified in the [numberOfRows](numberofrows.md) property.

<a id="return-value"></a>

## Return Value

The row controller object, or `nil` if there are no row controllers yet or `index` is out of bounds.

<a id="Discussion"></a>

## Discussion

Call the [setRowTypes(\_:)](setrowtypes%28__%29.md) or [setNumberOfRows(\_:withRowType:)](setnumberofrows%28__withrowtype_%29.md) method before using this method to retrieve any row controllers. After you call one of those methods, the table creates row controllers for each row type and stores them internally in an array. Use this method to retrieve those row controllers.

## See Also

### Getting the Row Controllers

- [numberOfRows](numberofrows.md): The number of row controllers available for you to retrieve.

# rowControllerAtIndex: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Returns the row controller for the row at the specified index in the table.

## Declaration

```objectivec
- (id) rowControllerAtIndex:(NSInteger) index;
```

## Parameters

- `index`: The zero-based index of the row. This parameter must be between zero and the total number of rows specified in the [numberOfRows](numberofrows.md) property.

<a id="return-value"></a>

## Return Value

The row controller object, or `nil` if there are no row controllers yet or `index` is out of bounds.

<a id="Discussion"></a>

## Discussion

Call the [setRowTypes:](setrowtypes%28__%29.md) or [setNumberOfRows:withRowType:](setnumberofrows%28__withrowtype_%29.md) method before using this method to retrieve any row controllers. After you call one of those methods, the table creates row controllers for each row type and stores them internally in an array. Use this method to retrieve those row controllers.

## See Also

### Getting the Row Controllers

- [numberOfRows](numberofrows.md): The number of row controllers available for you to retrieve.
