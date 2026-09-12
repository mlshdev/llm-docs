> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicellaccessory-swift.struct/reorder(displayed:options:)](https://developer.apple.com/documentation/uikit/uicellaccessory-swift.struct/reorder(displayed:options:))

# reorder(displayed:options:)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

Creates a reorder system accessory with the specified display state and configuration options.

## Declaration

```swift
static func reorder(displayed: UICellAccessory.DisplayedState = .whenEditing, options: UICellAccessory.ReorderOptions = ReorderOptions()) -> UICellAccessory
```

## Parameters

- `displayed`: The cell-editing states that the reorder accessory appears in. This parameter has a default value of [UICellAccessory.DisplayedState.whenEditing](displayedstate/whenediting.md).
- `options`: Configuration options for the reorder accessory. See [UICellAccessory.ReorderOptions](reorderoptions.md) for possible configuration options.

<a id="return-value"></a>

## Return Value

A configured reorder cell accessory. This accessory is three horizontal lines with the default system gray color. This accessory appears on the trailing edge of the cell.

<a id="Discussion"></a>

## Discussion

If your collection view supports interactive reordering of its cells, a user can drag the cell by its reorder accessory to change the order of the cell in the collection view.

## See Also

### Creating a reorder accessory

- [UICellAccessory.ReorderOptions](reorderoptions.md): Configuration options for a reorder accessory.
