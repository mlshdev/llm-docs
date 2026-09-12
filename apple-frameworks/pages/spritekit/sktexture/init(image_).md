> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sktexture/init(image:)](https://developer.apple.com/documentation/spritekit/sktexture/init(image:))

# init(image:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Create a new texture object from an image object.

## Declaration

```swift
convenience init(image: UIImage)
```

```swift
convenience init(image: NSImage)
```

## Parameters

- `image`: An image.

<a id="return-value"></a>

## Return Value

A new texture object.

<a id="Discussion"></a>

## Discussion

The image data is copied before control is returned to your game.

## See Also

### Texture from Image

- [init(cgImage:)](init%28cgimage_%29-27ovb.md): Create a new texture object from a Quartz 2D image.

# textureWithImage: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Create a new texture object from an image object.

## Declaration

```objectivec
+ (instancetype) textureWithImage:(UIImage *) image;
```

```objectivec
+ (instancetype) textureWithImage:(NSImage *) image;
```

## Parameters

- `image`: An image.

<a id="return-value"></a>

## Return Value

A new texture object.

<a id="Discussion"></a>

## Discussion

The image data is copied before control is returned to your game.

## See Also

### Texture from Image

- [textureWithCGImage:](init%28cgimage_%29-27ovb.md): Create a new texture object from a Quartz 2D image.
