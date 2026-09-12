> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/hasrelationship(named:)](https://developer.apple.com/documentation/usdkit/usdprim/hasrelationship(named:))

# hasRelationship(named:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns true if a relationship with a given name exists on this prim.

## Declaration

```swift
func hasRelationship(named name: USDToken) -> Bool
```

## See Also

### Accessing relationships

- [relationship(named:)](relationship%28named_%29.md): Returns the relationship with a given name on this prim.
- [relationship(at:)](relationship%28at_%29.md): Returns the relationship at a given path, relative to this prim.
- [USDPrim.Relationship](relationship.md): A property that connects a prim to one or more other objects in the stage by their paths.
