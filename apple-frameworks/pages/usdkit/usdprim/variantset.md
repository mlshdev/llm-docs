> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/variantset](https://developer.apple.com/documentation/usdkit/usdprim/variantset)

# USDPrim.VariantSet

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Represents a single variant set on a prim.

## Declaration

```swift
struct VariantSet
```

<a id="overview"></a>

## Overview

`USDPrim.VariantSet` provides methods to add variants, query available variants, and control which variant is currently selected. Each variant set contains named variants that represent different configurations of the prim’s data.

## Topics

### Instance Properties

- [authoredSelection](variantset/authoredselection.md): The authored variant selection, or `nil` if none is authored.
- [isValid](variantset/isvalid.md): A Boolean value indicating whether this variant set is valid.
- [name](variantset/name.md): The name of this variant set.
- [prim](variantset/prim.md): The prim that owns this variant set.
- [selection](variantset/selection.md): The currently selected variant name, or `nil` if no selection composes.
- [variantNames](variantset/variantnames.md): The names of all variants in this variant set.

### Instance Methods

- [add(\_:)](variantset/add%28__%29.md): Adds a new variant to this variant set.
- [blockSelection()](variantset/blockselection%28%29.md): Blocks the variant selection by authoring an explicit empty value on the current edit target.
- [clearSelection()](variantset/clearselection%28%29.md): Clears the variant selection.
- [setSelection(\_:)](variantset/setselection%28__%29.md): Sets the variant selection.
- [withEditTarget(layer:\_:)](variantset/withedittarget%28layer___%29.md): Performs the closure with the stage’s edit target set to author into the currently selected variant.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
