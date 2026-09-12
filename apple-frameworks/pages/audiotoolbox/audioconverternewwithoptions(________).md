> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audioconverternewwithoptions(_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audioconverternewwithoptions(_:_:_:_:))

# AudioConverterNewWithOptions(\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

## Declaration

```swift
func AudioConverterNewWithOptions(_ inSourceFormat: UnsafePointer<AudioStreamBasicDescription>, _ inDestinationFormat: UnsafePointer<AudioStreamBasicDescription>, _ inOptions: AudioConverterOptions, _ outAudioConverter: UnsafeMutablePointer<AudioConverterRef?>) -> OSStatus
```

## See Also

### Functions

- [AudioComponentValidateWithResults(\_:\_:\_:)](audiocomponentvalidatewithresults%28______%29.md)
- [AudioConverterPrepare(\_:\_:\_:)](audioconverterprepare%28______%29.md)
- [AudioFileComponentGetUserDataAtOffset(\_:\_:\_:\_:\_:\_:)](audiofilecomponentgetuserdataatoffset%28____________%29.md)
- [AudioFileComponentGetUserDataSize64(\_:\_:\_:\_:)](audiofilecomponentgetuserdatasize64%28________%29.md)

# AudioConverterNewWithOptions (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

## Declaration

```objectivec
extern OSStatus AudioConverterNewWithOptions(const AudioStreamBasicDescription *inSourceFormat, const AudioStreamBasicDescription *inDestinationFormat, AudioConverterOptions inOptions, AudioConverterRef*outAudioConverter);
```

## See Also

### Functions

- [AudioComponentValidateWithResults](audiocomponentvalidatewithresults%28______%29.md)
- [AudioConverterPrepare](audioconverterprepare%28______%29.md)
- [AudioFileComponentGetUserDataAtOffset](audiofilecomponentgetuserdataatoffset%28____________%29.md)
- [AudioFileComponentGetUserDataSize64](audiofilecomponentgetuserdatasize64%28________%29.md)
