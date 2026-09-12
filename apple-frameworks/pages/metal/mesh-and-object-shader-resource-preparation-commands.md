> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mesh-and-object-shader-resource-preparation-commands](https://developer.apple.com/documentation/metal/mesh-and-object-shader-resource-preparation-commands)

# Mesh and object shader resource preparation commands (Swift)

**Framework:** Metal  
**Kind:** API Collection

Assign resources to mesh and object shaders, including buffers, textures, acceleration structures, sampler states, and function tables.

<a id="overview"></a>

## Overview

Mesh shaders share argument tables for each resource type, such as buffers, textures, and sampler states. Object shaders share their own separate argument tables, distinct from mesh shaders and other shader types.

## Topics

### Assigning buffers for object shaders

- [setObjectBuffer(\_:offset:index:)](mtlrendercommandencoder/setobjectbuffer%28__offset_index_%29.md): Assigns a buffer to an entry in the object shader argument table.
- [setObjectBuffers(\_:offsets:range:)](mtlrendercommandencoder/setobjectbuffers%28__offsets_range_%29.md): Assigns multiple buffers to a range of entries in the object shader argument table.
- [setObjectBytes(\_:length:index:)](mtlrendercommandencoder/setobjectbytes%28__length_index_%29.md): Creates a buffer from bytes and assigns it to an entry in the object shader argument table.
- [setObjectBufferOffset(\_:index:)](mtlrendercommandencoder/setobjectbufferoffset%28__index_%29.md): Updates an entry in the object shader argument table with a new location within the entry’s current buffer.

### Assigning textures for object shaders

- [setObjectTexture(\_:index:)](mtlrendercommandencoder/setobjecttexture%28__index_%29.md): Assigns a texture to an entry in the object shader argument table.
- [setObjectTextures(\_:range:)](mtlrendercommandencoder/setobjecttextures%28__range_%29.md): Assigns multiple textures to a range of entries in the object shader argument table.

### Assigning sampler states for object shaders

- [setObjectSamplerState(\_:index:)](mtlrendercommandencoder/setobjectsamplerstate%28__index_%29.md): Assigns a sampler state to an entry in the object shader argument table.
- [setObjectSamplerState(\_:lodMinClamp:lodMaxClamp:index:)](mtlrendercommandencoder/setobjectsamplerstate%28__lodminclamp_lodmaxclamp_index_%29.md): Assigns a sampler state and clamp values to an entry in the object shader argument table.
- [setObjectSamplerStates(\_:range:)](mtlrendercommandencoder/setobjectsamplerstates%28__range_%29.md): Assigns multiple sampler states to a range of entries in the object shader argument table.
- [setObjectSamplerStates(\_:lodMinClamps:lodMaxClamps:range:)](mtlrendercommandencoder/setobjectsamplerstates%28__lodminclamps_lodmaxclamps_range_%29.md): Assigns multiple sampler states and clamp values to a range of entries in the object shader argument table.

### Assigning buffers for mesh shaders

- [setMeshBuffer(\_:offset:index:)](mtlrendercommandencoder/setmeshbuffer%28__offset_index_%29.md): Assigns a buffer to an entry in the mesh shader argument table.
- [setMeshBuffers(\_:offsets:range:)](mtlrendercommandencoder/setmeshbuffers%28__offsets_range_%29.md): Assigns multiple buffers to a range of entries in the mesh shader argument table.
- [setMeshBytes(\_:length:index:)](mtlrendercommandencoder/setmeshbytes%28__length_index_%29.md): Creates a buffer from bytes and assigns it to an entry in the mesh shader argument table.
- [setMeshBufferOffset(\_:index:)](mtlrendercommandencoder/setmeshbufferoffset%28__index_%29.md): Updates an entry in the mesh shader argument table with a new location within the entry’s current buffer.

### Assigning textures for mesh shaders

- [setMeshTexture(\_:index:)](mtlrendercommandencoder/setmeshtexture%28__index_%29.md): Assigns a texture to an entry in the mesh shader argument table.
- [setMeshTextures(\_:range:)](mtlrendercommandencoder/setmeshtextures%28__range_%29.md): Assigns multiple textures to a range of entries in the mesh shader argument table.

### Assigning sampler states for mesh shaders

- [setMeshSamplerState(\_:index:)](mtlrendercommandencoder/setmeshsamplerstate%28__index_%29.md): Assigns a sampler state to an entry in the mesh shader argument table.
- [setMeshSamplerState(\_:lodMinClamp:lodMaxClamp:index:)](mtlrendercommandencoder/setmeshsamplerstate%28__lodminclamp_lodmaxclamp_index_%29.md): Assigns a sampler state and clamp values to an entry in the mesh shader argument table.
- [setMeshSamplerStates(\_:range:)](mtlrendercommandencoder/setmeshsamplerstates%28__range_%29.md): Assigns multiple sampler states to a range of entries in the mesh shader argument table.
- [setMeshSamplerStates(\_:lodMinClamps:lodMaxClamps:range:)](mtlrendercommandencoder/setmeshsamplerstates%28__lodminclamps_lodmaxclamps_range_%29.md): Assigns multiple sampler states and clamp values to a range of entries in the mesh shader argument table.

## See Also

### Resource preparation commands

- [Vertex shader resource preparation commands](vertex-shader-resource-preparation-commands.md): Assign resources to vertex shaders, including buffers, textures, acceleration structures, sampler states, and function tables.
- [Fragment shader resource preparation commands](fragment-shader-resource-preparation-commands.md): Assign resources to fragment shaders, including buffers, textures, acceleration structures, sampler states, and function tables.
- [Tile shaders resource preparation commands](tile-shaders-resource-preparation-commands.md): Assign resources to tile shaders, including buffers, textures, acceleration structures, sampler states, and function tables.
- [Argument buffer resource preparation commands](argument-buffer-resource-preparation-commands.md): Load individual resources and multiple resources within a heap into GPU memory so that they’re available to shaders through argument buffers.

# Mesh and object shader resource preparation commands (Objective-C)

**Framework:** Metal  
**Kind:** API Collection

Assign resources to mesh and object shaders, including buffers, textures, acceleration structures, sampler states, and function tables.

<a id="overview"></a>

## Overview

Mesh shaders share argument tables for each resource type, such as buffers, textures, and sampler states. Object shaders share their own separate argument tables, distinct from mesh shaders and other shader types.

## Topics

### Assigning buffers for object shaders

- [setObjectBuffer:offset:atIndex:](mtlrendercommandencoder/setobjectbuffer%28__offset_index_%29.md): Assigns a buffer to an entry in the object shader argument table.
- [setObjectBuffers:offsets:withRange:](mtlrendercommandencoder/setobjectbuffers_offsets_withrange_.md): Encodes a command that assigns multiple buffers to a range of entries in the object shader argument table.
- [setObjectBytes:length:atIndex:](mtlrendercommandencoder/setobjectbytes%28__length_index_%29.md): Creates a buffer from bytes and assigns it to an entry in the object shader argument table.
- [setObjectBufferOffset:atIndex:](mtlrendercommandencoder/setobjectbufferoffset%28__index_%29.md): Updates an entry in the object shader argument table with a new location within the entry’s current buffer.

### Assigning textures for object shaders

- [setObjectTexture:atIndex:](mtlrendercommandencoder/setobjecttexture%28__index_%29.md): Assigns a texture to an entry in the object shader argument table.
- [setObjectTextures:withRange:](mtlrendercommandencoder/setobjecttextures_withrange_.md): Assigns multiple textures to a range of entries in the object shader argument table.

### Assigning sampler states for object shaders

- [setObjectSamplerState:atIndex:](mtlrendercommandencoder/setobjectsamplerstate%28__index_%29.md): Assigns a sampler state to an entry in the object shader argument table.
- [setObjectSamplerState:lodMinClamp:lodMaxClamp:atIndex:](mtlrendercommandencoder/setobjectsamplerstate%28__lodminclamp_lodmaxclamp_index_%29.md): Assigns a sampler state and clamp values to an entry in the object shader argument table.
- [setObjectSamplerStates:withRange:](mtlrendercommandencoder/setobjectsamplerstates_withrange_.md): Assigns multiple sampler states to a range of entries in the object shader argument table.
- [setObjectSamplerStates:lodMinClamps:lodMaxClamps:withRange:](mtlrendercommandencoder/setobjectsamplerstates_lodminclamps_lodmaxclamps_withrange_.md): Assigns multiple sampler states and clamp values to a range of entries in the object shader argument table.

### Assigning buffers for mesh shaders

- [setMeshBuffer:offset:atIndex:](mtlrendercommandencoder/setmeshbuffer%28__offset_index_%29.md): Assigns a buffer to an entry in the mesh shader argument table.
- [setMeshBuffers:offsets:withRange:](mtlrendercommandencoder/setmeshbuffers_offsets_withrange_.md): Assigns multiple buffers to a range of entries in the mesh shader argument table.
- [setMeshBytes:length:atIndex:](mtlrendercommandencoder/setmeshbytes%28__length_index_%29.md): Creates a buffer from bytes and assigns it to an entry in the mesh shader argument table.
- [setMeshBufferOffset:atIndex:](mtlrendercommandencoder/setmeshbufferoffset%28__index_%29.md): Updates an entry in the mesh shader argument table with a new location within the entry’s current buffer.

### Assigning textures for mesh shaders

- [setMeshTexture:atIndex:](mtlrendercommandencoder/setmeshtexture%28__index_%29.md): Assigns a texture to an entry in the mesh shader argument table.
- [setMeshTextures:withRange:](mtlrendercommandencoder/setmeshtextures_withrange_.md): Assigns multiple textures to a range of entries in the mesh shader argument table.

### Assigning sampler states for mesh shaders

- [setMeshSamplerState:atIndex:](mtlrendercommandencoder/setmeshsamplerstate%28__index_%29.md): Assigns a sampler state to an entry in the mesh shader argument table.
- [setMeshSamplerState:lodMinClamp:lodMaxClamp:atIndex:](mtlrendercommandencoder/setmeshsamplerstate%28__lodminclamp_lodmaxclamp_index_%29.md): Assigns a sampler state and clamp values to an entry in the mesh shader argument table.
- [setMeshSamplerStates:withRange:](mtlrendercommandencoder/setmeshsamplerstates_withrange_.md): Assigns multiple sampler states to a range of entries in the mesh shader argument table.
- [setMeshSamplerStates:lodMinClamps:lodMaxClamps:withRange:](mtlrendercommandencoder/setmeshsamplerstates_lodminclamps_lodmaxclamps_withrange_.md): Assigns multiple sampler states and clamp values to a range of entries in the mesh shader argument table.

## See Also

### Resource preparation commands

- [Vertex shader resource preparation commands](vertex-shader-resource-preparation-commands.md): Assign resources to vertex shaders, including buffers, textures, acceleration structures, sampler states, and function tables.
- [Fragment shader resource preparation commands](fragment-shader-resource-preparation-commands.md): Assign resources to fragment shaders, including buffers, textures, acceleration structures, sampler states, and function tables.
- [Tile shaders resource preparation commands](tile-shaders-resource-preparation-commands.md): Assign resources to tile shaders, including buffers, textures, acceleration structures, sampler states, and function tables.
- [Argument buffer resource preparation commands](argument-buffer-resource-preparation-commands.md): Load individual resources and multiple resources within a heap into GPU memory so that they’re available to shaders through argument buffers.
