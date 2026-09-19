> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usd/triggers

# triggers

**Kind:** Article

A list of prims that execute a behavior’s actions.

<a id="overview"></a>

## Overview

The runtime executes all actions in the [actions](actions.md) array if the conditions of any trigger in [triggers](triggers.md) are satisfied. Only insert [Preliminary_Trigger](preliminary-trigger.md) prims in this array.

<a id="Declaration"></a>

### Declaration

```other
rel triggers
```

## See Also

### Properties

- [actions](actions.md): A list of actions that make up the group.
- [exclusive](exclusive.md): A Boolean value that determines if a behavior executes exclusively.
