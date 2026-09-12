> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/referencecollection](https://developer.apple.com/documentation/usdkit/usdprim/referencecollection)

# USDPrim.ReferenceCollection

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Manages reference composition arcs on a prim.

## Declaration

```swift
struct ReferenceCollection
```

## Topics

### Instance Properties

- [prim](referencecollection/prim.md): The prim that owns these reference arcs.

### Instance Methods

- [add(\_:position:)](referencecollection/add%28__position_%29.md): Adds an existing reference arc to the prim.
- [add(to:from:layerOffset:position:)](referencecollection/add%28to_from_layeroffset_position_%29.md): Adds an external reference arc.
- [add(to:layerOffset:position:)](referencecollection/add%28to_layeroffset_position_%29.md): Adds an internal reference arc that targets a prim in the same layer stack.
- [clear()](referencecollection/clear%28%29.md): Removes all reference arcs from the prim.
- [remove(\_:)](referencecollection/remove%28__%29.md): Removes a specific reference arc from the prim.
- [set(\_:)](referencecollection/set%28__%29.md): Replaces all reference arcs with the specified list.

## See Also

### Composing references and payloads

- [references](references.md): The reference composition arcs on this prim.
- [USDPrim.Reference](reference.md): A reference to an external layer or asset.
- [USDPrim.Payload](payload.md): A payload to an external asset.
- [USDPrim.ListPosition](listposition.md): Where a new composition arc should be inserted relative to existing arcs.
