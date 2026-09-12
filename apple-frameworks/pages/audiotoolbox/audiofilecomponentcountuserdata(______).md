> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofilecomponentcountuserdata(_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiofilecomponentcountuserdata(_:_:_:))

# AudioFileComponentCountUserData(\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```swift
func AudioFileComponentCountUserData(_ inComponent: AudioFileComponent, _ inUserDataID: UInt32, _ outNumberItems: UnsafeMutablePointer<UInt32>) -> OSStatus
```

## See Also

### Accessing the User Data

- [AudioFileComponentGetUserData(\_:\_:\_:\_:\_:)](audiofilecomponentgetuserdata%28__________%29.md)
- [AudioFileComponentSetUserData(\_:\_:\_:\_:\_:)](audiofilecomponentsetuserdata%28__________%29.md)
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

# AudioFileComponentCountUserData (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```objectivec
extern OSStatus AudioFileComponentCountUserData(AudioFileComponent inComponent, UInt32 inUserDataID, UInt32 *outNumberItems);
```

## See Also

### Accessing the User Data

- [AudioFileComponentGetUserData](audiofilecomponentgetuserdata%28__________%29.md)
- [AudioFileComponentSetUserData](audiofilecomponentsetuserdata%28__________%29.md)
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
