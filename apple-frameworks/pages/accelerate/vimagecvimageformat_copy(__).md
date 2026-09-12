> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagecvimageformat_copy(_:)](https://developer.apple.com/documentation/accelerate/vimagecvimageformat_copy(_:))

# vImageCVImageFormat_Copy(\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 8.0+ · visionOS 1.0+ · watchOS 1.0+

Returns a mutable copy of an immutable Core Video image format.

## Declaration

```swift
func vImageCVImageFormat_Copy(_ format: vImageConstCVImageFormat) -> Unmanaged<vImageCVImageFormat>!
```

## Parameters

- `format`: The Core Video image format to copy.

<a id="return-value"></a>

## Return Value

A [vImageCVImageFormat](vimagecvimageformat.md) instance.

<a id="Discussion"></a>

## Discussion

This function doesn’t copy the image format’s user data or the release callback.

# vImageCVImageFormat_Copy (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 8.0+ · visionOS 1.0+ · watchOS 1.0+

Returns a mutable copy of an immutable Core Video image format.

## Declaration

```objectivec
vImageCVImageFormatRefvImageCVImageFormat_Copy(vImageConstCVImageFormatRef format);
```

## Parameters

- `format`: The Core Video image format to copy.

<a id="return-value"></a>

## Return Value

A [vImageCVImageFormatRef](vimagecvimageformat.md) instance.

<a id="Discussion"></a>

## Discussion

This function doesn’t copy the image format’s user data or the release callback.
