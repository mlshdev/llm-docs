> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/mptimerid

# MPTimerID

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Represents a timer ID.

## Declaration

```objectivec
typedef struct OpaqueMPTimerID *MPTimerID;
```

<a id="discussion"></a>

## Discussion

You obtain a timer ID by calling the function [MPCreateTimer](1585748-mpcreatetimer.md).
