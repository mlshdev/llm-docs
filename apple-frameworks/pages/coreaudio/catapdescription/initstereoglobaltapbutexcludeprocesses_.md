> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudio/catapdescription/initstereoglobaltapbutexcludeprocesses:

# initStereoGlobalTapButExcludeProcesses:

**Interface language:** Objective-C

**Framework:** Core Audio  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 15.0+ · macOS 12.0+

## Declaration

```objectivec
- (instancetype) initStereoGlobalTapButExcludeProcesses:(NSArray<NSNumber *> *) processesObjectIDsToExcludeFromTap;
```

## Parameters

- `processesObjectIDsToExcludeFromTap`: An NSArray of NSNumbers where each NSNumber holds an AudioObjectID of the process object to exclude from the tap. All other processes that output audio will be included in the tap.

<a id="discussion"></a>

## Discussion

Mix all processes to a stereo stream except the given processes.  Mono sources will be duplicated in both right and left channels.
