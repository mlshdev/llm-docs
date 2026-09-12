> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicellaccessory-swift.struct/outlinedisclosure(displayed:options:actionhandler:)](https://developer.apple.com/documentation/uikit/uicellaccessory-swift.struct/outlinedisclosure(displayed:options:actionhandler:))

# outlineDisclosure(displayed:options:actionHandler:)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS

Creates an outline disclosure system accessory with the specified display state, configuration options, and optional action handler.

## Declaration

```swift
static func outlineDisclosure(displayed: UICellAccessory.DisplayedState = .always, options: UICellAccessory.OutlineDisclosureOptions = OutlineDisclosureOptions(), actionHandler: UICellAccessory.ActionHandler? = nil) -> UICellAccessory
```

## Parameters

- `displayed`: The cell-editing states that the outline disclosure appears in. This parameter has a default value of [UICellAccessory.DisplayedState.always](displayedstate/always.md).
- `options`: Configuration options for the outline disclosure. See [UICellAccessory.OutlineDisclosureOptions](outlinedisclosureoptions.md) for possible configuration options.
- `actionHandler`: An optional closure that the system calls when a user interacts with the outline disclosure.

<a id="return-value"></a>

## Return Value

A configured outline disclosure cell accessory. This accessory is a rotating chevron for use in outlines. In iOS and for headers in Mac Catalyst, this accessory appears on the trailing edge. For cells in Mac Catalyst, this accessory appears on the leading edge.

<a id="Discussion"></a>

## Discussion

Use this cell accessory to indicate that an item can expand and collapse, and to enable the user to toggle between the expanded and collapsed states.

## See Also

### Creating an outline disclosure

- [UICellAccessory.OutlineDisclosureOptions](outlinedisclosureoptions.md): Configuration options for an outline disclosure.
