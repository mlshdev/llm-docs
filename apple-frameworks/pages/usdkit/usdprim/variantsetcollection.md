> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/variantsetcollection](https://developer.apple.com/documentation/usdkit/usdprim/variantsetcollection)

# USDPrim.VariantSetCollection

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Manages variant sets on a prim.

## Declaration

```swift
struct VariantSetCollection
```

<a id="overview"></a>

## Overview

Variants provide a way to package multiple variations of scene data within a single asset. A prim can have multiple variant sets, each containing named variants that can be selected at runtime.

## Topics

### Instance Properties

- [names](variantsetcollection/names.md): The names of all variant sets on this prim.
- [selections](variantsetcollection/selections.md): The composed variant selections on this prim, keyed by variant set name.

### Instance Methods

- [add(\_:)](variantsetcollection/add%28__%29.md): Adds a new variant set to the prim.

### Subscripts

- [subscript(\_:)](variantsetcollection/subscript%28__%29.md): Returns the variant set with the specified name, or `nil` if no variant set with that name exists on the prim.
