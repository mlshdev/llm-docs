> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/makeattribute(named:as:custom:variability:)](https://developer.apple.com/documentation/usdkit/usdprim/makeattribute(named:as:custom:variability:))

# makeAttribute(named:as:custom:variability:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates an attribute with the given name on this prim, or returns the existing attribute if one already exists.

## Declaration

```swift
@discardableResult func makeAttribute(named name: USDToken, as type: USDPrim.Attribute.ValueType, custom: Bool = true, variability: USDPrim.Property.Variability = .varying) -> USDPrim.Attribute
```

## Parameters

- `name`: The name of the attribute to create.
- `type`: The value type of the attribute.
- `custom`: A Boolean value that indicates whether the attribute is a custom attribute not defined by a schema.
- `variability`: The variability of the attribute.

<a id="return-value"></a>

## Return Value

The attribute with the given name.

## See Also

### Accessing attributes

- [attributes](attributes.md): The attributes of this prim, including those provided by its schemas.
- [authoredAttributes](authoredattributes.md): The attributes of this prim that have an authored opinion.
- [attribute(named:)](attribute%28named_%29.md): Returns the attribute with a given name on this prim.
- [attribute(at:)](attribute%28at_%29.md): Returns the attribute at a given path, relative to this prim.
- [hasAttribute(named:)](hasattribute%28named_%29.md): Returns true if an attribute with a given name exists on this prim.
- [USDPrim.Attribute](attribute.md)
