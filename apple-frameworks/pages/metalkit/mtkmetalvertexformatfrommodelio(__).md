> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtkmetalvertexformatfrommodelio(_:)](https://developer.apple.com/documentation/metalkit/mtkmetalvertexformatfrommodelio(_:))

# MTKMetalVertexFormatFromModelIO(\_:) (Swift)

**Framework:** MetalKit  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns a converted Metal vertex format.

## Declaration

```swift
func MTKMetalVertexFormatFromModelIO(_ vertexFormat: MDLVertexFormat) -> MTLVertexFormat
```

## Parameters

- `vertexFormat`: A Model I/O vertex format to convert from.

<a id="return-value"></a>

## Return Value

A Metal vertex format value.

<a id="Discussion"></a>

## Discussion

This function returns [MTLVertexFormat.invalid](../metal/mtlvertexformat/invalid.md) if no matching [MTLVertexFormat](../metal/mtlvertexformat.md) exists.

## See Also

### Converting Between Model I/O and Metal Vertex Formats

- [MTKModelIOVertexFormatFromMetal(\_:)](mtkmodeliovertexformatfrommetal%28__%29.md): Returns a converted Model I/O vertex format.

# MTKMetalVertexFormatFromModelIO (Objective-C)

**Framework:** MetalKit  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns a converted Metal vertex format.

## Declaration

```objectivec
extern MTLVertexFormat MTKMetalVertexFormatFromModelIO(MDLVertexFormat vertexFormat);
```

## Parameters

- `vertexFormat`: A Model I/O vertex format to convert from.

<a id="return-value"></a>

## Return Value

A Metal vertex format value.

<a id="Discussion"></a>

## Discussion

This function returns [MTLVertexFormatInvalid](../metal/mtlvertexformat/invalid.md) if no matching [MTLVertexFormat](../metal/mtlvertexformat.md) exists.

## See Also

### Converting Between Model I/O and Metal Vertex Formats

- [MTKModelIOVertexFormatFromMetal](mtkmodeliovertexformatfrommetal%28__%29.md): Returns a converted Model I/O vertex format.
