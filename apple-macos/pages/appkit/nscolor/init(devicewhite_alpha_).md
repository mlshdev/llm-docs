> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolor/init(devicewhite:alpha:)](https://developer.apple.com/documentation/appkit/nscolor/init(devicewhite:alpha:))

# init(deviceWhite:alpha:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Creates a color object using the given opacity and grayscale values.

## Declaration

```swift
init(deviceWhite white: CGFloat, alpha: CGFloat)
```

## Parameters

- `white`: The grayscale value of the color object.
- `alpha`: The opacity value of the color object.

<a id="return-value"></a>

## Return Value

The color object.

<a id="Discussion"></a>

## Discussion

Values below 0.0 are interpreted as 0.0, and values above 1.0 are interpreted as 1.0.

## See Also

### Related Documentation

- [getWhite(\_:alpha:)](getwhite%28__alpha_%29.md): Returns the grayscale and alpha values of the color.

### Creating a color using white components

- [init(white:alpha:)](init%28white_alpha_%29.md): Creates a color object with the specified brightness and alpha channel values.
- [init(calibratedWhite:alpha:)](init%28calibratedwhite_alpha_%29.md): Creates a color object using the given opacity and grayscale values.
- [init(genericGamma22White:alpha:)](init%28genericgamma22white_alpha_%29.md): Returns a color object with the specified white and alpha values in the GenericGamma22 colorspace.

# colorWithDeviceWhite:alpha: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Creates a color object using the given opacity and grayscale values.

## Declaration

```objectivec
+ (NSColor *) colorWithDeviceWhite:(CGFloat) white alpha:(CGFloat) alpha;
```

## Parameters

- `white`: The grayscale value of the color object.
- `alpha`: The opacity value of the color object.

<a id="return-value"></a>

## Return Value

The color object.

<a id="Discussion"></a>

## Discussion

Values below 0.0 are interpreted as 0.0, and values above 1.0 are interpreted as 1.0.

## See Also

### Related Documentation

- [getWhite:alpha:](getwhite%28__alpha_%29.md): Returns the grayscale and alpha values of the color.

### Creating a color using white components

- [colorWithWhite:alpha:](init%28white_alpha_%29.md): Creates a color object with the specified brightness and alpha channel values.
- [colorWithCalibratedWhite:alpha:](init%28calibratedwhite_alpha_%29.md): Creates a color object using the given opacity and grayscale values.
- [colorWithGenericGamma22White:alpha:](init%28genericgamma22white_alpha_%29.md): Returns a color object with the specified white and alpha values in the GenericGamma22 colorspace.
