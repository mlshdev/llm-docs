> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlmeshbufferdata/init(type:length:)](https://developer.apple.com/documentation/modelio/mdlmeshbufferdata/init(type:length:))

# init(type:length:) (Swift)

**Framework:** Model I/O  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a buffer of the specified length.

## Declaration

```swift
init(type: MDLMeshBufferType, length: Int)
```

## Parameters

- `type`: [MDLMeshBufferType.vertex](../mdlmeshbuffertype/vertex.md) to create a buffer for a mesh’s vertex attribute data, or [MDLMeshBufferType.index](../mdlmeshbuffertype/index.md) to create a buffer for a submesh’s index data.
- `length`: The size, in bytes, of the buffer to create.

<a id="return-value"></a>

## Return Value

A new memory buffer for mesh data.

<a id="Discussion"></a>

## Discussion

All bytes in the newly created buffer are zero.

## See Also

### Creating a Buffer

- [init(type:data:)](init%28type_data_%29.md): Initializes a buffer containing the specified data.

# initWithType:length: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a buffer of the specified length.

## Declaration

```objectivec
- (instancetype) initWithType:(MDLMeshBufferType) type length:(NSUInteger) length;
```

## Parameters

- `type`: [MDLMeshBufferTypeVertex](../mdlmeshbuffertype/vertex.md) to create a buffer for a mesh’s vertex attribute data, or [MDLMeshBufferTypeIndex](../mdlmeshbuffertype/index.md) to create a buffer for a submesh’s index data.
- `length`: The size, in bytes, of the buffer to create.

<a id="return-value"></a>

## Return Value

A new memory buffer for mesh data.

<a id="Discussion"></a>

## Discussion

All bytes in the newly created buffer are zero.

## See Also

### Creating a Buffer

- [initWithType:data:](init%28type_data_%29.md): Initializes a buffer containing the specified data.
