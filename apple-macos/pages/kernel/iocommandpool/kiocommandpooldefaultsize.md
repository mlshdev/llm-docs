> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iocommandpool/kiocommandpooldefaultsize](https://developer.apple.com/documentation/kernel/iocommandpool/kiocommandpooldefaultsize)

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
