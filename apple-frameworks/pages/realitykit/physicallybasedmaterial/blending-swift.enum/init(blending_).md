> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/physicallybasedmaterial/blending-swift.enum/init(blending:)](https://developer.apple.com/documentation/realitykit/physicallybasedmaterial/blending-swift.enum/init(blending:))

# init(blending:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+

Creates an object from a custom material’s blending property.

## Declaration

```swift
init(blending value: CustomMaterial.Blending)
```

## Parameters

- `value`: The custom material’s blending property.

<a id="discussion"></a>

## Discussion

This initializer creates a `PhysicallyBasedMaterial.Blending` instance using the values from an existing [CustomMaterial.Blending](../../custommaterial/blending-swift.enum.md) object.
