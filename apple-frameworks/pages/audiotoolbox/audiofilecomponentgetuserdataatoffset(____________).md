> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofilecomponentgetuserdataatoffset(_:_:_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiofilecomponentgetuserdataatoffset(_:_:_:_:_:_:))

# AudioFileComponentGetUserDataAtOffset(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 14.0+

## Declaration

```swift
func AudioFileComponentGetUserDataAtOffset(_ inComponent: AudioFileComponent, _ inUserDataID: UInt32, _ inIndex: UInt32, _ inOffset: Int64, _ ioUserDataSize: UnsafeMutablePointer<UInt32>, _ outUserData: UnsafeMutableRawPointer) -> OSStatus
```

## See Also

### Functions

- [AudioComponentValidateWithResults(\_:\_:\_:)](audiocomponentvalidatewithresults%28______%29.md)
- [AudioConverterNewWithOptions(\_:\_:\_:\_:)](audioconverternewwithoptions%28________%29.md)
- [AudioConverterPrepare(\_:\_:\_:)](audioconverterprepare%28______%29.md)
- [AudioFileComponentGetUserDataSize64(\_:\_:\_:\_:)](audiofilecomponentgetuserdatasize64%28________%29.md)

# AudioFileComponentGetUserDataAtOffset (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 14.0+

## Declaration

```objectivec
extern OSStatus AudioFileComponentGetUserDataAtOffset(AudioFileComponent inComponent, UInt32 inUserDataID, UInt32 inIndex, SInt64 inOffset, UInt32 *ioUserDataSize, void *outUserData);
```

## See Also

### Functions

- [AudioComponentValidateWithResults](audiocomponentvalidatewithresults%28______%29.md)
- [AudioConverterNewWithOptions](audioconverternewwithoptions%28________%29.md)
- [AudioConverterPrepare](audioconverterprepare%28______%29.md)
- [AudioFileComponentGetUserDataSize64](audiofilecomponentgetuserdatasize64%28________%29.md)
