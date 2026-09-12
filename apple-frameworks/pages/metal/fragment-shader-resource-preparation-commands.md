> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/fragment-shader-resource-preparation-commands](https://developer.apple.com/documentation/metal/fragment-shader-resource-preparation-commands)

# Fragment shader resource preparation commands (Swift)

**Framework:** Metal  
**Kind:** API Collection

Assign resources to fragment shaders, including buffers, textures, acceleration structures, sampler states, and function tables.

<a id="overview"></a>

## Overview

Fragment shaders share argument tables for each resource type, such as buffers, textures, and sampler states. Each shader type has its own argument tables, separate from fragment shaders and other shader types.

## Topics

### Assigning buffers

- [setFragmentBuffer(\_:offset:index:)](mtlrendercommandencoder/setfragmentbuffer%28__offset_index_%29.md): Assigns a buffer to an entry in the fragment shader argument table.
- [setFragmentBuffers(\_:offsets:range:)](mtlrendercommandencoder/setfragmentbuffers%28__offsets_range_%29.md): Assigns multiple buffers to a range of entries in the fragment shader argument table.
- [setFragmentBytes(\_:length:index:)](mtlrendercommandencoder/setfragmentbytes%28__length_index_%29.md): Creates a buffer from bytes and assigns it to an entry in the fragment shader argument table.
- [setFragmentBufferOffset(\_:index:)](mtlrendercommandencoder/setfragmentbufferoffset%28__index_%29.md): Updates an entry in the fragment shader argument table with a new location within the entry’s current buffer.

### Assigning textures

- [setFragmentTexture(\_:index:)](mtlrendercommandencoder/setfragmenttexture%28__index_%29.md): Assigns a texture to an entry in the fragment shader argument table.
- [setFragmentTextures(\_:range:)](mtlrendercommandencoder/setfragmenttextures%28__range_%29.md): Assigns multiple textures to a range of entries in the fragment shader argument table.

### Assigning sampler states

- [setFragmentSamplerState(\_:index:)](mtlrendercommandencoder/setfragmentsamplerstate%28__index_%29.md): Assigns a sampler state to an entry in the fragment shader argument table.
- [setFragmentSamplerState(\_:lodMinClamp:lodMaxClamp:index:)](mtlrendercommandencoder/setfragmentsamplerstate%28__lodminclamp_lodmaxclamp_index_%29.md): Assigns a sampler state and clamp values to an entry in the fragment shader argument table.
- [setFragmentSamplerStates(\_:range:)](mtlrendercommandencoder/setfragmentsamplerstates%28__range_%29.md): Assigns multiple sampler states to a range of entries in the fragment shader argument table.
- [setFragmentSamplerStates(\_:lodMinClamps:lodMaxClamps:range:)](mtlrendercommandencoder/setfragmentsamplerstates%28__lodminclamps_lodmaxclamps_range_%29.md): Assigns multiple sampler states and clamp values to a range of entries in the fragment shader argument table.

### Assigning acceleration structures

- [setFragmentAccelerationStructure(\_:bufferIndex:)](mtlrendercommandencoder/setfragmentaccelerationstructure%28__bufferindex_%29.md): Assigns an acceleration structure to an entry in the fragment shader argument table.

### Assigning visible function tables

- [setFragmentVisibleFunctionTable(\_:bufferIndex:)](mtlrendercommandencoder/setfragmentvisiblefunctiontable%28__bufferindex_%29.md): Assigns a visible function table to an entry in the fragment shader argument table.
- [setFragmentVisibleFunctionTables(\_:bufferRange:)](mtlrendercommandencoder/setfragmentvisiblefunctiontables%28__bufferrange_%29.md): Assigns multiple visible function tables to a range of entries in the fragment shader argument table.

### Assigning intersection function tables

- [setFragmentIntersectionFunctionTable(\_:bufferIndex:)](mtlrendercommandencoder/setfragmentintersectionfunctiontable%28__bufferindex_%29.md): Assigns an intersection function table to an entry in the fragment shader argument table.
- [setFragmentIntersectionFunctionTables(\_:bufferRange:)](mtlrendercommandencoder/setfragmentintersectionfunctiontables%28__bufferrange_%29.md): Assigns multiple intersection function tables to a range of entries in the fragment shader argument table.

## See Also

### Resource preparation commands

- [Mesh and object shader resource preparation commands](mesh-and-object-shader-resource-preparation-commands.md): Assign resources to mesh and object shaders, including buffers, textures, acceleration structures, sampler states, and function tables.
- [Vertex shader resource preparation commands](vertex-shader-resource-preparation-commands.md): Assign resources to vertex shaders, including buffers, textures, acceleration structures, sampler states, and function tables.
- [Tile shaders resource preparation commands](tile-shaders-resource-preparation-commands.md): Assign resources to tile shaders, including buffers, textures, acceleration structures, sampler states, and function tables.
- [Argument buffer resource preparation commands](argument-buffer-resource-preparation-commands.md): Load individual resources and multiple resources within a heap into GPU memory so that they’re available to shaders through argument buffers.

# Fragment shader resource preparation commands (Objective-C)

**Framework:** Metal  
**Kind:** API Collection

Assign resources to fragment shaders, including buffers, textures, acceleration structures, sampler states, and function tables.

<a id="overview"></a>

## Overview

Fragment shaders share argument tables for each resource type, such as buffers, textures, and sampler states. Each shader type has its own argument tables, separate from fragment shaders and other shader types.

## Topics

### Assigning buffers

- [setFragmentBuffer:offset:atIndex:](mtlrendercommandencoder/setfragmentbuffer%28__offset_index_%29.md): Assigns a buffer to an entry in the fragment shader argument table.
- [setFragmentBuffers:offsets:withRange:](mtlrendercommandencoder/setfragmentbuffers_offsets_withrange_.md): Assigns multiple buffers to a range of entries in the fragment shader argument table.
- [setFragmentBytes:length:atIndex:](mtlrendercommandencoder/setfragmentbytes%28__length_index_%29.md): Creates a buffer from bytes and assigns it to an entry in the fragment shader argument table.
- [setFragmentBufferOffset:atIndex:](mtlrendercommandencoder/setfragmentbufferoffset%28__index_%29.md): Updates an entry in the fragment shader argument table with a new location within the entry’s current buffer.

### Assigning textures

- [setFragmentTexture:atIndex:](mtlrendercommandencoder/setfragmenttexture%28__index_%29.md): Assigns a texture to an entry in the fragment shader argument table.
- [setFragmentTextures:withRange:](mtlrendercommandencoder/setfragmenttextures_withrange_.md): Assigns multiple textures to a range of entries in the fragment shader argument table.

### Assigning sampler states

- [setFragmentSamplerState:atIndex:](mtlrendercommandencoder/setfragmentsamplerstate%28__index_%29.md): Assigns a sampler state to an entry in the fragment shader argument table.
- [setFragmentSamplerState:lodMinClamp:lodMaxClamp:atIndex:](mtlrendercommandencoder/setfragmentsamplerstate%28__lodminclamp_lodmaxclamp_index_%29.md): Assigns a sampler state and clamp values to an entry in the fragment shader argument table.
- [setFragmentSamplerStates:withRange:](mtlrendercommandencoder/setfragmentsamplerstates_withrange_.md): Assigns multiple sampler states to a range of entries in the fragment shader argument table.
- [setFragmentSamplerStates:lodMinClamps:lodMaxClamps:withRange:](mtlrendercommandencoder/setfragmentsamplerstates_lodminclamps_lodmaxclamps_withrange_.md): Assigns multiple sampler states and clamp values to a range of entries in the fragment shader argument table.

### Assigning acceleration structures

- [setFragmentAccelerationStructure:atBufferIndex:](mtlrendercommandencoder/setfragmentaccelerationstructure%28__bufferindex_%29.md): Assigns an acceleration structure to an entry in the fragment shader argument table.

### Assigning visible function tables

- [setFragmentVisibleFunctionTable:atBufferIndex:](mtlrendercommandencoder/setfragmentvisiblefunctiontable%28__bufferindex_%29.md): Assigns a visible function table to an entry in the fragment shader argument table.
- [setFragmentVisibleFunctionTables:withBufferRange:](mtlrendercommandencoder/setfragmentvisiblefunctiontables_withbufferrange_.md): Assigns multiple visible function tables to a range of entries in the fragment shader argument table.

### Assigning intersection function tables

- [setFragmentIntersectionFunctionTable:atBufferIndex:](mtlrendercommandencoder/setfragmentintersectionfunctiontable%28__bufferindex_%29.md): Assigns an intersection function table to an entry in the fragment shader argument table.
- [setFragmentIntersectionFunctionTables:withBufferRange:](mtlrendercommandencoder/setfragmentintersectionfunctiontables_withbufferrange_.md): Assigns multiple intersection function tables to a range of entries in the fragment shader argument table.

## See Also

### Resource preparation commands

- [Mesh and object shader resource preparation commands](mesh-and-object-shader-resource-preparation-commands.md): Assign resources to mesh and object shaders, including buffers, textures, acceleration structures, sampler states, and function tables.
- [Vertex shader resource preparation commands](vertex-shader-resource-preparation-commands.md): Assign resources to vertex shaders, including buffers, textures, acceleration structures, sampler states, and function tables.
- [Tile shaders resource preparation commands](tile-shaders-resource-preparation-commands.md): Assign resources to tile shaders, including buffers, textures, acceleration structures, sampler states, and function tables.
- [Argument buffer resource preparation commands](argument-buffer-resource-preparation-commands.md): Load individual resources and multiple resources within a heap into GPU memory so that they’re available to shaders through argument buffers.
