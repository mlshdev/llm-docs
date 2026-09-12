> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/paravirtualizedgraphics/pgdisplay/minimumtextureusage](https://developer.apple.com/documentation/paravirtualizedgraphics/pgdisplay/minimumtextureusage)

# minimumTextureUsage (Swift)

**Framework:** Paravirtualized Graphics  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

The Metal texture usage flags necessary for any texture that can be a destination for frame data.

## Declaration

```swift
var minimumTextureUsage: MTLTextureUsage { get }
```

## See Also

### Handling Frame Updates

- [guestPresentCount](guestpresentcount.md): The number of frame presents that the guest has generated since object creation.
- [hostPresentCount](hostpresentcount.md): The number of unique frames that the host has encoded since object creation.
- [encodeCurrentFrame(to:texture:region:)](encodecurrentframe%28to_texture_region_%29.md): Encodes Metal commands to process the current frame and write it to a texture.

# minimumTextureUsage (Objective-C)

**Framework:** Paravirtualized Graphics  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

The Metal texture usage flags necessary for any texture that can be a destination for frame data.

## Declaration

```objectivec
@property (nonatomic, readonly) MTLTextureUsage minimumTextureUsage;
```

## See Also

### Handling Frame Updates

- [guestPresentCount](guestpresentcount.md): The number of frame presents that the guest has generated since object creation.
- [hostPresentCount](hostpresentcount.md): The number of unique frames that the host has encoded since object creation.
- [encodeCurrentFrameToCommandBuffer:texture:region:](encodecurrentframe%28to_texture_region_%29.md): Encodes Metal commands to process the current frame and write it to a texture.
