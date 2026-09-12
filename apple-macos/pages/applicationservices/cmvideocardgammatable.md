> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/cmvideocardgammatable](https://developer.apple.com/documentation/applicationservices/cmvideocardgammatable)

# CMVideoCardGammaTable

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Structure  
**Availability:** macOS 10.0+ (deprecated in 10.6)

## Declaration

```objectivec
typedef struct CMVideoCardGammaTable {
    ...
} CMVideoCardGammaTable;
```

<a id="overview"></a>

## Overview

The ColorSync Manager defines the `CMVideoCardGammaTable` data structure to specify video card gamma data in table format. You specify the number of channels, the number of entries per channel, and the size of each entry. The last field in the structure is an array of size one that serves as the start of the table data. The actual size of the array is equal to the number of channels times the number of entries times the size of each entry.

## Topics

### Instance Properties

- [channels](cmvideocardgammatable/1560665-channels.md): Deprecated. Number of gamma channels (1 or 3). If `channels` is set to 1 then the red, green, and blue lookup tables (LUTs) of the video card will be loaded with the same data. If `channels` is set to 3, then if the video card supports separate red, green, and blue LUTs, then the video card LUTs will be loaded with the data for the three channels from the `data` array.
- [data](cmvideocardgammatable/1560268-data.md): Deprecated. Variable-sized array of data. The size of the data is equal to `channels``*``entryCount``*``entrySize`.
- [entryCount](cmvideocardgammatable/1560714-entrycount.md): Deprecated. Number of entries per channel (1-based). The number of entries must be greater than or equal to 2.
- [entrySize](cmvideocardgammatable/1560361-entrysize.md): Deprecated. Size in bytes of each entry.
