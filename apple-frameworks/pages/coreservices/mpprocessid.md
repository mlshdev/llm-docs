> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/mpprocessid

# MPProcessID

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Represents a process ID.

## Declaration

```objectivec
typedef struct OpaqueMPProcessID *MPProcessID;
```

<a id="discussion"></a>

## Discussion

Note that this process ID is identical to the process ID (or context ID) handled by the Code Fragment Manager.
