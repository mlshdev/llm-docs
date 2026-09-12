> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sktextureatlas/init(dictionary:)](https://developer.apple.com/documentation/spritekit/sktextureatlas/init(dictionary:))

# init(dictionary:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates a texture atlas from a set of image files.

## Declaration

```swift
convenience init(dictionary properties: [String : Any])
```

## Parameters

- `properties`: A dictionary that defines which textures are to be merged into the atlas.

<a id="return-value"></a>

## Return Value

A new texture atlas object.

## Mentioned In

- [About Texture Atlases](../about-texture-atlases.md)

<a id="Discussion"></a>

## Discussion

Normally, Xcode creates texture atlases at compile time from the image files included in your project. These atlases are compiled and installed inside the app bundle. However, sometimes the assets needed to create a texture atlas are not available at compile time. For example, those assets might be procedurally generated or downloaded from the network. However, you still want the benefit of texture atlases to reduce the number of state changes required in the hardware. You can use this method to generate an atlas object at runtime. This is a potentially expensive operation best performed when your game loop is not running.

The keys in the dictionary represent the names of the individual textures. The associated object for each key can be:

- An [NSString](../../foundation/nsstring.md) object that contains a file system path to a file that contains the texture
- An [NSURL](../../foundation/nsurl.md) object that contains a file system path to a file that contains the texture
- A [UIImage](../../uikit/uiimage.md) object
- An [NSImage](https://developer.apple.com/documentation/appkit/nsimage) object

## See Also

### Creating a Texture Atlas Programmatically

- [init(named:)](init%28named_%29.md): Creates a texture atlas from data stored in the app bundle.

# atlasWithDictionary: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates a texture atlas from a set of image files.

## Declaration

```objectivec
+ (instancetype) atlasWithDictionary:(NSDictionary<NSString *,id> *) properties;
```

## Parameters

- `properties`: A dictionary that defines which textures are to be merged into the atlas.

<a id="return-value"></a>

## Return Value

A new texture atlas object.

## Mentioned In

- [About Texture Atlases](../about-texture-atlases.md)

<a id="Discussion"></a>

## Discussion

Normally, Xcode creates texture atlases at compile time from the image files included in your project. These atlases are compiled and installed inside the app bundle. However, sometimes the assets needed to create a texture atlas are not available at compile time. For example, those assets might be procedurally generated or downloaded from the network. However, you still want the benefit of texture atlases to reduce the number of state changes required in the hardware. You can use this method to generate an atlas object at runtime. This is a potentially expensive operation best performed when your game loop is not running.

The keys in the dictionary represent the names of the individual textures. The associated object for each key can be:

- An [NSString](../../foundation/nsstring.md) object that contains a file system path to a file that contains the texture
- An [NSURL](../../foundation/nsurl.md) object that contains a file system path to a file that contains the texture
- A [UIImage](../../uikit/uiimage.md) object
- An [NSImage](https://developer.apple.com/documentation/appkit/nsimage) object

## See Also

### Creating a Texture Atlas Programmatically

- [atlasNamed:](init%28named_%29.md): Creates a texture atlas from data stored in the app bundle.
