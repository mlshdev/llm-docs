> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgridview/init(numberofcolumns:rows:)](https://developer.apple.com/documentation/appkit/nsgridview/init(numberofcolumns:rows:))

# init(numberOfColumns:rows:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.12+

Creates a newly allocated grid view object with the specified number of columns and rows.

## Declaration

```swift
convenience init(numberOfColumns columnCount: Int, rows rowCount: Int)
```

## Parameters

- `columnCount`: The number of columns for this grid view.
- `rowCount`: The number of rows for this grid view.

## See Also

### Creating a Grid View

- [init(views:)](init%28views_%29.md): Creates a newly allocated grid view object with the specified array of arrays of views.
- [init(frame:)](init%28frame_%29.md): Creates a newly allocated grid view object with the specified frame rectangle.
- [init(coder:)](init%28coder_%29.md): Creates a newly allocated grid view object from the coder.

# gridViewWithNumberOfColumns:rows: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.12+

Creates a newly allocated grid view object with the specified number of columns and rows.

## Declaration

```objectivec
+ (instancetype) gridViewWithNumberOfColumns:(NSInteger) columnCount rows:(NSInteger) rowCount;
```

## Parameters

- `columnCount`: The number of columns for this grid view.
- `rowCount`: The number of rows for this grid view.

## See Also

### Creating a Grid View

- [gridViewWithViews:](init%28views_%29.md): Creates a newly allocated grid view object with the specified array of arrays of views.
- [initWithFrame:](init%28frame_%29.md): Creates a newly allocated grid view object with the specified frame rectangle.
- [initWithCoder:](init%28coder_%29.md): Creates a newly allocated grid view object from the coder.
