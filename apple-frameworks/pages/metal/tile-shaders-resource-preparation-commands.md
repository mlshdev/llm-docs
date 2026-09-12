> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/tile-shaders-resource-preparation-commands](https://developer.apple.com/documentation/metal/tile-shaders-resource-preparation-commands)

# Tile shaders resource preparation commands (Swift)

**Framework:** Metal  
**Kind:** API Collection

Assign resources to tile shaders, including buffers, textures, acceleration structures, sampler states, and function tables.

<a id="overview"></a>

## Overview

Tile shaders share argument tables for each resource type, such as buffers, textures, and sampler states. Each shader type has its own argument tables, separate from tile shaders and other shader types.

## Topics

### Assigning buffers

- [setTileBuffer(\_:offset:index:)](mtlrendercommandencoder/settilebuffer%28__offset_index_%29.md): Assigns a buffer to an entry in the tile shader argument table.
- [setTileBuffers(\_:offsets:range:)](mtlrendercommandencoder/settilebuffers%28__offsets_range_%29.md): Assigns multiple buffers to a range of entries in the tile shader argument table.
- [setTileBytes(\_:length:index:)](mtlrendercommandencoder/settilebytes%28__length_index_%29.md): Creates a buffer from bytes and assigns it to an entry in the tile shader argument table.
- [setTileBufferOffset(\_:index:)](mtlrendercommandencoder/settilebufferoffset%28__index_%29.md): Updates an entry in the tile shader argument table with a new location within the entry’s current buffer.

### Assigning textures

- [setTileTexture(\_:index:)](mtlrendercommandencoder/settiletexture%28__index_%29.md): Assigns a texture to an entry in the tile shader argument table.
- [setTileTextures(\_:range:)](mtlrendercommandencoder/settiletextures%28__range_%29.md): Assigns multiple textures to a range of entries in the tile shader argument table.

### Assigning sampler states

- [setTileSamplerState(\_:index:)](mtlrendercommandencoder/settilesamplerstate%28__index_%29.md): Assigns a sampler state to an entry in the tile shader argument table.
- [setTileSamplerState(\_:lodMinClamp:lodMaxClamp:index:)](mtlrendercommandencoder/settilesamplerstate%28__lodminclamp_lodmaxclamp_index_%29.md): Assigns a sampler state and clamp values to an entry in the tile shader argument table.
- [setTileSamplerStates(\_:range:)](mtlrendercommandencoder/settilesamplerstates%28__range_%29.md): Assigns multiple sampler states to a range of entries in the tile shader argument table.
- [setTileSamplerStates(\_:lodMinClamps:lodMaxClamps:range:)](mtlrendercommandencoder/settilesamplerstates%28__lodminclamps_lodmaxclamps_range_%29.md): Assigns multiple sampler states and clamp values to a range of entries in the tile shader argument table.

### Assigning acceleration structures

- [setTileAccelerationStructure(\_:bufferIndex:)](mtlrendercommandencoder/settileaccelerationstructure%28__bufferindex_%29.md): Assigns an acceleration structure to an entry in the tile shader argument table.

### Assigning visible function tables

- [setTileVisibleFunctionTable(\_:bufferIndex:)](mtlrendercommandencoder/settilevisiblefunctiontable%28__bufferindex_%29.md): Assigns a visible function table to an entry in the tile shader argument table.
- [setTileVisibleFunctionTables(\_:bufferRange:)](mtlrendercommandencoder/settilevisiblefunctiontables%28__bufferrange_%29.md): Assigns multiple visible function tables to a range of entries in the tile shader argument table.

### Assigning intersection function tables

- [setTileIntersectionFunctionTable(\_:bufferIndex:)](mtlrendercommandencoder/settileintersectionfunctiontable%28__bufferindex_%29.md): Assigns an intersection function table to an entry in the tile shader argument table.
- [setTileIntersectionFunctionTables(\_:bufferRange:)](mtlrendercommandencoder/settileintersectionfunctiontables%28__bufferrange_%29.md): Assigns multiple intersection function tables to a range of entries in the tile shader argument table.

## See Also

### Resource preparation commands

- [Mesh and object shader resource preparation commands](mesh-and-object-shader-resource-preparation-commands.md): Assign resources to mesh and object shaders, including buffers, textures, acceleration structures, sampler states, and function tables.
- [Vertex shader resource preparation commands](vertex-shader-resource-preparation-commands.md): Assign resources to vertex shaders, including buffers, textures, acceleration structures, sampler states, and function tables.
- [Fragment shader resource preparation commands](fragment-shader-resource-preparation-commands.md): Assign resources to fragment shaders, including buffers, textures, acceleration structures, sampler states, and function tables.
- [Argument buffer resource preparation commands](argument-buffer-resource-preparation-commands.md): Load individual resources and multiple resources within a heap into GPU memory so that they’re available to shaders through argument buffers.

# Tile shaders resource preparation commands (Objective-C)

**Framework:** Metal  
**Kind:** API Collection

Assign resources to tile shaders, including buffers, textures, acceleration structures, sampler states, and function tables.

<a id="overview"></a>

## Overview

Tile shaders share argument tables for each resource type, such as buffers, textures, and sampler states. Each shader type has its own argument tables, separate from tile shaders and other shader types.

## Topics

### Assigning buffers

- [setTileBuffer:offset:atIndex:](mtlrendercommandencoder/settilebuffer%28__offset_index_%29.md): Assigns a buffer to an entry in the tile shader argument table.
- [setTileBuffers:offsets:withRange:](mtlrendercommandencoder/settilebuffers_offsets_withrange_.md): Assigns multiple buffers to a range of entries in the tile shader argument table.
- [setTileBytes:length:atIndex:](mtlrendercommandencoder/settilebytes%28__length_index_%29.md): Creates a buffer from bytes and assigns it to an entry in the tile shader argument table.
- [setTileBufferOffset:atIndex:](mtlrendercommandencoder/settilebufferoffset%28__index_%29.md): Updates an entry in the tile shader argument table with a new location within the entry’s current buffer.

### Assigning textures

- [setTileTexture:atIndex:](mtlrendercommandencoder/settiletexture%28__index_%29.md): Assigns a texture to an entry in the tile shader argument table.
- [setTileTextures:withRange:](mtlrendercommandencoder/settiletextures_withrange_.md): Assigns multiple textures to a range of entries in the tile shader argument table.

### Assigning sampler states

- [setTileSamplerState:atIndex:](mtlrendercommandencoder/settilesamplerstate%28__index_%29.md): Assigns a sampler state to an entry in the tile shader argument table.
- [setTileSamplerState:lodMinClamp:lodMaxClamp:atIndex:](mtlrendercommandencoder/settilesamplerstate%28__lodminclamp_lodmaxclamp_index_%29.md): Assigns a sampler state and clamp values to an entry in the tile shader argument table.
- [setTileSamplerStates:withRange:](mtlrendercommandencoder/settilesamplerstates_withrange_.md): Assigns multiple sampler states to a range of entries in the tile shader argument table.
- [setTileSamplerStates:lodMinClamps:lodMaxClamps:withRange:](mtlrendercommandencoder/settilesamplerstates_lodminclamps_lodmaxclamps_withrange_.md): Assigns multiple sampler states and clamp values to a range of entries in the tile shader argument table.

### Assigning acceleration structures

- [setTileAccelerationStructure:atBufferIndex:](mtlrendercommandencoder/settileaccelerationstructure%28__bufferindex_%29.md): Assigns an acceleration structure to an entry in the tile shader argument table.

### Assigning visible function tables

- [setTileVisibleFunctionTable:atBufferIndex:](mtlrendercommandencoder/settilevisiblefunctiontable%28__bufferindex_%29.md): Assigns a visible function table to an entry in the tile shader argument table.
- [setTileVisibleFunctionTables:withBufferRange:](mtlrendercommandencoder/settilevisiblefunctiontables_withbufferrange_.md): Assigns multiple visible function tables to a range of entries in the tile shader argument table.

### Assigning intersection function tables

- [setTileIntersectionFunctionTable:atBufferIndex:](mtlrendercommandencoder/settileintersectionfunctiontable%28__bufferindex_%29.md): Assigns an intersection function table to an entry in the tile shader argument table.
- [setTileIntersectionFunctionTables:withBufferRange:](mtlrendercommandencoder/settileintersectionfunctiontables_withbufferrange_.md): Assigns multiple intersection function tables to a range of entries in the tile shader argument table.

## See Also

### Resource preparation commands

- [Mesh and object shader resource preparation commands](mesh-and-object-shader-resource-preparation-commands.md): Assign resources to mesh and object shaders, including buffers, textures, acceleration structures, sampler states, and function tables.
- [Vertex shader resource preparation commands](vertex-shader-resource-preparation-commands.md): Assign resources to vertex shaders, including buffers, textures, acceleration structures, sampler states, and function tables.
- [Fragment shader resource preparation commands](fragment-shader-resource-preparation-commands.md): Assign resources to fragment shaders, including buffers, textures, acceleration structures, sampler states, and function tables.
- [Argument buffer resource preparation commands](argument-buffer-resource-preparation-commands.md): Load individual resources and multiple resources within a heap into GPU memory so that they’re available to shaders through argument buffers.
