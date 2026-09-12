> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgridview/init(frame:)](https://developer.apple.com/documentation/appkit/nsgridview/init(frame:))

# init(frame:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.12+

Creates a newly allocated grid view object with the specified frame rectangle.

## Declaration

```swift
init(frame frameRect: NSRect)
```

## Parameters

- `frameRect`: The frame rectangle for the view, measured in points. The origin of the frame is relative to the superview in which you plan to add it.

## See Also

### Creating a Grid View

- [init(numberOfColumns:rows:)](init%28numberofcolumns_rows_%29.md): Creates a newly allocated grid view object with the specified number of columns and rows.
- [init(views:)](init%28views_%29.md): Creates a newly allocated grid view object with the specified array of arrays of views.
- [init(coder:)](init%28coder_%29.md): Creates a newly allocated grid view object from the coder.

# initWithFrame: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Creates a newly allocated grid view object with the specified frame rectangle.

## Declaration

```objectivec
- (instancetype) initWithFrame:(NSRect) frameRect;
```

## Parameters

- `frameRect`: The frame rectangle for the view, measured in points. The origin of the frame is relative to the superview in which you plan to add it.

## See Also

### Creating a Grid View

- [gridViewWithNumberOfColumns:rows:](init%28numberofcolumns_rows_%29.md): Creates a newly allocated grid view object with the specified number of columns and rows.
- [gridViewWithViews:](init%28views_%29.md): Creates a newly allocated grid view object with the specified array of arrays of views.
- [initWithCoder:](init%28coder_%29.md): Creates a newly allocated grid view object from the coder.
