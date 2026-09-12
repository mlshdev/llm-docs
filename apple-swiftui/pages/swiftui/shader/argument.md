> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/shader/argument](https://developer.apple.com/documentation/swiftui/shader/argument)

# Shader.Argument

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A single uniform argument value to a shader function.

## Declaration

```swift
struct Argument
```

## Topics

### Creating argument values

- [boundingRect](argument/boundingrect.md): Returns an argument value representing the bounding rect of the shape or view that the shader is attached to, as `float4(x, y, width, height)`. This value is undefined for shaders that do not have a natural bounding rect (e.g. filter effects drawn into `GraphicsContext`).
- [color(\_:)](argument/color%28__%29.md): Returns an argument value representing `color`. When passed to a MSL function it will convert to a `half4` value, as a premultiplied color in the target color space.
- [colorArray(\_:)](argument/colorarray%28__%29.md): Returns an argument value defined by the provided array of color values. When passed to an MSL function it will convert to a `device const half4 *ptr, int count` pair of parameters.
- [data(\_:)](argument/data%28__%29.md): Returns an argument value defined by the provided data value. When passed to an MSL function it will convert to a `device const void *ptr, int size_in_bytes` pair of parameters.
- [float(\_:)](argument/float%28__%29.md): Returns an argument value representing the MSL value `float(x)`.
- [float2(\_:)](argument/float2%28__%29.md): Returns an argument value representing the MSL value `float2(point.x, point.y)`.
- [float2(\_:\_:)](argument/float2%28____%29.md): Returns an argument value representing the MSL value `float2(x, y)`.
- [float3(\_:\_:\_:)](argument/float3%28______%29.md): Returns an argument value representing the MSL value `float3(x, y, z)`.
- [float4(\_:\_:\_:\_:)](argument/float4%28________%29.md): Returns an argument value representing the MSL value `float4(x, y, z, w)`.
- [floatArray(\_:)](argument/floatarray%28__%29.md): Returns an argument value defined by the provided array of floating point numbers. When passed to an MSL function it will convert to a `device const float *ptr, int count` pair of parameters.
- [image(\_:)](argument/image%28__%29.md): Returns an argument value defined by the provided image. When passed to an MSL function it will convert to a `texture2d<half>` value. Currently only one image parameter is supported per `Shader` instance.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a shader

- [init(function:arguments:)](init%28function_arguments_%29.md): Creates a new shader from a function and the uniform argument values to bind to the function.
