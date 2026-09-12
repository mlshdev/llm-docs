> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/custommaterial/geometrymodifier/init(named:in:constantvalues:)](https://developer.apple.com/documentation/realitykit/custommaterial/geometrymodifier/init(named:in:constantvalues:))

# init(named:in:constantValues:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+

Creates a geometry modifier with the specified function constant values.

## Declaration

```swift
init(named name: String, in library: any MTLLibrary, constantValues: MTLFunctionConstantValues)
```

<a id="discussion"></a>

## Discussion

Function constants allow you to better share code or toggle features in your shaders without runtime performance costs by resolving their values at compile time.

To use function constants, first define them within your metal code:

```cpp
constant bool kEnableVertexAnimation [[function_constant(0)]];

[[stitchable]]
void geometryModifier(realitykit::geometry_parameters params) {
    if (kEnableVertexAnimation) {
        float currentTime = params.uniforms().time() * 0.5;
        params.geometry().set_model_position_offset(sin(currentTime) * 0.1 * params.geometry().normal());
    }
}
```

Then initialize a geometry modifier with a `Metal/MTLFunctionConstantValues` object that defines values for your constants.

```swift
let constants = MTLFunctionConstantValues()
var yes = true
funcConstants.setConstantValue(&yes, type: .bool, index: 0)

let geom = CustomMaterial.GeometryModifier.init(named: "geometryModifier", in: library, constantValues: constants)
```
