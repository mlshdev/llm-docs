> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtkmodeliovertexformatfrommetal(_:)](https://developer.apple.com/documentation/metalkit/mtkmodeliovertexformatfrommetal(_:))

# MTKModelIOVertexFormatFromMetal(\_:) (Swift)

**Framework:** MetalKit  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns a converted Model I/O vertex format.

## Declaration

```swift
func MTKModelIOVertexFormatFromMetal(_ vertexFormat: MTLVertexFormat) -> MDLVertexFormat
```

## Parameters

- `vertexFormat`: A Metal vertex format to convert from.

<a id="return-value"></a>

## Return Value

A Model I/O vertex format value.

<a id="Discussion"></a>

## Discussion

This function returns [MDLVertexFormat.invalid](../modelio/mdlvertexformat/invalid.md) if no matching [MDLVertexFormat](../modelio/mdlvertexformat.md) exists.

## See Also

### Converting Between Model I/O and Metal Vertex Formats

- [MTKMetalVertexFormatFromModelIO(\_:)](mtkmetalvertexformatfrommodelio%28__%29.md): Returns a converted Metal vertex format.

# MTKModelIOVertexFormatFromMetal (Objective-C)

**Framework:** MetalKit  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns a converted Model I/O vertex format.

## Declaration

```objectivec
extern MDLVertexFormat MTKModelIOVertexFormatFromMetal(MTLVertexFormat vertexFormat);
```

## Parameters

- `vertexFormat`: A Metal vertex format to convert from.

<a id="return-value"></a>

## Return Value

A Model I/O vertex format value.

<a id="Discussion"></a>

## Discussion

This function returns [MDLVertexFormatInvalid](../modelio/mdlvertexformat/invalid.md) if no matching [MDLVertexFormat](../modelio/mdlvertexformat.md) exists.

## See Also

### Converting Between Model I/O and Metal Vertex Formats

- [MTKMetalVertexFormatFromModelIO](mtkmetalvertexformatfrommodelio%28__%29.md): Returns a converted Metal vertex format.
