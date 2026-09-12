> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofilecomponentremoveuserdata(_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiofilecomponentremoveuserdata(_:_:_:))

# AudioFileComponentRemoveUserData(\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.5+

## Declaration

```swift
func AudioFileComponentRemoveUserData(_ inComponent: AudioFileComponent, _ inUserDataID: UInt32, _ inIndex: UInt32) -> OSStatus
```

## See Also

### Accessing the User Data

- [AudioFileComponentGetUserData(\_:\_:\_:\_:\_:)](audiofilecomponentgetuserdata%28__________%29.md)
- [AudioFileComponentSetUserData(\_:\_:\_:\_:\_:)](audiofilecomponentsetuserdata%28__________%29.md)
- [AudioFileComponentCountUserData(\_:\_:\_:)](audiofilecomponentcountuserdata%28______%29.md)
- [AudioFileComponentGetUserDataSize(\_:\_:\_:\_:)](audiofilecomponentgetuserdatasize%28________%29.md)
- [AudioFileComponentCountUserDataProc](audiofilecomponentcountuserdataproc.md)
- [AudioFileComponentGetUserDataProc](audiofilecomponentgetuserdataproc.md)
- [AudioFileComponentGetUserDataSizeProc](audiofilecomponentgetuserdatasizeproc.md)
- [AudioFileComponentRemoveUserDataProc](audiofilecomponentremoveuserdataproc.md)
- [AudioFileComponentSetUserDataProc](audiofilecomponentsetuserdataproc.md)
- [CountUserDataFDF](countuserdatafdf.md)
- [GetUserDataFDF](getuserdatafdf.md)
- [GetUserDataSizeFDF](getuserdatasizefdf.md)

# AudioFileComponentRemoveUserData (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.5+

## Declaration

```objectivec
extern OSStatus AudioFileComponentRemoveUserData(AudioFileComponent inComponent, UInt32 inUserDataID, UInt32 inIndex);
```

## See Also

### Accessing the User Data

- [AudioFileComponentGetUserData](audiofilecomponentgetuserdata%28__________%29.md)
- [AudioFileComponentSetUserData](audiofilecomponentsetuserdata%28__________%29.md)
- [AudioFileComponentCountUserData](audiofilecomponentcountuserdata%28______%29.md)
- [AudioFileComponentGetUserDataSize](audiofilecomponentgetuserdatasize%28________%29.md)
- [AudioFileComponentCountUserDataProc](audiofilecomponentcountuserdataproc.md)
- [AudioFileComponentGetUserDataProc](audiofilecomponentgetuserdataproc.md)
- [AudioFileComponentGetUserDataSizeProc](audiofilecomponentgetuserdatasizeproc.md)
- [AudioFileComponentRemoveUserDataProc](audiofilecomponentremoveuserdataproc.md)
- [AudioFileComponentSetUserDataProc](audiofilecomponentsetuserdataproc.md)
- [CountUserDataFDF](countuserdatafdf.md)
- [GetUserDataFDF](getuserdatafdf.md)
- [GetUserDataSizeFDF](getuserdatasizefdf.md)
