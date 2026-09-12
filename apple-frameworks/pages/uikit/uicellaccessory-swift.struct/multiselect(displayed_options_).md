> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicellaccessory-swift.struct/multiselect(displayed:options:)](https://developer.apple.com/documentation/uikit/uicellaccessory-swift.struct/multiselect(displayed:options:))

# multiselect(displayed:options:)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

Creates a multiselect system accessory with the specified display state and configuration options.

## Declaration

```swift
static func multiselect(displayed: UICellAccessory.DisplayedState = .whenEditing, options: UICellAccessory.MultiselectOptions = MultiselectOptions()) -> UICellAccessory
```

## Parameters

- `displayed`: The cell-editing states that the multiselect accessory appears in. This parameter has a default value of [UICellAccessory.DisplayedState.whenEditing](displayedstate/whenediting.md).
- `options`: Configuration options for the multiselect accessory. See [UICellAccessory.MultiselectOptions](multiselectoptions.md) for possible configuration options.

<a id="return-value"></a>

## Return Value

A configured multiselect cell accessory that changes apperance according to the cell’s selection state. The accessory displays as an empty circle for an unselected cell and as a filled circle with a checkmark for a selected cell. This accessory appears on the leading edge of the cell.

## See Also

### Creating a multiselect accessory

- [UICellAccessory.MultiselectOptions](multiselectoptions.md): Configuration options for a multiselect accessory.
