> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewgridlayout/minimumitemsize](https://developer.apple.com/documentation/appkit/nscollectionviewgridlayout/minimumitemsize)

# minimumItemSize (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The smallest allowable size for an item’s view.

## Declaration

```swift
var minimumItemSize: NSSize { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to ensure that items have a minimum size when displayed in the grid. The default value of this property is (`0.0`, `0.0`), which imposes no minimum size for items.

## See Also

### Specifying the Grid Parameters

- [maximumNumberOfRows](maximumnumberofrows.md): The maximum number of rows to display in the collection view’s visible area.
- [maximumNumberOfColumns](maximumnumberofcolumns.md): The maximum number of columns to display in the collection view’s visible area.
- [maximumItemSize](maximumitemsize.md): The largest allowable size for an item’s view.

# minimumItemSize (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The smallest allowable size for an item’s view.

## Declaration

```objectivec
@property NSSize minimumItemSize;
```

<a id="Discussion"></a>

## Discussion

Use this property to ensure that items have a minimum size when displayed in the grid. The default value of this property is (`0.0`, `0.0`), which imposes no minimum size for items.

## See Also

### Specifying the Grid Parameters

- [maximumNumberOfRows](maximumnumberofrows.md): The maximum number of rows to display in the collection view’s visible area.
- [maximumNumberOfColumns](maximumnumberofcolumns.md): The maximum number of columns to display in the collection view’s visible area.
- [maximumItemSize](maximumitemsize.md): The largest allowable size for an item’s view.
