> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofilecomponentcountuserdataproc](https://developer.apple.com/documentation/audiotoolbox/audiofilecomponentcountuserdataproc)

# AudioFileComponentCountUserDataProc (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** macOS

## Declaration

```swift
typealias AudioFileComponentCountUserDataProc = (UnsafeMutableRawPointer, UInt32, UnsafeMutablePointer<UInt32>) -> OSStatus
```

## See Also

### Accessing the User Data

- [AudioFileComponentGetUserData(\_:\_:\_:\_:\_:)](audiofilecomponentgetuserdata%28__________%29.md)
- [AudioFileComponentSetUserData(\_:\_:\_:\_:\_:)](audiofilecomponentsetuserdata%28__________%29.md)
- [AudioFileComponentCountUserData(\_:\_:\_:)](audiofilecomponentcountuserdata%28______%29.md)
- [AudioFileComponentGetUserDataSize(\_:\_:\_:\_:)](audiofilecomponentgetuserdatasize%28________%29.md)
- [AudioFileComponentRemoveUserData(\_:\_:\_:)](audiofilecomponentremoveuserdata%28______%29.md)
- [AudioFileComponentGetUserDataProc](audiofilecomponentgetuserdataproc.md)
- [AudioFileComponentGetUserDataSizeProc](audiofilecomponentgetuserdatasizeproc.md)
- [AudioFileComponentRemoveUserDataProc](audiofilecomponentremoveuserdataproc.md)
- [AudioFileComponentSetUserDataProc](audiofilecomponentsetuserdataproc.md)
- [CountUserDataFDF](countuserdatafdf.md)
- [GetUserDataFDF](getuserdatafdf.md)
- [GetUserDataSizeFDF](getuserdatasizefdf.md)

# AudioFileComponentCountUserDataProc (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** macOS

## Declaration

```objectivec
typedef int (*)(void *, unsigned int, unsigned int *) AudioFileComponentCountUserDataProc;
```

## See Also

### Accessing the User Data

- [AudioFileComponentGetUserData](audiofilecomponentgetuserdata%28__________%29.md)
- [AudioFileComponentSetUserData](audiofilecomponentsetuserdata%28__________%29.md)
- [AudioFileComponentCountUserData](audiofilecomponentcountuserdata%28______%29.md)
- [AudioFileComponentGetUserDataSize](audiofilecomponentgetuserdatasize%28________%29.md)
- [AudioFileComponentRemoveUserData](audiofilecomponentremoveuserdata%28______%29.md)
- [AudioFileComponentGetUserDataProc](audiofilecomponentgetuserdataproc.md)
- [AudioFileComponentGetUserDataSizeProc](audiofilecomponentgetuserdatasizeproc.md)
- [AudioFileComponentRemoveUserDataProc](audiofilecomponentremoveuserdataproc.md)
- [AudioFileComponentSetUserDataProc](audiofilecomponentsetuserdataproc.md)
- [CountUserDataFDF](countuserdatafdf.md)
- [GetUserDataFDF](getuserdatafdf.md)
- [GetUserDataSizeFDF](getuserdatasizefdf.md)
