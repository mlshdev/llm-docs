> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/payloadcollection](https://developer.apple.com/documentation/usdkit/usdprim/payloadcollection)

# USDPrim.PayloadCollection

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Manages payload composition arcs on a prim.

## Declaration

```swift
struct PayloadCollection
```

## Topics

### Instance Properties

- [prim](payloadcollection/prim.md): The prim that owns these payload arcs.

### Instance Methods

- [add(\_:position:)](payloadcollection/add%28__position_%29.md): Adds an existing payload arc to the prim.
- [add(to:from:layerOffset:position:)](payloadcollection/add%28to_from_layeroffset_position_%29.md): Adds an external payload arc.
- [add(to:layerOffset:position:)](payloadcollection/add%28to_layeroffset_position_%29.md): Adds an internal payload arc that targets a prim in the same layer stack.
- [clear()](payloadcollection/clear%28%29.md): Removes all payload arcs from the prim.
- [remove(\_:)](payloadcollection/remove%28__%29.md): Removes a specific payload arc from the prim.
- [set(\_:)](payloadcollection/set%28__%29.md): Replaces all payload arcs with the specified list.
