> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/spec](https://developer.apple.com/documentation/usdkit/usdprim/spec)

# USDPrim.Spec

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A handle to a prim definition stored in a layer.

## Declaration

```swift
struct Spec
```

<a id="overview"></a>

## Overview

`USDPrim.Spec` is a struct but acts as a handle into data owned by a [USDLayer](../usdlayer.md), much like [USDPrim](../usdprim.md) is a handle into a [USDStage](../usdstage.md). Mutations write through to the layer rather than to the spec value itself, so property setters and methods on this type are non-mutating.

## Topics

### Initializers

- [init()](spec/init%28%29.md): Creates an empty (invalid) prim spec handle.
- [init(\_:)](spec/init%28__%29-7yaap.md): Widens a `USDPrim.PseudoRootSpec` into a generic `USDPrim.Spec`, exposing the full prim-spec API (children, properties, metadata).
- [init(\_:)](spec/init%28__%29-9poa6.md): Narrows an untyped [USDLayer.Spec](../usdlayer/spec.md) to a `USDPrim.Spec`.
- [init(layer:primPath:)](spec/init%28layer_primpath_%29.md): Creates a prim spec at the given path in the layer, authoring intermediate ancestor prim specs as `over`s where needed.
- [init(parentLayer:name:specifier:typeName:)](spec/init%28parentlayer_name_specifier_typename_%29.md): Creates a new top-level prim spec under the given layer.
- [init(parentPrimSpec:name:specifier:typeName:)](spec/init%28parentprimspec_name_specifier_typename_%29.md): Creates a new child prim spec under the given parent prim spec.

### Instance Properties

- [assetInfo](spec/assetinfo.md): The asset info dictionary authored on this prim.
- [attributes](spec/attributes.md): All attribute specs on this prim.
- [children](spec/children.md): The child prim specs in authoring order.
- [childrenOrder](spec/childrenorder.md): The authored override for child ordering, or `nil` if no order is authored. When non-nil, this list controls the order in which child prim specs appear during composition.
- [comment](spec/comment.md): The authored user comment, or `nil` if not authored.
- [customData](spec/customdata.md): The custom data dictionary authored on this prim.
- [documentation](spec/documentation.md): The authored documentation, or `nil` if not authored.
- [inherits](spec/inherits.md): The authored inherit paths, or `nil` if none authored.
- [isActive](spec/isactive.md): Whether this prim is active in composition, or `nil` if not authored.
- [isInstanceable](spec/isinstanceable.md): Whether this prim is marked as an instance, or `nil` if not authored.
- [kind](spec/kind.md): The prim’s kind, or `nil` if not authored.
- [name](spec/name.md): The prim’s local name.
- [parent](spec/parent.md): The parent prim spec, or `nil` if this is a top-level prim spec.
- [payloads](spec/payloads.md): The authored payloads on this prim, or `nil` if none authored.
- [permission](spec/permission.md): The prim’s permission level (public, restricted, private).
- [prefix](spec/prefix.md): The authored prefix, or `nil` if not authored.
- [prefixSubstitutions](spec/prefixsubstitutions.md): The prefix substitutions dictionary.
- [properties](spec/properties.md): All property specs (attributes and relationships) on this prim.
- [propertyOrder](spec/propertyorder.md): The authored override for property ordering, or `nil` if no order is authored.
- [pseudoRoot](spec/pseudoroot.md): The pseudo-root prim spec at `/` in this spec’s layer.
- [references](spec/references.md): The authored references on this prim, or `nil` if none authored.
- [relationships](spec/relationships.md): All relationship specs on this prim.
- [relocates](spec/relocates.md): The relocates map authored on this prim, or `nil` if none authored.
- [specializes](spec/specializes.md): The authored specializes paths, or `nil` if none authored.
- [specifier](spec/specifier.md): How this prim definition composes — `def`, `over`, or `class`.
- [suffix](spec/suffix.md): The authored suffix, or `nil` if not authored.
- [suffixSubstitutions](spec/suffixsubstitutions.md): The suffix substitutions dictionary.
- [symmetricPeer](spec/symmetricpeer.md): The symmetric peer path, or `nil` if not authored.
- [symmetryArguments](spec/symmetryarguments.md): The symmetry arguments dictionary authored on this prim.
- [symmetryFunction](spec/symmetryfunction.md): The symmetry function token, or `nil` if not authored.
- [typeName](spec/typename.md): The prim’s type name.
- [variantSelections](spec/variantselections.md): All authored variant selections, keyed by variant set name.
- [variantSetNames](spec/variantsetnames.md): The names of variant sets defined on this prim.
- [variantSets](spec/variantsets.md): The variant sets authored on this prim, keyed by name.

### Instance Methods

- [appendChild(\_:)](spec/appendchild%28__%29.md): Appends `child` to the end of the children list.
- [attribute(at:)](spec/attribute%28at_%29.md): Returns the attribute spec at the given path within this prim.
- [blockVariantSelection(for:)](spec/blockvariantselection%28for_%29.md): Authors an explicit “no selection” for the given variant set.
- [clearAssetInfo(\_:)](spec/clearassetinfo%28__%29.md): Removes `key` from the asset info dictionary.
- [clearCustomData(\_:)](spec/clearcustomdata%28__%29.md): Removes `key` from the custom data dictionary.
- [clearInherits()](spec/clearinherits%28%29.md): Clears all authored inherit paths on this prim.
- [clearPayloads()](spec/clearpayloads%28%29.md): Clears all authored payloads on this prim.
- [clearReferences()](spec/clearreferences%28%29.md): Clears all authored references on this prim.
- [clearRelocates()](spec/clearrelocates%28%29.md): Clears all authored relocates on this prim.
- [clearSpecializes()](spec/clearspecializes%28%29.md): Clears all authored specializes paths on this prim.
- [clearSymmetryArgument(\_:)](spec/clearsymmetryargument%28__%29.md): Removes `name` from the symmetry arguments dictionary.
- [clearVariantSelection(for:)](spec/clearvariantselection%28for_%29.md): Clears the variant selection for the given variant set.
- [insertChild(\_:at:)](spec/insertchild%28__at_%29.md): Inserts `child` into the children list at `index`.
- [prim(at:)](spec/prim%28at_%29.md): Returns the prim spec at the given path within this prim.
- [property(at:)](spec/property%28at_%29.md): Returns the property spec at the given path within this prim.
- [relationship(at:)](spec/relationship%28at_%29.md): Returns the relationship spec at the given path within this prim.
- [removeChild(\_:)](spec/removechild%28__%29.md): Removes `child` from the children list. No-op if `child` is not a child of this spec.
- [removeProperty(\_:)](spec/removeproperty%28__%29.md): Removes the given property spec from this prim.
- [removeVariantSet(\_:)](spec/removevariantset%28__%29.md): Removes the variant set with the given name.
- [rename(to:)](spec/rename%28to_%29.md): Sets the prim’s name.
- [setAssetInfo(\_:to:)](spec/setassetinfo%28__to_%29.md): Sets `key` in the asset info dictionary to `value`.
- [setCustomData(\_:to:)](spec/setcustomdata%28__to_%29.md): Sets `key` in the custom data dictionary to `value`.
- [setSymmetryArgument(\_:to:)](spec/setsymmetryargument%28__to_%29.md): Sets `name` in the symmetry arguments dictionary to `value`.
- [setVariantSelection(for:to:)](spec/setvariantselection%28for_to_%29.md): Sets the variant selection for the given variant set.
- [spec(at:)](spec/spec%28at_%29.md): Returns the spec at the given path within this prim.
- [variantNames(in:)](spec/variantnames%28in_%29.md): Returns the variant names available in the given variant set.
- [variantSelection(for:)](spec/variantselection%28for_%29.md): Returns the authored variant selection for the given variant set.

### Type Methods

- [isValidName(\_:)](spec/isvalidname%28__%29.md): Returns a Boolean value that indicates whether `name` is a valid prim name.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [USDLayer.Spec.FieldCollection](../usdlayer/spec/fieldcollection.md)
- [USDLayer.Spec.MetadataCollection](../usdlayer/spec/metadatacollection.md)

## See Also

### Working with scene-description specs

- [USDPrim.PseudoRootSpec](pseudorootspec.md): A handle to a layer’s pseudo-root — the implicit parent of all top-level prims in a layer.
