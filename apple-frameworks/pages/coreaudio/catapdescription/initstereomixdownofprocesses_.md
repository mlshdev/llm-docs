> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/catapdescription/initstereomixdownofprocesses:](https://developer.apple.com/documentation/coreaudio/catapdescription/initstereomixdownofprocesses:)

# initStereoMixdownOfProcesses:

**Interface language:** Objective-C

**Framework:** Core Audio  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 15.0+ · macOS 12.0+

## Declaration

```objectivec
- (instancetype) initStereoMixdownOfProcesses:(NSArray<NSNumber *> *) processesObjectIDsToIncludeInTap;
```

## Parameters

- `processesObjectIDsToIncludeInTap`: An NSArray of NSNumbers where each NSNumber holds an AudioObjectID of the process object to include in the tap

<a id="discussion"></a>

## Discussion

Mix all given process audio streams down to stereo.  Mono sources will be duplicated in both right and left channels.
