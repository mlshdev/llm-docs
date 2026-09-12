> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cilanczosscaletransform/scale](https://developer.apple.com/documentation/coreimage/cilanczosscaletransform/scale)

# scale (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The scaling factor to use on the image.

## Declaration

```swift
var scale: Float { get set }
```

<a id="Discussion"></a>

## Discussion

Values less than 1.0 scale down the images. Values greater than 1.0 scale up the image.

## See Also

### Instance Properties

- [aspectRatio](aspectratio.md): The additional horizontal scaling factor to use on the image.
- [inputImage](inputimage.md): The image to use as an input image.

# scale (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The scaling factor to use on the image.

## Declaration

```objectivec
@property (nonatomic) float scale;
```

<a id="Discussion"></a>

## Discussion

Values less than 1.0 scale down the images. Values greater than 1.0 scale up the image.

## See Also

### Instance Properties

- [aspectRatio](aspectratio.md): The additional horizontal scaling factor to use on the image.
- [inputImage](inputimage.md): The image to use as an input image.
