> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/shadergraphmaterial/program-swift.struct/descriptor-swift.struct/inputvalues](https://developer.apple.com/documentation/realitykit/shadergraphmaterial/program-swift.struct/descriptor-swift.struct/inputvalues)

# inputValues

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Initial values for the inputs declared in `shaderNodeGraph`.

## Declaration

```swift
var inputValues: [String : MaterialParameters.Value]
```

## See Also

### Specifying the shader graph

- [shaderGraph](shadergraph.md): The shader graph that describes the shading logic for this program.
- [constantValues](constantvalues.md): Values for the function constant inputs declared in `shaderNodeGraph`.
