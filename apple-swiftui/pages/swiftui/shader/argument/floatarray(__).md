> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/shader/argument/floatarray(_:)](https://developer.apple.com/documentation/swiftui/shader/argument/floatarray(_:))

# floatArray(\_:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Returns an argument value defined by the provided array of floating point numbers. When passed to an MSL function it will convert to a `device const float *ptr, int count` pair of parameters.

## Declaration

```swift
static func floatArray(_ array: [Float]) -> Shader.Argument
```

## See Also

### Creating argument values

- [boundingRect](boundingrect.md): Returns an argument value representing the bounding rect of the shape or view that the shader is attached to, as `float4(x, y, width, height)`. This value is undefined for shaders that do not have a natural bounding rect (e.g. filter effects drawn into `GraphicsContext`).
- [color(\_:)](color%28__%29.md): Returns an argument value representing `color`. When passed to a MSL function it will convert to a `half4` value, as a premultiplied color in the target color space.
- [colorArray(\_:)](colorarray%28__%29.md): Returns an argument value defined by the provided array of color values. When passed to an MSL function it will convert to a `device const half4 *ptr, int count` pair of parameters.
- [data(\_:)](data%28__%29.md): Returns an argument value defined by the provided data value. When passed to an MSL function it will convert to a `device const void *ptr, int size_in_bytes` pair of parameters.
- [float(\_:)](float%28__%29.md): Returns an argument value representing the MSL value `float(x)`.
- [float2(\_:)](float2%28__%29.md): Returns an argument value representing the MSL value `float2(point.x, point.y)`.
- [float2(\_:\_:)](float2%28____%29.md): Returns an argument value representing the MSL value `float2(x, y)`.
- [float3(\_:\_:\_:)](float3%28______%29.md): Returns an argument value representing the MSL value `float3(x, y, z)`.
- [float4(\_:\_:\_:\_:)](float4%28________%29.md): Returns an argument value representing the MSL value `float4(x, y, z, w)`.
- [image(\_:)](image%28__%29.md): Returns an argument value defined by the provided image. When passed to an MSL function it will convert to a `texture2d<half>` value. Currently only one image parameter is supported per `Shader` instance.
