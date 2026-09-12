> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/paravirtualizedgraphics/pgdisplay/guestpresentcount](https://developer.apple.com/documentation/paravirtualizedgraphics/pgdisplay/guestpresentcount)

# guestPresentCount (Swift)

**Framework:** Paravirtualized Graphics  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

The number of frame presents that the guest has generated since object creation.

## Declaration

```swift
var guestPresentCount: Int { get }
```

<a id="Discussion"></a>

## Discussion

This value can exceed the number of times that the framework invokes the [newFrameEventHandler](../pgdisplaydescriptor/newframeeventhandler.md) block if the host isn’t encoding frames fast enough to keep up.

## See Also

### Handling Frame Updates

- [hostPresentCount](hostpresentcount.md): The number of unique frames that the host has encoded since object creation.
- [minimumTextureUsage](minimumtextureusage.md): The Metal texture usage flags necessary for any texture that can be a destination for frame data.
- [encodeCurrentFrame(to:texture:region:)](encodecurrentframe%28to_texture_region_%29.md): Encodes Metal commands to process the current frame and write it to a texture.

# guestPresentCount (Objective-C)

**Framework:** Paravirtualized Graphics  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

The number of frame presents that the guest has generated since object creation.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger guestPresentCount;
```

<a id="Discussion"></a>

## Discussion

This value can exceed the number of times that the framework invokes the [newFrameEventHandler](../pgdisplaydescriptor/newframeeventhandler.md) block if the host isn’t encoding frames fast enough to keep up.

## See Also

### Handling Frame Updates

- [hostPresentCount](hostpresentcount.md): The number of unique frames that the host has encoded since object creation.
- [minimumTextureUsage](minimumtextureusage.md): The Metal texture usage flags necessary for any texture that can be a destination for frame data.
- [encodeCurrentFrameToCommandBuffer:texture:region:](encodecurrentframe%28to_texture_region_%29.md): Encodes Metal commands to process the current frame and write it to a texture.
