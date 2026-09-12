> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usd/multipleperformoperation](https://developer.apple.com/documentation/usd/multipleperformoperation)

# multiplePerformOperation

**Kind:** Article

An option that indicates how an action handles an additional invocation while running.

<a id="overview"></a>

## Overview

The runtime doesn’t react to this property for all actions.

<a id="Additional-Invocation-Options"></a>

### Additional Invocation Options

- **`allow`**: Restarts the action by playing it over again.
- **`ignore`**: Continues running the current action, ignoring the additional invocation.
- **`stop`**: Stops the current action.

<a id="Declaration"></a>

### Declaration

```other
uniform token multiplePerformOperation= "ignore" (
    allowedTokens = ["ignore", "allow", "stop"]
)
```

## See Also

### Properties

- [info:id](info-id.md): The action’s unique identifier.
