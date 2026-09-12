> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdlayer/spec/fieldcollection](https://developer.apple.com/documentation/usdkit/usdlayer/spec/fieldcollection)

# USDLayer.Spec.FieldCollection

**Framework:** USDKit  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Low-level read/write access to spec fields. Fields are the raw data backing both metadata and structural information on a spec.

## Declaration

```swift
protocol FieldCollection
```

## Topics

### Instance Properties

- [fields](fieldcollection/fields.md): All authored field names on this spec.

### Instance Methods

- [clearField(\_:)](fieldcollection/clearfield%28__%29.md): Clears the authored value for `name`.
- [field(\_:)](fieldcollection/field%28__%29.md): Returns the value of `name`, or `nil` if the field is unauthored.
- [field(\_:as:)](fieldcollection/field%28__as_%29.md): Typed field accessor.
- [isInert(ignoringChildren:)](fieldcollection/isinert%28ignoringchildren_%29.md): Returns a Boolean value that indicates whether the spec contains no authored data.
- [setField(\_:to:)](fieldcollection/setfield%28__to_%29-26nys.md): Sets the field `name` to `value`.
- [setField(\_:to:)](fieldcollection/setfield%28__to_%29-4lcqw.md): Typed field setter.

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
