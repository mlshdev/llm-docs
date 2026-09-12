> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/property/spec](https://developer.apple.com/documentation/usdkit/usdprim/property/spec)

# USDPrim.Property.Spec

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A handle to a property definition (attribute or relationship) stored in a layer.

## Declaration

```swift
struct Spec
```

<a id="overview"></a>

## Overview

`USDPrim.Property.Spec` is the untyped base for `USDPrim.Attribute.Spec` and `USDPrim.Relationship.Spec`. It acts as a handle into data owned by a [USDLayer](../../usdlayer.md) and mutations write through to the layer.

## Topics

### Protocols

- [USDPrim.Property.Spec.SymmetryCollection](spec/symmetrycollection.md): Symmetry and naming substitutions used in rigging.
- [USDPrim.Property.Spec.ValueCollection](spec/valuecollection.md): Value-related API for property specs that hold typed default values.

### Initializers

- [init()](spec/init%28%29.md): Creates an empty (invalid) property spec handle.
- [init(\_:)](spec/init%28__%29.md): Narrows an untyped [USDLayer.Spec](../../usdlayer/spec.md) to a property spec.

### Instance Properties

- [comment](spec/comment.md): The authored user comment, or `nil` if not authored.
- [customData](spec/customdata.md): The custom data dictionary authored on this property.
- [documentation](spec/documentation.md): The authored documentation, or `nil` if not authored.
- [isCustom](spec/iscustom.md): Whether this property was authored as `custom`.
- [name](spec/name.md): The property’s local name.
- [owner](spec/owner.md): The spec that contains this property — typically a prim spec or variant spec.
- [permission](spec/permission.md): The property’s permission level (public, restricted, private).

### Instance Methods

- [clearAssetInfo(\_:)](spec/clearassetinfo%28__%29.md): Removes `key` from the asset info dictionary.
- [clearCustomData(\_:)](spec/clearcustomdata%28__%29.md): Removes `key` from the custom data dictionary.
- [rename(to:)](spec/rename%28to_%29.md): Sets the property’s name.
- [setAssetInfo(\_:to:)](spec/setassetinfo%28__to_%29.md): Sets `key` in the asset info dictionary to `value`. Read the full dictionary via `field("assetInfo")` from FieldCollection.
- [setCustomData(\_:to:)](spec/setcustomdata%28__to_%29.md): Sets `key` in the custom data dictionary to `value`.

### Type Methods

- [isValidName(\_:)](spec/isvalidname%28__%29.md): Returns a Boolean value that indicates whether `name` is a valid property name.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [USDLayer.Spec.FieldCollection](../../usdlayer/spec/fieldcollection.md)
- [USDLayer.Spec.MetadataCollection](../../usdlayer/spec/metadatacollection.md)
- [USDPrim.Property.Spec.SymmetryCollection](spec/symmetrycollection.md)
- [USDPrim.Property.Spec.ValueCollection](spec/valuecollection.md)
