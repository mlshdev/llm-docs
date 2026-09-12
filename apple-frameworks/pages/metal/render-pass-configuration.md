> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/render-pass-configuration](https://developer.apple.com/documentation/metal/render-pass-configuration)

# Render pass configuration (Swift)

**Framework:** Metal  
**Kind:** API Collection

Set a render pass’s pipeline state, attachment actions, viewports, and so on, that affect subsequent drawing commands.

<a id="overview"></a>

## Overview

These methods encode commands that configure the render pass for all subsequent drawing commands. The most important configuration is the pipeline state (see [MTLRenderPipelineState](mtlrenderpipelinestate.md)), which you configure by calling the [setRenderPipelineState(\_:)](mtlrendercommandencoder/setrenderpipelinestate%28__%29.md) method.

## Topics

### Configuring pipeline state

- [setRenderPipelineState(\_:)](mtlrendercommandencoder/setrenderpipelinestate%28__%29.md): Configures the encoder with a render or tile pipeline state that applies to your subsequent draw commands.

### Configuring the actions for attachments

- [setColorStoreAction(\_:index:)](mtlrendercommandencoder/setcolorstoreaction%28__index_%29.md): Configures the store action for a color attachment.
- [setColorStoreActionOptions(\_:index:)](mtlrendercommandencoder/setcolorstoreactionoptions%28__index_%29.md): Deprecated. Configures the store action options for a color attachment.
- [setDepthStoreAction(\_:)](mtlrendercommandencoder/setdepthstoreaction%28__%29.md): Configures the store action for the depth attachment.
- [setDepthStoreActionOptions(\_:)](mtlrendercommandencoder/setdepthstoreactionoptions%28__%29.md): Deprecated. Configures the store action options for the depth attachment.
- [setStencilStoreAction(\_:)](mtlrendercommandencoder/setstencilstoreaction%28__%29.md): Configures the store action for the stencil attachment.
- [setStencilStoreActionOptions(\_:)](mtlrendercommandencoder/setstencilstoreactionoptions%28__%29.md): Deprecated. Configures the store action options for the stencil attachment.

### Configuring blend behavior

- [setBlendColor(red:green:blue:alpha:)](mtlrendercommandencoder/setblendcolor%28red_green_blue_alpha_%29.md): Configures each pixel component value, including alpha, for the render pipeline’s constant blend color.
- [setColorAttachmentMap(\_:)](mtlrendercommandencoder/setcolorattachmentmap%28__%29.md): Sets the mapping from logical shader color output to physical render pass color attachments.

### Configuring rendering behavior

- [setTriangleFillMode(\_:)](mtlrendercommandencoder/settrianglefillmode%28__%29.md): Configures how subsequent draw commands rasterize triangle and triangle strip primitives.
- [setFrontFacing(\_:)](mtlrendercommandencoder/setfrontfacing%28__%29.md): Configures which face of a primitive, such as a triangle, is the front.
- [setCullMode(\_:)](mtlrendercommandencoder/setcullmode%28__%29.md): Configures how the render pipeline determines which primitives to remove.

### Configuring depth and stencil behavior

- [setDepthStencilState(\_:)](mtlrendercommandencoder/setdepthstencilstate%28__%29.md): Configures the combined depth and stencil state.
- [setDepthBias(\_:slopeScale:clamp:)](mtlrendercommandencoder/setdepthbias%28__slopescale_clamp_%29.md): Configures the adjustments a render pass applies to depth values from fragment functions by a scaling factor and bias.
- [setDepthClipMode(\_:)](mtlrendercommandencoder/setdepthclipmode%28__%29.md): Configures how the render pipeline handles fragments outside the near and far planes of the view frustum.
- [setDepthTestBounds(\_:)](mtlrendercommandencoder/setdepthtestbounds%28__%29.md): Configures the range for depth bounds testing.
- [setStencilReferenceValue(\_:)](mtlrendercommandencoder/setstencilreferencevalue%28__%29.md): Configures the same comparison value for front- and back-facing primitives.
- [setStencilReferenceValues(front:back:)](mtlrendercommandencoder/setstencilreferencevalues%28front_back_%29.md): Configures different comparison values for front- and back-facing primitives.

### Configuring viewport and scissor behavior

- [setViewport(\_:)](mtlrendercommandencoder/setviewport%28__%29.md): Configures the render pipeline with a viewport that applies a transformation and a clipping rectangle.
- [setViewports(\_:)](mtlrendercommandencoder/setviewports%28__%29.md): Configures the render pipeline with multiple viewports that apply transformations and clipping rectangles.
- [setScissorRect(\_:)](mtlrendercommandencoder/setscissorrect%28__%29.md): Configures a rectangle for the fragment scissor test.
- [setScissorRects(\_:)](mtlrendercommandencoder/setscissorrects%28__%29.md): Configures multiple rectangles for the fragment scissor test.

### Configuring visibility testing

- [setVisibilityResultMode(\_:offset:)](mtlrendercommandencoder/setvisibilityresultmode%28__offset_%29.md): Configures which visibility test the GPU runs and the destination for any results it generates.

### Configuring vertex amplification

- [setVertexAmplificationCount(\_:viewMappings:)](mtlrendercommandencoder/setvertexamplificationcount%28__viewmappings_%29.md): Configures the number of output vertices the render pipeline produces for each input vertex, optionally with render target and viewport offsets.

### Configuring tessellation factors

- [setTessellationFactorScale(\_:)](mtlrendercommandencoder/settessellationfactorscale%28__%29.md): Configures the scale factor for per-patch tessellation factors.
- [setTessellationFactorBuffer(\_:offset:instanceStride:)](mtlrendercommandencoder/settessellationfactorbuffer%28__offset_instancestride_%29.md): Configures the per-patch tessellation factors for any subsequent patch-drawing commands.

### Configuring persistent threadgroup memory

- [setObjectThreadgroupMemoryLength(\_:index:)](mtlrendercommandencoder/setobjectthreadgroupmemorylength%28__index_%29.md): Configures the size of a threadgroup memory buffer for an entry in the object argument table.
- [setThreadgroupMemoryLength(\_:offset:index:)](mtlrendercommandencoder/setthreadgroupmemorylength%28__offset_index_%29.md): Configures the size of a threadgroup memory buffer for an entry in the fragment or tile shader argument table.

# Render pass configuration (Objective-C)

**Framework:** Metal  
**Kind:** API Collection

Set a render pass’s pipeline state, attachment actions, viewports, and so on, that affect subsequent drawing commands.

<a id="overview"></a>

## Overview

These methods encode commands that configure the render pass for all subsequent drawing commands. The most important configuration is the pipeline state (see [MTLRenderPipelineState](mtlrenderpipelinestate.md)), which you configure by calling the [setRenderPipelineState:](mtlrendercommandencoder/setrenderpipelinestate%28__%29.md) method.

## Topics

### Configuring pipeline state

- [setRenderPipelineState:](mtlrendercommandencoder/setrenderpipelinestate%28__%29.md): Configures the encoder with a render or tile pipeline state that applies to your subsequent draw commands.

### Configuring the actions for attachments

- [setColorStoreAction:atIndex:](mtlrendercommandencoder/setcolorstoreaction%28__index_%29.md): Configures the store action for a color attachment.
- [setColorStoreActionOptions:atIndex:](mtlrendercommandencoder/setcolorstoreactionoptions%28__index_%29.md): Deprecated. Configures the store action options for a color attachment.
- [setDepthStoreAction:](mtlrendercommandencoder/setdepthstoreaction%28__%29.md): Configures the store action for the depth attachment.
- [setDepthStoreActionOptions:](mtlrendercommandencoder/setdepthstoreactionoptions%28__%29.md): Deprecated. Configures the store action options for the depth attachment.
- [setStencilStoreAction:](mtlrendercommandencoder/setstencilstoreaction%28__%29.md): Configures the store action for the stencil attachment.
- [setStencilStoreActionOptions:](mtlrendercommandencoder/setstencilstoreactionoptions%28__%29.md): Deprecated. Configures the store action options for the stencil attachment.

### Configuring blend behavior

- [setBlendColorRed:green:blue:alpha:](mtlrendercommandencoder/setblendcolor%28red_green_blue_alpha_%29.md): Configures each pixel component value, including alpha, for the render pipeline’s constant blend color.
- [setColorAttachmentMap:](mtlrendercommandencoder/setcolorattachmentmap%28__%29.md): Sets the mapping from logical shader color output to physical render pass color attachments.

### Configuring rendering behavior

- [setTriangleFillMode:](mtlrendercommandencoder/settrianglefillmode%28__%29.md): Configures how subsequent draw commands rasterize triangle and triangle strip primitives.
- [setFrontFacingWinding:](mtlrendercommandencoder/setfrontfacing%28__%29.md): Configures which face of a primitive, such as a triangle, is the front.
- [setCullMode:](mtlrendercommandencoder/setcullmode%28__%29.md): Configures how the render pipeline determines which primitives to remove.

### Configuring depth and stencil behavior

- [setDepthStencilState:](mtlrendercommandencoder/setdepthstencilstate%28__%29.md): Configures the combined depth and stencil state.
- [setDepthBias:slopeScale:clamp:](mtlrendercommandencoder/setdepthbias%28__slopescale_clamp_%29.md): Configures the adjustments a render pass applies to depth values from fragment functions by a scaling factor and bias.
- [setDepthClipMode:](mtlrendercommandencoder/setdepthclipmode%28__%29.md): Configures how the render pipeline handles fragments outside the near and far planes of the view frustum.
- [setDepthTestMinBound:maxBound:](mtlrendercommandencoder/setdepthtestminbound_maxbound_.md): Configures the minimum and maximum bounds for depth bounds testing.
- [setStencilReferenceValue:](mtlrendercommandencoder/setstencilreferencevalue%28__%29.md): Configures the same comparison value for front- and back-facing primitives.
- [setStencilFrontReferenceValue:backReferenceValue:](mtlrendercommandencoder/setstencilreferencevalues%28front_back_%29.md): Configures different comparison values for front- and back-facing primitives.

### Configuring viewport and scissor behavior

- [setViewport:](mtlrendercommandencoder/setviewport%28__%29.md): Configures the render pipeline with a viewport that applies a transformation and a clipping rectangle.
- [setViewports:count:](mtlrendercommandencoder/setviewports_count_.md): Configures the render pipeline with multiple viewports that apply transformations and clipping rectangles.
- [setScissorRect:](mtlrendercommandencoder/setscissorrect%28__%29.md): Configures a rectangle for the fragment scissor test.
- [setScissorRects:count:](mtlrendercommandencoder/setscissorrects_count_.md): Configures multiple rectangles for the fragment scissor test.

### Configuring visibility testing

- [setVisibilityResultMode:offset:](mtlrendercommandencoder/setvisibilityresultmode%28__offset_%29.md): Configures which visibility test the GPU runs and the destination for any results it generates.

### Configuring vertex amplification

- [setVertexAmplificationCount:viewMappings:](mtlrendercommandencoder/setvertexamplificationcount%28__viewmappings_%29.md): Configures the number of output vertices the render pipeline produces for each input vertex, optionally with render target and viewport offsets.

### Configuring tessellation factors

- [setTessellationFactorScale:](mtlrendercommandencoder/settessellationfactorscale%28__%29.md): Configures the scale factor for per-patch tessellation factors.
- [setTessellationFactorBuffer:offset:instanceStride:](mtlrendercommandencoder/settessellationfactorbuffer%28__offset_instancestride_%29.md): Configures the per-patch tessellation factors for any subsequent patch-drawing commands.

### Configuring persistent threadgroup memory

- [setObjectThreadgroupMemoryLength:atIndex:](mtlrendercommandencoder/setobjectthreadgroupmemorylength%28__index_%29.md): Configures the size of a threadgroup memory buffer for an entry in the object argument table.
- [setThreadgroupMemoryLength:offset:atIndex:](mtlrendercommandencoder/setthreadgroupmemorylength%28__offset_index_%29.md): Configures the size of a threadgroup memory buffer for an entry in the fragment or tile shader argument table.
