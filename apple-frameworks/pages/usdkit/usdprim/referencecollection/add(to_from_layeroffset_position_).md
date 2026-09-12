> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/referencecollection/add(to:from:layeroffset:position:)](https://developer.apple.com/documentation/usdkit/usdprim/referencecollection/add(to:from:layeroffset:position:))

# add(to:from:layerOffset:position:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Adds an external reference arc.

## Declaration

```swift
func add(to primPath: USDLayer.Path?, from assetPath: String, layerOffset: USDLayer.TimeOffset = .init(), position: USDPrim.ListPosition = .backOfPrependList) throws
```

## Parameters

- `primPath`: The prim path within the target asset. Pass `nil` to target the asset’s default prim.
- `assetPath`: The asset path of the external layer to load.
- `layerOffset`: Time offset and scale to apply during composition.
- `position`: Where to insert the reference in the prim’s reference list.

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if the reference cannot be added.
