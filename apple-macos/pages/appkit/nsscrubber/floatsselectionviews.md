> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrubber/floatsselectionviews](https://developer.apple.com/documentation/appkit/nsscrubber/floatsselectionviews)

# floatsSelectionViews (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

A Boolean value that determines the behavior of the item selection decorations as the scrubber’s selection changes.

## Declaration

```swift
var floatsSelectionViews: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When scrubber items are selected, they are decorated with background and overlay views, as determined by the [selectionBackgroundStyle](selectionbackgroundstyle.md) and [selectionOverlayStyle](selectionoverlaystyle.md) properties.

As the selection changes, the behavior of these selection decoration views is determined by the [floatsSelectionViews](floatsselectionviews.md) property, as follows:

- [true](https://developer.apple.com/documentation/swift/true) The overlay and background views float smoothly between the previously selected item and the newly selected item.
- [false](https://developer.apple.com/documentation/swift/false) The overlay and background views cross-fade from the previously selected item to the newly selected item.

The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring the selection appearance

- [selectionOverlayStyle](selectionoverlaystyle.md): The style overlaid on selected items.
- [selectionBackgroundStyle](selectionbackgroundstyle.md): The style applied to the background of selected items.

# floatsSelectionViews (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

A Boolean value that determines the behavior of the item selection decorations as the scrubber’s selection changes.

## Declaration

```objectivec
@property BOOL floatsSelectionViews;
```

<a id="Discussion"></a>

## Discussion

When scrubber items are selected, they are decorated with background and overlay views, as determined by the [selectionBackgroundStyle](selectionbackgroundstyle.md) and [selectionOverlayStyle](selectionoverlaystyle.md) properties.

As the selection changes, the behavior of these selection decoration views is determined by the [floatsSelectionViews](floatsselectionviews.md) property, as follows:

- [true](https://developer.apple.com/documentation/swift/true) The overlay and background views float smoothly between the previously selected item and the newly selected item.
- [false](https://developer.apple.com/documentation/swift/false) The overlay and background views cross-fade from the previously selected item to the newly selected item.

The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring the selection appearance

- [selectionOverlayStyle](selectionoverlaystyle.md): The style overlaid on selected items.
- [selectionBackgroundStyle](selectionbackgroundstyle.md): The style applied to the background of selected items.
