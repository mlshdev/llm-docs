> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sktexture/init(cgimage:)-27ovb](https://developer.apple.com/documentation/spritekit/sktexture/init(cgimage:)-27ovb)

# init(cgImage:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Create a new texture object from a Quartz 2D image.

## Declaration

```swift
convenience init(cgImage image: CGImage)
```

## Parameters

- `image`: A Quartz 2D image ([CGImage](../../coregraphics/cgimage.md)) object. For more information, see [Quartz 2D Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/Introduction/Introduction.html#//apple_ref/doc/uid/TP30001066) and [CGImage](../../coregraphics/cgimage.md).

<a id="return-value"></a>

## Return Value

A new texture object.

<a id="Discussion"></a>

## Discussion

The image data is copied before control is returned to your game.

## See Also

### Texture from Image

- [init(image:)](init%28image_%29.md): Create a new texture object from an image object.

# textureWithCGImage: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Create a new texture object from a Quartz 2D image.

## Declaration

```objectivec
+ (instancetype) textureWithCGImage:(CGImageRef) image;
```

## Parameters

- `image`: A Quartz 2D image ([CGImageRef](../../coregraphics/cgimage.md)) object. For more information, see [Quartz 2D Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/Introduction/Introduction.html#//apple_ref/doc/uid/TP30001066) and [CGImageRef](../../coregraphics/cgimage.md).

<a id="return-value"></a>

## Return Value

A new texture object.

<a id="Discussion"></a>

## Discussion

The image data is copied before control is returned to your game.

## See Also

### Texture from Image

- [textureWithImage:](init%28image_%29.md): Create a new texture object from an image object.
