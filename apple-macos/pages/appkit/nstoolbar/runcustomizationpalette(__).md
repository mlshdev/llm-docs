> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nstoolbar/runcustomizationpalette(_:)

# runCustomizationPalette(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS

Displays the toolbar’s customization palette and handles any user-initiated customizations.

## Declaration

```swift
func runCustomizationPalette(_ sender: Any?)
```

## Parameters

- `sender`: The control sending the message.

<a id="Discussion"></a>

## Discussion

While the customization palette is visible, the toolbar calls methods of its delegate to manage configuration changes.

## See Also

### Displaying the customization palette

- [customizationPaletteIsRunning](customizationpaletteisrunning.md): A Boolean value that indicates whether the toolbar’s customization palette is in use.

# runCustomizationPalette: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ · macOS

Displays the toolbar’s customization palette and handles any user-initiated customizations.

## Declaration

```objectivec
- (void) runCustomizationPalette:(id) sender;
```

## Parameters

- `sender`: The control sending the message.

<a id="Discussion"></a>

## Discussion

While the customization palette is visible, the toolbar calls methods of its delegate to manage configuration changes.

## See Also

### Displaying the customization palette

- [customizationPaletteIsRunning](customizationpaletteisrunning.md): A Boolean value that indicates whether the toolbar’s customization palette is in use.
