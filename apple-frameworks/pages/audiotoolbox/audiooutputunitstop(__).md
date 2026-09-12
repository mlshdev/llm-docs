> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiooutputunitstop(_:)](https://developer.apple.com/documentation/audiotoolbox/audiooutputunitstop(_:))

# AudioOutputUnitStop(\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+

Stops an I/O audio unit, which in turn stops the audio unit processing graph that it is connected to.

## Declaration

```swift
func AudioOutputUnitStop(_ ci: AudioUnit) -> OSStatus
```

## Parameters

- `ci`: The I/O audio unit to stop.

<a id="return-value"></a>

## Return Value

A result code.

## See Also

### Starting and Stopping Output

- [AudioOutputUnitStart(\_:)](audiooutputunitstart%28__%29.md): Starts an I/O audio unit, which in turn starts the audio unit processing graph that it is connected to.
- [AudioOutputUnitStartProc](audiooutputunitstartproc.md)
- [AudioOutputUnitStopProc](audiooutputunitstopproc.md)

# AudioOutputUnitStop (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+

Stops an I/O audio unit, which in turn stops the audio unit processing graph that it is connected to.

## Declaration

```objectivec
extern OSStatus AudioOutputUnitStop(AudioUnit ci);
```

## Parameters

- `ci`: The I/O audio unit to stop.

<a id="return-value"></a>

## Return Value

A result code.

## See Also

### Starting and Stopping Output

- [AudioOutputUnitStart](audiooutputunitstart%28__%29.md): Starts an I/O audio unit, which in turn starts the audio unit processing graph that it is connected to.
- [AudioOutputUnitStartProc](audiooutputunitstartproc.md)
- [AudioOutputUnitStopProc](audiooutputunitstopproc.md)
