> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/relationship/spec](https://developer.apple.com/documentation/usdkit/usdprim/relationship/spec)

# USDPrim.Relationship.Spec

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A handle to a relationship definition stored in a layer.

## Declaration

```swift
struct Spec
```

<a id="overview"></a>

## Overview

Relationships store connections to other prims (target paths) rather than typed values. Used for scene linkages like material bindings, collection membership, and proxy references.

## Topics

### Initializers

- [init()](spec/init%28%29.md): Creates an empty (invalid) relationship spec handle.
- [init(\_:)](spec/init%28__%29.md): Narrows an untyped [USDLayer.Spec](../../usdlayer/spec.md) to a relationship spec.
- [init(layer:relationshipPath:variability:isCustom:)](spec/init%28layer_relationshippath_variability_iscustom_%29.md): Creates a relationship spec at the given path in the layer, authoring intermediate ancestor prim specs as `over`s where needed.
- [init(owner:name:variability:isCustom:)](spec/init%28owner_name_variability_iscustom_%29.md): Creates a new relationship spec under the given prim spec.

### Instance Properties

- [comment](spec/comment.md): The authored user comment, or `nil` if not authored.
- [customData](spec/customdata.md): The custom data dictionary authored on this relationship.
- [documentation](spec/documentation.md): The authored documentation, or `nil` if not authored.
- [isCustom](spec/iscustom.md): Whether this relationship was authored as `custom`.
- [name](spec/name.md): The relationship’s local name.
- [noLoadHint](spec/noloadhint.md): Hint to the runtime to skip loading payloads on targeted prims. Default: `false`.
- [owner](spec/owner.md): The spec that contains this relationship.
- [permission](spec/permission.md): The relationship’s permission level (public, restricted, private).
- [targetPaths](spec/targetpaths.md): The authored target paths, or `nil` if none authored.

### Instance Methods

- [clearAssetInfo(\_:)](spec/clearassetinfo%28__%29.md): Removes `key` from the asset info dictionary.
- [clearCustomData(\_:)](spec/clearcustomdata%28__%29.md): Removes `key` from the custom data dictionary.
- [clearTargetPaths()](spec/cleartargetpaths%28%29.md): Clears all authored target paths on this relationship.
- [removeTarget(\_:preservingOrder:)](spec/removetarget%28__preservingorder_%29.md): Removes an authored target path.
- [rename(to:)](spec/rename%28to_%29.md): Sets the relationship’s name.
- [replaceTarget(\_:with:)](spec/replacetarget%28__with_%29.md): Replaces an authored target path with a new path.
- [setAssetInfo(\_:to:)](spec/setassetinfo%28__to_%29.md): Sets `key` in the asset info dictionary to `value`. Read the full dictionary via `field("assetInfo")` from FieldCollection.
- [setCustomData(\_:to:)](spec/setcustomdata%28__to_%29.md): Sets `key` in the custom data dictionary to `value`.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [USDLayer.Spec.FieldCollection](../../usdlayer/spec/fieldcollection.md)
- [USDLayer.Spec.MetadataCollection](../../usdlayer/spec/metadatacollection.md)
- [USDPrim.Property.Spec.SymmetryCollection](../property/spec/symmetrycollection.md)
