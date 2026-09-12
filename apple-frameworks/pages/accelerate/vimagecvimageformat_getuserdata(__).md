> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagecvimageformat_getuserdata(_:)](https://developer.apple.com/documentation/accelerate/vimagecvimageformat_getuserdata(_:))

# vImageCVImageFormat_GetUserData(\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 8.0+ · visionOS 1.0+ · watchOS 1.0+

Returns the user data of a Core Video image format.

## Declaration

```swift
func vImageCVImageFormat_GetUserData(_ format: vImageConstCVImageFormat) -> UnsafeMutableRawPointer!
```

## Parameters

- `format`: The Core Video image format to query.

<a id="return-value"></a>

## Return Value

The address of `userData;` `NULL` if `userData` isn’t set.

<a id="Discussion"></a>

## Discussion

The functions that create Core Video image formats, such as [vImageCVImageFormat_CreateWithCVPixelBuffer(\_:)](vimagecvimageformat_createwithcvpixelbuffer%28__%29.md), return a [vImageCVImageFormat](vimagecvimageformat.md). The following code shows how you create a [vImageConstCVImageFormat](vimageconstcvimageformat.md) representation of a [vImageCVImageFormat](vimagecvimageformat.md) instance to pass to [vImageCVImageFormat_GetUserData(\_:)](vimagecvimageformat_getuserdata%28__%29.md):

```swift
let userData = withUnsafeBytes(of: cvImageFormat) { bytes in
    let format = bytes.assumingMemoryBound(
        to: vImageConstCVImageFormat.self).first!
    
    return vImageCVImageFormat_GetUserData(format)
}
```

## See Also

### Querying and setting the user data

- [vImageCVImageFormat_SetUserData(\_:\_:\_:)](vimagecvimageformat_setuserdata%28______%29.md): Sets the user data of a Core Video image format.

# vImageCVImageFormat_GetUserData (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 8.0+ · visionOS 1.0+ · watchOS 1.0+

Returns the user data of a Core Video image format.

## Declaration

```objectivec
void *vImageCVImageFormat_GetUserData(vImageConstCVImageFormatRef format);
```

## Parameters

- `format`: The Core Video image format to query.

<a id="return-value"></a>

## Return Value

The address of `userData;` `NULL` if `userData` isn’t set.

<a id="Discussion"></a>

## Discussion

The functions that create Core Video image formats, such as [vImageCVImageFormat_CreateWithCVPixelBuffer](vimagecvimageformat_createwithcvpixelbuffer%28__%29.md), return a [vImageCVImageFormatRef](vimagecvimageformat.md). The following code shows how you create a [vImageConstCVImageFormatRef](vimageconstcvimageformat.md) representation of a [vImageCVImageFormatRef](vimagecvimageformat.md) instance to pass to [vImageCVImageFormat_GetUserData](vimagecvimageformat_getuserdata%28__%29.md):

```swift
let userData = withUnsafeBytes(of: cvImageFormat) { bytes in
    let format = bytes.assumingMemoryBound(
        to: vImageConstCVImageFormat.self).first!
    
    return vImageCVImageFormat_GetUserData(format)
}
```

## See Also

### Querying and setting the user data

- [vImageCVImageFormat_SetUserData](vimagecvimageformat_setuserdata%28______%29.md): Sets the user data of a Core Video image format.
