> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glktextureloader/texture(with:options:)](https://developer.apple.com/documentation/glkit/glktextureloader/texture(with:options:))

# texture(with:options:) (Swift)

**Framework:** GLKit  
**Kind:** Type Method  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

Loads a 2D texture image from a Quartz image and creates a new texture from the data.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
class func texture(with cgImage: CGImage, options: [String : NSNumber]? = nil) throws -> GLKTextureInfo
```

## Parameters

- `cgImage`: The Quartz image to be turned into a texture.
- `options`: A dictionary that describes any additional steps you want the texture loader to take when loading the texture. See [Texture Loading Options](../texture-loading-options.md).

<a id="return-value"></a>

## Return Value

A texture info object that describes the loaded texture or `nil` if an error occurred.

<a id="Discussion"></a>

## Discussion

This class method loads the texture into the sharegroup attached to the current context for the thread this method is called on.

If the image was created using the CGBitmapImageContextCreate function, it must use one of the pixel formats described in the table below. CGImages loaded from files typically are already in one of these formats.

| Color Space | Pixel format and bitmap information constant |
| --- | --- |
| Null | 8 bpp, 8 bpc, [CGImageAlphaInfo.alphaOnly](../../coregraphics/cgimagealphainfo/alphaonly.md) |
| Gray | 8 bpp, 8 bpc, [CGImageAlphaInfo.none](../../coregraphics/cgimagealphainfo/none.md) |
| Gray | 8 bpp, 8 bpc, [CGImageAlphaInfo.alphaOnly](../../coregraphics/cgimagealphainfo/alphaonly.md) |
| RGB | 32 bpp, 8 bpc, [CGImageAlphaInfo.noneSkipFirst](../../coregraphics/cgimagealphainfo/noneskipfirst.md) |
| RGB | 32 bpp, 8 bpc, [CGImageAlphaInfo.premultipliedFirst](../../coregraphics/cgimagealphainfo/premultipliedfirst.md) |

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Creating Textures from CGImages

- [texture(with:options:queue:completionHandler:)](texture%28with_options_queue_completionhandler_%29.md): Deprecated. Asynchronously loads a 2D texture image from a Quartz image and creates a new texture from the data.

# textureWithCGImage:options:error: (Objective-C)

**Framework:** GLKit  
**Kind:** Type Method  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

Loads a 2D texture image from a Quartz image and creates a new texture from the data.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
+ (GLKTextureInfo *) textureWithCGImage:(CGImageRef) cgImage options:(NSDictionary<NSString *,NSNumber *> *) options error:(NSError **) outError;
```

## Parameters

- `cgImage`: The Quartz image to be turned into a texture.
- `options`: A dictionary that describes any additional steps you want the texture loader to take when loading the texture. See [Texture Loading Options](../texture-loading-options.md).
- `outError`: If an error occurs, upon return contains an `NSError` object that describes the problem.

  If you are not interested in this information, pass `NULL`.

<a id="return-value"></a>

## Return Value

A texture info object that describes the loaded texture or `nil` if an error occurred.

<a id="Discussion"></a>

## Discussion

This class method loads the texture into the sharegroup attached to the current context for the thread this method is called on.

If the image was created using the CGBitmapImageContextCreate function, it must use one of the pixel formats described in the table below. CGImages loaded from files typically are already in one of these formats.

| Color Space | Pixel format and bitmap information constant |
| --- | --- |
| Null | 8 bpp, 8 bpc, [kCGImageAlphaOnly](../../coregraphics/cgimagealphainfo/alphaonly.md) |
| Gray | 8 bpp, 8 bpc, [kCGImageAlphaNone](../../coregraphics/cgimagealphainfo/none.md) |
| Gray | 8 bpp, 8 bpc, [kCGImageAlphaOnly](../../coregraphics/cgimagealphainfo/alphaonly.md) |
| RGB | 32 bpp, 8 bpc, [kCGImageAlphaNoneSkipFirst](../../coregraphics/cgimagealphainfo/noneskipfirst.md) |
| RGB | 32 bpp, 8 bpc, [kCGImageAlphaPremultipliedFirst](../../coregraphics/cgimagealphainfo/premultipliedfirst.md) |

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Creating Textures from CGImages

- [textureWithCGImage:options:queue:completionHandler:](texture%28with_options_queue_completionhandler_%29.md): Deprecated. Asynchronously loads a 2D texture image from a Quartz image and creates a new texture from the data.
