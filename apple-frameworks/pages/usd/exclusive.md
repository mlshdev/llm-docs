> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usd/exclusive

# exclusive

**Kind:** Article

A Boolean value that determines if a behavior executes exclusively.

<a id="overview"></a>

## Overview

The default value is `false`, which indicates that other behaviors’ actions run concurrently with the behavior. If the value is `true`, other exclusive behaviors stop performing actions when the runtime actives a trigger in the behavior.

<a id="Declaration"></a>

### Declaration

```other
uniform bool exclusive = false
```

## See Also

### Properties

- [triggers](triggers.md): A list of prims that execute a behavior’s actions.
- [actions](actions.md): A list of actions that make up the group.
