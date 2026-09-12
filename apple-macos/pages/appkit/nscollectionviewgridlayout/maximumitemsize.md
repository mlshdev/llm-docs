> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewgridlayout/maximumitemsize](https://developer.apple.com/documentation/appkit/nscollectionviewgridlayout/maximumitemsize)

# maximumItemSize (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The largest allowable size for an item’s view.

## Declaration

```swift
var maximumItemSize: NSSize { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to limit the maximum size of items displayed in the grid. The default value of this property is (`0.0`, `0.0`), which imposes no maximum size for items.

## See Also

### Specifying the Grid Parameters

- [maximumNumberOfRows](maximumnumberofrows.md): The maximum number of rows to display in the collection view’s visible area.
- [maximumNumberOfColumns](maximumnumberofcolumns.md): The maximum number of columns to display in the collection view’s visible area.
- [minimumItemSize](minimumitemsize.md): The smallest allowable size for an item’s view.

# maximumItemSize (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The largest allowable size for an item’s view.

## Declaration

```objectivec
@property NSSize maximumItemSize;
```

<a id="Discussion"></a>

## Discussion

Use this property to limit the maximum size of items displayed in the grid. The default value of this property is (`0.0`, `0.0`), which imposes no maximum size for items.

## See Also

### Specifying the Grid Parameters

- [maximumNumberOfRows](maximumnumberofrows.md): The maximum number of rows to display in the collection view’s visible area.
- [maximumNumberOfColumns](maximumnumberofcolumns.md): The maximum number of columns to display in the collection view’s visible area.
- [minimumItemSize](minimumitemsize.md): The smallest allowable size for an item’s view.
