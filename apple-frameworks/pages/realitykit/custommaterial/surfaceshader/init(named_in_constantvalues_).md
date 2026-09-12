> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/custommaterial/surfaceshader/init(named:in:constantvalues:)](https://developer.apple.com/documentation/realitykit/custommaterial/surfaceshader/init(named:in:constantvalues:))

# init(named:in:constantValues:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+

Creates a surface shader with the specified function constant values.

## Declaration

```swift
init(named name: String, in library: any MTLLibrary, constantValues: MTLFunctionConstantValues)
```

<a id="discussion"></a>

## Discussion

Function constants allow you to better share code or toggle features in your shaders without runtime performance costs by resolving their values at compile time.

To use function constants, first define them within your metal code:

```cpp
constant bool kEnableBasicLighting [[function_constant(0)]];

[[stitchable]]
void surfaceShader(realitykit::surface_parameters params) {
    float3 baseColor = float3(1,0,0);
    if (kEnableBasicLighting) {
        float3 lighting = params.geometry().normal() * params.geometry().view_direction() * baseColor;
        params.surface().set_emissive_color(half3(lighting));
    } else {
        params.surface().set_emissive_color(half3(baseColor));
    }
}
```

Then initialize a surface shader with a `Metal/MTLFunctionConstantValues` object that defines values for your constants.

```swift
let constants = MTLFunctionConstantValues()
var yes = true
funcConstants.setConstantValue(&yes, type: .bool, index: 0)

let geom = CustomMaterial.SurfaceShader.init(named: "surfaceShader", in: library, constantValues: constants)
```
