> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iomemorycursor/physicalsegment](https://developer.apple.com/documentation/kernel/iomemorycursor/physicalsegment)

# PhysicalSegment

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
struct PhysicalSegment {
   IOPhysicalAddress location;
   IOPhysicalLength length;
};
```

<a id="overview"></a>

## Overview

A physical address/length pair.
