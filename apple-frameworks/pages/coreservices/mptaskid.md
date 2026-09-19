> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/mptaskid

# MPTaskID

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Represents a task ID.

## Declaration

```objectivec
typedef struct OpaqueMPTaskID *MPTaskID;
```

<a id="discussion"></a>

## Discussion

You obtain a task ID by calling the function [MPCreateTask](1585779-mpcreatetask.md).
