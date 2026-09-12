> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewgridlayout/minimumlinespacing](https://developer.apple.com/documentation/appkit/nscollectionviewgridlayout/minimumlinespacing)

# minimumLineSpacing (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The minimum spacing (in points) to use between rows or columns.

## Declaration

```swift
var minimumLineSpacing: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

For a vertically scrolling layout, the value represents the minimum spacing between successive rows. For a horizontally scrolling layout, the value represents the minimum spacing between successive columns. This spacing is not applied to the space between the header view and the first line or between the last line and the footer view.

The default value of this property is `0.0`.

## See Also

### Specifying the Grid Layout Attributes

- [minimumInteritemSpacing](minimuminteritemspacing.md): The minimum spacing (in points) to use between items in the same row or column.
- [margins](margins.md): The amount of empty space (in points) around the grid’s content.

# minimumLineSpacing (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The minimum spacing (in points) to use between rows or columns.

## Declaration

```objectivec
@property CGFloat minimumLineSpacing;
```

<a id="Discussion"></a>

## Discussion

For a vertically scrolling layout, the value represents the minimum spacing between successive rows. For a horizontally scrolling layout, the value represents the minimum spacing between successive columns. This spacing is not applied to the space between the header view and the first line or between the last line and the footer view.

The default value of this property is `0.0`.

## See Also

### Specifying the Grid Layout Attributes

- [minimumInteritemSpacing](minimuminteritemspacing.md): The minimum spacing (in points) to use between items in the same row or column.
- [margins](margins.md): The amount of empty space (in points) around the grid’s content.
