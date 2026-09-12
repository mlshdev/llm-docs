> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtktextureloader/newtexture(name:scalefactor:displaygamut:bundle:options:completionhandler:)](https://developer.apple.com/documentation/metalkit/mtktextureloader/newtexture(name:scalefactor:displaygamut:bundle:options:completionhandler:))

# newTexture(name:scaleFactor:displayGamut:bundle:options:completionHandler:) (Swift)

**Framework:** MetalKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Asynchronously loads image data and creates a Metal texture from the named texture asset in an asset catalog.

## Declaration

```swift
func newTexture(name: String, scaleFactor: CGFloat, displayGamut: NSDisplayGamut, bundle: Bundle?, options: [MTKTextureLoader.Option : Any]? = nil, completionHandler: @escaping @Sendable ((any MTLTexture)?, (any Error)?) -> Void)
```

```swift
func newTexture(name: String, scaleFactor: CGFloat, displayGamut: NSDisplayGamut, bundle: Bundle?, options: [MTKTextureLoader.Option : Any]? = nil) async throws -> any MTLTexture
```

## Parameters

- `name`: The name of a texture in an asset catalog.
- `scaleFactor`: The scale factor of texture to request.

  In iOS and tvOS, pass the [contentsScale](../../quartzcore/calayer/contentsscale.md) value of the view where you plan to display texture content.

  In macOS, pass the [backingScaleFactor](https://developer.apple.com/documentation/appkit/nswindow/backingscalefactor) value of the window where you plan to display texture content.
- `displayGamut`: The version of the texture based on the *Gamut* trait in Xcode.

  To determine the appropriate parameter value, pass the widest `NSDisplayGamut` value that returns [true](https://developer.apple.com/documentation/swift/true) when queried against the `canRepresentDisplayGamut:` method of `NSWindow`.
- `bundle`: The resource bundle containing the asset catalog to load the texture from.
- `options`: A dictionary describing any additional texture loading steps. See `Texture Loading Options`.

  When using this method, the texture loader ignores the [generateMipmaps](option/generatemipmaps.md), [SRGB](option/srgb.md), [cubeLayout](option/cubelayout.md), and [origin](option/origin.md) options.
- `completionHandler`: A block called when the texture has been loaded and fully initialized.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func newTexture(name: String, scaleFactor: CGFloat, displayGamut: NSDisplayGamut, bundle: Bundle?, options: [MTKTextureLoader.Option : Any]? = nil) async throws -> MTLTexture
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Loading Textures from Asset Catalogs

- [newTexture(name:scaleFactor:bundle:options:)](newtexture%28name_scalefactor_bundle_options_%29.md): Synchronously loads image data and creates a Metal texture from the named texture asset in an asset catalog.
- [newTexture(name:scaleFactor:bundle:options:completionHandler:)](newtexture%28name_scalefactor_bundle_options_completionhandler_%29.md): Asynchronously loads image data and creates a Metal texture from the named texture asset in an asset catalog.
- [newTextures(names:scaleFactor:bundle:options:completionHandler:)](newtextures%28names_scalefactor_bundle_options_completionhandler_%29.md): Asynchronously loads image data and creates Metal textures from the specified list of named texture assets in an asset catalog.
- [newTexture(name:scaleFactor:displayGamut:bundle:options:)](newtexture%28name_scalefactor_displaygamut_bundle_options_%29.md): Synchronously loads image data and creates a Metal texture from the named texture asset in an asset catalog, using a specified display gamut.
- [newTextures(names:scaleFactor:displayGamut:bundle:options:completionHandler:)](newtextures%28names_scalefactor_displaygamut_bundle_options_completionhandler_%29.md): Asynchronously loads image data and creates Metal textures from the specified list of named texture assets in an asset catalog.

# newTextureWithName:scaleFactor:displayGamut:bundle:options:completionHandler: (Objective-C)

**Framework:** MetalKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Asynchronously loads image data and creates a Metal texture from the named texture asset in an asset catalog.

## Declaration

```objectivec
- (void) newTextureWithName:(NSString *) name scaleFactor:(CGFloat) scaleFactor displayGamut:(NSDisplayGamut) displayGamut bundle:(NSBundle *) bundle options:(NSDictionary<NSString *,id> *) options completionHandler:(MTKTextureLoaderCallback) completionHandler;
```

## Parameters

- `name`: The name of a texture in an asset catalog.
- `scaleFactor`: The scale factor of texture to request.

  In iOS and tvOS, pass the [contentsScale](../../quartzcore/calayer/contentsscale.md) value of the view where you plan to display texture content.

  In macOS, pass the [backingScaleFactor](https://developer.apple.com/documentation/appkit/nswindow/backingscalefactor) value of the window where you plan to display texture content.
- `displayGamut`: The version of the texture based on the *Gamut* trait in Xcode.

  To determine the appropriate parameter value, pass the widest `NSDisplayGamut` value that returns [true](https://developer.apple.com/documentation/swift/true) when queried against the `canRepresentDisplayGamut:` method of `NSWindow`.
- `bundle`: The resource bundle containing the asset catalog to load the texture from.
- `options`: A dictionary describing any additional texture loading steps. See `Texture Loading Options`.

  When using this method, the texture loader ignores the [MTKTextureLoaderOptionGenerateMipmaps](option/generatemipmaps.md), [MTKTextureLoaderOptionSRGB](option/srgb.md), [MTKTextureLoaderOptionCubeLayout](option/cubelayout.md), and [MTKTextureLoaderOptionOrigin](option/origin.md) options.
- `completionHandler`: A block called when the texture has been loaded and fully initialized.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func newTexture(name: String, scaleFactor: CGFloat, displayGamut: NSDisplayGamut, bundle: Bundle?, options: [MTKTextureLoader.Option : Any]? = nil) async throws -> MTLTexture
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Loading Textures from Asset Catalogs

- [newTextureWithName:scaleFactor:bundle:options:error:](newtexture%28name_scalefactor_bundle_options_%29.md): Synchronously loads image data and creates a Metal texture from the named texture asset in an asset catalog.
- [newTextureWithName:scaleFactor:bundle:options:completionHandler:](newtexture%28name_scalefactor_bundle_options_completionhandler_%29.md): Asynchronously loads image data and creates a Metal texture from the named texture asset in an asset catalog.
- [newTexturesWithNames:scaleFactor:bundle:options:completionHandler:](newtextures%28names_scalefactor_bundle_options_completionhandler_%29.md): Asynchronously loads image data and creates Metal textures from the specified list of named texture assets in an asset catalog.
- [newTextureWithName:scaleFactor:displayGamut:bundle:options:error:](newtexture%28name_scalefactor_displaygamut_bundle_options_%29.md): Synchronously loads image data and creates a Metal texture from the named texture asset in an asset catalog, using a specified display gamut.
- [newTexturesWithNames:scaleFactor:displayGamut:bundle:options:completionHandler:](newtextures%28names_scalefactor_displaygamut_bundle_options_completionhandler_%29.md): Asynchronously loads image data and creates Metal textures from the specified list of named texture assets in an asset catalog.
