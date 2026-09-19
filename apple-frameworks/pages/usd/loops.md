> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usd/loops

# loops

**Kind:** Article

A Boolean value indicating whether the group loops.

<a id="overview"></a>

## Overview

The default value is `false`, in which the group executes its actions [performCount](performcount.md) number of times and then stops.

When `true` and [type](type.md) is `serial`, the group restarts its action sequence with the first action after the last action completes. When [type](type.md) is `parallel`, the runtime repeats each action independently.

<a id="Declaration"></a>

### Declaration

```other
uniform bool loops = false
```

## See Also

### Properties

- [info:id](info-id.md): The action’s unique identifier.
- [type](type.md): An option that controls the order in which the actions execute.
- [performCount](performcount.md): A value that specifies the number of times the group’s actions repeat.
- [actions](actions.md): A list of actions that make up the group.
