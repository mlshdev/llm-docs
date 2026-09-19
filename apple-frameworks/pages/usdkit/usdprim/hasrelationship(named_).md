> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usdkit/usdprim/hasrelationship(named:)

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
