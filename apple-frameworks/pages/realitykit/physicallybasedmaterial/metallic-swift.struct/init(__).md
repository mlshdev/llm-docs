> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/physicallybasedmaterial/metallic-swift.struct/init(_:)](https://developer.apple.com/documentation/realitykit/physicallybasedmaterial/metallic-swift.struct/init(_:))

# init(\_:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+

Creates a metallic object from a custom material’s metallic property.

## Declaration

```swift
init(_ value: CustomMaterial.Metallic)
```

## Parameters

- `value`: The custom material’s metallic property.

<a id="discussion"></a>

## Discussion

In PBR rendering, the `metallic` property represents the reflectiveness of an entity. This initializer creates a new object from the [metallic](../../custommaterial/metallic-swift.property.md) property of a [CustomMaterial](../../custommaterial.md).

## See Also

### Creating a metallic object

- [init(floatLiteral:)](init%28floatliteral_%29.md): Creates an object from single value.
- [init(scale:texture:)](init%28scale_texture_%29.md): Creates an object from a color or texture.
