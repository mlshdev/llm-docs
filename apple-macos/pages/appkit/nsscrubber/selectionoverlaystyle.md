> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsscrubber/selectionoverlaystyle

# selectionOverlayStyle (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

The style overlaid on selected items.

## Declaration

```swift
var selectionOverlayStyle: NSScrubberSelectionStyle? { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `nil`, which specifies no overlay decoration.

You can either choose from one of the built-in selection styles ([outlineOverlay](../nsscrubberselectionstyle/outlineoverlay.md) or [roundedBackground](../nsscrubberselectionstyle/roundedbackground.md)), or you can subclass [NSScrubberSelectionStyle](../nsscrubberselectionstyle.md) to create your own custom selection style.

## See Also

### Configuring the selection appearance

- [floatsSelectionViews](floatsselectionviews.md): A Boolean value that determines the behavior of the item selection decorations as the scrubber’s selection changes.
- [selectionBackgroundStyle](selectionbackgroundstyle.md): The style applied to the background of selected items.

# selectionOverlayStyle (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

The style overlaid on selected items.

## Declaration

```objectivec
@property (strong, nullable) NSScrubberSelectionStyle * selectionOverlayStyle;
```

<a id="Discussion"></a>

## Discussion

The default value is `nil`, which specifies no overlay decoration.

You can either choose from one of the built-in selection styles ([outlineOverlayStyle](../nsscrubberselectionstyle/outlineoverlay.md) or [roundedBackgroundStyle](../nsscrubberselectionstyle/roundedbackground.md)), or you can subclass [NSScrubberSelectionStyle](../nsscrubberselectionstyle.md) to create your own custom selection style.

## See Also

### Configuring the selection appearance

- [floatsSelectionViews](floatsselectionviews.md): A Boolean value that determines the behavior of the item selection decorations as the scrubber’s selection changes.
- [selectionBackgroundStyle](selectionbackgroundstyle.md): The style applied to the background of selected items.
