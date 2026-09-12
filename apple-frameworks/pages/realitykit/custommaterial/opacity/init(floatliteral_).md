> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/custommaterial/opacity/init(floatliteral:)](https://developer.apple.com/documentation/realitykit/custommaterial/opacity/init(floatliteral:))

# init(floatLiteral:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+

Creates an opacity object from a single value.

## Declaration

```swift
init(floatLiteral value: Float)
```

## Parameters

- `value`: The opacity value.

<a id="discussion"></a>

## Discussion

This initializer creates an object that defines the opacity of an entity using a single value for the entire entity. This value is available to the material’s surface shader function, but RealityKit draws the entity fully opaque unless the surface shader function calls `params.surface().set_opacity()`.

The following Metal code demonstrates how to set the entity’s opacity in the material’s surface shader function based on `value:`

```swift
    // Retrieve the opacity scale from the CustomMaterial.
    float opacityScale = params.material_constants().opacity_scale();

    // Use the opacity scale to set the current pixel's opacity.
    params.surface().set_opacity(opacityScale);
```

## See Also

### Creating an opacity object

- [init(scale:texture:)](init%28scale_texture_%29.md): Creates an object that defines the opacity of an entity using a single value, a UV-mapped image texture, or both.
- [init(\_:)](init%28__%29.md): Creates an object from the opacity property of an existing physically based material.
