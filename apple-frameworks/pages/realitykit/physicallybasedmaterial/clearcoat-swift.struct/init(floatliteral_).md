> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/physicallybasedmaterial/clearcoat-swift.struct/init(floatliteral:)](https://developer.apple.com/documentation/realitykit/physicallybasedmaterial/clearcoat-swift.struct/init(floatliteral:))

# init(floatLiteral:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

Creates a clearcoat object using a single value.

## Declaration

```swift
init(floatLiteral value: Float)
```

## Parameters

- `value`: The clearcoat value to use for the entity.

<a id="discussion"></a>

## Discussion

A clearcoat is a separate layer of transparent specular highlights used to simulate a clear transparent coating, like the paint on a car, or the surface of lacquered objects. Use this initializer to create an object to specify the amount of clearcoat for a material using a single value that applies to the entire material.

## See Also

### Creating a clearcoat object

- [init(scale:texture:)](init%28scale_texture_%29.md): Creates a clearcoat object using a single value or a texture.
- [init(\_:)](init%28__%29.md): Creates a clearcoat object from a custom material’s clearcoat property.
