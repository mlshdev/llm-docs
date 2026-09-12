> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscombobox/datasource](https://developer.apple.com/documentation/appkit/nscombobox/datasource)

# dataSource (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The object that provides the item data for the combo box.

## Declaration

```swift
unowned(unsafe) var dataSource: (any NSComboBoxDataSource)? { get set }
```

<a id="Discussion"></a>

## Discussion

Assigning an object to this property does not automatically set the [usesDataSource](usesdatasource.md) property to [true](https://developer.apple.com/documentation/swift/true). If the  [usesDataSource](usesdatasource.md) property is [false](https://developer.apple.com/documentation/swift/false), accessing this property logs a warning. The default value of this property is `nil`.

For information about how to implement a combo box data source, see `NSComboBoxDataSource`.

## See Also

### Setting a Data Source

- [usesDataSource](usesdatasource.md): A Boolean value indicating whether the combo box retrieves its items from a data source object.

# dataSource (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The object that provides the item data for the combo box.

## Declaration

```objectivec
@property (assign, nullable) id<NSComboBoxDataSource> dataSource;
```

<a id="Discussion"></a>

## Discussion

Assigning an object to this property does not automatically set the [usesDataSource](usesdatasource.md) property to [true](https://developer.apple.com/documentation/swift/true). If the  [usesDataSource](usesdatasource.md) property is [false](https://developer.apple.com/documentation/swift/false), accessing this property logs a warning. The default value of this property is `nil`.

For information about how to implement a combo box data source, see `NSComboBoxDataSource`.

## See Also

### Setting a Data Source

- [usesDataSource](usesdatasource.md): A Boolean value indicating whether the combo box retrieves its items from a data source object.
