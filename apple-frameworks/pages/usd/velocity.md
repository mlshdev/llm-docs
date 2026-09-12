> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usd/velocity](https://developer.apple.com/documentation/usd/velocity)

# velocity

**Kind:** Article

The amount of velocity the impulse adds to the target prims.

<a id="overview"></a>

## Overview

The value and sign of each component in the triplet determine the impulse’s direction along each respective axis. The magnitude of each component determines the speed along each the respective axis. This property is in *local space*, so it applies to the coordinate space of the target prims.

<a id="Declaration"></a>

### Declaration

```other
uniform vector3d velocity = (0.0, 0.0, 0.0)
```

## See Also

### Properties

- [info:id](info-id.md): The action’s unique identifier.
- [affectedObjects](affectedobjects.md): A list of prims that respond to the notification.
