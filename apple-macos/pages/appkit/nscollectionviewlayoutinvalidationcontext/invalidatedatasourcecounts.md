> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewlayoutinvalidationcontext/invalidatedatasourcecounts](https://developer.apple.com/documentation/appkit/nscollectionviewlayoutinvalidationcontext/invalidatedatasourcecounts)

# invalidateDataSourceCounts (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

A Boolean that indicates whether the layout object should ask for new section and item counts.

## Declaration

```swift
var invalidateDataSourceCounts: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The collection view sets this property in response to specific layout invalidation scenarios. For example, the collection view sets the property to [true](https://developer.apple.com/documentation/swift/true) when you insert or delete items or call the collection view’s [reloadData()](../nscollectionview/reloaddata%28%29.md) method.

When this property is set to [true](https://developer.apple.com/documentation/swift/true), the layout object must query the data source for the new number of sections and items. IT should also update its layout based on the updated number of sections and items.

## See Also

### Invalidating the Collection View Data

- [invalidateEverything](invalidateeverything.md): A Boolean that indicates whether all layout data should be marked as invalid.

# invalidateDataSourceCounts (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

A Boolean that indicates whether the layout object should ask for new section and item counts.

## Declaration

```objectivec
@property (readonly) BOOL invalidateDataSourceCounts;
```

<a id="Discussion"></a>

## Discussion

The collection view sets this property in response to specific layout invalidation scenarios. For example, the collection view sets the property to [true](https://developer.apple.com/documentation/swift/true) when you insert or delete items or call the collection view’s [reloadData](../nscollectionview/reloaddata%28%29.md) method.

When this property is set to [true](https://developer.apple.com/documentation/swift/true), the layout object must query the data source for the new number of sections and items. IT should also update its layout based on the updated number of sections and items.

## See Also

### Invalidating the Collection View Data

- [invalidateEverything](invalidateeverything.md): A Boolean that indicates whether all layout data should be marked as invalid.
