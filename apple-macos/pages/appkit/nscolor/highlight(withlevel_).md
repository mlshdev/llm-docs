> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolor/highlight(withlevel:)](https://developer.apple.com/documentation/appkit/nscolor/highlight(withlevel:))

# highlight(withLevel:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Creates a new color object that represents a blend between the current color and the highlight color.

## Declaration

```swift
func highlight(withLevel val: CGFloat) -> NSColor?
```

## Parameters

- `val`: The amount of the highlight color that is blended with the receiver’s color. This should be a number from `0.0` through `1.0`. A `highlightLevel` below `0.0` is interpreted as `0.0`; a `highlightLevel` above `1.0` is interpreted as `1.0`.

<a id="return-value"></a>

## Return Value

The new `NSColor` object. Returns `nil` if the colors can’t be converted.

<a id="Discussion"></a>

## Discussion

The highlight color is provided by the [highlightColor](highlightcolor.md) property. Call this method when you want to brighten the current color for use in highlights.

## See Also

### Transforming existing color objects

- [usingColorSpace(\_:)](usingcolorspace%28__%29.md): Creates a new color object representing the color of the current color object in the specified color space.
- [blended(withFraction:of:)](blended%28withfraction_of_%29.md): Creates a new color object whose component values are a weighted sum of the current color object and the specified color object’s.
- [withAlphaComponent(\_:)](withalphacomponent%28__%29.md): Creates a new color object that has the same color space and component values as the current color object, but the specified alpha component.
- [shadow(withLevel:)](shadow%28withlevel_%29.md): Creates a new color object that represents a blend between the current color and the shadow color.

# highlightWithLevel: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Creates a new color object that represents a blend between the current color and the highlight color.

## Declaration

```objectivec
- (NSColor *) highlightWithLevel:(CGFloat) val;
```

## Parameters

- `val`: The amount of the highlight color that is blended with the receiver’s color. This should be a number from `0.0` through `1.0`. A `highlightLevel` below `0.0` is interpreted as `0.0`; a `highlightLevel` above `1.0` is interpreted as `1.0`.

<a id="return-value"></a>

## Return Value

The new `NSColor` object. Returns `nil` if the colors can’t be converted.

<a id="Discussion"></a>

## Discussion

The highlight color is provided by the [highlightColor](highlightcolor.md) property. Call this method when you want to brighten the current color for use in highlights.

## See Also

### Transforming existing color objects

- [colorUsingColorSpace:](usingcolorspace%28__%29.md): Creates a new color object representing the color of the current color object in the specified color space.
- [blendedColorWithFraction:ofColor:](blended%28withfraction_of_%29.md): Creates a new color object whose component values are a weighted sum of the current color object and the specified color object’s.
- [colorWithAlphaComponent:](withalphacomponent%28__%29.md): Creates a new color object that has the same color space and component values as the current color object, but the specified alpha component.
- [shadowWithLevel:](shadow%28withlevel_%29.md): Creates a new color object that represents a blend between the current color and the shadow color.
