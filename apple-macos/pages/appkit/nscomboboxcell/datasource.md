> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscomboboxcell/datasource](https://developer.apple.com/documentation/appkit/nscomboboxcell/datasource)

# dataSource (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The object that provides the data displayed in the combo box’s pop-up list.

## Declaration

```swift
unowned(unsafe) var dataSource: (any NSComboBoxCellDataSource)? { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property should be an object that implements the appropriate methods of the NSComboBoxCellDataSource informal protocol. Note that setting this property doesn’t automatically set [usesDataSource](usesdatasource.md) to [false](https://developer.apple.com/documentation/swift/false) and in fact logs a warning if [usesDataSource](usesdatasource.md) is [false](https://developer.apple.com/documentation/swift/false). If you set this property to an object that doesn’t respond to either numberOfItemsInComboBoxCell: or comboBoxCell:objectValueForItemAtIndex:, a warning is logged if [usesDataSource](usesdatasource.md) is [false](https://developer.apple.com/documentation/swift/false). See the class description and the NSComboBoxCellDataSource informal protocol specification for more information on combo box cell data source objects.

## See Also

### Accessing a Data Source

- [usesDataSource](usesdatasource.md): A Boolean value that indicates if the combo box uses an external data source to populate its pop-up list.

# dataSource (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The object that provides the data displayed in the combo box’s pop-up list.

## Declaration

```objectivec
@property (assign, nullable) id<NSComboBoxCellDataSource> dataSource;
```

<a id="Discussion"></a>

## Discussion

The value of this property should be an object that implements the appropriate methods of the NSComboBoxCellDataSource informal protocol. Note that setting this property doesn’t automatically set [usesDataSource](usesdatasource.md) to [false](https://developer.apple.com/documentation/swift/false) and in fact logs a warning if [usesDataSource](usesdatasource.md) is [false](https://developer.apple.com/documentation/swift/false). If you set this property to an object that doesn’t respond to either numberOfItemsInComboBoxCell: or comboBoxCell:objectValueForItemAtIndex:, a warning is logged if [usesDataSource](usesdatasource.md) is [false](https://developer.apple.com/documentation/swift/false). See the class description and the NSComboBoxCellDataSource informal protocol specification for more information on combo box cell data source objects.

## See Also

### Accessing a Data Source

- [usesDataSource](usesdatasource.md): A Boolean value that indicates if the combo box uses an external data source to populate its pop-up list.
