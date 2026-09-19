> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/audiotoolbox/audiofilecomponentgetglobalinfosize(_:_:_:_:_:)

# AudioFileComponentGetGlobalInfoSize(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```swift
func AudioFileComponentGetGlobalInfoSize(_ inComponent: AudioFileComponent, _ inPropertyID: AudioFileComponentPropertyID, _ inSpecifierSize: UInt32, _ inSpecifier: UnsafeRawPointer?, _ outPropertySize: UnsafeMutablePointer<UInt32>) -> OSStatus
```

## See Also

### Getting the Global Information

- [AudioFileComponentGetGlobalInfo(\_:\_:\_:\_:\_:\_:)](audiofilecomponentgetglobalinfo%28____________%29.md)
- [AudioFileComponentGetGlobalInfoProc](audiofilecomponentgetglobalinfoproc.md)
- [AudioFileComponentGetGlobalInfoSizeProc](audiofilecomponentgetglobalinfosizeproc.md)

# AudioFileComponentGetGlobalInfoSize (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```objectivec
extern OSStatus AudioFileComponentGetGlobalInfoSize(AudioFileComponent inComponent, AudioFileComponentPropertyID inPropertyID, UInt32 inSpecifierSize, const void *inSpecifier, UInt32 *outPropertySize);
```

## See Also

### Getting the Global Information

- [AudioFileComponentGetGlobalInfo](audiofilecomponentgetglobalinfo%28____________%29.md)
- [AudioFileComponentGetGlobalInfoProc](audiofilecomponentgetglobalinfoproc.md)
- [AudioFileComponentGetGlobalInfoSizeProc](audiofilecomponentgetglobalinfosizeproc.md)
