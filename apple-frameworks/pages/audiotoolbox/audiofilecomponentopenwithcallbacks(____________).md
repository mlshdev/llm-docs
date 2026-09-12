> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofilecomponentopenwithcallbacks(_:_:_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiofilecomponentopenwithcallbacks(_:_:_:_:_:_:))

# AudioFileComponentOpenWithCallbacks(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```swift
func AudioFileComponentOpenWithCallbacks(_ inComponent: AudioFileComponent, _ inClientData: UnsafeMutableRawPointer, _ inReadFunc: AudioFile_ReadProc, _ inWriteFunc: AudioFile_WriteProc, _ inGetSizeFunc: AudioFile_GetSizeProc, _ inSetSizeFunc: AudioFile_SetSizeProc) -> OSStatus
```

## See Also

### Opening and Closing Audio Files

- [AudioFileComponentCreateURL(\_:\_:\_:\_:)](audiofilecomponentcreateurl%28________%29.md)
- [AudioFileComponentOpenURL(\_:\_:\_:\_:)](audiofilecomponentopenurl%28________%29.md)
- [AudioFileComponentCloseFile(\_:)](audiofilecomponentclosefile%28__%29.md)
- [AudioFileComponentOptimize(\_:)](audiofilecomponentoptimize%28__%29.md)
- [AudioFileComponent](audiofilecomponent.md)
- [AudioFileComponentPropertyID](audiofilecomponentpropertyid.md)
- [AudioFileComponentCreateURLProc](audiofilecomponentcreateurlproc.md)
- [AudioFileComponentOpenWithCallbacksProc](audiofilecomponentopenwithcallbacksproc.md)
- [AudioFileComponentOpenURLProc](audiofilecomponentopenurlproc.md)
- [AudioFileComponentCloseProc](audiofilecomponentcloseproc.md)
- [AudioFileComponentOptimizeProc](audiofilecomponentoptimizeproc.md)

# AudioFileComponentOpenWithCallbacks (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```objectivec
extern OSStatus AudioFileComponentOpenWithCallbacks(AudioFileComponent inComponent, void *inClientData, AudioFile_ReadProc inReadFunc, AudioFile_WriteProc inWriteFunc, AudioFile_GetSizeProc inGetSizeFunc, AudioFile_SetSizeProc inSetSizeFunc);
```

## See Also

### Opening and Closing Audio Files

- [AudioFileComponentCreateURL](audiofilecomponentcreateurl%28________%29.md)
- [AudioFileComponentOpenURL](audiofilecomponentopenurl%28________%29.md)
- [AudioFileComponentCloseFile](audiofilecomponentclosefile%28__%29.md)
- [AudioFileComponentOptimize](audiofilecomponentoptimize%28__%29.md)
- [AudioFileComponent](audiofilecomponent.md)
- [AudioFileComponentPropertyID](audiofilecomponentpropertyid.md)
- [AudioFileComponentCreateURLProc](audiofilecomponentcreateurlproc.md)
- [AudioFileComponentOpenWithCallbacksProc](audiofilecomponentopenwithcallbacksproc.md)
- [AudioFileComponentOpenURLProc](audiofilecomponentopenurlproc.md)
- [AudioFileComponentCloseProc](audiofilecomponentcloseproc.md)
- [AudioFileComponentOptimizeProc](audiofilecomponentoptimizeproc.md)
