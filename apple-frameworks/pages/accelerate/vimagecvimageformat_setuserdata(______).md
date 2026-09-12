> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagecvimageformat_setuserdata(_:_:_:)](https://developer.apple.com/documentation/accelerate/vimagecvimageformat_setuserdata(_:_:_:))

# vImageCVImageFormat_SetUserData(\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 8.0+ · visionOS 1.0+ · watchOS 1.0+

Sets the user data of a Core Video image format.

## Declaration

```swift
func vImageCVImageFormat_SetUserData(_ format: vImageCVImageFormat, _ userData: UnsafeMutableRawPointer!, _ userDataReleaseCallback: ((vImageCVImageFormat?, UnsafeMutableRawPointer?) -> Void)!) -> vImage_Error
```

## Parameters

- `format`: The Core Video image format to update.
- `userData`: The new user data for the format.
- `userDataReleaseCallback`: The callback the system calls when it releases the [vImageCVImageFormat](vimagecvimageformat.md) instance or overwrites the `userData` pointer.

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

## See Also

### Querying and setting the user data

- [vImageCVImageFormat_GetUserData(\_:)](vimagecvimageformat_getuserdata%28__%29.md): Returns the user data of a Core Video image format.

# vImageCVImageFormat_SetUserData (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 8.0+ · visionOS 1.0+ · watchOS 1.0+

Sets the user data of a Core Video image format.

## Declaration

```objectivec
vImage_Error vImageCVImageFormat_SetUserData(vImageCVImageFormatRef format, void *userData, void (*)(struct vImageCVImageFormat *, void *)userDataReleaseCallback);
```

## Parameters

- `format`: The Core Video image format to update.
- `userData`: The new user data for the format.
- `userDataReleaseCallback`: The callback the system calls when it releases the [vImageCVImageFormatRef](vimagecvimageformat.md) instance or overwrites the `userData` pointer.

<a id="return-value"></a>

## Return Value

[kvImageNoError](kvimagenoerror.md); otherwise, one of the error codes in [Data Types and Constants](data-types-and-constants.md).

<a id="Discussion"></a>

## Discussion

## See Also

### Querying and setting the user data

- [vImageCVImageFormat_GetUserData](vimagecvimageformat_getuserdata%28__%29.md): Returns the user data of a Core Video image format.
