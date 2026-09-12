> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciblendwithmask/maskimage](https://developer.apple.com/documentation/coreimage/ciblendwithmask/maskimage)

# maskImage (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

A grayscale mask that defines the blend.

## Declaration

```swift
var maskImage: CIImage? { get set }
```

<a id="Discussion"></a>

## Discussion

When a mask value is 0.0, the result is the background. When the mask value is 1.0, the result is the image.

## See Also

### Instance Properties

- [backgroundImage](backgroundimage.md): The image to use as a background image.
- [inputImage](inputimage.md): The image to use as a foreground image.

# maskImage (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A grayscale mask that defines the blend.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) CIImage * maskImage;
```

<a id="Discussion"></a>

## Discussion

When a mask value is 0.0, the result is the background. When the mask value is 1.0, the result is the image.

## See Also

### Instance Properties

- [backgroundImage](backgroundimage.md): The image to use as a background image.
- [inputImage](inputimage.md): The image to use as a foreground image.
