> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlparallelrendercommandencoder](https://developer.apple.com/documentation/metal/mtlparallelrendercommandencoder)

# MTLParallelRenderCommandEncoder (Swift)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

An instance that splits up a single render pass so that it can be simultaneously encoded from multiple threads.

## Declaration

```swift
protocol MTLParallelRenderCommandEncoder : MTLCommandEncoder
```

## Mentioned In

- [Understanding the Metal 4 core API](understanding-the-metal-4-core-api.md)

<a id="overview"></a>

## Overview

Your app does not define classes that implement this protocol. To create an [MTLParallelRenderCommandEncoder](mtlparallelrendercommandencoder.md) instance, call the [makeParallelRenderCommandEncoder(descriptor:)](mtlcommandbuffer/makeparallelrendercommandencoder%28descriptor_%29.md) method of the [MTLCommandBuffer](mtlcommandbuffer.md) instance that you want to encode the rendering commands into. Then, call the renderCommandEncoder method on this [MTLParallelRenderCommandEncoder](mtlparallelrendercommandencoder.md) instance to create one or more [MTLRenderCommandEncoder](mtlrendercommandencoder.md) instances. The subordinate [MTLRenderCommandEncoder](mtlrendercommandencoder.md) instances created encode their commands to the same command buffer and target the same [MTLRenderPassAttachmentDescriptor](mtlrenderpassattachmentdescriptor.md) instance. The [MTLParallelRenderCommandEncoder](mtlparallelrendercommandencoder.md) instance ensures the attachment load and store actions only occur at the start and end of the entire rendering pass.

You can assign each [MTLRenderCommandEncoder](mtlrendercommandencoder.md) to its own thread and each can encode commands in parallel. You are responsible for any thread synchronization that is required. After all the subordinate encoders have finished encoding their commands, call [endEncoding()](mtlcommandencoder/endencoding%28%29.md) to execute the commands. The rendering commands are executed in the order that the subordinate encoders were created.

## Topics

### Creating a render command encoder

- [makeRenderCommandEncoder()](mtlparallelrendercommandencoder/makerendercommandencoder%28%29.md): Create an object that encodes commands that perform graphics rendering operations and may be assigned to a different thread.

### Setting render pass state

- [setColorStoreAction(\_:index:)](mtlparallelrendercommandencoder/setcolorstoreaction%28__index_%29.md): Specifies a known store action to replace the initial [MTLStoreAction.unknown](mtlstoreaction/unknown.md) value specified for a given color attachment.
- [setColorStoreActionOptions(\_:index:)](mtlparallelrendercommandencoder/setcolorstoreactionoptions%28__index_%29.md): Deprecated. Specifies known store action options for a given color attachment.
- [setDepthStoreAction(\_:)](mtlparallelrendercommandencoder/setdepthstoreaction%28__%29.md): Specifies a known store action to replace the initial [MTLStoreAction.unknown](mtlstoreaction/unknown.md) value specified for a given depth attachment.
- [setDepthStoreActionOptions(\_:)](mtlparallelrendercommandencoder/setdepthstoreactionoptions%28__%29.md): Deprecated. Specifies known store action options for a given depth attachment.
- [setStencilStoreAction(\_:)](mtlparallelrendercommandencoder/setstencilstoreaction%28__%29.md): Specifies a known store action to replace the initial [MTLStoreAction.unknown](mtlstoreaction/unknown.md) value specified for a given stencil attachment.
- [setStencilStoreActionOptions(\_:)](mtlparallelrendercommandencoder/setstencilstoreactionoptions%28__%29.md): Deprecated. Specifies known store action options for a given stencil attachment.

## Relationships

### Inherits From

- [MTLCommandEncoder](mtlcommandencoder.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Encoding a render pass in parallel

- [MTLLoadAction](mtlloadaction.md): Types of actions performed for an attachment at the start of a rendering pass.
- [MTLStoreAction](mtlstoreaction.md): Types of actions performed for an attachment at the end of a rendering pass.
- [MTLStoreActionOptions](mtlstoreactionoptions.md): Deprecated. Options that modify a store action.

# MTLParallelRenderCommandEncoder (Objective-C)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

An instance that splits up a single render pass so that it can be simultaneously encoded from multiple threads.

## Declaration

```objectivec
@protocol MTLParallelRenderCommandEncoder <MTLCommandEncoder>
```

## Mentioned In

- [Understanding the Metal 4 core API](understanding-the-metal-4-core-api.md)

<a id="overview"></a>

## Overview

Your app does not define classes that implement this protocol. To create an [MTLParallelRenderCommandEncoder](mtlparallelrendercommandencoder.md) instance, call the [parallelRenderCommandEncoderWithDescriptor:](mtlcommandbuffer/makeparallelrendercommandencoder%28descriptor_%29.md) method of the [MTLCommandBuffer](mtlcommandbuffer.md) instance that you want to encode the rendering commands into. Then, call the renderCommandEncoder method on this [MTLParallelRenderCommandEncoder](mtlparallelrendercommandencoder.md) instance to create one or more [MTLRenderCommandEncoder](mtlrendercommandencoder.md) instances. The subordinate [MTLRenderCommandEncoder](mtlrendercommandencoder.md) instances created encode their commands to the same command buffer and target the same [MTLRenderPassAttachmentDescriptor](mtlrenderpassattachmentdescriptor.md) instance. The [MTLParallelRenderCommandEncoder](mtlparallelrendercommandencoder.md) instance ensures the attachment load and store actions only occur at the start and end of the entire rendering pass.

You can assign each [MTLRenderCommandEncoder](mtlrendercommandencoder.md) to its own thread and each can encode commands in parallel. You are responsible for any thread synchronization that is required. After all the subordinate encoders have finished encoding their commands, call [endEncoding](mtlcommandencoder/endencoding%28%29.md) to execute the commands. The rendering commands are executed in the order that the subordinate encoders were created.

## Topics

### Creating a render command encoder

- [renderCommandEncoder](mtlparallelrendercommandencoder/makerendercommandencoder%28%29.md): Create an object that encodes commands that perform graphics rendering operations and may be assigned to a different thread.

### Setting render pass state

- [setColorStoreAction:atIndex:](mtlparallelrendercommandencoder/setcolorstoreaction%28__index_%29.md): Specifies a known store action to replace the initial [MTLStoreActionUnknown](mtlstoreaction/unknown.md) value specified for a given color attachment.
- [setColorStoreActionOptions:atIndex:](mtlparallelrendercommandencoder/setcolorstoreactionoptions%28__index_%29.md): Deprecated. Specifies known store action options for a given color attachment.
- [setDepthStoreAction:](mtlparallelrendercommandencoder/setdepthstoreaction%28__%29.md): Specifies a known store action to replace the initial [MTLStoreActionUnknown](mtlstoreaction/unknown.md) value specified for a given depth attachment.
- [setDepthStoreActionOptions:](mtlparallelrendercommandencoder/setdepthstoreactionoptions%28__%29.md): Deprecated. Specifies known store action options for a given depth attachment.
- [setStencilStoreAction:](mtlparallelrendercommandencoder/setstencilstoreaction%28__%29.md): Specifies a known store action to replace the initial [MTLStoreActionUnknown](mtlstoreaction/unknown.md) value specified for a given stencil attachment.
- [setStencilStoreActionOptions:](mtlparallelrendercommandencoder/setstencilstoreactionoptions%28__%29.md): Deprecated. Specifies known store action options for a given stencil attachment.

## Relationships

### Inherits From

- [MTLCommandEncoder](mtlcommandencoder.md)

## See Also

### Encoding a render pass in parallel

- [MTLLoadAction](mtlloadaction.md): Types of actions performed for an attachment at the start of a rendering pass.
- [MTLStoreAction](mtlstoreaction.md): Types of actions performed for an attachment at the end of a rendering pass.
- [MTLStoreActionOptions](mtlstoreactionoptions.md): Deprecated. Options that modify a store action.
