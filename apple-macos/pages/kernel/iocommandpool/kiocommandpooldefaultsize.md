> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iocommandpool/kiocommandpooldefaultsize

# kIOCommandPoolDefaultSize

**Interface language:** Objective-C

**Framework:** Kernel

The default size of any command pool.

## Declaration

```objectivec
static const UInt32 kIOCommandPoolDefaultSize = 2;
```

<a id="overview"></a>

## Overview

kIOCommandPoolDefaultSize is the default size of any command pool. The default size was determined to be the smallest size for which a pool makes sense.
