> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/shadergraphmaterial/program-swift.struct/descriptor-swift.struct/constantvalues](https://developer.apple.com/documentation/realitykit/shadergraphmaterial/program-swift.struct/descriptor-swift.struct/constantvalues)

# constantValues

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Values for the function constant inputs declared in `shaderNodeGraph`.

## Declaration

```swift
var constantValues: MTLFunctionConstantValues
```

<a id="discussion"></a>

## Discussion

Function constants are compiled directly into the shader and cannot be changed after the program is created.

## See Also

### Specifying the shader graph

- [shaderGraph](shadergraph.md): The shader graph that describes the shading logic for this program.
- [inputValues](inputvalues.md): Initial values for the inputs declared in `shaderNodeGraph`.
