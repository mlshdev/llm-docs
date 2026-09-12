> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewlayoutinvalidationcontext/invalidateeverything](https://developer.apple.com/documentation/appkit/nscollectionviewlayoutinvalidationcontext/invalidateeverything)

# invalidateEverything (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

A Boolean that indicates whether all layout data should be marked as invalid.

## Declaration

```swift
var invalidateEverything: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The collection view sets this property in response to specific layout invalidation scenarios. For example, the collection view sets the property to [true](https://developer.apple.com/documentation/swift/true) when you change the current layout object, change the data source of the collection view, or call the [reloadData()](../nscollectionview/reloaddata%28%29.md) method and subsequently request a layout invalidation context.

When this property is set to [true](https://developer.apple.com/documentation/swift/true), the layout object must throw away all previous layout information and recompute it.

## See Also

### Invalidating the Collection View Data

- [invalidateDataSourceCounts](invalidatedatasourcecounts.md): A Boolean that indicates whether the layout object should ask for new section and item counts.

# invalidateEverything (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

A Boolean that indicates whether all layout data should be marked as invalid.

## Declaration

```objectivec
@property (readonly) BOOL invalidateEverything;
```

<a id="Discussion"></a>

## Discussion

The collection view sets this property in response to specific layout invalidation scenarios. For example, the collection view sets the property to [true](https://developer.apple.com/documentation/swift/true) when you change the current layout object, change the data source of the collection view, or call the [reloadData](../nscollectionview/reloaddata%28%29.md) method and subsequently request a layout invalidation context.

When this property is set to [true](https://developer.apple.com/documentation/swift/true), the layout object must throw away all previous layout information and recompute it.

## See Also

### Invalidating the Collection View Data

- [invalidateDataSourceCounts](invalidatedatasourcecounts.md): A Boolean that indicates whether the layout object should ask for new section and item counts.
