> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgridview/init(views:)](https://developer.apple.com/documentation/appkit/nsgridview/init(views:))

# init(views:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.12+

Creates a newly allocated grid view object with the specified array of arrays of views.

## Declaration

```swift
convenience init(views rows: [[NSView]])
```

## Parameters

- `rows`: An array of arrays of grid view row objects.

<a id="Discussion"></a>

## Discussion

This method creates an autoreleased grid view large enough to hold the passed array of rows. Each element in the array is itself an array of views for that row.

## See Also

### Creating a Grid View

- [init(numberOfColumns:rows:)](init%28numberofcolumns_rows_%29.md): Creates a newly allocated grid view object with the specified number of columns and rows.
- [init(frame:)](init%28frame_%29.md): Creates a newly allocated grid view object with the specified frame rectangle.
- [init(coder:)](init%28coder_%29.md): Creates a newly allocated grid view object from the coder.

# gridViewWithViews: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.12+

Creates a newly allocated grid view object with the specified array of arrays of views.

## Declaration

```objectivec
+ (instancetype) gridViewWithViews:(NSArray<NSArray<NSView *> *> *) rows;
```

## Parameters

- `rows`: An array of arrays of grid view row objects.

<a id="Discussion"></a>

## Discussion

This method creates an autoreleased grid view large enough to hold the passed array of rows. Each element in the array is itself an array of views for that row.

## See Also

### Creating a Grid View

- [gridViewWithNumberOfColumns:rows:](init%28numberofcolumns_rows_%29.md): Creates a newly allocated grid view object with the specified number of columns and rows.
- [initWithFrame:](init%28frame_%29.md): Creates a newly allocated grid view object with the specified frame rectangle.
- [initWithCoder:](init%28coder_%29.md): Creates a newly allocated grid view object from the coder.
