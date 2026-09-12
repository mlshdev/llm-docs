> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofilecomponentopenwithcallbacksproc](https://developer.apple.com/documentation/audiotoolbox/audiofilecomponentopenwithcallbacksproc)

# AudioFileComponentOpenWithCallbacksProc (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** macOS

## Declaration

```swift
typealias AudioFileComponentOpenWithCallbacksProc = (UnsafeMutableRawPointer, UnsafeMutableRawPointer, AudioFile_ReadProc, AudioFile_WriteProc, AudioFile_GetSizeProc, AudioFile_SetSizeProc) -> OSStatus
```

## See Also

### Opening and Closing Audio Files

- [AudioFileComponentCreateURL(\_:\_:\_:\_:)](audiofilecomponentcreateurl%28________%29.md)
- [AudioFileComponentOpenURL(\_:\_:\_:\_:)](audiofilecomponentopenurl%28________%29.md)
- [AudioFileComponentOpenWithCallbacks(\_:\_:\_:\_:\_:\_:)](audiofilecomponentopenwithcallbacks%28____________%29.md)
- [AudioFileComponentCloseFile(\_:)](audiofilecomponentclosefile%28__%29.md)
- [AudioFileComponentOptimize(\_:)](audiofilecomponentoptimize%28__%29.md)
- [AudioFileComponent](audiofilecomponent.md)
- [AudioFileComponentPropertyID](audiofilecomponentpropertyid.md)
- [AudioFileComponentCreateURLProc](audiofilecomponentcreateurlproc.md)
- [AudioFileComponentOpenURLProc](audiofilecomponentopenurlproc.md)
- [AudioFileComponentCloseProc](audiofilecomponentcloseproc.md)
- [AudioFileComponentOptimizeProc](audiofilecomponentoptimizeproc.md)

# AudioFileComponentOpenWithCallbacksProc (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** macOS

## Declaration

```objectivec
typedef int (*)(void *, void *, int (*)(void *, long long, unsigned int, void *, unsigned int *), int (*)(void *, long long, unsigned int, const void *, unsigned int *), long long (*)(void *), int (*)(void *, long long)) AudioFileComponentOpenWithCallbacksProc;
```

## See Also

### Opening and Closing Audio Files

- [AudioFileComponentCreateURL](audiofilecomponentcreateurl%28________%29.md)
- [AudioFileComponentOpenURL](audiofilecomponentopenurl%28________%29.md)
- [AudioFileComponentOpenWithCallbacks](audiofilecomponentopenwithcallbacks%28____________%29.md)
- [AudioFileComponentCloseFile](audiofilecomponentclosefile%28__%29.md)
- [AudioFileComponentOptimize](audiofilecomponentoptimize%28__%29.md)
- [AudioFileComponent](audiofilecomponent.md)
- [AudioFileComponentPropertyID](audiofilecomponentpropertyid.md)
- [AudioFileComponentCreateURLProc](audiofilecomponentcreateurlproc.md)
- [AudioFileComponentOpenURLProc](audiofilecomponentopenurlproc.md)
- [AudioFileComponentCloseProc](audiofilecomponentcloseproc.md)
- [AudioFileComponentOptimizeProc](audiofilecomponentoptimizeproc.md)
