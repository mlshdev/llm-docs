> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudio/catapdescription/initmonomixdownofprocesses:

# initMonoMixdownOfProcesses:

**Interface language:** Objective-C

**Framework:** Core Audio  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 15.0+ · macOS 12.0+

## Declaration

```objectivec
- (instancetype) initMonoMixdownOfProcesses:(NSArray<NSNumber *> *) processesObjectIDsToIncludeInTap;
```

## Parameters

- `processesObjectIDsToIncludeInTap`: An NSArray of NSNumbers where each NSNumber holds an AudioObjectID of the process object to include in the tap

<a id="discussion"></a>

## Discussion

Mix all given process audio streams audio to mono.
