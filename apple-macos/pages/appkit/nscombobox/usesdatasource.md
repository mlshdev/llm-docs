> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscombobox/usesdatasource](https://developer.apple.com/documentation/appkit/nscombobox/usesdatasource)

# usesDataSource (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the combo box retrieves its items from a data source object.

## Declaration

```swift
var usesDataSource: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the combo box retrieves its items from the object in the [dataSource](datasource.md) property. When the value is [false](https://developer.apple.com/documentation/swift/false), the combo box manages an internal list of items, which it gets from the ones specified at design time and the ones you add programmatically.

## See Also

### Setting a Data Source

- [dataSource](datasource.md): The object that provides the item data for the combo box.

# usesDataSource (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value indicating whether the combo box retrieves its items from a data source object.

## Declaration

```objectivec
@property BOOL usesDataSource;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the combo box retrieves its items from the object in the [dataSource](datasource.md) property. When the value is [false](https://developer.apple.com/documentation/swift/false), the combo box manages an internal list of items, which it gets from the ones specified at design time and the ones you add programmatically.

## See Also

### Setting a Data Source

- [dataSource](datasource.md): The object that provides the item data for the combo box.
