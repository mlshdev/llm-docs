> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicolor](https://developer.apple.com/documentation/coreimage/cicolor)

# CIColor (Swift)

**Framework:** Core Image  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

The Core Image class that defines a color object.

## Declaration

```swift
class CIColor
```

## Mentioned In

- [Selectively Focusing on an Image](selectively-focusing-on-an-image.md)

<a id="overview"></a>

## Overview

Use `CIColor` instances in conjunction with other Core Image classes, such as [CIFilter](cifilter-swift.class.md) and [CIKernel](cikernel.md). Many of the built-in Core Image filters have one or more `CIColor` inputs that you can set to affect the filter’s behavior.

<a id="Color-Model"></a>

### Color Model

A color is defined as a N-dimensional model where each dimension’s color component is represented by intensity values. A color component may also be referred to as a color channel. An RGB color model, for example, is three-dimensional and the red, green, and blue component intensities define each unique color.

<a id="Color-Space"></a>

### Color Space

A color is also defined by a color space that locates the axes of N-dimensional model within the greater volume of human perceivable colors.  Core Image uses `CGColorSpace` instances to specify a variety of different color spaces such as sRGB, P3, BT.2020, etc. The `CGColorSpace` also defines if the color space is coded linearly or in a non-linear perceptual curve. (For more information on `CGColorSpace` see [CGColorSpace](../coregraphics/cgcolorspace.md))

<a id="Color-Range"></a>

### Color Range

Standard dynamic range (SDR) color color component values range from `0.0` to `1.0`, with `0.0` representing an 0% of that component and `1.0` representing 100%. In contrast, high dynamic range (HDR) color values can be less than `0.0` (for more saturation) or greater than `1.0` (for more brightness).

<a id="Color-Opacity"></a>

### Color Opacity

`CIColor` instances also have an alpha component, which represents the opacity of the color, with 0.0 meaning completely transparent and 1.0 meaning completely opaque. If a color does not have an explicit alpha component, Core Image assumes that the alpha component equals 1.0. With `CIColor` that color components values are not premultiplied. So for example, a semi-transparent pure red `CIColor` is represented by RGB `1.0,0.0,0.0` and A `0.5`.  In contrast color components values in [CIImage](ciimage.md) buffers or read in [CIKernel](cikernel.md) samplers are premultiplied by default.

## Topics

### Initializing Color Objects

- [init(cgColor:)](cicolor/init%28cgcolor_%29-1hzk4.md): Create a Core Image color object with a Core Graphics color object.
- [init(color:)](cicolor/init%28color_%29.md)
- [init(red:green:blue:alpha:)](cicolor/init%28red_green_blue_alpha_%29.md): Initialize a Core Image color object in the sRGB color space with the specified red, green, blue, and alpha component values.

### Creating Color Objects

- [init(red:green:blue:)](cicolor/init%28red_green_blue_%29.md): Create a Core Image color object in the sRGB color space with the specified red, green, and blue component values.
- [init(string:)](cicolor/init%28string_%29.md): Create a Core Image color object in the sRGB color space using a string containing the RGBA color component values.
- [init(red:green:blue:colorSpace:)](cicolor/init%28red_green_blue_colorspace_%29-2og6y.md): Create a Core Image color object with the specified red, green, and blue component values as measured in the specified color space.
- [init(red:green:blue:alpha:colorSpace:)](cicolor/init%28red_green_blue_alpha_colorspace_%29-5mvff.md): Create a Core Image color object with the specified red, green, blue, and alpha component values as measured in the specified color space.

### Getting Color Components

- [colorSpace](cicolor/colorspace.md): Returns the `CGColorSpace` associated with the color
- [components](cicolor/components.md): Return a pointer to an array of `CGFloat` values including alpha.
- [numberOfComponents](cicolor/numberofcomponents.md): Returns the color components of the color including alpha.
- [red](cicolor/red-swift.property.md): Returns the unpremultiplied red component of the color.
- [green](cicolor/green-swift.property.md): Returns the unpremultiplied green component of the color.
- [blue](cicolor/blue-swift.property.md): Returns the unpremultiplied blue component of the color.
- [alpha](cicolor/alpha.md): Returns the alpha value of the color.
- [stringRepresentation](cicolor/stringrepresentation.md): Returns a formatted string with the unpremultiplied color and alpha components of the color.

### Creating a CIColor Object with Preset Components

- [black](cicolor/black.md): Returns a singleton Core Image color instance in the sRGB color space with RGB values `0,0,0` and alpha value `1`.
- [blue](cicolor/blue-swift.type.property.md): Returns a singleton Core Image color instance in the sRGB color space with RGB values `0,0,1` and alpha value `1`.
- [clear](cicolor/clear.md): Returns a singleton Core Image color instance in the sRGB color space with RGB values `0,0,0` and alpha value `0`.
- [cyan](cicolor/cyan.md): Returns a singleton Core Image color instance in the sRGB color space with RGB values `0,1,1` and alpha value `1`.
- [gray](cicolor/gray.md): Returns a singleton Core Image color instance in the sRGB color space with RGB values `0.5,0.5,0.5` and alpha value `1`.
- [green](cicolor/green-swift.type.property.md): Returns a singleton Core Image color instance in the sRGB color space with RGB values `0,1,0` and alpha value `1`.
- [magenta](cicolor/magenta.md): Returns a singleton Core Image color instance in the sRGB color space with RGB values `1,0,1` and alpha value `1`.
- [red](cicolor/red-swift.type.property.md): Returns a singleton Core Image color instance in the sRGB color space with RGB values `1,0,0` and alpha value `1`.
- [white](cicolor/white.md): Returns a singleton Core Image color instance in the sRGB color space with RGB values `1,1,1` and alpha value `1`.
- [yellow](cicolor/yellow.md): Returns a singleton Core Image color instance in the sRGB color space with RGB values `1,1,0` and alpha value `1`.

### Initializers

- [init(CGColor:)](cicolor/init%28cgcolor_%29-2n26w.md)
- [init(CGColor:)](cicolor/init%28cgcolor_%29-2nx98.md)
- [init(coder:)](cicolor/init%28coder_%29.md)
- [init(red:green:blue:alpha:colorSpace:)](cicolor/init%28red_green_blue_alpha_colorspace_%29-8yg0z.md): Initialize a Core Image color object with the specified red, green, and blue component values as measured in the specified color space.
- [init(red:green:blue:colorSpace:)](cicolor/init%28red_green_blue_colorspace_%29-6d8o.md): Initialize a Core Image color object with the specified red, green, and blue component values as measured in the specified color space.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Filters

- [CIFilter](cifilter-swift.class.md): An image processor that produces an image by manipulating one or more input images or by generating new image data.
- [CIRAWFilter](cirawfilter.md): A filter subclass that produces an image by manipulating RAW image sensor data from a digital camera or scanner.
- [CIVector](civector.md): The Core Image class that defines a vector object.

# CIColor (Objective-C)

**Framework:** Core Image  
**Kind:** Class  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

The Core Image class that defines a color object.

## Declaration

```objectivec
@interface CIColor : NSObject
```

## Mentioned In

- [Selectively Focusing on an Image](selectively-focusing-on-an-image.md)

<a id="overview"></a>

## Overview

Use `CIColor` instances in conjunction with other Core Image classes, such as [CIFilter](cifilter-swift.class.md) and [CIKernel](cikernel.md). Many of the built-in Core Image filters have one or more `CIColor` inputs that you can set to affect the filter’s behavior.

<a id="Color-Model"></a>

### Color Model

A color is defined as a N-dimensional model where each dimension’s color component is represented by intensity values. A color component may also be referred to as a color channel. An RGB color model, for example, is three-dimensional and the red, green, and blue component intensities define each unique color.

<a id="Color-Space"></a>

### Color Space

A color is also defined by a color space that locates the axes of N-dimensional model within the greater volume of human perceivable colors.  Core Image uses `CGColorSpace` instances to specify a variety of different color spaces such as sRGB, P3, BT.2020, etc. The `CGColorSpace` also defines if the color space is coded linearly or in a non-linear perceptual curve. (For more information on `CGColorSpace` see [CGColorSpaceRef](../coregraphics/cgcolorspace.md))

<a id="Color-Range"></a>

### Color Range

Standard dynamic range (SDR) color color component values range from `0.0` to `1.0`, with `0.0` representing an 0% of that component and `1.0` representing 100%. In contrast, high dynamic range (HDR) color values can be less than `0.0` (for more saturation) or greater than `1.0` (for more brightness).

<a id="Color-Opacity"></a>

### Color Opacity

`CIColor` instances also have an alpha component, which represents the opacity of the color, with 0.0 meaning completely transparent and 1.0 meaning completely opaque. If a color does not have an explicit alpha component, Core Image assumes that the alpha component equals 1.0. With `CIColor` that color components values are not premultiplied. So for example, a semi-transparent pure red `CIColor` is represented by RGB `1.0,0.0,0.0` and A `0.5`.  In contrast color components values in [CIImage](ciimage.md) buffers or read in [CIKernel](cikernel.md) samplers are premultiplied by default.

## Topics

### Initializing Color Objects

- [initWithCGColor:](cicolor/init%28cgcolor_%29-1hzk4.md): Create a Core Image color object with a Core Graphics color object.
- [initWithColor:](cicolor/init%28color_%29.md)
- [initWithRed:green:blue:](cicolor/initwithred_green_blue_.md): Initialize a Core Image color object in the sRGB color space with the specified red, green, and blue component values.
- [initWithRed:green:blue:alpha:](cicolor/init%28red_green_blue_alpha_%29.md): Initialize a Core Image color object in the sRGB color space with the specified red, green, blue, and alpha component values.

### Creating Color Objects

- [colorWithCGColor:](cicolor/colorwithcgcolor_.md): Create a Core Image color object with a Core Graphics color object.
- [colorWithRed:green:blue:](cicolor/init%28red_green_blue_%29.md): Create a Core Image color object in the sRGB color space with the specified red, green, and blue component values.
- [colorWithRed:green:blue:alpha:](cicolor/colorwithred_green_blue_alpha_.md): Create a Core Image color object in the sRGB color space with the specified red, green, blue, and alpha component values.
- [colorWithString:](cicolor/init%28string_%29.md): Create a Core Image color object in the sRGB color space using a string containing the RGBA color component values.
- [colorWithRed:green:blue:colorSpace:](cicolor/init%28red_green_blue_colorspace_%29-2og6y.md): Create a Core Image color object with the specified red, green, and blue component values as measured in the specified color space.
- [colorWithRed:green:blue:alpha:colorSpace:](cicolor/init%28red_green_blue_alpha_colorspace_%29-5mvff.md): Create a Core Image color object with the specified red, green, blue, and alpha component values as measured in the specified color space.

### Getting Color Components

- [colorSpace](cicolor/colorspace.md): Returns the `CGColorSpace` associated with the color
- [components](cicolor/components.md): Return a pointer to an array of `CGFloat` values including alpha.
- [numberOfComponents](cicolor/numberofcomponents.md): Returns the color components of the color including alpha.
- [red](cicolor/red-swift.property.md): Returns the unpremultiplied red component of the color.
- [green](cicolor/green-swift.property.md): Returns the unpremultiplied green component of the color.
- [blue](cicolor/blue-swift.property.md): Returns the unpremultiplied blue component of the color.
- [alpha](cicolor/alpha.md): Returns the alpha value of the color.
- [stringRepresentation](cicolor/stringrepresentation.md): Returns a formatted string with the unpremultiplied color and alpha components of the color.

### Creating a CIColor Object with Preset Components

- [blackColor](cicolor/black.md): Returns a singleton Core Image color instance in the sRGB color space with RGB values `0,0,0` and alpha value `1`.
- [blueColor](cicolor/blue-swift.type.property.md): Returns a singleton Core Image color instance in the sRGB color space with RGB values `0,0,1` and alpha value `1`.
- [clearColor](cicolor/clear.md): Returns a singleton Core Image color instance in the sRGB color space with RGB values `0,0,0` and alpha value `0`.
- [cyanColor](cicolor/cyan.md): Returns a singleton Core Image color instance in the sRGB color space with RGB values `0,1,1` and alpha value `1`.
- [grayColor](cicolor/gray.md): Returns a singleton Core Image color instance in the sRGB color space with RGB values `0.5,0.5,0.5` and alpha value `1`.
- [greenColor](cicolor/green-swift.type.property.md): Returns a singleton Core Image color instance in the sRGB color space with RGB values `0,1,0` and alpha value `1`.
- [magentaColor](cicolor/magenta.md): Returns a singleton Core Image color instance in the sRGB color space with RGB values `1,0,1` and alpha value `1`.
- [redColor](cicolor/red-swift.type.property.md): Returns a singleton Core Image color instance in the sRGB color space with RGB values `1,0,0` and alpha value `1`.
- [whiteColor](cicolor/white.md): Returns a singleton Core Image color instance in the sRGB color space with RGB values `1,1,1` and alpha value `1`.
- [yellowColor](cicolor/yellow.md): Returns a singleton Core Image color instance in the sRGB color space with RGB values `1,1,0` and alpha value `1`.

### Instance Methods

- [initWithRed:green:blue:alpha:colorSpace:](cicolor/init%28red_green_blue_alpha_colorspace_%29-8yg0z.md): Initialize a Core Image color object with the specified red, green, and blue component values as measured in the specified color space.
- [initWithRed:green:blue:colorSpace:](cicolor/init%28red_green_blue_colorspace_%29-6d8o.md): Initialize a Core Image color object with the specified red, green, and blue component values as measured in the specified color space.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Filters

- [CIFilter](cifilter-swift.class.md): An image processor that produces an image by manipulating one or more input images or by generating new image data.
- [CIRAWFilter](cirawfilter.md): A filter subclass that produces an image by manipulating RAW image sensor data from a digital camera or scanner.
- [CIVector](civector.md): The Core Image class that defines a vector object.
