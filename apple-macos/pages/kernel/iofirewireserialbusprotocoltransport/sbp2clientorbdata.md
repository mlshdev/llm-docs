> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iofirewireserialbusprotocoltransport/sbp2clientorbdata

# SBP2ClientOrbData

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
typedef struct {
      IOFireWireSBP2ORB *orb;
      SCSITaskIdentifier scsiTask;
      SCSIServiceResponse serviceResponse;
      SCSITaskStatus taskStatus;
      IOBufferMemoryDescriptor *quadletAlignedBuffer;
} SBP2ClientOrbData;
```

<a id="overview"></a>

## Overview

This structure is stuffed into the refcon so we can associate which IOFireWireSBP2ORB and SCSITaskIdentifier is completing.
