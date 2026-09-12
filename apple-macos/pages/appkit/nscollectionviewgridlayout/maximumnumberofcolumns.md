> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewgridlayout/maximumnumberofcolumns](https://developer.apple.com/documentation/appkit/nscollectionviewgridlayout/maximumnumberofcolumns)

# maximumNumberOfColumns (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The maximum number of columns to display in the collection view’s visible area.

## Declaration

```swift
var maximumNumberOfColumns: Int { get set }
```

<a id="Discussion"></a>

## Discussion

Use this value to specify the maximum number of columns that should be visible in the collection view at any given time. The grid layout object uses this value during layout to configure the position and spacing of items. The default value of this property is `0`, which means that there is no maximum number of columns.

## See Also

### Specifying the Grid Parameters

- [maximumNumberOfRows](maximumnumberofrows.md): The maximum number of rows to display in the collection view’s visible area.
- [minimumItemSize](minimumitemsize.md): The smallest allowable size for an item’s view.
- [maximumItemSize](maximumitemsize.md): The largest allowable size for an item’s view.

# maximumNumberOfColumns (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The maximum number of columns to display in the collection view’s visible area.

## Declaration

```objectivec
@property NSUInteger maximumNumberOfColumns;
```

<a id="Discussion"></a>

## Discussion

Use this value to specify the maximum number of columns that should be visible in the collection view at any given time. The grid layout object uses this value during layout to configure the position and spacing of items. The default value of this property is `0`, which means that there is no maximum number of columns.

## See Also

### Specifying the Grid Parameters

- [maximumNumberOfRows](maximumnumberofrows.md): The maximum number of rows to display in the collection view’s visible area.
- [minimumItemSize](minimumitemsize.md): The smallest allowable size for an item’s view.
- [maximumItemSize](maximumitemsize.md): The largest allowable size for an item’s view.
