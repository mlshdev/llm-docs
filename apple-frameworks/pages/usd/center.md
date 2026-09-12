> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usd/center](https://developer.apple.com/documentation/usd/center)

# center

**Kind:** Article

A prim around which the affected objects orbit.

<a id="overview"></a>

## Overview

Assign this property a prim not contained by [affectedObjects](affectedobjects.md).

To reside at an arbitrary location in its parent’s coordinate space, a prim needs the translation component of a transform. Therefore, assign this property an [Xformable](https://openusd.org/docs/api/class_usd_geom_xformable.html) prim.

<a id="Declaration"></a>

### Declaration

```other
rel center
```

## See Also

### Properties

- [info:id](info-id.md): The action’s unique identifier.
- [affectedObjects](affectedobjects.md): A list of prims that respond to the notification.
- [duration](duration.md): The amount of time that the objects face the camera.
- [revolutions](revolutions.md): The number of rotations to complete.
- [axis](axis.md): A vector that describes the axis of rotation.
- [alignToPath](aligntopath.md): An option that controls the prim’s orientation as it revolves.
