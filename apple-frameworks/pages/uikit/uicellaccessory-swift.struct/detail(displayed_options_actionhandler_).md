> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicellaccessory-swift.struct/detail(displayed:options:actionhandler:)](https://developer.apple.com/documentation/uikit/uicellaccessory-swift.struct/detail(displayed:options:actionhandler:))

# detail(displayed:options:actionHandler:)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · tvOS 15.4+ · visionOS

Creates a detail system accessory with the specified display state, configuration options, and optional action handler.

## Declaration

```swift
static func detail(displayed: UICellAccessory.DisplayedState = .always, options: UICellAccessory.DetailOptions = DetailOptions(), actionHandler: UICellAccessory.ActionHandler? = nil) -> UICellAccessory
```

## Parameters

- `displayed`: The cell-editing states that the detail accessory appears in. This parameter has a default value of [UICellAccessory.DisplayedState.always](displayedstate/always.md).
- `options`: Configuration options for the detail accessory. See [UICellAccessory.DetailOptions](detailoptions.md) for possible configuration options.
- `actionHandler`: An optional closure that the system calls when a user interacts with the detail accessory.

<a id="return-value"></a>

## Return Value

A configured detail cell accessory. The accessory displays as the system information button. This accessory appears on the trailing edge of the cell.

## See Also

### Creating a detail accessory

- [UICellAccessory.DetailOptions](detailoptions.md): Configuration options for a detail accessory.
