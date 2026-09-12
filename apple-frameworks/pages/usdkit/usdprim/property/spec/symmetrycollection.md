> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/property/spec/symmetrycollection](https://developer.apple.com/documentation/usdkit/usdprim/property/spec/symmetrycollection)

# USDPrim.Property.Spec.SymmetryCollection

**Framework:** USDKit  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Symmetry and naming substitutions used in rigging.

## Declaration

```swift
protocol SymmetryCollection
```

## Topics

### Instance Properties

- [prefix](symmetrycollection/prefix.md): The authored prefix used for symmetry-driven name substitution, or `nil` if not authored.
- [suffix](symmetrycollection/suffix.md): The authored suffix used for symmetry-driven name substitution, or `nil` if not authored.
- [symmetricPeer](symmetrycollection/symmetricpeer.md): The symmetric peer path, or `nil` if not authored.
- [symmetryArguments](symmetrycollection/symmetryarguments.md): The symmetry arguments dictionary authored on this property.
- [symmetryFunction](symmetrycollection/symmetryfunction.md): The symmetry function token, or `nil` if not authored.

### Instance Methods

- [clearSymmetryArgument(\_:)](symmetrycollection/clearsymmetryargument%28__%29.md): Removes `name` from the symmetry arguments dictionary.
- [setSymmetryArgument(\_:to:)](symmetrycollection/setsymmetryargument%28__to_%29.md): Sets `name` in the symmetry arguments dictionary to `value`.

## Relationships

### Conforming Types

- [USDPrim.Attribute.Spec](../../attribute/spec.md)
- [USDPrim.Property.Spec](../spec.md)
- [USDPrim.Relationship.Spec](../../relationship/spec.md)
