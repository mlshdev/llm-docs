> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usdkit/usdlayer/defaultprim

# defaultPrim

**Framework:** USDKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The name of the layer’s default prim — the prim referenced when this layer is included as a reference or payload without specifying a target. `nil` if not authored.

## Declaration

```swift
var defaultPrim: USDToken? { get nonmutating set }
```

## See Also

### Composing the scene

- [subLayerPaths](sublayerpaths.md): The asset paths of the layer’s sublayers, ordered from strongest to weakest opinion.
- [USDLayer.AssetPath](assetpath.md): A reference to an external asset such as a texture, audio file, or USD layer.
