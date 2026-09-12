> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usd/type](https://developer.apple.com/documentation/usd/type)

# type

**Kind:** Article

An option that controls the order in which the actions execute.

<a id="overview"></a>

## Overview

The default value is `serial`.

<a id="Order-Options"></a>

### Order Options

- **`serial`**: Executes in order with each action waiting for the prior action to complete before starting.
- **`parallel`**: Executes all actions concurrently.

<a id="Declaration"></a>

### Declaration

```other
uniform token type = "serial" (
        allowedTokens = ["serial", "parallel"]
)
```

## See Also

### Properties

- [info:id](info-id.md): The action’s unique identifier.
- [affectedObjects](affectedobjects.md): A list of prims that respond to the notification.
- [audio](audio.md): The location of an audio file.
- [gain](gain.md): A value that controls the audio volume.
- [auralMode](auralmode.md): An option that controls the audio signal’s spacial dynamics.
