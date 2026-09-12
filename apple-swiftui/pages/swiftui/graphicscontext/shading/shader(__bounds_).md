> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/graphicscontext/shading/shader(_:bounds:)](https://developer.apple.com/documentation/swiftui/graphicscontext/shading/shader(_:bounds:))

# shader(\_:bounds:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Returns a shading instance that fills with the results of querying a shader for each pixel.

## Declaration

```swift
static func shader(_ shader: Shader, bounds: CGRect = .zero) -> GraphicsContext.Shading
```

## Parameters

- `shader`: The shader defining the filled colors.
- `bounds`: The rect used to define any `bounds` arguments of the shader.

<a id="return-value"></a>

## Return Value

A shading instance that fills using the shader.

<a id="discussion"></a>

## Discussion

For a shader function to act as a shape fill it must have a function signature matching:

```swift
[[ stitchable ]] half4 name(float2 position, args...)
```

where `position` is the user-space coordinates of the pixel applied to the shader, and `args...` should be compatible with the uniform arguments bound to `shader`. The function should return the premultiplied color value in the color space of the destination (typically sRGB).
