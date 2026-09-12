> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/object(at:)](https://developer.apple.com/documentation/usdkit/usdprim/object(at:))

# object(at:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns the object at a given path, relative to this prim.

## Declaration

```swift
func object(at path: USDLayer.Path) -> USDStage.Object
```

<a id="discussion"></a>

## Discussion

If `path` is relative, it is anchored to this prim’s path. If no object exists at the resolved path, returns an invalid object handle.

## See Also

### Accessing properties

- [properties](properties.md): The properties of this prim, including those provided by its schemas.
- [authoredProperties](authoredproperties.md): The properties of this prim that have an authored opinion.
- [propertyNames](propertynames.md): The names of this prim’s properties, including those provided by its schemas.
- [authoredPropertyNames](authoredpropertynames.md): The names of this prim’s properties that have an authored opinion.
- [property(named:)](property%28named_%29.md): Returns the property with a given name on this prim.
- [hasProperty(named:)](hasproperty%28named_%29.md): Returns true if an attribute or relationship with a given name exists.
- [USDPrim.Property](property.md): A named property on a prim, which is either an attribute or a relationship.
