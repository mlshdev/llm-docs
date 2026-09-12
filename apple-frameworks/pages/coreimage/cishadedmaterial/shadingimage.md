> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cishadedmaterial/shadingimage](https://developer.apple.com/documentation/coreimage/cishadedmaterial/shadingimage)

# shadingImage (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

The image to use as the height field.

## Declaration

```swift
var shadingImage: CIImage? { get set }
```

<a id="Discussion"></a>

## Discussion

The resulting image has greater heights with lighter shades, and lesser heights (lower areas) with darker shades.

## See Also

### Instance Properties

- [inputImage](inputimage.md): The image to use as an input image.
- [scale](scale.md): The scale of the effect.

# shadingImage (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The image to use as the height field.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) CIImage * shadingImage;
```

<a id="Discussion"></a>

## Discussion

The resulting image has greater heights with lighter shades, and lesser heights (lower areas) with darker shades.

## See Also

### Instance Properties

- [inputImage](inputimage.md): The image to use as an input image.
- [scale](scale.md): The scale of the effect.
