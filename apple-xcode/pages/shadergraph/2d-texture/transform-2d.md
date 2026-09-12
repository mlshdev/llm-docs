> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/shadergraph/2d-texture/transform-2d](https://developer.apple.com/documentation/shadergraph/2d-texture/transform-2d)

# Transform 2D

**Framework:** ShaderGraph  
**Kind:** ShaderGraph Node  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 26.0+ · visionOS 1.0+

A node that applies an affine transformation to a 2d input.

<a id="Parameter-Types"></a>

## Parameter Types

| Input | Type |
| --- | --- |
| `In` | Vector2f |
| `Rotation` | Float |
| `Scale` | Vector2f |
| `Translation` | Vector2f |

| Output | Type |
| --- | --- |
| `Out` | Vector2f |

<a id="Parameter-descriptions"></a>

## Parameter descriptions

- **`In`**: The vector to transform. This node appends an addtional component onto the `In` vector with a value of `1.0` to make the vector match the dimensions of the `Mat` matrix. When transformation is complete, this additional component clears.
- **`Rotation`**: The degrees of counter-clockwise rotation to apply to the input.
- **`Scale`**: The scale to apply to the input. This parameter stretches the input by the given magnitude.
- **`Translation`**: The translation to apply to the input. A translation moves the input in the given directions.

<a id="Discussion"></a>

## Discussion

The `Transform 2D` node takes a 2D vector as an input, applies the given rotation, scale, and translation, then outputs the transformed vector.

## See Also

### Nodes

- [Image](image.md): A texture referencing a 2D image file.
- [Tiled Image](tiled-image.md): Samples data from an image with provisions for offsetting and tiling in UV space.
- [UV Texture](uv-texture.md): A MaterialX version of USD UV Texture reader.
