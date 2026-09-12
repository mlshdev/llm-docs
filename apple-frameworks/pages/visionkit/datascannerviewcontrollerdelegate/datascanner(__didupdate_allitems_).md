> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/datascannerviewcontrollerdelegate/datascanner(_:didupdate:allitems:)](https://developer.apple.com/documentation/visionkit/datascannerviewcontrollerdelegate/datascanner(_:didupdate:allitems:))

# dataScanner(\_:didUpdate:allItems:)

**Framework:** VisionKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · visionOS 1.0+

Responds when the data scanner updates the geometry of an item it recognizes.

## Declaration

```swift
@MainActor func dataScanner(_ dataScanner: DataScannerViewController, didUpdate updatedItems: [RecognizedItem], allItems: [RecognizedItem])
```

## Parameters

- `dataScanner`: The data scanner that recognizes the item.
- `updatedItems`: The items with geometry that the data scanner changes.
- `allItems`: The current items that the data scanner tracks. Text items appear in the reading order of the language and region.

## Mentioned In

- [Scanning data with the camera](../scanning-data-with-the-camera.md)

<a id="discussion"></a>

## Discussion

To identify an item in the `updatedItems` and `allItems` parameters, use the item’s `id` property.

## Default Implementations

### DataScannerViewControllerDelegate Implementations

- [dataScanner(\_:didUpdate:allItems:)](datascanner%28__didupdate_allitems_%29-9qhkj.md): A default, blank implementation for when the data scanner updates the geometry of an item it recognizes.

## See Also

### Customizing highlighting

- [dataScanner(\_:didAdd:allItems:)](datascanner%28__didadd_allitems_%29.md): Responds when the data scanner starts recognizing an item.
- [dataScanner(\_:didRemove:allItems:)](datascanner%28__didremove_allitems_%29.md): Responds when the data scanner stops recognizing an item.
