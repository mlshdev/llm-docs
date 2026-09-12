> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdltexture/texeldatawithbottomleftorigin()](https://developer.apple.com/documentation/modelio/mdltexture/texeldatawithbottomleftorigin())

# texelDataWithBottomLeftOrigin() (Swift)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the texture’s image data, organized such that its first pixel represents the bottom-left corner of the image.

## Declaration

```swift
func texelDataWithBottomLeftOrigin() -> Data?
```

<a id="return-value"></a>

## Return Value

The texture’s image data, or `nil` if data is not available.

<a id="Discussion"></a>

## Discussion

If the texture was initialized with image data in top-left-origin format, the first call to this method creates and caches image data in bottom-left-origin format.

This method returns `nil` if the texture was not initialized with image data and is not a [MDLTexture](../mdltexture.md) subclass capable of loading or generating its own data.

## See Also

### Accessing Texture Data

- [texelDataWithTopLeftOrigin()](texeldatawithtopleftorigin%28%29.md): Returns the texture’s image data, organized such that its first pixel represents the top-left corner of the image.
- [texelDataWithTopLeftOrigin(atMipLevel:create:)](texeldatawithtopleftorigin%28atmiplevel_create_%29.md): Returns the texture’s image data for the specified mipmap level, organized such that its first pixel represents the top-left corner of the image.
- [texelDataWithBottomLeftOrigin(atMipLevel:create:)](texeldatawithbottomleftorigin%28atmiplevel_create_%29.md): Returns the texture’s image data for the specified mipmap level, organized such that its first pixel represents the bottom-left corner of the image.

# texelDataWithBottomLeftOrigin (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the texture’s image data, organized such that its first pixel represents the bottom-left corner of the image.

## Declaration

```objectivec
- (NSData *) texelDataWithBottomLeftOrigin;
```

<a id="return-value"></a>

## Return Value

The texture’s image data, or `nil` if data is not available.

<a id="Discussion"></a>

## Discussion

If the texture was initialized with image data in top-left-origin format, the first call to this method creates and caches image data in bottom-left-origin format.

This method returns `nil` if the texture was not initialized with image data and is not a [MDLTexture](../mdltexture.md) subclass capable of loading or generating its own data.

## See Also

### Accessing Texture Data

- [texelDataWithTopLeftOrigin](texeldatawithtopleftorigin%28%29.md): Returns the texture’s image data, organized such that its first pixel represents the top-left corner of the image.
- [texelDataWithTopLeftOriginAtMipLevel:create:](texeldatawithtopleftorigin%28atmiplevel_create_%29.md): Returns the texture’s image data for the specified mipmap level, organized such that its first pixel represents the top-left corner of the image.
- [texelDataWithBottomLeftOriginAtMipLevel:create:](texeldatawithbottomleftorigin%28atmiplevel_create_%29.md): Returns the texture’s image data for the specified mipmap level, organized such that its first pixel represents the bottom-left corner of the image.
