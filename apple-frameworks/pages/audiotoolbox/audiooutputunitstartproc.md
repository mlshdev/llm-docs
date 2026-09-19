> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/audiotoolbox/audiooutputunitstartproc

# AudioOutputUnitStartProc (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```swift
typealias AudioOutputUnitStartProc = (UnsafeMutableRawPointer) -> OSStatus
```

## See Also

### Starting and Stopping Output

- [AudioOutputUnitStart(\_:)](audiooutputunitstart%28__%29.md): Starts an I/O audio unit, which in turn starts the audio unit processing graph that it is connected to.
- [AudioOutputUnitStop(\_:)](audiooutputunitstop%28__%29.md): Stops an I/O audio unit, which in turn stops the audio unit processing graph that it is connected to.
- [AudioOutputUnitStopProc](audiooutputunitstopproc.md)

# AudioOutputUnitStartProc (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```objectivec
typedef int (*)(void *) AudioOutputUnitStartProc;
```

## See Also

### Starting and Stopping Output

- [AudioOutputUnitStart](audiooutputunitstart%28__%29.md): Starts an I/O audio unit, which in turn starts the audio unit processing graph that it is connected to.
- [AudioOutputUnitStop](audiooutputunitstop%28__%29.md): Stops an I/O audio unit, which in turn stops the audio unit processing graph that it is connected to.
- [AudioOutputUnitStopProc](audiooutputunitstopproc.md)
