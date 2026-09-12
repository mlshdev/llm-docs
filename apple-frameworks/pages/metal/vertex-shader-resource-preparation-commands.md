> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/vertex-shader-resource-preparation-commands](https://developer.apple.com/documentation/metal/vertex-shader-resource-preparation-commands)

# Vertex shader resource preparation commands (Swift)

**Framework:** Metal  
**Kind:** API Collection

Assign resources to vertex shaders, including buffers, textures, acceleration structures, sampler states, and function tables.

<a id="overview"></a>

## Overview

Vertex shaders share argument tables for each resource type, such as buffers, textures, and sampler states. Each shader type has its own argument tables, separate from vertex shaders and other shader types.

## Topics

### Assigning buffers

- [setVertexBuffer(\_:offset:index:)](mtlrendercommandencoder/setvertexbuffer%28__offset_index_%29.md): Assigns a buffer to an entry in the vertex shader argument table.
- [setVertexBuffer(\_:offset:attributeStride:index:)](mtlrendercommandencoder/setvertexbuffer%28__offset_attributestride_index_%29.md)
- [setVertexBuffers(\_:offsets:range:)](mtlrendercommandencoder/setvertexbuffers%28__offsets_range_%29.md): Assigns multiple buffers to a range of entries in the vertex shader argument table.
- [setVertexBuffers(\_:offsets:attributeStrides:range:)](mtlrendercommandencoder/setvertexbuffers%28__offsets_attributestrides_range_%29.md)
- [setVertexBytes(\_:length:index:)](mtlrendercommandencoder/setvertexbytes%28__length_index_%29.md): Creates a buffer from bytes and assigns it to an entry in the vertex shader argument table.
- [setVertexBytes(\_:length:attributeStride:index:)](mtlrendercommandencoder/setvertexbytes%28__length_attributestride_index_%29.md)
- [setVertexBufferOffset(\_:index:)](mtlrendercommandencoder/setvertexbufferoffset%28__index_%29.md): Updates an entry in the vertex shader argument table with a new location within the entry’s current buffer.
- [setVertexBufferOffset(offset:attributeStride:index:)](mtlrendercommandencoder/setvertexbufferoffset%28offset_attributestride_index_%29.md)

### Assigning textures

- [setVertexTexture(\_:index:)](mtlrendercommandencoder/setvertextexture%28__index_%29.md): Assigns a texture to an entry in the vertex shader argument table.
- [setVertexTextures(\_:range:)](mtlrendercommandencoder/setvertextextures%28__range_%29.md): Assigns multiple textures to a range of entries in the vertex shader argument table.

### Assigning sampler states

- [setVertexSamplerState(\_:index:)](mtlrendercommandencoder/setvertexsamplerstate%28__index_%29.md): Assigns a sampler state to an entry in the vertex shader argument table.
- [setVertexSamplerState(\_:lodMinClamp:lodMaxClamp:index:)](mtlrendercommandencoder/setvertexsamplerstate%28__lodminclamp_lodmaxclamp_index_%29.md): Assigns a sampler state and clamp values to an entry in the vertex shader argument table.
- [setVertexSamplerStates(\_:range:)](mtlrendercommandencoder/setvertexsamplerstates%28__range_%29.md): Assigns multiple sampler states to a range of entries in the vertex shader argument table.
- [setVertexSamplerStates(\_:lodMinClamps:lodMaxClamps:range:)](mtlrendercommandencoder/setvertexsamplerstates%28__lodminclamps_lodmaxclamps_range_%29.md): Assigns multiple sampler states and clamp values to a range of entries in the vertex shader argument table.

### Assigning acceleration structures

- [setVertexAccelerationStructure(\_:bufferIndex:)](mtlrendercommandencoder/setvertexaccelerationstructure%28__bufferindex_%29.md): Assigns an acceleration structure to an entry in the vertex shader argument table.

### Assigning visible function tables

- [setVertexVisibleFunctionTable(\_:bufferIndex:)](mtlrendercommandencoder/setvertexvisiblefunctiontable%28__bufferindex_%29.md): Assigns a visible function table to an entry in the vertex shader argument table.
- [setVertexVisibleFunctionTables(\_:bufferRange:)](mtlrendercommandencoder/setvertexvisiblefunctiontables%28__bufferrange_%29.md): Assigns multiple visible function tables to a range of entries in the vertex shader argument table.

### Assigning intersection function tables

- [setVertexIntersectionFunctionTable(\_:bufferIndex:)](mtlrendercommandencoder/setvertexintersectionfunctiontable%28__bufferindex_%29.md): Assigns an intersection function table to an entry in the vertex shader argument table.
- [setVertexIntersectionFunctionTables(\_:bufferRange:)](mtlrendercommandencoder/setvertexintersectionfunctiontables%28__bufferrange_%29.md): Assigns multiple intersection function tables to a range of entries in the vertex shader argument table.

## See Also

### Resource preparation commands

- [Mesh and object shader resource preparation commands](mesh-and-object-shader-resource-preparation-commands.md): Assign resources to mesh and object shaders, including buffers, textures, acceleration structures, sampler states, and function tables.
- [Fragment shader resource preparation commands](fragment-shader-resource-preparation-commands.md): Assign resources to fragment shaders, including buffers, textures, acceleration structures, sampler states, and function tables.
- [Tile shaders resource preparation commands](tile-shaders-resource-preparation-commands.md): Assign resources to tile shaders, including buffers, textures, acceleration structures, sampler states, and function tables.
- [Argument buffer resource preparation commands](argument-buffer-resource-preparation-commands.md): Load individual resources and multiple resources within a heap into GPU memory so that they’re available to shaders through argument buffers.

# Vertex shader resource preparation commands (Objective-C)

**Framework:** Metal  
**Kind:** API Collection

Assign resources to vertex shaders, including buffers, textures, acceleration structures, sampler states, and function tables.

<a id="overview"></a>

## Overview

Vertex shaders share argument tables for each resource type, such as buffers, textures, and sampler states. Each shader type has its own argument tables, separate from vertex shaders and other shader types.

## Topics

### Assigning buffers

- [setVertexBuffer:offset:atIndex:](mtlrendercommandencoder/setvertexbuffer%28__offset_index_%29.md): Assigns a buffer to an entry in the vertex shader argument table.
- [setVertexBuffer:offset:attributeStride:atIndex:](mtlrendercommandencoder/setvertexbuffer%28__offset_attributestride_index_%29.md)
- [setVertexBuffers:offsets:withRange:](mtlrendercommandencoder/setvertexbuffers_offsets_withrange_.md): Assigns multiple buffers to a range of entries in the vertex shader argument table.
- [setVertexBuffers:offsets:attributeStrides:withRange:](mtlrendercommandencoder/setvertexbuffers_offsets_attributestrides_withrange_.md)
- [setVertexBytes:length:atIndex:](mtlrendercommandencoder/setvertexbytes%28__length_index_%29.md): Creates a buffer from bytes and assigns it to an entry in the vertex shader argument table.
- [setVertexBytes:length:attributeStride:atIndex:](mtlrendercommandencoder/setvertexbytes%28__length_attributestride_index_%29.md)
- [setVertexBufferOffset:atIndex:](mtlrendercommandencoder/setvertexbufferoffset%28__index_%29.md): Updates an entry in the vertex shader argument table with a new location within the entry’s current buffer.
- [setVertexBufferOffset:attributeStride:atIndex:](mtlrendercommandencoder/setvertexbufferoffset%28offset_attributestride_index_%29.md)

### Assigning textures

- [setVertexTexture:atIndex:](mtlrendercommandencoder/setvertextexture%28__index_%29.md): Assigns a texture to an entry in the vertex shader argument table.
- [setVertexTextures:withRange:](mtlrendercommandencoder/setvertextextures_withrange_.md): Assigns multiple textures to a range of entries in the vertex shader argument table.

### Assigning sampler states

- [setVertexSamplerState:atIndex:](mtlrendercommandencoder/setvertexsamplerstate%28__index_%29.md): Assigns a sampler state to an entry in the vertex shader argument table.
- [setVertexSamplerState:lodMinClamp:lodMaxClamp:atIndex:](mtlrendercommandencoder/setvertexsamplerstate%28__lodminclamp_lodmaxclamp_index_%29.md): Assigns a sampler state and clamp values to an entry in the vertex shader argument table.
- [setVertexSamplerStates:withRange:](mtlrendercommandencoder/setvertexsamplerstates_withrange_.md): Assigns multiple sampler states to a range of entries in the vertex shader argument table.
- [setVertexSamplerStates:lodMinClamps:lodMaxClamps:withRange:](mtlrendercommandencoder/setvertexsamplerstates_lodminclamps_lodmaxclamps_withrange_.md): Assigns multiple sampler states and clamp values to a range of entries in the vertex shader argument table.

### Assigning acceleration structures

- [setVertexAccelerationStructure:atBufferIndex:](mtlrendercommandencoder/setvertexaccelerationstructure%28__bufferindex_%29.md): Assigns an acceleration structure to an entry in the vertex shader argument table.

### Assigning visible function tables

- [setVertexVisibleFunctionTable:atBufferIndex:](mtlrendercommandencoder/setvertexvisiblefunctiontable%28__bufferindex_%29.md): Assigns a visible function table to an entry in the vertex shader argument table.
- [setVertexVisibleFunctionTables:withBufferRange:](mtlrendercommandencoder/setvertexvisiblefunctiontables_withbufferrange_.md): Assigns multiple visible function tables to a range of entries in the vertex shader argument table.

### Assigning intersection function tables

- [setVertexIntersectionFunctionTable:atBufferIndex:](mtlrendercommandencoder/setvertexintersectionfunctiontable%28__bufferindex_%29.md): Assigns an intersection function table to an entry in the vertex shader argument table.
- [setVertexIntersectionFunctionTables:withBufferRange:](mtlrendercommandencoder/setvertexintersectionfunctiontables_withbufferrange_.md): Assigns multiple intersection function tables to a range of entries in the vertex shader argument table.

## See Also

### Resource preparation commands

- [Mesh and object shader resource preparation commands](mesh-and-object-shader-resource-preparation-commands.md): Assign resources to mesh and object shaders, including buffers, textures, acceleration structures, sampler states, and function tables.
- [Fragment shader resource preparation commands](fragment-shader-resource-preparation-commands.md): Assign resources to fragment shaders, including buffers, textures, acceleration structures, sampler states, and function tables.
- [Tile shaders resource preparation commands](tile-shaders-resource-preparation-commands.md): Assign resources to tile shaders, including buffers, textures, acceleration structures, sampler states, and function tables.
- [Argument buffer resource preparation commands](argument-buffer-resource-preparation-commands.md): Load individual resources and multiple resources within a heap into GPU memory so that they’re available to shaders through argument buffers.
