> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/shadergraph/geometric/refract-(realitykit)](https://developer.apple.com/documentation/shadergraph/geometric/refract-(realitykit))

# Refract (RealityKit)

**Framework:** ShaderGraph  
**Kind:** ShaderGraph Node  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 26.0+ · visionOS 1.0+

Refracts a vector using a given normal and index of refraction (eta).

<a id="Parameter-Types"></a>

## Parameter Types

| Input | Type |
| --- | --- |
| `In` | Vector3f |
| `Normal` | Vector3f |
| `Eta` | Float |

| Output | Type |
| --- | --- |
| `Out` | Vector3f |

<a id="Parameter-descriptions"></a>

## Parameter descriptions

- **`In`**: The vector to refract.
- **`Normal`**: The normal of the surface from which the `In` vector refracts.
- **`Eta`**: The index of refraction.

<a id="Discussion"></a>

## Discussion

- **`Out High`**: The high end value of the output range; the default is `1.0`.

> **Note**

> The vectors passed as the `In` and `Normal` parameters must both already be normalized to achieve the desired output.

## See Also

### Nodes

- [Position](position.md): The coordinates of the currently-processed data in a given coordinate space.
- [Normal](normal.md): The geometric normal of the currently-processed data in a given coordinate space.
- [Tangent](tangent.md): The geometric tangent of the currently-processed data in a given coordinate space.
- [Bitangent](bitangent.md): The geometric bitangent vector of the currently-processed data in a given coordinate space.
- [Texture Coordinates](texture-coordinates.md): The 2D or 3D texture coordinates of the currently-processed data.
- [Geometry Color](geometry-color.md): The color associated with the geometry at the currently-processed geometric position, typically defined by vertex color.
- [Geometric Property](geometric-property.md): The value of the specified geometric property (defined using ) of the currently-bound geometry.
- [Reflect (RealityKit)](reflect-%28realitykit%29.md): Reflects a vector about another vector.
