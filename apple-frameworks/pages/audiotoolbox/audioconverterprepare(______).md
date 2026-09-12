> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audioconverterprepare(_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audioconverterprepare(_:_:_:))

# AudioConverterPrepare(\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

## Declaration

```swift
func AudioConverterPrepare(_ inFlags: UInt32, _ ioReserved: UnsafeMutableRawPointer?, _ inCompletionBlock: ((OSStatus) -> Void)?)
```

## See Also

### Functions

- [AudioComponentValidateWithResults(\_:\_:\_:)](audiocomponentvalidatewithresults%28______%29.md)
- [AudioConverterNewWithOptions(\_:\_:\_:\_:)](audioconverternewwithoptions%28________%29.md)
- [AudioFileComponentGetUserDataAtOffset(\_:\_:\_:\_:\_:\_:)](audiofilecomponentgetuserdataatoffset%28____________%29.md)
- [AudioFileComponentGetUserDataSize64(\_:\_:\_:\_:)](audiofilecomponentgetuserdatasize64%28________%29.md)

# AudioConverterPrepare (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

## Declaration

```objectivec
extern void AudioConverterPrepare(UInt32 inFlags, void *ioReserved, void (^inCompletionBlock)(OSStatus ));
```

## See Also

### Functions

- [AudioComponentValidateWithResults](audiocomponentvalidatewithresults%28______%29.md)
- [AudioConverterNewWithOptions](audioconverternewwithoptions%28________%29.md)
- [AudioFileComponentGetUserDataAtOffset](audiofilecomponentgetuserdataatoffset%28____________%29.md)
- [AudioFileComponentGetUserDataSize64](audiofilecomponentgetuserdatasize64%28________%29.md)
