> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/shaderfunction/dynamicallycall(witharguments:)](https://developer.apple.com/documentation/swiftui/shaderfunction/dynamicallycall(witharguments:))

# dynamicallyCall(withArguments:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Returns a new shader by applying the provided argument values to the referenced function.

## Declaration

```swift
func dynamicallyCall(withArguments args: [Shader.Argument]) -> Shader
```

<a id="discussion"></a>

## Discussion

Typically this subscript is used implicitly via function-call syntax, for example:

```swift
let shader = ShaderLibrary.default.myFunction(.float(42))
```

which creates a shader passing the value `42` to the first unbound parameter of `myFunction()`.

## See Also

### Configuring a function

- [library](library.md): The shader library storing the function.
- [name](name.md): The name of the shader function in the library.
