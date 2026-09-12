> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/paravirtualizedgraphics/pgdisplay/hostpresentcount](https://developer.apple.com/documentation/paravirtualizedgraphics/pgdisplay/hostpresentcount)

# hostPresentCount (Swift)

**Framework:** Paravirtualized Graphics  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

The number of unique frames that the host has encoded since object creation.

## Declaration

```swift
var hostPresentCount: Int { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property can be smaller than the number of times you’ve called the [encodeCurrentFrame(to:texture:region:)](encodecurrentframe%28to_texture_region_%29.md) method if you encode the same frame multiple times.

## See Also

### Handling Frame Updates

- [guestPresentCount](guestpresentcount.md): The number of frame presents that the guest has generated since object creation.
- [minimumTextureUsage](minimumtextureusage.md): The Metal texture usage flags necessary for any texture that can be a destination for frame data.
- [encodeCurrentFrame(to:texture:region:)](encodecurrentframe%28to_texture_region_%29.md): Encodes Metal commands to process the current frame and write it to a texture.

# hostPresentCount (Objective-C)

**Framework:** Paravirtualized Graphics  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

The number of unique frames that the host has encoded since object creation.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger hostPresentCount;
```

<a id="Discussion"></a>

## Discussion

The value of this property can be smaller than the number of times you’ve called the [encodeCurrentFrameToCommandBuffer:texture:region:](encodecurrentframe%28to_texture_region_%29.md) method if you encode the same frame multiple times.

## See Also

### Handling Frame Updates

- [guestPresentCount](guestpresentcount.md): The number of frame presents that the guest has generated since object creation.
- [minimumTextureUsage](minimumtextureusage.md): The Metal texture usage flags necessary for any texture that can be a destination for frame data.
- [encodeCurrentFrameToCommandBuffer:texture:region:](encodecurrentframe%28to_texture_region_%29.md): Encodes Metal commands to process the current frame and write it to a texture.
