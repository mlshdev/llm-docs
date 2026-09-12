> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicellaccessory-swift.struct/disclosureindicator(displayed:options:)](https://developer.apple.com/documentation/uikit/uicellaccessory-swift.struct/disclosureindicator(displayed:options:))

# disclosureIndicator(displayed:options:)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

Creates a disclosure indicator system accessory with the specified display state and configuration options.

## Declaration

```swift
static func disclosureIndicator(displayed: UICellAccessory.DisplayedState = .always, options: UICellAccessory.DisclosureIndicatorOptions = DisclosureIndicatorOptions()) -> UICellAccessory
```

## Parameters

- `displayed`: The cell-editing states that the disclosure indicator appears in. This parameter has a default value of [UICellAccessory.DisplayedState.always](displayedstate/always.md).
- `options`: Configuration options for the disclosure indicator. See [UICellAccessory.DisclosureIndicatorOptions](disclosureindicatoroptions.md) for possible configuration options.

<a id="return-value"></a>

## Return Value

A configured disclosure indicator cell accessory. This accessory is a disclosure chevron that points in the trailing direction. This accessory appears on the trailing edge of the cell.

<a id="Discussion"></a>

## Discussion

Use this cell accessory to indicate that users can tap on the cell to disclose additional content.

## See Also

### Creating a disclosure indicator

- [UICellAccessory.DisclosureIndicatorOptions](disclosureindicatoroptions.md): Configuration options for a disclosure indicator.
