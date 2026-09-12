> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glktextureloader/cubemap(withcontentsoffiles:options:)](https://developer.apple.com/documentation/glkit/glktextureloader/cubemap(withcontentsoffiles:options:))

# cubeMap(withContentsOfFiles:options:) (Swift)

**Framework:** GLKit  
**Kind:** Type Method  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

Loads a cube map texture image from a series of files and creates a new texture from the data.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
class func cubeMap(withContentsOfFiles paths: [Any], options: [String : NSNumber]? = nil) throws -> GLKTextureInfo
```

## Parameters

- `paths`: An array of [URL](../../foundation/url.md) or `String` objects that provide the paths to the six files that make up the cube map.
- `options`: A dictionary that describes any additional steps you want the texture loader to take when loading the texture. See [Texture Loading Options](../texture-loading-options.md).

<a id="return-value"></a>

## Return Value

A texture info object that describes the loaded texture or `nil` if an error occurred.

<a id="Discussion"></a>

## Discussion

The array of file paths must include six entries for the six faces of the cube map. The URLs should be arranged in the following order: Right(+x), Left(-x), Top(+y), Bottom(-y), Front(+z), Back(-z). This coordinate system is left-handed if you think of yourself within the cube. The coordinate system is right-handed if you think of yourself outside of the cube.

This class method loads the texture into the sharegroup attached to the current context for the thread this method is called on.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## Topics

### Related Documentation

- [cubeMap(withContentsOf:options:queue:completionHandler:)](cubemap%28withcontentsof_options_queue_completionhandler_%29.md): Deprecated. Asynchronously loads a cube map texture image from a single URL and creates a new texture from the data.

## See Also

### Loading Cube Maps from Files

- [cubeMap(withContentsOfFile:options:)](cubemap%28withcontentsoffile_options_%29.md): Deprecated. Loads a cube map texture image from a single file and creates a new texture from the data.
- [cubeMap(withContentsOfFile:options:queue:completionHandler:)](cubemap%28withcontentsoffile_options_queue_completionhandler_%29.md): Deprecated. Asynchronously loads a cube map texture image from a single file and creates a new texture from the data.
- [cubeMap(withContentsOfFiles:options:queue:completionHandler:)](cubemap%28withcontentsoffiles_options_queue_completionhandler_%29.md): Deprecated. Asynchronously loads a cube map texture image from a series of files and creates a new texture from the data.

# cubeMapWithContentsOfFiles:options:error: (Objective-C)

**Framework:** GLKit  
**Kind:** Type Method  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

Loads a cube map texture image from a series of files and creates a new texture from the data.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
+ (GLKTextureInfo *) cubeMapWithContentsOfFiles:(NSArray<id> *) paths options:(NSDictionary<NSString *,NSNumber *> *) options error:(NSError **) outError;
```

## Parameters

- `paths`: An array of [URL](../../foundation/url.md) or `String` objects that provide the paths to the six files that make up the cube map.
- `options`: A dictionary that describes any additional steps you want the texture loader to take when loading the texture. See [Texture Loading Options](../texture-loading-options.md).
- `outError`: If an error occurs, upon return contains an `NSError` object that describes the problem.

  If you are not interested in this information, pass `NULL`.

<a id="return-value"></a>

## Return Value

A texture info object that describes the loaded texture or `nil` if an error occurred.

<a id="Discussion"></a>

## Discussion

The array of file paths must include six entries for the six faces of the cube map. The URLs should be arranged in the following order: Right(+x), Left(-x), Top(+y), Bottom(-y), Front(+z), Back(-z). This coordinate system is left-handed if you think of yourself within the cube. The coordinate system is right-handed if you think of yourself outside of the cube.

This class method loads the texture into the sharegroup attached to the current context for the thread this method is called on.

> **Handling Errors in Swift**

>  In Swift, this method returns a nonoptional result and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## Topics

### Related Documentation

- [cubeMapWithContentsOfURL:options:queue:completionHandler:](cubemap%28withcontentsof_options_queue_completionhandler_%29.md): Deprecated. Asynchronously loads a cube map texture image from a single URL and creates a new texture from the data.

## See Also

### Loading Cube Maps from Files

- [cubeMapWithContentsOfFile:options:error:](cubemap%28withcontentsoffile_options_%29.md): Deprecated. Loads a cube map texture image from a single file and creates a new texture from the data.
- [cubeMapWithContentsOfFile:options:queue:completionHandler:](cubemap%28withcontentsoffile_options_queue_completionhandler_%29.md): Deprecated. Asynchronously loads a cube map texture image from a single file and creates a new texture from the data.
- [cubeMapWithContentsOfFiles:options:queue:completionHandler:](cubemap%28withcontentsoffiles_options_queue_completionhandler_%29.md): Deprecated. Asynchronously loads a cube map texture image from a series of files and creates a new texture from the data.
