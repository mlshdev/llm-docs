> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicellaccessory-swift.struct/insert(displayed:options:actionhandler:)](https://developer.apple.com/documentation/uikit/uicellaccessory-swift.struct/insert(displayed:options:actionhandler:))

# insert(displayed:options:actionHandler:)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

Creates an insert system accessory with the specified display state, configuration options, and optional action handler.

## Declaration

```swift
static func insert(displayed: UICellAccessory.DisplayedState = .whenEditing, options: UICellAccessory.InsertOptions = InsertOptions(), actionHandler: UICellAccessory.ActionHandler? = nil) -> UICellAccessory
```

## Parameters

- `displayed`: The cell-editing states that the insert accessory appears in. This parameter has a default value of [UICellAccessory.DisplayedState.whenEditing](displayedstate/whenediting.md).
- `options`: Configuration options for the insert accessory. See [UICellAccessory.InsertOptions](insertoptions.md) for possible configuration options.
- `actionHandler`: An optional closure that the system calls when a user interacts with the insert accessory.

<a id="return-value"></a>

## Return Value

A configured insert cell accessory. This accessory is a plus sign inside of a circle with the default system green color. This accessory appears on the leading edge of the cell.

## See Also

### Creating an insert accessory

- [UICellAccessory.InsertOptions](insertoptions.md): Configuration options for an insert accessory.
