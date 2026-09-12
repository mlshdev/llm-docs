> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolor/init(colorspace:components:count:)](https://developer.apple.com/documentation/appkit/nscolor/init(colorspace:components:count:))

# init(colorSpace:components:count:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Creates a color object from the specified components of the given color space.

## Declaration

```swift
init(colorSpace space: NSColorSpace, components: UnsafePointer<CGFloat>, count numberOfComponents: Int)
```

## Parameters

- `space`: An `NSColorSpace` object representing a color space. The colorspace should be component-based. The method raises if this is `nil` or a color space that cannot be used with `NSColor` objects.
- `components`: An array of the components in the specified color space to use to create the `NSColor` object. The order of these components is determined by the color-space profile, with the alpha component always last. (If you want the created color to be opaque, specify 1.0 for the alpha component.)
- `numberOfComponents`: The number of components in the `components` array. This should match the number dictated by the specified color space plus one for alpha. This method raises an exception if they do not match.

<a id="return-value"></a>

## Return Value

The color object.

## See Also

### Related Documentation

- [usingColorSpace(\_:)](usingcolorspace%28__%29.md): Creates a new color object representing the color of the current color object in the specified color space.

# colorWithColorSpace:components:count: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Creates a color object from the specified components of the given color space.

## Declaration

```objectivec
+ (NSColor *) colorWithColorSpace:(NSColorSpace *) space components:(const CGFloat *) components count:(NSInteger) numberOfComponents;
```

## Parameters

- `space`: An `NSColorSpace` object representing a color space. The colorspace should be component-based. The method raises if this is `nil` or a color space that cannot be used with `NSColor` objects.
- `components`: An array of the components in the specified color space to use to create the `NSColor` object. The order of these components is determined by the color-space profile, with the alpha component always last. (If you want the created color to be opaque, specify 1.0 for the alpha component.)
- `numberOfComponents`: The number of components in the `components` array. This should match the number dictated by the specified color space plus one for alpha. This method raises an exception if they do not match.

<a id="return-value"></a>

## Return Value

The color object.

## See Also

### Related Documentation

- [colorUsingColorSpace:](usingcolorspace%28__%29.md): Creates a new color object representing the color of the current color object in the specified color space.
