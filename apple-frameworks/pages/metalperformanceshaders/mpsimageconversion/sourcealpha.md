> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimageconversion/sourcealpha](https://developer.apple.com/documentation/metalperformanceshaders/mpsimageconversion/sourcealpha)

# sourceAlpha (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Premultiplication description for the source texture.

## Declaration

```swift
var sourceAlpha: MPSAlphaType { get }
```

<a id="Discussion"></a>

## Discussion

Most color space conversion operations can not work directly on premultiplied data. Use this property to tag premultiplied data so that the source texture can be un-premultiplied prior to the application of these transforms. The default value is [MPSAlphaType.alphaIsOne](../mpsalphatype/alphaisone.md).

## See Also

### Properties

- [destinationAlpha](destinationalpha.md): Premultiplication description for the destination texture.

# sourceAlpha (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Premultiplication description for the source texture.

## Declaration

```objectivec
@property (nonatomic, readonly) MPSAlphaType sourceAlpha;
```

<a id="Discussion"></a>

## Discussion

Most color space conversion operations can not work directly on premultiplied data. Use this property to tag premultiplied data so that the source texture can be un-premultiplied prior to the application of these transforms. The default value is [MPSAlphaTypeAlphaIsOne](../mpsalphatype/alphaisone.md).

## See Also

### Properties

- [destinationAlpha](destinationalpha.md): Premultiplication description for the destination texture.
