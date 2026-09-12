> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/kvimagecopyinplace](https://developer.apple.com/documentation/accelerate/kvimagecopyinplace)

# kvImageCopyInPlace (Swift)

**Framework:** Accelerate  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A flag that copies the value of the edge pixel in the source to the destination.

## Declaration

```swift
var kvImageCopyInPlace: Int { get }
```

<a id="Discussion"></a>

## Discussion

When you set this flag, and a convolution function is processing an image pixel for which some of the kernel extends beyond the image boundaries, vImage does not compute the convolution. Instead, the value of the particular pixel unchanged; it’s simply copied to the destination image. This flag is valid only for convolution operations. The morphology functions do not use this flag because they do not use pixels outside the image in any of their calculations.

## See Also

### Edging Modes

- [kvImageBackgroundColorFill](kvimagebackgroundcolorfill.md): A flag that uses the background color for missing pixels.
- [kvImageEdgeExtend](kvimageedgeextend.md): A flag that extends the edges of the image infinitely.
- [kvImageTruncateKernel](kvimagetruncatekernel.md): A flag that uses only the part of the kernel that overlaps the image.

# kvImageCopyInPlace (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration Case  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A flag that copies the value of the edge pixel in the source to the destination.

## Declaration

```objectivec
kvImageCopyInPlace
```

<a id="Discussion"></a>

## Discussion

When you set this flag, and a convolution function is processing an image pixel for which some of the kernel extends beyond the image boundaries, vImage does not compute the convolution. Instead, the value of the particular pixel unchanged; it’s simply copied to the destination image. This flag is valid only for convolution operations. The morphology functions do not use this flag because they do not use pixels outside the image in any of their calculations.

## See Also

### Edging Modes

- [kvImageBackgroundColorFill](kvimagebackgroundcolorfill.md): A flag that uses the background color for missing pixels.
- [kvImageEdgeExtend](kvimageedgeextend.md): A flag that extends the edges of the image infinitely.
- [kvImageTruncateKernel](kvimagetruncatekernel.md): A flag that uses only the part of the kernel that overlaps the image.
