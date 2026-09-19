> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/visionkit/datascannerviewcontrollerdelegate/datascanner(_:didadd:allitems:)-1go79

# dataScanner(\_:didAdd:allItems:)

**Framework:** VisionKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · visionOS 1.0+

A default, blank implementation for when the data scanner starts recognizing an item.

## Declaration

```swift
@MainActor func dataScanner(_ dataScanner: DataScannerViewController, didAdd addedItems: [RecognizedItem], allItems: [RecognizedItem])
```

## Parameters

- `dataScanner`: The data scanner that recognizes the item.
- `addedItems`: The items that the data scanner starts tracking.
- `allItems`: The current items that the data scanner tracks. Text items appear in the reading order of the language and region.
