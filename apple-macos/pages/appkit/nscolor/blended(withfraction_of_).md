> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolor/blended(withfraction:of:)](https://developer.apple.com/documentation/appkit/nscolor/blended(withfraction:of:))

# blended(withFraction:of:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Creates a new color object whose component values are a weighted sum of the current color object and the specified color object’s.

## Declaration

```swift
func blended(withFraction fraction: CGFloat, of color: NSColor) -> NSColor?
```

## Parameters

- `fraction`: The amount of the color to blend with the receiver’s color. The method converts `color` and a copy of the receiver to RGB, and then sets each component of the returned color to `fraction` of `color`‘s value plus 1 – `fraction` of the receiver’s.
- `color`: The color to blend with the receiver’s color.

<a id="return-value"></a>

## Return Value

The resulting color object or `nil` if the colors can’t be converted.

## See Also

### Transforming existing color objects

- [usingColorSpace(\_:)](usingcolorspace%28__%29.md): Creates a new color object representing the color of the current color object in the specified color space.
- [withAlphaComponent(\_:)](withalphacomponent%28__%29.md): Creates a new color object that has the same color space and component values as the current color object, but the specified alpha component.
- [highlight(withLevel:)](highlight%28withlevel_%29.md): Creates a new color object that represents a blend between the current color and the highlight color.
- [shadow(withLevel:)](shadow%28withlevel_%29.md): Creates a new color object that represents a blend between the current color and the shadow color.

# blendedColorWithFraction:ofColor: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Creates a new color object whose component values are a weighted sum of the current color object and the specified color object’s.

## Declaration

```objectivec
- (NSColor *) blendedColorWithFraction:(CGFloat) fraction ofColor:(NSColor *) color;
```

## Parameters

- `fraction`: The amount of the color to blend with the receiver’s color. The method converts `color` and a copy of the receiver to RGB, and then sets each component of the returned color to `fraction` of `color`‘s value plus 1 – `fraction` of the receiver’s.
- `color`: The color to blend with the receiver’s color.

<a id="return-value"></a>

## Return Value

The resulting color object or `nil` if the colors can’t be converted.

## See Also

### Transforming existing color objects

- [colorUsingColorSpace:](usingcolorspace%28__%29.md): Creates a new color object representing the color of the current color object in the specified color space.
- [colorWithAlphaComponent:](withalphacomponent%28__%29.md): Creates a new color object that has the same color space and component values as the current color object, but the specified alpha component.
- [highlightWithLevel:](highlight%28withlevel_%29.md): Creates a new color object that represents a blend between the current color and the highlight color.
- [shadowWithLevel:](shadow%28withlevel_%29.md): Creates a new color object that represents a blend between the current color and the shadow color.
