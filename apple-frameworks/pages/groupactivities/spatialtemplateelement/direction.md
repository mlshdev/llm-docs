> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/spatialtemplateelement/direction](https://developer.apple.com/documentation/groupactivities/spatialtemplateelement/direction)

# direction

**Framework:** Group Activities  
**Kind:** Instance Property  
**Availability:** visionOS 2.0+

The initial orientation of the element in the shared coordinate space.

## Declaration

```swift
var direction: SpatialTemplateElementDirection { get }
```

<a id="discussion"></a>

## Discussion

The direction you specify rotates the participant’s spatial Persona around the y-axis. This direction becomes the starting point for any further movements the person makes.

## See Also

### Getting the element details

- [position](position.md): The location of the element in the shared coordinate space.
- [role](role.md): An optional role you associate with this element.
