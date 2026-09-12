> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimageconversion/destinationalpha](https://developer.apple.com/documentation/metalperformanceshaders/mpsimageconversion/destinationalpha)

# destinationAlpha (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Premultiplication description for the destination texture.

## Declaration

```swift
var destinationAlpha: MPSAlphaType { get }
```

<a id="Discussion"></a>

## Discussion

Color space conversion operations produce non-premultiplied data. Use this property to tag cases where premultiplied results are required. If the [MPSAlphaType.alphaIsOne](../mpsalphatype/alphaisone.md) value is used, the alpha channel will be set to 1. The default value is [MPSAlphaType.alphaIsOne](../mpsalphatype/alphaisone.md).

## See Also

### Properties

- [sourceAlpha](sourcealpha.md): Premultiplication description for the source texture.

# destinationAlpha (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Premultiplication description for the destination texture.

## Declaration

```objectivec
@property (nonatomic, readonly) MPSAlphaType destinationAlpha;
```

<a id="Discussion"></a>

## Discussion

Color space conversion operations produce non-premultiplied data. Use this property to tag cases where premultiplied results are required. If the [MPSAlphaTypeAlphaIsOne](../mpsalphatype/alphaisone.md) value is used, the alpha channel will be set to 1. The default value is [MPSAlphaTypeAlphaIsOne](../mpsalphatype/alphaisone.md).

## See Also

### Properties

- [sourceAlpha](sourcealpha.md): Premultiplication description for the source texture.
