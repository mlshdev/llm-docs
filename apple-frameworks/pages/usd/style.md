> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usd/style](https://developer.apple.com/documentation/usd/style)

# style

**Kind:** Article

An option that implements different kinds of animation timing.

<a id="overview"></a>

## Overview

The default value is `basic`.

<a id="Styles"></a>

### Styles

- **`basic`**: Animates with steady motion.
- **`playful`**: Animates with whimsical motion.
- **`wild`**: Animates with sporadic motion.

<a id="Declaration"></a>

### Declaration

```other
uniform token style = "basic" (
    allowedTokens = ["basic", "playful", "wild"]
)
```

## See Also

### Properties

- [info:id](info-id.md): The action’s unique identifier.
- [affectedObjects](affectedobjects.md): A list of prims that respond to the notification.
- [duration](duration.md): The amount of time that the objects face the camera.
- [motionType](motiontype.md): An option that determines how the action displays or hides a prim.
