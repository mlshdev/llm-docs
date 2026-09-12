> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/authoredpropertynames](https://developer.apple.com/documentation/usdkit/usdprim/authoredpropertynames)

# authoredPropertyNames

**Framework:** USDKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The names of this prim’s properties that have an authored opinion.

## Declaration

```swift
var authoredPropertyNames: [USDToken] { get }
```

## See Also

### Accessing properties

- [properties](properties.md): The properties of this prim, including those provided by its schemas.
- [authoredProperties](authoredproperties.md): The properties of this prim that have an authored opinion.
- [propertyNames](propertynames.md): The names of this prim’s properties, including those provided by its schemas.
- [property(named:)](property%28named_%29.md): Returns the property with a given name on this prim.
- [hasProperty(named:)](hasproperty%28named_%29.md): Returns true if an attribute or relationship with a given name exists.
- [object(at:)](object%28at_%29.md): Returns the object at a given path, relative to this prim.
- [USDPrim.Property](property.md): A named property on a prim, which is either an attribute or a relationship.
