> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sktexture/size()](https://developer.apple.com/documentation/spritekit/sktexture/size())

# size() (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Gets the size of the texture.

## Declaration

```swift
func size() -> CGSize
```

<a id="return-value"></a>

## Return Value

The dimensions of the texture, measured in points.

## Mentioned In

- [Loading and Using Textures](../loading-and-using-textures.md)

<a id="Discussion"></a>

## Discussion

If the texture was created using an image file and that image file hasn’t been loaded, calling this method forces the texture data to be loaded from the file.

## See Also

### Reading a Texture’s Size and Optional Source Location

- [textureRect()](texturerect%28%29.md): Gets a rectangle that defines the portion of the texture used to render its image.

# size (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Gets the size of the texture.

## Declaration

```objectivec
- (CGSize) size;
```

<a id="return-value"></a>

## Return Value

The dimensions of the texture, measured in points.

## Mentioned In

- [Loading and Using Textures](../loading-and-using-textures.md)

<a id="Discussion"></a>

## Discussion

If the texture was created using an image file and that image file hasn’t been loaded, calling this method forces the texture data to be loaded from the file.

## See Also

### Reading a Texture’s Size and Optional Source Location

- [textureRect](texturerect%28%29.md): Gets a rectangle that defines the portion of the texture used to render its image.
