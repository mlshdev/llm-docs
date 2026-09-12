> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/relationship(named:)](https://developer.apple.com/documentation/usdkit/usdprim/relationship(named:))

# relationship(named:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns the relationship with a given name on this prim.

## Declaration

```swift
func relationship(named name: USDToken) -> USDPrim.Relationship
```

<a id="discussion"></a>

## Discussion

If no relationship named `name` exists on this prim, returns an invalid relationship handle.

## See Also

### Accessing relationships

- [relationship(at:)](relationship%28at_%29.md): Returns the relationship at a given path, relative to this prim.
- [hasRelationship(named:)](hasrelationship%28named_%29.md): Returns true if a relationship with a given name exists on this prim.
- [USDPrim.Relationship](relationship.md): A property that connects a prim to one or more other objects in the stage by their paths.
