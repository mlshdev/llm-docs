> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/inheritcollection](https://developer.apple.com/documentation/usdkit/usdprim/inheritcollection)

# USDPrim.InheritCollection

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Manages inherit composition arcs on a prim.

## Declaration

```swift
struct InheritCollection
```

<a id="overview"></a>

## Overview

Inheritance allows a prim to inherit opinions from another prim within the same layer stack, similar to class inheritance in object-oriented programming. Use `USDPrim.InheritCollection` to add, remove, and query inherit arcs on a prim.

## Topics

### Instance Properties

- [inheritedPaths](inheritcollection/inheritedpaths.md): All paths this prim inherits from, including paths inherited transitively through inherited classes.
- [prim](inheritcollection/prim.md): The prim that owns these inherit arcs.

### Instance Methods

- [add(\_:position:)](inheritcollection/add%28__position_%29.md): Adds an inherit arc to the prim.
- [clear()](inheritcollection/clear%28%29.md): Removes all inherit arcs from the prim.
- [remove(\_:)](inheritcollection/remove%28__%29.md): Removes a specific inherit arc from the prim.
- [set(\_:)](inheritcollection/set%28__%29.md): Replaces all inherit arcs with the specified list.
