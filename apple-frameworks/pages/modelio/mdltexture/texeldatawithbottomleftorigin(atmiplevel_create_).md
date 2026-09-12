> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdltexture/texeldatawithbottomleftorigin(atmiplevel:create:)](https://developer.apple.com/documentation/modelio/mdltexture/texeldatawithbottomleftorigin(atmiplevel:create:))

# texelDataWithBottomLeftOrigin(atMipLevel:create:) (Swift)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the texture’s image data for the specified mipmap level, organized such that its first pixel represents the bottom-left corner of the image.

## Declaration

```swift
func texelDataWithBottomLeftOrigin(atMipLevel level: Int, create: Bool) -> Data?
```

## Parameters

- `level`: The mipmap level for which to access image data; must be less than or equal to the texture’s [mipLevelCount](miplevelcount.md) value.
- `create`: If [true](https://developer.apple.com/documentation/swift/true) and the texture does not contain image data for the specified mipmap level (that is, the level parameter is greater than the texture’s [mipLevelCount](miplevelcount.md) value) Model I/O generates image data for that mipmap level. If [false](https://developer.apple.com/documentation/swift/false), this method returns `nil` for mipmap levels where no image data exists.

<a id="return-value"></a>

## Return Value

The texture’s image data, or `nil` if data is not available.

<a id="Discussion"></a>

## Discussion

Mipmapping is a technique that uses multiple sizes of a texture image to increase rendering performance. The image for mipmap level zero matches the size in the [dimensions](dimensions.md) property. Mipmap level 1 is an image at half the original dimensions; level 2 is at quarter size; and so on.

If the texture was initialized with image data in top-left-origin format, the first call to this method creates and caches image data in bottom-left-origin format.

This method returns `nil` if the texture was not initialized with image data and is not a [MDLTexture](../mdltexture.md) subclass capable of loading or generating its own data.

## See Also

### Accessing Texture Data

- [texelDataWithTopLeftOrigin()](texeldatawithtopleftorigin%28%29.md): Returns the texture’s image data, organized such that its first pixel represents the top-left corner of the image.
- [texelDataWithBottomLeftOrigin()](texeldatawithbottomleftorigin%28%29.md): Returns the texture’s image data, organized such that its first pixel represents the bottom-left corner of the image.
- [texelDataWithTopLeftOrigin(atMipLevel:create:)](texeldatawithtopleftorigin%28atmiplevel_create_%29.md): Returns the texture’s image data for the specified mipmap level, organized such that its first pixel represents the top-left corner of the image.

# texelDataWithBottomLeftOriginAtMipLevel:create: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the texture’s image data for the specified mipmap level, organized such that its first pixel represents the bottom-left corner of the image.

## Declaration

```objectivec
- (NSData *) texelDataWithBottomLeftOriginAtMipLevel:(NSInteger) level create:(BOOL) create;
```

## Parameters

- `level`: The mipmap level for which to access image data; must be less than or equal to the texture’s [mipLevelCount](miplevelcount.md) value.
- `create`: If [true](https://developer.apple.com/documentation/swift/true) and the texture does not contain image data for the specified mipmap level (that is, the level parameter is greater than the texture’s [mipLevelCount](miplevelcount.md) value) Model I/O generates image data for that mipmap level. If [false](https://developer.apple.com/documentation/swift/false), this method returns `nil` for mipmap levels where no image data exists.

<a id="return-value"></a>

## Return Value

The texture’s image data, or `nil` if data is not available.

<a id="Discussion"></a>

## Discussion

Mipmapping is a technique that uses multiple sizes of a texture image to increase rendering performance. The image for mipmap level zero matches the size in the [dimensions](dimensions.md) property. Mipmap level 1 is an image at half the original dimensions; level 2 is at quarter size; and so on.

If the texture was initialized with image data in top-left-origin format, the first call to this method creates and caches image data in bottom-left-origin format.

This method returns `nil` if the texture was not initialized with image data and is not a [MDLTexture](../mdltexture.md) subclass capable of loading or generating its own data.

## See Also

### Accessing Texture Data

- [texelDataWithTopLeftOrigin](texeldatawithtopleftorigin%28%29.md): Returns the texture’s image data, organized such that its first pixel represents the top-left corner of the image.
- [texelDataWithBottomLeftOrigin](texeldatawithbottomleftorigin%28%29.md): Returns the texture’s image data, organized such that its first pixel represents the bottom-left corner of the image.
- [texelDataWithTopLeftOriginAtMipLevel:create:](texeldatawithtopleftorigin%28atmiplevel_create_%29.md): Returns the texture’s image data for the specified mipmap level, organized such that its first pixel represents the top-left corner of the image.
