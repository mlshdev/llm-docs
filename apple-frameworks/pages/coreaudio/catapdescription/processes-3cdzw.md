> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudio/catapdescription/processes-3cdzw

# processes

**Interface language:** Objective-C

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.0+ · macOS 12.0+

## Declaration

```objectivec
@property (atomic, copy, readwrite) NSArray<NSNumber *> * processes;
```

<a id="discussion"></a>

## Discussion

An NSArray of NSNumbers where each NSNumber holds the AudioObjectID of a process object to tap or exclude.
