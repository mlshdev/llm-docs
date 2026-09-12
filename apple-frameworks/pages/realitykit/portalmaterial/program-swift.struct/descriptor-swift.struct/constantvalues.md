> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/portalmaterial/program-swift.struct/descriptor-swift.struct/constantvalues](https://developer.apple.com/documentation/realitykit/portalmaterial/program-swift.struct/descriptor-swift.struct/constantvalues)

# constantValues

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Values for the function-constant inputs that the shader graph declares.

## Declaration

```swift
var constantValues: MTLFunctionConstantValues
```

<a id="discussion"></a>

## Discussion

Function constants are baked into the compiled shader at program creation time and can’t be changed afterward. Use them for values that don’t vary at runtime — for example, a feature flag that selects between two code paths — to eliminate runtime branching and produce a leaner shader. To vary a value across frames or instances, declare it as a regular graph input and supply it through [inputValues](inputvalues.md) or [setParameter(name:value:)](../../setparameter%28name_value_%29.md) instead.

Two descriptors that share the same shader graph but differ in their function-constant values produce distinct compiled programs that don’t compare equal.

## See Also

### Configuring the shader program

- [shaderGraph](shadergraph.md): The shader graph that describes the shading logic for this program.
- [inputValues](inputvalues.md): Initial values for the inputs that the shader graph declares.
