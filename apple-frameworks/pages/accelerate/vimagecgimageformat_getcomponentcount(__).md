> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagecgimageformat_getcomponentcount(_:)](https://developer.apple.com/documentation/accelerate/vimagecgimageformat_getcomponentcount(_:))

# vImageCGImageFormat_GetComponentCount(\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 7.0+ · visionOS 1.0+ · watchOS 1.0+

Calculates the number of color and alpha channels for a specified image format.

## Declaration

```swift
func vImageCGImageFormat_GetComponentCount(_ format: UnsafePointer<vImage_CGImageFormat>) -> UInt32
```

## Parameters

- `format`: A valid [vImage_CGImageFormat](vimage_cgimageformat.md) structure.

<a id="return-value"></a>

## Return Value

The number of color and alpha channels in the image.

## See Also

### Querying Core Graphics image format attributes

- [vImageCGImageFormat_IsEqual(\_:\_:)](vimagecgimageformat_isequal%28____%29.md): Returns a Boolean value that indicates whether two vImage Core Graphics image formats are equal.

# vImageCGImageFormat_GetComponentCount (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 7.0+ · visionOS 1.0+ · watchOS 1.0+

Calculates the number of color and alpha channels for a specified image format.

## Declaration

```objectivec
uint32_t vImageCGImageFormat_GetComponentCount(const vImage_CGImageFormat *format);
```

## Parameters

- `format`: A valid [vImage_CGImageFormat](vimage_cgimageformat.md) structure.

<a id="return-value"></a>

## Return Value

The number of color and alpha channels in the image.

## See Also

### Querying Core Graphics image format attributes

- [vImageCGImageFormat_IsEqual](vimagecgimageformat_isequal%28____%29.md): Returns a Boolean value that indicates whether two vImage Core Graphics image formats are equal.
