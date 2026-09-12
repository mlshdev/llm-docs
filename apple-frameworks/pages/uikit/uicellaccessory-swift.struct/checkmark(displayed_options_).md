> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicellaccessory-swift.struct/checkmark(displayed:options:)](https://developer.apple.com/documentation/uikit/uicellaccessory-swift.struct/checkmark(displayed:options:))

# checkmark(displayed:options:)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

Creates a checkmark system accessory with the specified display state and configuration options.

## Declaration

```swift
static func checkmark(displayed: UICellAccessory.DisplayedState = .always, options: UICellAccessory.CheckmarkOptions = CheckmarkOptions()) -> UICellAccessory
```

## Parameters

- `displayed`: The cell-editing states that the checkmark appears in. This parameter has a default value of [UICellAccessory.DisplayedState.always](displayedstate/always.md).
- `options`: Configuration options for the checkmark. See [UICellAccessory.CheckmarkOptions](checkmarkoptions.md) for possible configuration options.

<a id="return-value"></a>

## Return Value

A configured checkmark cell accessory. This accessory is a checkmark with the default system green color. This accessory appears on the trailing edge of the cell.

## See Also

### Creating a checkmark accessory

- [UICellAccessory.CheckmarkOptions](checkmarkoptions.md): Configuration options for a checkmark accessory.
