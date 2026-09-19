> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/videodriverkit/iouservideostartstopflags/prewarm

# Prewarm

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Enumeration Case  
**Availability:** DriverKit 27.0+ beta

A flag that indicates starting or stopping for prewarming.

## Declaration

```objectivec
Prewarm
```

<a id="discussion"></a>

## Discussion

This option causes the minimal enabling or disabling of hardware, to minimize the transition to normal I/O operation.

## See Also

### Start/stop behaviors

- [None](none.md): Beta. A flag that indicates starting or stopping for normal I/O operation.
