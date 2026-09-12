> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glktextureloader/cubemap(withcontentsof:options:)](https://developer.apple.com/documentation/glkit/glktextureloader/cubemap(withcontentsof:options:))

# cubeMap(withContentsOf:options:) (Swift)

**Framework:** GLKit  
**Kind:** Type Method  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

Loads a cube map texture image from a single URL and creates a new texture from the data.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
class func cubeMap(withContentsOf url: URL, options: [String : NSNumber]? = nil) throws -> GLKTextureInfo
```

## Parameters

- `url`: A path to the image to load.
- `options`: A dictionary that describes any additional steps you want the texture loader to take when loading the texture. See [Texture Loading Options](../texture-loading-options.md).

<a id="return-value"></a>

## Return Value

A texture info object that describes the loaded texture or `nil` if an error occurred.

<a id="Discussion"></a>

## Discussion

The file is assumed to be a single image that includes the six faces of the cube map. The image’s height must be six times the width, and the images should be arranged in the following order from top to bottom: Right(+x), Left(-x), Top(+y), Bottom(-y), Front(+z), Back(-z). This coordinate system is left-handed if you think of yourself within the cube. The coordinate system is right-handed if you think of yourself outside of the cube.

Alternatively, the image can have a width that is six times the height, and arranged from left to right, but this takes additional processing to load.

This class method loads the texture into the sharegroup attached to the current context for the thread this method is called on.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Loading Cube Maps from URLs

- [cubeMap(withContentsOf:options:queue:completionHandler:)](cubemap%28withcontentsof_options_queue_completionhandler_%29.md): Deprecated. Asynchronously loads a cube map texture image from a single URL and creates a new texture from the data.

# cubeMapWithContentsOfURL:options:error: (Objective-C)

**Framework:** GLKit  
**Kind:** Type Method  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

Loads a cube map texture image from a single URL and creates a new texture from the data.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
+ (GLKTextureInfo *) cubeMapWithContentsOfURL:(NSURL *) url options:(NSDictionary<NSString *,NSNumber *> *) options error:(NSError **) outError;
```

## Parameters

- `url`: A path to the image to load.
- `options`: A dictionary that describes any additional steps you want the texture loader to take when loading the texture. See [Texture Loading Options](../texture-loading-options.md).
- `outError`: If an error occurs, upon return contains an `NSError`.

  If you are not interested in this information, pass `NULL`.

<a id="return-value"></a>

## Return Value

A texture info object that describes the loaded texture or `nil` if an error occurred.

<a id="Discussion"></a>

## Discussion

The file is assumed to be a single image that includes the six faces of the cube map. The image’s height must be six times the width, and the images should be arranged in the following order from top to bottom: Right(+x), Left(-x), Top(+y), Bottom(-y), Front(+z), Back(-z). This coordinate system is left-handed if you think of yourself within the cube. The coordinate system is right-handed if you think of yourself outside of the cube.

Alternatively, the image can have a width that is six times the height, and arranged from left to right, but this takes additional processing to load.

This class method loads the texture into the sharegroup attached to the current context for the thread this method is called on.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Loading Cube Maps from URLs

- [cubeMapWithContentsOfURL:options:queue:completionHandler:](cubemap%28withcontentsof_options_queue_completionhandler_%29.md): Deprecated. Asynchronously loads a cube map texture image from a single URL and creates a new texture from the data.
