> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofilecomponentgetuserdatasize64(_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiofilecomponentgetuserdatasize64(_:_:_:_:))

# AudioFileComponentGetUserDataSize64(\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 14.0+

## Declaration

```swift
func AudioFileComponentGetUserDataSize64(_ inComponent: AudioFileComponent, _ inUserDataID: UInt32, _ inIndex: UInt32, _ outUserDataSize: UnsafeMutablePointer<UInt64>) -> OSStatus
```

## See Also

### Functions

- [AudioComponentValidateWithResults(\_:\_:\_:)](audiocomponentvalidatewithresults%28______%29.md)
- [AudioConverterNewWithOptions(\_:\_:\_:\_:)](audioconverternewwithoptions%28________%29.md)
- [AudioConverterPrepare(\_:\_:\_:)](audioconverterprepare%28______%29.md)
- [AudioFileComponentGetUserDataAtOffset(\_:\_:\_:\_:\_:\_:)](audiofilecomponentgetuserdataatoffset%28____________%29.md)

# AudioFileComponentGetUserDataSize64 (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 14.0+

## Declaration

```objectivec
extern OSStatus AudioFileComponentGetUserDataSize64(AudioFileComponent inComponent, UInt32 inUserDataID, UInt32 inIndex, UInt64 *outUserDataSize);
```

## See Also

### Functions

- [AudioComponentValidateWithResults](audiocomponentvalidatewithresults%28______%29.md)
- [AudioConverterNewWithOptions](audioconverternewwithoptions%28________%29.md)
- [AudioConverterPrepare](audioconverterprepare%28______%29.md)
- [AudioFileComponentGetUserDataAtOffset](audiofilecomponentgetuserdataatoffset%28____________%29.md)
