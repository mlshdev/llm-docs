> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewgridlayout/minimuminteritemspacing](https://developer.apple.com/documentation/appkit/nscollectionviewgridlayout/minimuminteritemspacing)

# minimumInteritemSpacing (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The minimum spacing (in points) to use between items in the same row or column.

## Declaration

```swift
var minimumInteritemSpacing: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

For a vertically scrolling layout, the value represents the minimum spacing between items in the same row. For a horizontally scrolling layout, the value represents the minimum spacing between items in the same column. The layout object uses this spacing only to compute how many items can fit in a single row or column. The actual spacing may be increased after the number of items has been determined.

The default value of this property is `0.0`.

## See Also

### Specifying the Grid Layout Attributes

- [minimumLineSpacing](minimumlinespacing.md): The minimum spacing (in points) to use between rows or columns.
- [margins](margins.md): The amount of empty space (in points) around the grid’s content.

# minimumInteritemSpacing (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The minimum spacing (in points) to use between items in the same row or column.

## Declaration

```objectivec
@property CGFloat minimumInteritemSpacing;
```

<a id="Discussion"></a>

## Discussion

For a vertically scrolling layout, the value represents the minimum spacing between items in the same row. For a horizontally scrolling layout, the value represents the minimum spacing between items in the same column. The layout object uses this spacing only to compute how many items can fit in a single row or column. The actual spacing may be increased after the number of items has been determined.

The default value of this property is `0.0`.

## See Also

### Specifying the Grid Layout Attributes

- [minimumLineSpacing](minimumlinespacing.md): The minimum spacing (in points) to use between rows or columns.
- [margins](margins.md): The amount of empty space (in points) around the grid’s content.
