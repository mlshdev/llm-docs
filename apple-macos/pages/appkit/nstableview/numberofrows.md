> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nstableview/numberofrows

# numberOfRows (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The number of rows in the table.

## Declaration

```swift
var numberOfRows: Int { get }
```

<a id="Discussion"></a>

## Discussion

Typically you should not ask the table view how many rows it has; instead, interrogate the table view’s data source.

## See Also

### Related Documentation

- [numberOfRows(in:)](../nstableviewdatasource/numberofrows%28in_%29.md): Returns the number of records managed for `aTableView` by the data source object.

### Table Dimensions

- [numberOfColumns](numberofcolumns.md): The number of columns in the table.

# numberOfRows (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The number of rows in the table.

## Declaration

```objectivec
@property (readonly) NSInteger numberOfRows;
```

<a id="Discussion"></a>

## Discussion

Typically you should not ask the table view how many rows it has; instead, interrogate the table view’s data source.

## See Also

### Related Documentation

- [numberOfRowsInTableView:](../nstableviewdatasource/numberofrows%28in_%29.md): Returns the number of records managed for `aTableView` by the data source object.

### Table Dimensions

- [numberOfColumns](numberofcolumns.md): The number of columns in the table.
