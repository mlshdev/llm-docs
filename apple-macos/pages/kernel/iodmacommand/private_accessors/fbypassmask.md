> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iodmacommand/private_accessors/fbypassmask

# fBypassMask

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
UInt64 fBypassMask;
```

<a id="overview"></a>

## Overview

Mask to be ored into the address to bypass the given iommu's mapping.

## See Also

### Fields

- [fMemory](fmemory.md)
- [reserved](reserved.md)
- [fRefCon](frefcon.md)
- [fOutSeg](foutseg.md)
- [fNumSegments](fnumsegments.md)
- [fNumAddressBits](fnumaddressbits.md)
- [fMaxTransferSize](fmaxtransfersize.md)
- [fMaxSegmentSize](fmaxsegmentsize.md)
- [fMappingOptions](fmappingoptions.md)
- [fAlignMask](falignmask.md)
- [fActive](factive.md)
- [fMapper](fmapper.md)
