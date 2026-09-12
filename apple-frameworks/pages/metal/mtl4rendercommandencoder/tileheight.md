> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4rendercommandencoder/tileheight](https://developer.apple.com/documentation/metal/mtl4rendercommandencoder/tileheight)

# tileHeight (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Sets the height of a tile for this render pass.

## Declaration

```swift
var tileHeight: Int { get }
```

## See Also

### Drawing with tile shaders

- [dispatchThreadsPerTile(\_:)](dispatchthreadspertile%28__%29.md): Encodes a command that invokes a tile shader function from the encoder’s current tile render pipeline state.
- [tileWidth](tilewidth.md): Sets the width of a tile for this render pass.

# tileHeight (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Sets the height of a tile for this render pass.

## Declaration

```objectivec
@property (readonly) NSUInteger tileHeight;
```

## See Also

### Drawing with tile shaders

- [dispatchThreadsPerTile:](dispatchthreadspertile%28__%29.md): Encodes a command that invokes a tile shader function from the encoder’s current tile render pipeline state.
- [tileWidth](tilewidth.md): Sets the width of a tile for this render pass.
