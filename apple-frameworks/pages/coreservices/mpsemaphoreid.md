> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/mpsemaphoreid

# MPSemaphoreID

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Represents a semaphore ID, which Multiprocessing Services uses to manipulate semaphores.

## Declaration

```objectivec
typedef struct OpaqueMPSemaphoreID *MPSemaphoreID;
```

<a id="discussion"></a>

## Discussion

You obtain a semaphore ID by calling the function [MPCreateSemaphore](1585569-mpcreatesemaphore.md).
