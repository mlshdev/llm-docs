> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscomboboxcell/usesdatasource](https://developer.apple.com/documentation/appkit/nscomboboxcell/usesdatasource)

# usesDataSource (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates if the combo box uses an external data source to populate its pop-up list.

## Declaration

```swift
var usesDataSource: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the combo box uses an external data source to populate its pop-up list; when it is [false](https://developer.apple.com/documentation/swift/false), the combo box uses an internal item list.

## See Also

### Accessing a Data Source

- [dataSource](datasource.md): The object that provides the data displayed in the combo box’s pop-up list.

# usesDataSource (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates if the combo box uses an external data source to populate its pop-up list.

## Declaration

```objectivec
@property BOOL usesDataSource;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the combo box uses an external data source to populate its pop-up list; when it is [false](https://developer.apple.com/documentation/swift/false), the combo box uses an internal item list.

## See Also

### Accessing a Data Source

- [dataSource](datasource.md): The object that provides the data displayed in the combo box’s pop-up list.
