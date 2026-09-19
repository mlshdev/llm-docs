> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/mpcriticalregionid

# MPCriticalRegionID

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Represents a critical region ID, which Multiprocessing Services uses to manipulate critical regions.

## Declaration

```objectivec
typedef struct OpaqueMPCriticalRegionID *MPCriticalRegionID;
```

<a id="discussion"></a>

## Discussion

You obtain a critical region ID by calling the function [MPCreateCriticalRegion](1585663-mpcreatecriticalregion.md).
