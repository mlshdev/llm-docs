> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorpicker/setmode(_:)](https://developer.apple.com/documentation/appkit/nscolorpicker/setmode(_:))

# setMode(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Overriden to set the color picker’s mode.

## Declaration

```swift
@MainActor func setMode(_ mode: NSColorPanel.Mode)
```

## Parameters

- `mode`: A constant specifying the color picking mode. These constants are defined in `AppKit/NSColorPanel.h`.

<a id="Discussion"></a>

## Discussion

In grayscale-alpha, red-green-blue, cyan-magenta-yellow-black, and hue-saturation-brightness modes, the user adjusts colors by manipulating sliders. In the custom palette mode, the user can load an `NSImage` file (TIFF or EPS) into the `NSColorPanel`, then select colors from the image. In custom color list mode, the user can create and load lists of named colors. The two custom modes provide `NSPopUpList`s for loading and saving files. Finally, color wheel mode provides a simplified control for selecting colors.

# setMode: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Overriden to set the color picker’s mode.

## Declaration

```objectivec
- (void) setMode:(NSColorPanelMode) mode;
```

## Parameters

- `mode`: A constant specifying the color picking mode. These constants are defined in `AppKit/NSColorPanel.h`.

<a id="Discussion"></a>

## Discussion

In grayscale-alpha, red-green-blue, cyan-magenta-yellow-black, and hue-saturation-brightness modes, the user adjusts colors by manipulating sliders. In the custom palette mode, the user can load an `NSImage` file (TIFF or EPS) into the `NSColorPanel`, then select colors from the image. In custom color list mode, the user can create and load lists of named colors. The two custom modes provide `NSPopUpList`s for loading and saving files. Finally, color wheel mode provides a simplified control for selecting colors.
