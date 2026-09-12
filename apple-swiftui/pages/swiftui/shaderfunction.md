> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/shaderfunction](https://developer.apple.com/documentation/swiftui/shaderfunction)

# ShaderFunction

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A reference to a function in a Metal shader library.

## Declaration

```swift
@dynamicCallable struct ShaderFunction
```

## Topics

### Creating a shader function

- [init(library:name:)](shaderfunction/init%28library_name_%29.md): Creates a new function reference from the provided shader library and function name string.

### Configuring a function

- [library](shaderfunction/library.md): The shader library storing the function.
- [name](shaderfunction/name.md): The name of the shader function in the library.
- [dynamicallyCall(withArguments:)](shaderfunction/dynamicallycall%28witharguments_%29.md): Returns a new shader by applying the provided argument values to the referenced function.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing Metal shaders

- [colorEffect(\_:isEnabled:)](view/coloreffect%28__isenabled_%29.md): Returns a new view that applies `shader` to `self` as a filter effect on the color of each pixel.
- [distortionEffect(\_:maxSampleOffset:isEnabled:)](view/distortioneffect%28__maxsampleoffset_isenabled_%29.md): Returns a new view that applies `shader` to `self` as a geometric distortion effect on the location of each pixel.
- [layerEffect(\_:maxSampleOffset:isEnabled:)](view/layereffect%28__maxsampleoffset_isenabled_%29.md): Returns a new view that applies `shader` to `self` as a filter on the raster layer created from `self`.
- [Shader](shader.md): A reference to a function in a Metal shader library, along with its bound uniform argument values.
- [ShaderLibrary](shaderlibrary.md): A Metal shader library.
