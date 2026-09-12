> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usd/upvector](https://developer.apple.com/documentation/usd/upvector)

# upVector

**Kind:** Article

A vector around which the runtime rotates the object.

<a id="overview"></a>

## Overview

This property defines the axis around which the runtime rotates the target to create the effect of a prim looking at the user. Normally, an asset defines this value to match the stage’s [upAxis](https://openusd.org/docs/api/group___usd_geom_up_axis__group.html). The default value points positively in the y-direction.

<a id="Declaration"></a>

### Declaration

```other
uniform vector3d upVector = (0.0, 1.0, 0.0)
```

## See Also

### Properties

- [info:id](info-id.md): The action’s unique identifier.
- [affectedObjects](affectedobjects.md): A list of prims that respond to the notification.
- [duration](duration.md): The amount of time that the objects face the camera.
- [front](front.md): A vector that’s perpendicular to, and points outward from, the object’s face.
