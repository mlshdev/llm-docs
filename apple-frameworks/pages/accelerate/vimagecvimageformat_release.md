> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagecvimageformat_release](https://developer.apple.com/documentation/accelerate/vimagecvimageformat_release)

# vImageCVImageFormat_Release

**Interface language:** Objective-C

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 8.0+ · visionOS 1.0+ · watchOS 1.0+

Releases a Core Video image format.

## Declaration

```objectivec
void vImageCVImageFormat_Release(vImageCVImageFormatRef fmt);
```

## Parameters

- `fmt`: The Core Video image format to release.

<a id="Discussion"></a>

## Discussion

This function decrements the Core Video image format’s reference count. When the reference count reaches `0`, the system calls the `userDataReleaseCallback` (see [vImageCVImageFormat_SetUserData](vimagecvimageformat_setuserdata%28______%29.md)), and then destroys the object. The `userDataReleaseCallback` can access the [vImageCVImageFormatRef](vimagecvimageformat.md) object, but can’t prevent its destruction.

## See Also

### Image format memory management

- [vImageCVImageFormat_Retain](vimagecvimageformat_retain.md): Retains a Core Video image format.
