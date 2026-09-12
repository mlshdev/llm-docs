> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iopmpowersource/settingschangedsinceupdate](https://developer.apple.com/documentation/kernel/iopmpowersource/settingschangedsinceupdate)

# settingsChangedSinceUpdate

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
bool settingsChangedSinceUpdate;
```

<a id="overview"></a>

## Overview

Used by subclasses to determine if any settings have been modified via the accessors below since last call to update(). true is settings have changed; false otherwise.

## See Also

### Instance Variables

- [properties](properties.md)
