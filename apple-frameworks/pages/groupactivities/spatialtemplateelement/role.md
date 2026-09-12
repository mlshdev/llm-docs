> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/spatialtemplateelement/role](https://developer.apple.com/documentation/groupactivities/spatialtemplateelement/role)

# role

**Framework:** Group Activities  
**Kind:** Instance Property  
**Availability:** visionOS 2.0+

An optional role you associate with this element.

## Declaration

```swift
var role: (any SpatialTemplateRole)? { get }
```

<a id="discussion"></a>

## Discussion

If you associate a role to a seat, a participant must request that role to sit in the seat. If your template contains seats with roles, include some seats without roles to handle people who are unable to acquire a seat with a role. For example, you might include seats for spectators as well as players of a game.

## See Also

### Getting the element details

- [position](position.md): The location of the element in the shared coordinate space.
- [direction](direction.md): The initial orientation of the element in the shared coordinate space.
