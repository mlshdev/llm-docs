> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usd/distance](https://developer.apple.com/documentation/usd/distance)

# distance

**Kind:** Article

A threshold that measures the user’s proximity to one or more prims.

<a id="overview"></a>

## Overview

This distance is in stage units (see [Encoding Stage Linear Units](https://openusd.org/docs/api/group___usd_geom_linear_units__group.html)) and measures from the center of each prim in [affectedObjects](affectedobjects.md), to the device’s camera.

<a id="Declaration"></a>

### Declaration

```other
uniform double distance = 0.0
```

## See Also

### Properties

- [info:id](info-id.md): The action’s unique identifier.
- [affectedObjects](affectedobjects.md): A list of prims that respond to the notification.
