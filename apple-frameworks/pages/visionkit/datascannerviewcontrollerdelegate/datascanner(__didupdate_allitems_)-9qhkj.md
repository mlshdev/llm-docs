> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/visionkit/datascannerviewcontrollerdelegate/datascanner(_:didupdate:allitems:)-9qhkj

# dataScanner(\_:didUpdate:allItems:)

**Framework:** VisionKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · visionOS 1.0+

A default, blank implementation for when the data scanner updates the geometry of an item it recognizes.

## Declaration

```swift
@MainActor func dataScanner(_ dataScanner: DataScannerViewController, didUpdate updatedItems: [RecognizedItem], allItems: [RecognizedItem])
```

## Parameters

- `dataScanner`: The data scanner that recognizes the item.
- `updatedItems`: The items with geometry that the data scanner changes.
- `allItems`: The current items that the data scanner tracks. Text items appear in the reading order of the language and region.
