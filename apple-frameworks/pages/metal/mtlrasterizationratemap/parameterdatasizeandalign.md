> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrasterizationratemap/parameterdatasizeandalign](https://developer.apple.com/documentation/metal/mtlrasterizationratemap/parameterdatasizeandalign)

# parameterDataSizeAndAlign (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 16.0+ · visionOS 1.0+

The size and alignment requirements to contain the coordinate transformation information in this rate map.

## Declaration

```swift
var parameterDataSizeAndAlign: MTLSizeAndAlign { get }
```

## Mentioned In

- [Scaling variable rasterization rate content](../scaling-variable-rasterization-rate-content.md)

<a id="discussion"></a>

## Discussion

To convert coordinate values inside your shader, pass the rate map data into the shader in an [MTLBuffer](../mtlbuffer.md) instance. The buffer location where you store the parameter information needs at least the size and alignment this property provides.

You can convert between screen space and physical fragment space by binding the buffer to the shader with type `rasterization_rate_map_data`, then constructing `rasterization_rate_map_decoder` with the buffer data. For more details, see the “Variable Rasterization Rate” section of the [Metal Shading Language Specification](https://developer.apple.com/metal/Metal-Shading-Language-Specification.pdf).

## See Also

### Obtaining coordinate transformation data

- [copyParameterData(buffer:offset:)](copyparameterdata%28buffer_offset_%29.md): Copies the parameter data into the provided buffer.

# parameterBufferSizeAndAlign (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 16.0+ · visionOS 1.0+

The size and alignment requirements to contain the coordinate transformation information in this rate map.

## Declaration

```objectivec
@property (readonly) MTLSizeAndAlign parameterBufferSizeAndAlign;
```

## Mentioned In

- [Scaling variable rasterization rate content](../scaling-variable-rasterization-rate-content.md)

<a id="discussion"></a>

## Discussion

To convert coordinate values inside your shader, pass the rate map data into the shader in an [MTLBuffer](../mtlbuffer.md) instance. The buffer location where you store the parameter information needs at least the size and alignment this property provides.

You can convert between screen space and physical fragment space by binding the buffer to the shader with type `rasterization_rate_map_data`, then constructing `rasterization_rate_map_decoder` with the buffer data. For more details, see the “Variable Rasterization Rate” section of the [Metal Shading Language Specification](https://developer.apple.com/metal/Metal-Shading-Language-Specification.pdf).

## See Also

### Obtaining coordinate transformation data

- [copyParameterDataToBuffer:offset:](copyparameterdata%28buffer_offset_%29.md): Copies the parameter data into the provided buffer.
