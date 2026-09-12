> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicellaccessory-swift.struct/label(text:displayed:options:)](https://developer.apple.com/documentation/uikit/uicellaccessory-swift.struct/label(text:displayed:options:))

# label(text:displayed:options:)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

Creates a label system accessory with the specified text, display state, and configuration options.

## Declaration

```swift
static func label(text: String, displayed: UICellAccessory.DisplayedState = .always, options: UICellAccessory.LabelOptions = LabelOptions()) -> UICellAccessory
```

## Parameters

- `text`: The text for the label to display.
- `displayed`: The cell-editing states that the label accessory appears in. This parameter has a default value of [UICellAccessory.DisplayedState.always](displayedstate/always.md).
- `options`: Configuration options for the label. See [UICellAccessory.LabelOptions](labeloptions.md) for possible configuration options.

<a id="return-value"></a>

## Return Value

A configured label cell accessory. This accessory appears on the trailing edge of the cell.

<a id="Discussion"></a>

## Discussion

Use this cell accessory to display a short string of text, like a small number showing the count for the associated item.

## See Also

### Creating a label accessory

- [UICellAccessory.LabelOptions](labeloptions.md): Configuration options for a label accessory.
