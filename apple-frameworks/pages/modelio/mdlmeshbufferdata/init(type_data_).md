> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlmeshbufferdata/init(type:data:)](https://developer.apple.com/documentation/modelio/mdlmeshbufferdata/init(type:data:))

# init(type:data:) (Swift)

**Framework:** Model I/O  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a buffer containing the specified data.

## Declaration

```swift
init(type: MDLMeshBufferType, data: Data?)
```

## Parameters

- `type`: [MDLMeshBufferType.vertex](../mdlmeshbuffertype/vertex.md) to create a buffer for a mesh’s vertex attribute data, or [MDLMeshBufferType.index](../mdlmeshbuffertype/index.md) to create a buffer for a submesh’s index data.
- `data`: The initial data to copy into the buffer.

<a id="return-value"></a>

## Return Value

A new memory buffer for mesh data.

## See Also

### Creating a Buffer

- [init(type:length:)](init%28type_length_%29.md): Initializes a buffer of the specified length.

# initWithType:data: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a buffer containing the specified data.

## Declaration

```objectivec
- (instancetype) initWithType:(MDLMeshBufferType) type data:(NSData *) data;
```

## Parameters

- `type`: [MDLMeshBufferTypeVertex](../mdlmeshbuffertype/vertex.md) to create a buffer for a mesh’s vertex attribute data, or [MDLMeshBufferTypeIndex](../mdlmeshbuffertype/index.md) to create a buffer for a submesh’s index data.
- `data`: The initial data to copy into the buffer.

<a id="return-value"></a>

## Return Value

A new memory buffer for mesh data.

## See Also

### Creating a Buffer

- [initWithType:length:](init%28type_length_%29.md): Initializes a buffer of the specified length.
