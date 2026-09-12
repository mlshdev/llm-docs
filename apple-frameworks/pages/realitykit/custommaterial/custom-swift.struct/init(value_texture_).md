> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/custommaterial/custom-swift.struct/init(value:texture:)](https://developer.apple.com/documentation/realitykit/custommaterial/custom-swift.struct/init(value:texture:))

# init(value:texture:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+

Creates a custom object from a vector and texture.

## Declaration

```swift
init(value: SIMD4<Float> = .init(repeating: 0), texture: CustomMaterial.Texture? = nil)
```

## Parameters

- `value`: A four-component vector.
- `texture`: An optional texture.

<a id="discussion"></a>

## Discussion

Use this initializer to create a new [CustomMaterial.Custom](../custom-swift.struct.md) object from a four-component vector, a texture, or both. RealityKit passes these values automatically to your custom material’s shader functions. Custom values have no predefined meaning, and RealityKit doesn’t use them other than to make them available in your surface shader and geometry modifier.
