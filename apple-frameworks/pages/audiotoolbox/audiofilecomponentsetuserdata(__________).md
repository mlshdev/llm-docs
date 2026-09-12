> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofilecomponentsetuserdata(_:_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiofilecomponentsetuserdata(_:_:_:_:_:))

# AudioFileComponentSetUserData(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```swift
func AudioFileComponentSetUserData(_ inComponent: AudioFileComponent, _ inUserDataID: UInt32, _ inIndex: UInt32, _ inUserDataSize: UInt32, _ inUserData: UnsafeRawPointer) -> OSStatus
```

## See Also

### Accessing the User Data

- [AudioFileComponentGetUserData(\_:\_:\_:\_:\_:)](audiofilecomponentgetuserdata%28__________%29.md)
- [AudioFileComponentCountUserData(\_:\_:\_:)](audiofilecomponentcountuserdata%28______%29.md)
- [AudioFileComponentGetUserDataSize(\_:\_:\_:\_:)](audiofilecomponentgetuserdatasize%28________%29.md)
- [AudioFileComponentRemoveUserData(\_:\_:\_:)](audiofilecomponentremoveuserdata%28______%29.md)
- [AudioFileComponentCountUserDataProc](audiofilecomponentcountuserdataproc.md)
- [AudioFileComponentGetUserDataProc](audiofilecomponentgetuserdataproc.md)
- [AudioFileComponentGetUserDataSizeProc](audiofilecomponentgetuserdatasizeproc.md)
- [AudioFileComponentRemoveUserDataProc](audiofilecomponentremoveuserdataproc.md)
- [AudioFileComponentSetUserDataProc](audiofilecomponentsetuserdataproc.md)
- [CountUserDataFDF](countuserdatafdf.md)
- [GetUserDataFDF](getuserdatafdf.md)
- [GetUserDataSizeFDF](getuserdatasizefdf.md)

# AudioFileComponentSetUserData (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```objectivec
extern OSStatus AudioFileComponentSetUserData(AudioFileComponent inComponent, UInt32 inUserDataID, UInt32 inIndex, UInt32 inUserDataSize, const void *inUserData);
```

## See Also

### Accessing the User Data

- [AudioFileComponentGetUserData](audiofilecomponentgetuserdata%28__________%29.md)
- [AudioFileComponentCountUserData](audiofilecomponentcountuserdata%28______%29.md)
- [AudioFileComponentGetUserDataSize](audiofilecomponentgetuserdatasize%28________%29.md)
- [AudioFileComponentRemoveUserData](audiofilecomponentremoveuserdata%28______%29.md)
- [AudioFileComponentCountUserDataProc](audiofilecomponentcountuserdataproc.md)
- [AudioFileComponentGetUserDataProc](audiofilecomponentgetuserdataproc.md)
- [AudioFileComponentGetUserDataSizeProc](audiofilecomponentgetuserdatasizeproc.md)
- [AudioFileComponentRemoveUserDataProc](audiofilecomponentremoveuserdataproc.md)
- [AudioFileComponentSetUserDataProc](audiofilecomponentsetuserdataproc.md)
- [CountUserDataFDF](countuserdatafdf.md)
- [GetUserDataFDF](getuserdatafdf.md)
- [GetUserDataSizeFDF](getuserdatasizefdf.md)
