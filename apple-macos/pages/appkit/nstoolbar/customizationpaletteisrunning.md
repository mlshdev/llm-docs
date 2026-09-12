> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbar/customizationpaletteisrunning](https://developer.apple.com/documentation/appkit/nstoolbar/customizationpaletteisrunning)

# customizationPaletteIsRunning (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS

A Boolean value that indicates whether the toolbar’s customization palette is in use.

## Declaration

```swift
var customizationPaletteIsRunning: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the toolbar’s customization palette is running; otherwise, it’s [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Displaying the customization palette

- [runCustomizationPalette(\_:)](runcustomizationpalette%28__%29.md): Displays the toolbar’s customization palette and handles any user-initiated customizations.

# customizationPaletteIsRunning (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ · macOS

A Boolean value that indicates whether the toolbar’s customization palette is in use.

## Declaration

```objectivec
@property (readonly) BOOL customizationPaletteIsRunning;
```

<a id="Discussion"></a>

## Discussion

The value of this property is [true](https://developer.apple.com/documentation/swift/true) when the toolbar’s customization palette is running; otherwise, it’s [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Displaying the customization palette

- [runCustomizationPalette:](runcustomizationpalette%28__%29.md): Displays the toolbar’s customization palette and handles any user-initiated customizations.
