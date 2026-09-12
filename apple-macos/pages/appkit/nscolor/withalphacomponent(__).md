> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolor/withalphacomponent(_:)](https://developer.apple.com/documentation/appkit/nscolor/withalphacomponent(_:))

# withAlphaComponent(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Creates a new color object that has the same color space and component values as the current color object, but the specified alpha component.

## Declaration

```swift
func withAlphaComponent(_ alpha: CGFloat) -> NSColor
```

## Parameters

- `alpha`: The opacity value of the new `NSColor` object.

<a id="return-value"></a>

## Return Value

The new `NSColor` object. If the receiver’s color space doesn’t include an alpha component, the receiver is returned.

<a id="Discussion"></a>

## Discussion

A subclass with explicit opacity components should override this method to return a color with the specified alpha.

## See Also

### Related Documentation

- [alphaComponent](alphacomponent.md): The alpha (opacity) component value of the color.

### Transforming existing color objects

- [usingColorSpace(\_:)](usingcolorspace%28__%29.md): Creates a new color object representing the color of the current color object in the specified color space.
- [blended(withFraction:of:)](blended%28withfraction_of_%29.md): Creates a new color object whose component values are a weighted sum of the current color object and the specified color object’s.
- [highlight(withLevel:)](highlight%28withlevel_%29.md): Creates a new color object that represents a blend between the current color and the highlight color.
- [shadow(withLevel:)](shadow%28withlevel_%29.md): Creates a new color object that represents a blend between the current color and the shadow color.

# colorWithAlphaComponent: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Creates a new color object that has the same color space and component values as the current color object, but the specified alpha component.

## Declaration

```objectivec
- (NSColor *) colorWithAlphaComponent:(CGFloat) alpha;
```

## Parameters

- `alpha`: The opacity value of the new `NSColor` object.

<a id="return-value"></a>

## Return Value

The new `NSColor` object. If the receiver’s color space doesn’t include an alpha component, the receiver is returned.

<a id="Discussion"></a>

## Discussion

A subclass with explicit opacity components should override this method to return a color with the specified alpha.

## See Also

### Related Documentation

- [alphaComponent](alphacomponent.md): The alpha (opacity) component value of the color.

### Transforming existing color objects

- [colorUsingColorSpace:](usingcolorspace%28__%29.md): Creates a new color object representing the color of the current color object in the specified color space.
- [blendedColorWithFraction:ofColor:](blended%28withfraction_of_%29.md): Creates a new color object whose component values are a weighted sum of the current color object and the specified color object’s.
- [highlightWithLevel:](highlight%28withlevel_%29.md): Creates a new color object that represents a blend between the current color and the highlight color.
- [shadowWithLevel:](shadow%28withlevel_%29.md): Creates a new color object that represents a blend between the current color and the shadow color.
