> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagecgimageformat_isequal(_:_:)](https://developer.apple.com/documentation/accelerate/vimagecgimageformat_isequal(_:_:))

# vImageCGImageFormat_IsEqual(\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 7.0+ · visionOS 1.0+ · watchOS 1.0+

Returns a Boolean value that indicates whether two vImage Core Graphics image formats are equal.

## Declaration

```swift
func vImageCGImageFormat_IsEqual(_ f1: UnsafePointer<vImage_CGImageFormat>!, _ f2: UnsafePointer<vImage_CGImageFormat>!) -> Bool
```

## Parameters

- `f1`: The first [vImage_CGImageFormat](vimage_cgimageformat.md) structure. If [colorSpace](vimage_cgimageformat/colorspace.md) is `nil`, the function uses sRGB.
- `f2`: The second [vImage_CGImageFormat](vimage_cgimageformat.md) structure. If [colorSpace](vimage_cgimageformat/colorspace.md) is `nil`, the function uses sRGB.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether two vImage Core Graphics image formats are equal.

## See Also

### Querying Core Graphics image format attributes

- [vImageCGImageFormat_GetComponentCount(\_:)](vimagecgimageformat_getcomponentcount%28__%29.md): Calculates the number of color and alpha channels for a specified image format.

# vImageCGImageFormat_IsEqual (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 7.0+ · visionOS 1.0+ · watchOS 1.0+

Returns a Boolean value that indicates whether two vImage Core Graphics image formats are equal.

## Declaration

```objectivec
Boolean vImageCGImageFormat_IsEqual(const vImage_CGImageFormat *f1, const vImage_CGImageFormat *f2);
```

## Parameters

- `f1`: The first [vImage_CGImageFormat](vimage_cgimageformat.md) structure. If [colorSpace](vimage_cgimageformat/colorspace.md) is `nil`, the function uses sRGB.
- `f2`: The second [vImage_CGImageFormat](vimage_cgimageformat.md) structure. If [colorSpace](vimage_cgimageformat/colorspace.md) is `nil`, the function uses sRGB.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether two vImage Core Graphics image formats are equal.

## See Also

### Querying Core Graphics image format attributes

- [vImageCGImageFormat_GetComponentCount](vimagecgimageformat_getcomponentcount%28__%29.md): Calculates the number of color and alpha channels for a specified image format.
