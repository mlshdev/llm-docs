> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skmutabletexture/init(size:)](https://developer.apple.com/documentation/spritekit/skmutabletexture/init(size:))

# init(size:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Initializes an empty texture with a specific size.

## Declaration

```swift
init(size: CGSize)
```

## Parameters

- `size`: The size of the texture, in pixels.

<a id="return-value"></a>

## Return Value

An empty mutable texture.

<a id="Discussion"></a>

## Discussion

You must call the [modifyPixelData(\_:)](modifypixeldata%28__%29.md) method at least once before using this texture.

## See Also

### Creating an Empty Mutable Texture

- [init(size:pixelFormat:)](init%28size_pixelformat_%29.md): Initializes an empty texture with a specific size and format.

# initWithSize: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Initializes an empty texture with a specific size.

## Declaration

```objectivec
- (instancetype) initWithSize:(CGSize) size;
```

## Parameters

- `size`: The size of the texture, in pixels.

<a id="return-value"></a>

## Return Value

An empty mutable texture.

<a id="Discussion"></a>

## Discussion

You must call the [modifyPixelDataWithBlock:](modifypixeldata%28__%29.md) method at least once before using this texture.

## See Also

### Creating an Empty Mutable Texture

- [mutableTextureWithSize:](mutabletexturewithsize_.md): Creates an empty texture with a specific size.
- [initWithSize:pixelFormat:](init%28size_pixelformat_%29.md): Initializes an empty texture with a specific size and format.
