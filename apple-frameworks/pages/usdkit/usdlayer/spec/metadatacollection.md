> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdlayer/spec/metadatacollection](https://developer.apple.com/documentation/usdkit/usdlayer/spec/metadatacollection)

# USDLayer.Spec.MetadataCollection

**Framework:** USDKit  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Read/write access to metadata stored on a spec.

## Declaration

```swift
protocol MetadataCollection
```

## Topics

### Instance Properties

- [infoKeys](metadatacollection/infokeys.md): All authored info keys on this spec, including structural fields (child specifier lists, type info, etc.).
- [isDormant](metadatacollection/isdormant.md): Whether the spec is dormant (the underlying data has been removed).
- [layer](metadatacollection/layer.md): The layer containing this spec, or `nil` if dormant.
- [metadataInfoKeys](metadatacollection/metadatainfokeys.md): The subset of info keys an inspector should treat as user-visible metadata. Excludes structural fields.
- [path](metadatacollection/path.md): The path identifying this spec within its layer.
- [specType](metadatacollection/spectype.md): The kind of spec, or `nil` if the spec is dormant.

### Instance Methods

- [clearInfo(\_:)](metadatacollection/clearinfo%28__%29.md): Clears the authored value for `key`.
- [info(\_:)](metadatacollection/info%28__%29.md): Returns the value of `key`, or `nil` if the key is unauthored.
- [setInfo(\_:to:)](metadatacollection/setinfo%28__to_%29.md): Sets `key` to `value`.

## Relationships

### Conforming Types

- [USDLayer.Spec](../spec.md)
- [USDPrim.Attribute.Spec](../../usdprim/attribute/spec.md)
- [USDPrim.Property.Spec](../../usdprim/property/spec.md)
- [USDPrim.PseudoRootSpec](../../usdprim/pseudorootspec.md)
- [USDPrim.Relationship.Spec](../../usdprim/relationship/spec.md)
- [USDPrim.Spec](../../usdprim/spec.md)
- [USDPrim.VariantSetSpec](../../usdprim/variantsetspec.md)
- [USDPrim.VariantSpec](../../usdprim/variantspec.md)
