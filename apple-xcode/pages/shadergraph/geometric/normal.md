> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/shadergraph/geometric/normal](https://developer.apple.com/documentation/shadergraph/geometric/normal)

# Normal

**Framework:** ShaderGraph  
**Kind:** ShaderGraph Node  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 26.0+ · visionOS 1.0+

The geometric normal of the currently-processed data in a given coordinate space.

<a id="Parameter-Types"></a>

## Parameter Types

| Input | Type |
| --- | --- |
| `Space` | String |

| Output | Type |
| --- | --- |
| `Out` | Vector3f |

<a id="Parameter-description"></a>

## Parameter description

- **`Space`**: The coordinate space in which the shader defines the normal vector. The default value is `object`.

<a id="Discussion"></a>

## Discussion

Valid values for the `Space` parameter include the following:

- `model`: The local coordinate space before the shader applies any local deformations or global transforms to the geometry.
- `object`: The local coordinate space after the shader applies local deformations but before it applies global transforms to the geometry.
- `world`: The global coordinate space after the shader applies both local deformations and global transforms to the geometry.

## See Also

### Nodes

- [Position](position.md): The coordinates of the currently-processed data in a given coordinate space.
- [Tangent](tangent.md): The geometric tangent of the currently-processed data in a given coordinate space.
- [Bitangent](bitangent.md): The geometric bitangent vector of the currently-processed data in a given coordinate space.
- [Texture Coordinates](texture-coordinates.md): The 2D or 3D texture coordinates of the currently-processed data.
- [Geometry Color](geometry-color.md): The color associated with the geometry at the currently-processed geometric position, typically defined by vertex color.
- [Geometric Property](geometric-property.md): The value of the specified geometric property (defined using ) of the currently-bound geometry.
- [Reflect (RealityKit)](reflect-%28realitykit%29.md): Reflects a vector about another vector.
- [Refract (RealityKit)](refract-%28realitykit%29.md): Refracts a vector using a given normal and index of refraction (eta).
