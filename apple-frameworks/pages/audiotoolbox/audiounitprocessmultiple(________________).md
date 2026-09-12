> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiounitprocessmultiple(_:_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiounitprocessmultiple(_:_:_:_:_:_:_:_:))

# AudioUnitProcessMultiple(\_:\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```swift
func AudioUnitProcessMultiple(_ inUnit: AudioUnit, _ ioActionFlags: UnsafeMutablePointer<AudioUnitRenderActionFlags>?, _ inTimeStamp: UnsafePointer<AudioTimeStamp>, _ inNumberFrames: UInt32, _ inNumberInputBufferLists: UInt32, _ inInputBufferLists: UnsafeMutablePointer<UnsafePointer<AudioBufferList>>, _ inNumberOutputBufferLists: UInt32, _ ioOutputBufferLists: UnsafeMutablePointer<UnsafeMutablePointer<AudioBufferList>>) -> OSStatus
```

## See Also

### Initializing the Audio Unit

- [AudioUnitInitialize(\_:)](audiounitinitialize%28__%29.md): Initializes an audio unit
- [AudioUnitUninitialize(\_:)](audiounituninitialize%28__%29.md): Uninitializes an audio unit.
- [AudioUnitProcess(\_:\_:\_:\_:\_:)](audiounitprocess%28__________%29.md)
- [AudioUnitReset(\_:\_:\_:)](audiounitreset%28______%29.md): Resets an audio unit’s render state.
- [AudioUnit](audiounit.md): The data type for a plug-in component that provides audio processing or audio data generation.

# AudioUnitProcessMultiple (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```objectivec
extern OSStatus AudioUnitProcessMultiple(AudioUnit inUnit, AudioUnitRenderActionFlags *ioActionFlags, const AudioTimeStamp *inTimeStamp, UInt32 inNumberFrames, UInt32 inNumberInputBufferLists, const AudioBufferList **inInputBufferLists, UInt32 inNumberOutputBufferLists, AudioBufferList **ioOutputBufferLists);
```

## See Also

### Initializing the Audio Unit

- [AudioUnitInitialize](audiounitinitialize%28__%29.md): Initializes an audio unit
- [AudioUnitUninitialize](audiounituninitialize%28__%29.md): Uninitializes an audio unit.
- [AudioUnitProcess](audiounitprocess%28__________%29.md)
- [AudioUnitReset](audiounitreset%28______%29.md): Resets an audio unit’s render state.
- [AudioUnit](audiounit.md): The data type for a plug-in component that provides audio processing or audio data generation.
