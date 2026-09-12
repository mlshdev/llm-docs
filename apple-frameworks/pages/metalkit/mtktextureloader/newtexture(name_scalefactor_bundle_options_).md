> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtktextureloader/newtexture(name:scalefactor:bundle:options:)](https://developer.apple.com/documentation/metalkit/mtktextureloader/newtexture(name:scalefactor:bundle:options:))

# newTexture(name:scaleFactor:bundle:options:) (Swift)

**Framework:** MetalKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Synchronously loads image data and creates a Metal texture from the named texture asset in an asset catalog.

## Declaration

```swift
func newTexture(name: String, scaleFactor: CGFloat, bundle: Bundle?, options: [MTKTextureLoader.Option : Any]? = nil) throws -> any MTLTexture
```

## Parameters

- `name`: The name of a texture in an asset catalog.
- `scaleFactor`: The scale factor of texture to request.

  In iOS and tvOS, pass the [contentsScale](../../quartzcore/calayer/contentsscale.md) value of the view where you plan to display texture content.

  In macOS, pass the [backingScaleFactor](https://developer.apple.com/documentation/appkit/nswindow/backingscalefactor) value of the window where you plan to display texture content.
- `bundle`: The resource bundle containing the asset catalog to load textures from.
- `options`: A dictionary describing any additional texture loading steps. See  [Texture Loading Options](../../glkit/texture-loading-options.md).

  When using this method, the texture loader ignores the [generateMipmaps](option/generatemipmaps.md), [SRGB](option/srgb.md), [cubeLayout](option/cubelayout.md), and [origin](option/origin.md) options.

<a id="return-value"></a>

## Return Value

A fully loaded and initialized Metal texture, or `nil` if an error occurred.

## See Also

### Loading Textures from Asset Catalogs

- [newTexture(name:scaleFactor:bundle:options:completionHandler:)](newtexture%28name_scalefactor_bundle_options_completionhandler_%29.md): Asynchronously loads image data and creates a Metal texture from the named texture asset in an asset catalog.
- [newTextures(names:scaleFactor:bundle:options:completionHandler:)](newtextures%28names_scalefactor_bundle_options_completionhandler_%29.md): Asynchronously loads image data and creates Metal textures from the specified list of named texture assets in an asset catalog.
- [newTexture(name:scaleFactor:displayGamut:bundle:options:)](newtexture%28name_scalefactor_displaygamut_bundle_options_%29.md): Synchronously loads image data and creates a Metal texture from the named texture asset in an asset catalog, using a specified display gamut.
- [newTexture(name:scaleFactor:displayGamut:bundle:options:completionHandler:)](newtexture%28name_scalefactor_displaygamut_bundle_options_completionhandler_%29.md): Asynchronously loads image data and creates a Metal texture from the named texture asset in an asset catalog.
- [newTextures(names:scaleFactor:displayGamut:bundle:options:completionHandler:)](newtextures%28names_scalefactor_displaygamut_bundle_options_completionhandler_%29.md): Asynchronously loads image data and creates Metal textures from the specified list of named texture assets in an asset catalog.

# newTextureWithName:scaleFactor:bundle:options:error: (Objective-C)

**Framework:** MetalKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Synchronously loads image data and creates a Metal texture from the named texture asset in an asset catalog.

## Declaration

```objectivec
- (id<MTLTexture>) newTextureWithName:(NSString *) name scaleFactor:(CGFloat) scaleFactor bundle:(NSBundle *) bundle options:(NSDictionary<NSString *,id> *) options error:(NSError **) error;
```

## Parameters

- `name`: The name of a texture in an asset catalog.
- `scaleFactor`: The scale factor of texture to request.

  In iOS and tvOS, pass the [contentsScale](../../quartzcore/calayer/contentsscale.md) value of the view where you plan to display texture content.

  In macOS, pass the [backingScaleFactor](https://developer.apple.com/documentation/appkit/nswindow/backingscalefactor) value of the window where you plan to display texture content.
- `bundle`: The resource bundle containing the asset catalog to load textures from.
- `options`: A dictionary describing any additional texture loading steps. See  [Texture Loading Options](../../glkit/texture-loading-options.md).

  When using this method, the texture loader ignores the [MTKTextureLoaderOptionGenerateMipmaps](option/generatemipmaps.md), [MTKTextureLoaderOptionSRGB](option/srgb.md), [MTKTextureLoaderOptionCubeLayout](option/cubelayout.md), and [MTKTextureLoaderOptionOrigin](option/origin.md) options.
- `error`: A pointer to an [NSError](../../foundation/nserror.md) object if an error occurred, or `nil` if the texture was fully loaded and initialized.

<a id="return-value"></a>

## Return Value

A fully loaded and initialized Metal texture, or `nil` if an error occurred.

## See Also

### Loading Textures from Asset Catalogs

- [newTextureWithName:scaleFactor:bundle:options:completionHandler:](newtexture%28name_scalefactor_bundle_options_completionhandler_%29.md): Asynchronously loads image data and creates a Metal texture from the named texture asset in an asset catalog.
- [newTexturesWithNames:scaleFactor:bundle:options:completionHandler:](newtextures%28names_scalefactor_bundle_options_completionhandler_%29.md): Asynchronously loads image data and creates Metal textures from the specified list of named texture assets in an asset catalog.
- [newTextureWithName:scaleFactor:displayGamut:bundle:options:error:](newtexture%28name_scalefactor_displaygamut_bundle_options_%29.md): Synchronously loads image data and creates a Metal texture from the named texture asset in an asset catalog, using a specified display gamut.
- [newTextureWithName:scaleFactor:displayGamut:bundle:options:completionHandler:](newtexture%28name_scalefactor_displaygamut_bundle_options_completionhandler_%29.md): Asynchronously loads image data and creates a Metal texture from the named texture asset in an asset catalog.
- [newTexturesWithNames:scaleFactor:displayGamut:bundle:options:completionHandler:](newtextures%28names_scalefactor_displaygamut_bundle_options_completionhandler_%29.md): Asynchronously loads image data and creates Metal textures from the specified list of named texture assets in an asset catalog.
