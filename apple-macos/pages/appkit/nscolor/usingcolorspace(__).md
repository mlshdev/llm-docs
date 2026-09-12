> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolor/usingcolorspace(_:)](https://developer.apple.com/documentation/appkit/nscolor/usingcolorspace(_:))

# usingColorSpace(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Creates a new color object representing the color of the current color object in the specified color space.

## Declaration

```swift
func usingColorSpace(_ space: NSColorSpace) -> NSColor?
```

## Parameters

- `space`: The color space of the new `NSColor` object.

<a id="return-value"></a>

## Return Value

The new `NSColor` object. This method converts the receiver’s color to an equivalent one in the new color space. Although the new color might have different component values, it looks the same as the original.  Returns `nil` if conversion is not possible.

<a id="discussion"></a>

## Discussion

If the receiver’s color space is the same as that specified in `space`, this method returns the same `NSColor` object.

## See Also

### Related Documentation

- [init(colorSpace:components:count:)](init%28colorspace_components_count_%29.md): Creates a color object from the specified components of the given color space.

### Transforming existing color objects

- [blended(withFraction:of:)](blended%28withfraction_of_%29.md): Creates a new color object whose component values are a weighted sum of the current color object and the specified color object’s.
- [withAlphaComponent(\_:)](withalphacomponent%28__%29.md): Creates a new color object that has the same color space and component values as the current color object, but the specified alpha component.
- [highlight(withLevel:)](highlight%28withlevel_%29.md): Creates a new color object that represents a blend between the current color and the highlight color.
- [shadow(withLevel:)](shadow%28withlevel_%29.md): Creates a new color object that represents a blend between the current color and the shadow color.

# colorUsingColorSpace: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Creates a new color object representing the color of the current color object in the specified color space.

## Declaration

```objectivec
- (NSColor *) colorUsingColorSpace:(NSColorSpace *) space;
```

## Parameters

- `space`: The color space of the new `NSColor` object.

<a id="return-value"></a>

## Return Value

The new `NSColor` object. This method converts the receiver’s color to an equivalent one in the new color space. Although the new color might have different component values, it looks the same as the original.  Returns `nil` if conversion is not possible.

<a id="discussion"></a>

## Discussion

If the receiver’s color space is the same as that specified in `space`, this method returns the same `NSColor` object.

## See Also

### Related Documentation

- [colorWithColorSpace:components:count:](init%28colorspace_components_count_%29.md): Creates a color object from the specified components of the given color space.

### Transforming existing color objects

- [blendedColorWithFraction:ofColor:](blended%28withfraction_of_%29.md): Creates a new color object whose component values are a weighted sum of the current color object and the specified color object’s.
- [colorWithAlphaComponent:](withalphacomponent%28__%29.md): Creates a new color object that has the same color space and component values as the current color object, but the specified alpha component.
- [highlightWithLevel:](highlight%28withlevel_%29.md): Creates a new color object that represents a blend between the current color and the highlight color.
- [shadowWithLevel:](shadow%28withlevel_%29.md): Creates a new color object that represents a blend between the current color and the shadow color.
