> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iographicstypes_h_user-space/iocolorentry](https://developer.apple.com/documentation/iokit/iographicstypes_h_user-space/iocolorentry)

# IOColorEntry

**Interface language:** Objective-C

**Framework:** IOKit

A structure defining one entry of a color lookup table.

## Declaration

```objectivec
struct IOColorEntry {
   UInt16 index;
   IOColorComponent red;
   IOColorComponent green;
   IOColorComponent blue;
};
```

<a id="overview"></a>

## Overview

This structure is used by IOFramebuffer to define an entry of a color lookup table.

## Topics

### Fields

- [index](../iocolorentry/1505706-index.md): Number of pixels visible per row.
- [red](../iocolorentry/1505899-red.md): Value of red component 0-65535.
- [green](../iocolorentry/1505128-green.md): Value of green component 0-65535.
- [blue](../iocolorentry/1505830-blue.md): Value of blue component 0-65535.
