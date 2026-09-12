> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorpickertouchbaritem/colorlist](https://developer.apple.com/documentation/appkit/nscolorpickertouchbaritem/colorlist)

# colorList (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

The list of colors displayed in the color picker.

## Declaration

```swift
var colorList: NSColorList! { get set }
```

<a id="Discussion"></a>

## Discussion

Defaults to the standard system color list.

Note that setting a custom color list disables the additional tints and shades that appear when the user sustains a touch.

## See Also

### Configuring the color picker

- [allowedColorSpaces](allowedcolorspaces.md): Controls the color spaces that the color picker can produce.
- [showsAlpha](showsalpha.md): A Boolean value that controls whether the color picker allows picking of colors with alpha values other than `1.0`.
- [isEnabled](isenabled.md): A Boolean value that determines whether the color picker is enabled.

# colorList (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.12.2+

The list of colors displayed in the color picker.

## Declaration

```objectivec
@property (strong, null_resettable) NSColorList * colorList;
```

<a id="Discussion"></a>

## Discussion

Defaults to the standard system color list.

Note that setting a custom color list disables the additional tints and shades that appear when the user sustains a touch.

## See Also

### Configuring the color picker

- [allowedColorSpaces](allowedcolorspaces.md): Controls the color spaces that the color picker can produce.
- [showsAlpha](showsalpha.md): A Boolean value that controls whether the color picker allows picking of colors with alpha values other than `1.0`.
- [enabled](isenabled.md): A Boolean value that determines whether the color picker is enabled.
