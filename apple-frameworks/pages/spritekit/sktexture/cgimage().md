> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sktexture/cgimage()](https://developer.apple.com/documentation/spritekit/sktexture/cgimage())

# cgImage() (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the texture’s image data as a Quartz 2D image.

## Declaration

```swift
func cgImage() -> CGImage
```

<a id="Discussion"></a>

## Discussion

The [cgImage()](cgimage%28%29.md) property returns the contents of a texture as a Quartz Image.

As an example use, you can create an image from a portion of your scene and save it to disk by doing the following:

1. Use the [texture(from:)](../skview/texture%28from_%29.md) method to render the scene’s contents to a texture.
2. Call [cgImage()](cgimage%28%29.md) on the result.
3. Use [CGImageDestination](../../imageio/cgimagedestination.md) to write the `CGImage` out to disk.

# CGImage (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the texture’s image data as a Quartz 2D image.

## Declaration

```objectivec
- (CGImageRef) CGImage;
```

<a id="Discussion"></a>

## Discussion

The [CGImage](cgimage%28%29.md) property returns the contents of a texture as a Quartz Image.

As an example use, you can create an image from a portion of your scene and save it to disk by doing the following:

1. Use the [textureFromNode:](../skview/texture%28from_%29.md) method to render the scene’s contents to a texture.
2. Call [CGImage](cgimage%28%29.md) on the result.
3. Use [CGImageDestinationRef](../../imageio/cgimagedestination.md) to write the `CGImage` out to disk.
