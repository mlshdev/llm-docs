> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagecvimageformat_retain](https://developer.apple.com/documentation/accelerate/vimagecvimageformat_retain)

# vImageCVImageFormat_Retain

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 8.0+ · visionOS 1.0+ · watchOS 1.0+

Retains a Core Video image format.

## Declaration

```objectivec
void vImageCVImageFormat_Retain(vImageCVImageFormatRef fmt);
```

## Parameters

- `fmt`: The Core Video image format to retain.

<a id="Discussion"></a>

## Discussion

This function increments the Core Video image format’s reference count.

## See Also

### Image format memory management

- [vImageCVImageFormat_Release](vimagecvimageformat_release.md): Releases a Core Video image format.
