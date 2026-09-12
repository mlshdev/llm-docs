> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/attribute(named:)](https://developer.apple.com/documentation/usdkit/usdprim/attribute(named:))

# attribute(named:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns the attribute with a given name on this prim.

## Declaration

```swift
func attribute(named name: USDToken) -> USDPrim.Attribute
```

<a id="discussion"></a>

## Discussion

If no attribute named `name` exists on this prim, returns an invalid attribute handle.

## See Also

### Accessing attributes

- [attributes](attributes.md): The attributes of this prim, including those provided by its schemas.
- [authoredAttributes](authoredattributes.md): The attributes of this prim that have an authored opinion.
- [attribute(at:)](attribute%28at_%29.md): Returns the attribute at a given path, relative to this prim.
- [hasAttribute(named:)](hasattribute%28named_%29.md): Returns true if an attribute with a given name exists on this prim.
- [makeAttribute(named:as:custom:variability:)](makeattribute%28named_as_custom_variability_%29.md): Creates an attribute with the given name on this prim, or returns the existing attribute if one already exists.
- [USDPrim.Attribute](attribute.md)
