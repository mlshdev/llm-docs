> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iomemorycursor/physicalsegment

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
