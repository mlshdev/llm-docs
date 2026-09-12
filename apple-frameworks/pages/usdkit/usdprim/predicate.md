> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/predicate](https://developer.apple.com/documentation/usdkit/usdprim/predicate)

# USDPrim.Predicate

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A filter which returns true or false for prims based on their flags.

## Declaration

```swift
struct Predicate
```

<a id="overview"></a>

## Overview

A predicate checks flags on a [USDPrim](../usdprim.md) and can require that each flag is set or not set.

```swift
let loadedModels = prim.children(where: [.isModel, .isLoaded])
let inactiveGroups = prim.children(where: [.isGroup, !.isActive])
```

## Topics

### Operators

- [!(\_:)](predicate/!%28__%29.md): Returns the opposite of a predicate.

### Initializers

- [init(arrayLiteral:)](predicate/init%28arrayliteral_%29.md): A predicate which accepts only prims with all of the specified flags.

### Type Properties

- [all](predicate/all.md): A predicate which is always true, and accepts all prims.
- [hasDefSpecifier](predicate/hasdefspecifier.md): True if the prim has a def specifier.
- [isAbstract](predicate/isabstract.md): True if the prim or any of its ancestors are a class.
- [isActive](predicate/isactive.md): True if the prim and all of its ancestors are active.
- [isComponent](predicate/iscomponent.md): Returns true if this prim’s kind metadata identifies it as a model component.
- [isDefined](predicate/isdefined.md): True if the prim and all its ancestors have a `def` specifier.
- [isGroup](predicate/isgroup.md): Returns true if this prim’s kind metadata identifies it as a model group.
- [isInstance](predicate/isinstance.md): True if the prim is an instance of a prototype.
- [isLoaded](predicate/isloaded.md): True if the prim is active and none of its loadable ancestors are unloaded.
- [isModel](predicate/ismodel.md): Returns true if this prim’s kind metadata identifies it as a model.
- [none](predicate/none.md): A predicate which is always false, and accepts no prims.

### Default Implementations

- [CustomStringConvertible Implementations](predicate/customstringconvertible-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Traversing the hierarchy

- [children](children.md): The active, loaded, defined, non-abstract child prims of this prim.
- [allChildren](allchildren.md): The child prims of this prim.
- [descendants](descendants.md): The active, loaded, defined, non-abstract descendant prims of this prim, in depth-first order.
- [allDescendants](alldescendants.md): The descendant prims of this prim.
- [nextSibling](nextsibling.md): The active, loaded, defined, non-abstract successor of this prim in its parent’s list of children.
- [children(where:)](children%28where_%29.md): Returns the child prims of this prim that satisfy the given predicate.
- [descendants(where:)](descendants%28where_%29.md): Returns the descendant prims of this prim that satisfy the given predicate.
- [nextSibling(where:)](nextsibling%28where_%29.md): The successor of this prim in its parent’s list of children that satisfies the given predicate.
- [prim(at:)](prim%28at_%29.md): Returns the prim at a given path, relative to this prim.
