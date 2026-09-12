> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimageconstcvimageformat](https://developer.apple.com/documentation/accelerate/vimageconstcvimageformat)

# vImageConstCVImageFormat (Swift)

**Framework:** Accelerate  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An immutable description of image encoding in a Core Video pixel buffer.

## Declaration

```swift
class vImageConstCVImageFormat
```

<a id="Discussion"></a>

## Discussion

Use [vImageCVImageFormat_Copy(\_:)](vimagecvimageformat_copy%28__%29.md) to create a mutable copy of a [vImageConstCVImageFormat](vimageconstcvimageformat.md) instance.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Creating Core Video image formats

- [vImageCVImageFormat](vimagecvimageformat.md): A mutable description of image encoding in a Core Video pixel buffer.
- [vImageCVImageFormat_CreateWithCVPixelBuffer(\_:)](vimagecvimageformat_createwithcvpixelbuffer%28__%29.md): Creates the description of the image encoding in an existing Core Video pixel buffer.
- [vImageCVImageFormat_Create(\_:\_:\_:\_:\_:)](vimagecvimageformat_create%28__________%29.md): Creates the description of image encoding in a Core Video pixel buffer from the specified properties.

# vImageConstCVImageFormatRef (Objective-C)

**Framework:** Accelerate  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An immutable description of image encoding in a Core Video pixel buffer.

## Declaration

```objectivec
typedef const struct vImageCVImageFormat * vImageConstCVImageFormatRef;
```

<a id="Discussion"></a>

## Discussion

Use [vImageCVImageFormat_Copy](vimagecvimageformat_copy%28__%29.md) to create a mutable copy of a [vImageConstCVImageFormatRef](vimageconstcvimageformat.md) instance.

## See Also

### Creating Core Video image formats

- [vImageCVImageFormatRef](vimagecvimageformat.md): A mutable description of image encoding in a Core Video pixel buffer.
- [vImageCVImageFormat_CreateWithCVPixelBuffer](vimagecvimageformat_createwithcvpixelbuffer%28__%29.md): Creates the description of the image encoding in an existing Core Video pixel buffer.
- [vImageCVImageFormat_Create](vimagecvimageformat_create%28__________%29.md): Creates the description of image encoding in a Core Video pixel buffer from the specified properties.
