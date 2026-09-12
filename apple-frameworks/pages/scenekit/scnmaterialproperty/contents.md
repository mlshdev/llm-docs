> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnmaterialproperty/contents](https://developer.apple.com/documentation/scenekit/scnmaterialproperty/contents)

# contents (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The visual contents of the material property—a color, image, or source of animated content. Animatable.

## Declaration

```swift
var contents: Any? { get set }
```

<a id="Discussion"></a>

## Discussion

For details on each visual property and the ways their contents affect a material’s appearance, see [SCNMaterial](../scnmaterial.md).

You can set a value for this property using any of the following types:

- A color ([NSColor](https://developer.apple.com/documentation/appkit/nscolor)/[UIColor](../../uikit/uicolor.md) or [CGColor](../../coregraphics/cgcolor.md)), specifying a uniform color for the material’s surface
- A number ([NSNumber](../../foundation/nsnumber.md)), specifying a uniform scalar value for the material’s surface (useful for physically based properties such as [metalness](../scnmaterial/metalness.md))
- An image ([NSImage](https://developer.apple.com/documentation/appkit/nsimage)/[UIImage](../../uikit/uiimage.md) or [CGImage](../../coregraphics/cgimage.md)), specifying a texture to be mapped across the material’s surface
- An [NSString](../../foundation/nsstring.md) or [NSURL](../../foundation/nsurl.md) object specifying the location of an image file
- A video player ([AVPlayer](../../avfoundation/avplayer.md)) or live video capture preview ([AVCaptureDevice](../../avfoundation/avcapturedevice.md), in iOS only)
- A Core Animation layer ([CALayer](../../quartzcore/calayer.md))
- A texture ([SKTexture](../../spritekit/sktexture.md), [MDLTexture](../../modelio/mdltexture.md), [MTLTexture](../../metal/mtltexture.md), or [GLKTextureInfo](../../glkit/glktextureinfo.md))
- A SpriteKit scene ([SKScene](../../spritekit/skscene.md))
- A specially formatted image or array of six images, specifying the faces of a cube map

When you examine elements of a scene loaded from a file, this value is always either a color object (of the [NSColor](https://developer.apple.com/documentation/appkit/nscolor) or [UIColor](../../uikit/uicolor.md) class, according to platform) or an image object (of the [NSImage](https://developer.apple.com/documentation/appkit/nsimage) or [UIImage](../../uikit/uiimage.md) class, according to platform). You can therefore use type introspection (the [isKind(of:)](../../objectivec/nsobjectprotocol/iskind%28of_%29.md) method in Objective-C, or the `is` operator or `let`-`as` matching in Swift) to determine the type of the material property’s contents.

<a id="Using-Animated-Content"></a>

### Using Animated Content

In iOS 11, you may use an [AVCaptureDevice](../../avfoundation/avcapturedevice.md) object to preview live video from a capture device as a material property. In iOS 11, tvOS 11, and macOS 10.13, you may use an [AVPlayer](../../avfoundation/avplayer.md) object as a material property for video playback.

You may specify any Core Animation layer as the contents of a material property, such as a layer with an animated sublayer hierarchy. SceneKit cannot use a layer that is already being displayed elsewhere (for example, the backing layer of a [UIView](../../uikit/uiview.md) object).

You can use the SpriteKit framework to provide static or animated content for a material property. SpriteKit provides options for generating and modifying texture images, such as the [generatingNormalMap()](../../spritekit/sktexture/generatingnormalmap%28%29.md) method. You can also use an entire animated SpriteKit scene as the material property’s contents. When you use a [SKTexture](../../spritekit/sktexture.md) object as a material property’s contents, the [wrapS](wraps.md), [wrapT](wrapt.md), [contentsTransform](contentstransform.md), [minificationFilter](minificationfilter.md), [magnificationFilter](magnificationfilter.md) and [mipFilter](mipfilter.md) properties automatically update to match the corresponding features of the SpriteKit texture.

If the current content is a solid color, you can use explicit or implicit animations (see [Animating SceneKit Content](../animating-scenekit-content.md)) to change to another color, creating an effect that fades between the two colors. Using animations to change from or to other content types results in an instantaneous transition—for an animated transition between textured content types (or types that are themselves animated), create a shader modifier (see [SCNShadable](../scnshadable.md)).

<a id="Using-Cube-Map-Texures"></a>

### Using Cube Map Texures

SceneKit supports cube maps only for a material’s [reflective](../scnmaterial/reflective.md) property or for a scene’s [background](../scnscene/background.md) or [lightingEnvironment](../scnscene/lightingenvironment.md) property. You can provide a cube map in any of the ways described in Table 1. Of these formats, the vertical strip provides the best performance, because it matches the memory layout SceneKit uses for rendering cube textures.

| Description | Image Size Requirements | Example |
| --- | --- | --- |
| Vertical strip (single image) | height == 6 \* width | ![](https://developer.apple.com/images/com.apple.scenekit/media-2557196@2x.png) |
| Horizontal strip (single image) | 6 \* height == width | ![](https://developer.apple.com/images/com.apple.scenekit/media-2557198@2x.png) |
| Spherical projection (single image) ![](https://developer.apple.com/images/com.apple.scenekit/spacer.png) (pixel x/y positions map to latitude/longitude coordinates on a sphere) | 2 \* height == width | ![](https://developer.apple.com/images/com.apple.scenekit/media-2557205@2x.png) |
| Array of six images ![](https://developer.apple.com/images/com.apple.scenekit/spacer.png) (face order: +X, -X, +Y, -Y, +Z, -Z) | height == width ![](https://developer.apple.com/images/com.apple.scenekit/spacer.png) same size for all images | \[![](https://developer.apple.com/images/com.apple.scenekit/media-2557210@2x.png), ![](https://developer.apple.com/images/com.apple.scenekit/media-2557212@2x.png), ![](https://developer.apple.com/images/com.apple.scenekit/media-2557215@2x.png), ![](https://developer.apple.com/images/com.apple.scenekit/media-2557218@2x.png), ![](https://developer.apple.com/images/com.apple.scenekit/media-2557221@2x.png), ![](https://developer.apple.com/images/com.apple.scenekit/media-2557226@2x.png)\] |

## See Also

### Working with Material Property Contents

- [intensity](intensity.md): A number between `0.0` and `1.0` that modulates the effect of the material property. Animatable.

# contents (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The visual contents of the material property—a color, image, or source of animated content. Animatable.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) id contents;
```

<a id="Discussion"></a>

## Discussion

For details on each visual property and the ways their contents affect a material’s appearance, see [SCNMaterial](../scnmaterial.md).

You can set a value for this property using any of the following types:

- A color ([NSColor](https://developer.apple.com/documentation/appkit/nscolor)/[UIColor](../../uikit/uicolor.md) or [CGColorRef](../../coregraphics/cgcolor.md)), specifying a uniform color for the material’s surface
- A number ([NSNumber](../../foundation/nsnumber.md)), specifying a uniform scalar value for the material’s surface (useful for physically based properties such as [metalness](../scnmaterial/metalness.md))
- An image ([NSImage](https://developer.apple.com/documentation/appkit/nsimage)/[UIImage](../../uikit/uiimage.md) or [CGImageRef](../../coregraphics/cgimage.md)), specifying a texture to be mapped across the material’s surface
- An [NSString](../../foundation/nsstring.md) or [NSURL](../../foundation/nsurl.md) object specifying the location of an image file
- A video player ([AVPlayer](../../avfoundation/avplayer.md)) or live video capture preview ([AVCaptureDevice](../../avfoundation/avcapturedevice.md), in iOS only)
- A Core Animation layer ([CALayer](../../quartzcore/calayer.md))
- A texture ([SKTexture](../../spritekit/sktexture.md), [MDLTexture](../../modelio/mdltexture.md), [MTLTexture](../../metal/mtltexture.md), or [GLKTextureInfo](../../glkit/glktextureinfo.md))
- A SpriteKit scene ([SKScene](../../spritekit/skscene.md))
- A specially formatted image or array of six images, specifying the faces of a cube map

When you examine elements of a scene loaded from a file, this value is always either a color object (of the [NSColor](https://developer.apple.com/documentation/appkit/nscolor) or [UIColor](../../uikit/uicolor.md) class, according to platform) or an image object (of the [NSImage](https://developer.apple.com/documentation/appkit/nsimage) or [UIImage](../../uikit/uiimage.md) class, according to platform). You can therefore use type introspection (the [isKindOfClass:](../../objectivec/nsobjectprotocol/iskind%28of_%29.md) method in Objective-C, or the `is` operator or `let`-`as` matching in Swift) to determine the type of the material property’s contents.

<a id="Using-Animated-Content"></a>

### Using Animated Content

In iOS 11, you may use an [AVCaptureDevice](../../avfoundation/avcapturedevice.md) object to preview live video from a capture device as a material property. In iOS 11, tvOS 11, and macOS 10.13, you may use an [AVPlayer](../../avfoundation/avplayer.md) object as a material property for video playback.

You may specify any Core Animation layer as the contents of a material property, such as a layer with an animated sublayer hierarchy. SceneKit cannot use a layer that is already being displayed elsewhere (for example, the backing layer of a [UIView](../../uikit/uiview.md) object).

You can use the SpriteKit framework to provide static or animated content for a material property. SpriteKit provides options for generating and modifying texture images, such as the [textureByGeneratingNormalMap](../../spritekit/sktexture/generatingnormalmap%28%29.md) method. You can also use an entire animated SpriteKit scene as the material property’s contents. When you use a [SKTexture](../../spritekit/sktexture.md) object as a material property’s contents, the [wrapS](wraps.md), [wrapT](wrapt.md), [contentsTransform](contentstransform.md), [minificationFilter](minificationfilter.md), [magnificationFilter](magnificationfilter.md) and [mipFilter](mipfilter.md) properties automatically update to match the corresponding features of the SpriteKit texture.

If the current content is a solid color, you can use explicit or implicit animations (see [Animating SceneKit Content](../animating-scenekit-content.md)) to change to another color, creating an effect that fades between the two colors. Using animations to change from or to other content types results in an instantaneous transition—for an animated transition between textured content types (or types that are themselves animated), create a shader modifier (see [SCNShadable](../scnshadable.md)).

<a id="Using-Cube-Map-Texures"></a>

### Using Cube Map Texures

SceneKit supports cube maps only for a material’s [reflective](../scnmaterial/reflective.md) property or for a scene’s [background](../scnscene/background.md) or [lightingEnvironment](../scnscene/lightingenvironment.md) property. You can provide a cube map in any of the ways described in Table 1. Of these formats, the vertical strip provides the best performance, because it matches the memory layout SceneKit uses for rendering cube textures.

| Description | Image Size Requirements | Example |
| --- | --- | --- |
| Vertical strip (single image) | height == 6 \* width | ![](https://developer.apple.com/images/com.apple.scenekit/media-2557196@2x.png) |
| Horizontal strip (single image) | 6 \* height == width | ![](https://developer.apple.com/images/com.apple.scenekit/media-2557198@2x.png) |
| Spherical projection (single image) ![](https://developer.apple.com/images/com.apple.scenekit/spacer.png) (pixel x/y positions map to latitude/longitude coordinates on a sphere) | 2 \* height == width | ![](https://developer.apple.com/images/com.apple.scenekit/media-2557205@2x.png) |
| Array of six images ![](https://developer.apple.com/images/com.apple.scenekit/spacer.png) (face order: +X, -X, +Y, -Y, +Z, -Z) | height == width ![](https://developer.apple.com/images/com.apple.scenekit/spacer.png) same size for all images | \[![](https://developer.apple.com/images/com.apple.scenekit/media-2557210@2x.png), ![](https://developer.apple.com/images/com.apple.scenekit/media-2557212@2x.png), ![](https://developer.apple.com/images/com.apple.scenekit/media-2557215@2x.png), ![](https://developer.apple.com/images/com.apple.scenekit/media-2557218@2x.png), ![](https://developer.apple.com/images/com.apple.scenekit/media-2557221@2x.png), ![](https://developer.apple.com/images/com.apple.scenekit/media-2557226@2x.png)\] |

## See Also

### Working with Material Property Contents

- [intensity](intensity.md): A number between `0.0` and `1.0` that modulates the effect of the material property. Animatable.
