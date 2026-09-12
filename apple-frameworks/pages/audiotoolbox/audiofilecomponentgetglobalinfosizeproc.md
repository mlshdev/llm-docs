> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofilecomponentgetglobalinfosizeproc](https://developer.apple.com/documentation/audiotoolbox/audiofilecomponentgetglobalinfosizeproc)

# AudioFileComponentGetGlobalInfoSizeProc (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** macOS

## Declaration

```swift
typealias AudioFileComponentGetGlobalInfoSizeProc = (UnsafeMutableRawPointer, AudioFileComponentPropertyID, UInt32, UnsafeRawPointer?, UnsafeMutablePointer<UInt32>) -> OSStatus
```

## See Also

### Getting the Global Information

- [AudioFileComponentGetGlobalInfo(\_:\_:\_:\_:\_:\_:)](audiofilecomponentgetglobalinfo%28____________%29.md)
- [AudioFileComponentGetGlobalInfoSize(\_:\_:\_:\_:\_:)](audiofilecomponentgetglobalinfosize%28__________%29.md)
- [AudioFileComponentGetGlobalInfoProc](audiofilecomponentgetglobalinfoproc.md)

# AudioFileComponentGetGlobalInfoSizeProc (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** macOS

## Declaration

```objectivec
typedef int (*)(void *, unsigned int, unsigned int, const void *, unsigned int *) AudioFileComponentGetGlobalInfoSizeProc;
```

## See Also

### Getting the Global Information

- [AudioFileComponentGetGlobalInfo](audiofilecomponentgetglobalinfo%28____________%29.md)
- [AudioFileComponentGetGlobalInfoSize](audiofilecomponentgetglobalinfosize%28__________%29.md)
- [AudioFileComponentGetGlobalInfoProc](audiofilecomponentgetglobalinfoproc.md)
