> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolor/usingtype(_:)](https://developer.apple.com/documentation/appkit/nscolor/usingtype(_:))

# usingType(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

Returns a version of the color object that is compatible with the specified color type.

## Declaration

```swift
func usingType(_ type: NSColor.ColorType) -> NSColor?
```

## Parameters

- `type`: The type of color object that you want. For example, if you want a color object containing RGB components, specify [NSColor.ColorType.componentBased](colortype/componentbased.md).

<a id="return-value"></a>

## Return Value

A compatible color object, or `nil` if a compatible color object is not available.

<a id="Discussion"></a>

## Discussion

Before accessing the details of an [NSColor](../nscolor.md) object, use this method to ensure that you have an object capable of returning those details. For example, before you access the component values, make sure you have a color object of type [NSColor.ColorType.componentBased](colortype/componentbased.md). For some types of colors, conversions to a compatible color type may be possible.

## See Also

### Working with the color space

- [type](type.md): The type of the color object.
- [NSColor.ColorType](colortype.md): Constants that indicate the color’s type, and which methods may be called on the color object.
- [colorSpace](colorspace.md): The color space associated with the color.
- [NSColorSpaceName](../nscolorspacename.md): Constants that specify color space names.

# colorUsingType: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.13+

Returns a version of the color object that is compatible with the specified color type.

## Declaration

```objectivec
- (NSColor *) colorUsingType:(NSColorType) type;
```

## Parameters

- `type`: The type of color object that you want. For example, if you want a color object containing RGB components, specify [NSColorTypeComponentBased](colortype/componentbased.md).

<a id="return-value"></a>

## Return Value

A compatible color object, or `nil` if a compatible color object is not available.

<a id="Discussion"></a>

## Discussion

Before accessing the details of an [NSColor](../nscolor.md) object, use this method to ensure that you have an object capable of returning those details. For example, before you access the component values, make sure you have a color object of type [NSColorTypeComponentBased](colortype/componentbased.md). For some types of colors, conversions to a compatible color type may be possible.

## See Also

### Working with the color space

- [type](type.md): The type of the color object.
- [NSColorType](colortype.md): Constants that indicate the color’s type, and which methods may be called on the color object.
- [colorSpace](colorspace.md): The color space associated with the color.
- [NSColorSpaceName](../nscolorspacename.md): Constants that specify color space names.
