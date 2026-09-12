> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolorpickertouchbaritem/allowedcolorspaces](https://developer.apple.com/documentation/appkit/nscolorpickertouchbaritem/allowedcolorspaces)

# allowedColorSpaces (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

Controls the color spaces that the color picker can produce.

## Declaration

```swift
var allowedColorSpaces: [NSColorSpace]? { get set }
```

<a id="Discussion"></a>

## Discussion

If a selected color is outside the allowed color spaces, the picker converts it to the first color space in the array.

Set the value of this property to `nil` to allow all color spaces. An empty array is an invalid value.

## See Also

### Configuring the color picker

- [colorList](colorlist.md): The list of colors displayed in the color picker.
- [showsAlpha](showsalpha.md): A Boolean value that controls whether the color picker allows picking of colors with alpha values other than `1.0`.
- [isEnabled](isenabled.md): A Boolean value that determines whether the color picker is enabled.

# allowedColorSpaces (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.13+

Controls the color spaces that the color picker can produce.

## Declaration

```objectivec
@property (copy, nullable) NSArray<NSColorSpace *> * allowedColorSpaces;
```

<a id="Discussion"></a>

## Discussion

If a selected color is outside the allowed color spaces, the picker converts it to the first color space in the array.

Set the value of this property to `nil` to allow all color spaces. An empty array is an invalid value.

## See Also

### Configuring the color picker

- [colorList](colorlist.md): The list of colors displayed in the color picker.
- [showsAlpha](showsalpha.md): A Boolean value that controls whether the color picker allows picking of colors with alpha values other than `1.0`.
- [enabled](isenabled.md): A Boolean value that determines whether the color picker is enabled.
