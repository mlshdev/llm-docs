> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/specializecollection](https://developer.apple.com/documentation/usdkit/usdprim/specializecollection)

# USDPrim.SpecializeCollection

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Manages specializes composition arcs on a prim.

## Declaration

```swift
struct SpecializeCollection
```

<a id="overview"></a>

## Overview

Specialization is similar to inheritance but with different composition strength. Specialized opinions are weaker than direct opinions but stronger than inherited opinions. Use `USDPrim.SpecializeCollection` to add, remove, and query specializes arcs on a prim.

## Topics

### Instance Properties

- [prim](specializecollection/prim.md): The prim that owns these specializes arcs.

### Instance Methods

- [add(\_:position:)](specializecollection/add%28__position_%29.md): Adds a specializes arc to the prim.
- [clear()](specializecollection/clear%28%29.md): Removes all specializes arcs from the prim.
- [remove(\_:)](specializecollection/remove%28__%29.md): Removes a specific specializes arc from the prim.
- [set(\_:)](specializecollection/set%28__%29.md): Replaces all specializes arcs with the specified list.
