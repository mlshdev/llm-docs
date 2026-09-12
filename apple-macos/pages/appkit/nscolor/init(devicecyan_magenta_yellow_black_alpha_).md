> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolor/init(devicecyan:magenta:yellow:black:alpha:)](https://developer.apple.com/documentation/appkit/nscolor/init(devicecyan:magenta:yellow:black:alpha:))

# init(deviceCyan:magenta:yellow:black:alpha:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Creates a color object using the given opacity value and CMYK components.

## Declaration

```swift
init(deviceCyan cyan: CGFloat, magenta: CGFloat, yellow: CGFloat, black: CGFloat, alpha: CGFloat)
```

## Parameters

- `cyan`: The cyan component of the color object.
- `magenta`: The magenta component of the color object.
- `yellow`: The yellow component of the color object.
- `black`: The black component of the color object.
- `alpha`: The opacity value of the color object.

<a id="return-value"></a>

## Return Value

The color object.

<a id="Discussion"></a>

## Discussion

Values below 0.0 are interpreted as 0.0, and values above 1.0 are interpreted as 1.0.

## See Also

### Related Documentation

- [getCyan(\_:magenta:yellow:black:alpha:)](getcyan%28__magenta_yellow_black_alpha_%29.md): Returns the color object’s CMYK and opacity values.

# colorWithDeviceCyan:magenta:yellow:black:alpha: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Creates a color object using the given opacity value and CMYK components.

## Declaration

```objectivec
+ (NSColor *) colorWithDeviceCyan:(CGFloat) cyan magenta:(CGFloat) magenta yellow:(CGFloat) yellow black:(CGFloat) black alpha:(CGFloat) alpha;
```

## Parameters

- `cyan`: The cyan component of the color object.
- `magenta`: The magenta component of the color object.
- `yellow`: The yellow component of the color object.
- `black`: The black component of the color object.
- `alpha`: The opacity value of the color object.

<a id="return-value"></a>

## Return Value

The color object.

<a id="Discussion"></a>

## Discussion

Values below 0.0 are interpreted as 0.0, and values above 1.0 are interpreted as 1.0.

## See Also

### Related Documentation

- [getCyan:magenta:yellow:black:alpha:](getcyan%28__magenta_yellow_black_alpha_%29.md): Returns the color object’s CMYK and opacity values.
