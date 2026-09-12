> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cicolorcurves/curvesdata](https://developer.apple.com/documentation/coreimage/cicolorcurves/curvesdata)

# curvesData (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Color values that determine the color curves transform.

## Declaration

```swift
var curvesData: Data { get set }
```

<a id="Discussion"></a>

## Discussion

Create the curves data as an [NSData](../../foundation/nsdata.md) object containing a sequence of single-precision RGB values. These values represent a lookup table that’s applied to the input image.

Core Image unpremultiplies the image before applying the effect, and premultiplies the result after applying the effect.

## See Also

### Instance Properties

- [colorSpace](colorspace.md): The working color space.
- [curvesDomain](curvesdomain.md): A two-element vector that defines the minimum and maximum values of the curve data.
- [inputImage](inputimage.md): The image to use as an input image.

# curvesData (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Color values that determine the color curves transform.

## Declaration

```objectivec
@property (nonatomic, retain) NSData * curvesData;
```

<a id="Discussion"></a>

## Discussion

Create the curves data as an [NSData](../../foundation/nsdata.md) object containing a sequence of single-precision RGB values. These values represent a lookup table that’s applied to the input image.

Core Image unpremultiplies the image before applying the effect, and premultiplies the result after applying the effect.

## See Also

### Instance Properties

- [colorSpace](colorspace.md): The working color space.
- [curvesDomain](curvesdomain.md): A two-element vector that defines the minimum and maximum values of the curve data.
- [inputImage](inputimage.md): The image to use as an input image.
