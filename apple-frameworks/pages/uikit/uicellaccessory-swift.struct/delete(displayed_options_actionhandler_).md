> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicellaccessory-swift.struct/delete(displayed:options:actionhandler:)](https://developer.apple.com/documentation/uikit/uicellaccessory-swift.struct/delete(displayed:options:actionhandler:))

# delete(displayed:options:actionHandler:)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

Creates a delete system accessory with the specified display state, configuration options, and optional action handler.

## Declaration

```swift
static func delete(displayed: UICellAccessory.DisplayedState = .whenEditing, options: UICellAccessory.DeleteOptions = DeleteOptions(), actionHandler: UICellAccessory.ActionHandler? = nil) -> UICellAccessory
```

## Parameters

- `displayed`: The cell-editing states that the delete accessory appears in. This parameter has a default value of [UICellAccessory.DisplayedState.whenEditing](displayedstate/whenediting.md).
- `options`: Configuration options for the delete accessory. See [UICellAccessory.DeleteOptions](deleteoptions.md) for possible configuration options.
- `actionHandler`: An optional closure that the system calls when a user interacts with the delete accessory.

<a id="return-value"></a>

## Return Value

A configured delete cell accessory. This accessory is a minus sign inside of a circle with the default system red color. This accessory appears on the leading edge of the cell.

## See Also

### Creating a delete accessory

- [UICellAccessory.DeleteOptions](deleteoptions.md): Configuration options for a delete accessory.
