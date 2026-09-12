> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewgridlayout/margins](https://developer.apple.com/documentation/appkit/nscollectionviewgridlayout/margins)

# margins (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The amount of empty space (in points) around the grid’s content.

## Declaration

```swift
var margins: NSEdgeInsets { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `NSEdgeInsetsZero`. Changing this property to a new value invalidates the layout.

## See Also

### Specifying the Grid Layout Attributes

- [minimumInteritemSpacing](minimuminteritemspacing.md): The minimum spacing (in points) to use between items in the same row or column.
- [minimumLineSpacing](minimumlinespacing.md): The minimum spacing (in points) to use between rows or columns.

# margins (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The amount of empty space (in points) around the grid’s content.

## Declaration

```objectivec
@property NSEdgeInsets margins;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `NSEdgeInsetsZero`. Changing this property to a new value invalidates the layout.

## See Also

### Specifying the Grid Layout Attributes

- [minimumInteritemSpacing](minimuminteritemspacing.md): The minimum spacing (in points) to use between items in the same row or column.
- [minimumLineSpacing](minimumlinespacing.md): The minimum spacing (in points) to use between rows or columns.
