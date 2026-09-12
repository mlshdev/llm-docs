> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewlayoutinvalidationcontext/invalidateeverything](https://developer.apple.com/documentation/uikit/uicollectionviewlayoutinvalidationcontext/invalidateeverything)

# invalidateEverything (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean that indicates that all layout data should be marked as invalid.

## Declaration

```swift
var invalidateEverything: Bool { get }
```

<a id="Discussion"></a>

## Discussion

You do not set this property yourself. The collection view sets it in response to specific types of layout invalidation scenarios. For example, the collection view sets it to [true](https://developer.apple.com/documentation/swift/true) when you change the current layout object, change the data source of the collection view, or call the [reloadData()](../uicollectionview/reloaddata%28%29.md) method and subsequently request a layout invalidation context.

If this property is set to [true](https://developer.apple.com/documentation/swift/true), the layout object should recompute all of its layout-related data.

## See Also

### Invalidating the Collection View Data

- [invalidateDataSourceCounts](invalidatedatasourcecounts.md): A Boolean that indicates whether the layout should ask for new section and item counts.

# invalidateEverything (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean that indicates that all layout data should be marked as invalid.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL invalidateEverything;
```

<a id="Discussion"></a>

## Discussion

You do not set this property yourself. The collection view sets it in response to specific types of layout invalidation scenarios. For example, the collection view sets it to [true](https://developer.apple.com/documentation/swift/true) when you change the current layout object, change the data source of the collection view, or call the [reloadData](../uicollectionview/reloaddata%28%29.md) method and subsequently request a layout invalidation context.

If this property is set to [true](https://developer.apple.com/documentation/swift/true), the layout object should recompute all of its layout-related data.

## See Also

### Invalidating the Collection View Data

- [invalidateDataSourceCounts](invalidatedatasourcecounts.md): A Boolean that indicates whether the layout should ask for new section and item counts.
