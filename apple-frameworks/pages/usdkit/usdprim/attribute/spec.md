> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/attribute/spec](https://developer.apple.com/documentation/usdkit/usdprim/attribute/spec)

# USDPrim.Attribute.Spec

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A handle to an attribute definition stored in a layer.

## Declaration

```swift
struct Spec
```

<a id="overview"></a>

## Overview

`USDPrim.Attribute.Spec` is a struct but acts as a handle into data owned by a [USDLayer](../../usdlayer.md). Mutations write through to the layer.

## Topics

### Initializers

- [init()](spec/init%28%29.md): Creates an empty (invalid) attribute spec handle.
- [init(\_:)](spec/init%28__%29.md): Narrows an untyped [USDLayer.Spec](../../usdlayer/spec.md) to an attribute spec.
- [init(layer:attributePath:typeName:variability:isCustom:)](spec/init%28layer_attributepath_typename_variability_iscustom_%29.md): Creates an attribute spec at the given path in the layer, authoring intermediate ancestor prim specs as `over`s where needed.
- [init(owner:name:typeName:variability:isCustom:)](spec/init%28owner_name_typename_variability_iscustom_%29.md): Creates a new attribute spec under the given prim spec.

### Instance Properties

- [colorSpace](spec/colorspace.md): The authored color space, or `nil` if not authored. Assigning `nil` clears the color space.
- [comment](spec/comment.md): The authored user comment, or `nil` if not authored.
- [connectionPaths](spec/connectionpaths.md): The authored connection paths, or `nil` if none authored.
- [customData](spec/customdata.md): The custom data dictionary authored on this attribute.
- [documentation](spec/documentation.md): The authored documentation, or `nil` if not authored.
- [isCustom](spec/iscustom.md): Whether this attribute was authored as `custom`.
- [name](spec/name.md): The attribute’s local name.
- [owner](spec/owner.md): The spec that contains this attribute.
- [permission](spec/permission.md): The attribute’s permission level (public, restricted, private).

### Instance Methods

- [clearAssetInfo(\_:)](spec/clearassetinfo%28__%29.md): Removes `key` from the asset info dictionary.
- [clearConnectionPaths()](spec/clearconnectionpaths%28%29.md): Clears all authored connection paths on this attribute.
- [clearCustomData(\_:)](spec/clearcustomdata%28__%29.md): Removes `key` from the custom data dictionary.
- [rename(to:)](spec/rename%28to_%29.md): Sets the attribute’s name.
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
- [USDPrim.Property.Spec.ValueCollection](../property/spec/valuecollection.md)
