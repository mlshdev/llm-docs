> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofilecomponentopenurl(_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiofilecomponentopenurl(_:_:_:_:))

# AudioFileComponentOpenURL(\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.5+

## Declaration

```swift
func AudioFileComponentOpenURL(_ inComponent: AudioFileComponent, _ inFileRef: CFURL, _ inPermissions: Int8, _ inFileDescriptor: Int32) -> OSStatus
```

## See Also

### Opening and Closing Audio Files

- [AudioFileComponentCreateURL(\_:\_:\_:\_:)](audiofilecomponentcreateurl%28________%29.md)
- [AudioFileComponentOpenWithCallbacks(\_:\_:\_:\_:\_:\_:)](audiofilecomponentopenwithcallbacks%28____________%29.md)
- [AudioFileComponentCloseFile(\_:)](audiofilecomponentclosefile%28__%29.md)
- [AudioFileComponentOptimize(\_:)](audiofilecomponentoptimize%28__%29.md)
- [AudioFileComponent](audiofilecomponent.md)
- [AudioFileComponentPropertyID](audiofilecomponentpropertyid.md)
- [AudioFileComponentCreateURLProc](audiofilecomponentcreateurlproc.md)
- [AudioFileComponentOpenWithCallbacksProc](audiofilecomponentopenwithcallbacksproc.md)
- [AudioFileComponentOpenURLProc](audiofilecomponentopenurlproc.md)
- [AudioFileComponentCloseProc](audiofilecomponentcloseproc.md)
- [AudioFileComponentOptimizeProc](audiofilecomponentoptimizeproc.md)

# AudioFileComponentOpenURL (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.5+

## Declaration

```objectivec
extern OSStatus AudioFileComponentOpenURL(AudioFileComponent inComponent, CFURLRef inFileRef, SInt8 inPermissions, int inFileDescriptor);
```

## See Also

### Opening and Closing Audio Files

- [AudioFileComponentCreateURL](audiofilecomponentcreateurl%28________%29.md)
- [AudioFileComponentOpenWithCallbacks](audiofilecomponentopenwithcallbacks%28____________%29.md)
- [AudioFileComponentCloseFile](audiofilecomponentclosefile%28__%29.md)
- [AudioFileComponentOptimize](audiofilecomponentoptimize%28__%29.md)
- [AudioFileComponent](audiofilecomponent.md)
- [AudioFileComponentPropertyID](audiofilecomponentpropertyid.md)
- [AudioFileComponentCreateURLProc](audiofilecomponentcreateurlproc.md)
- [AudioFileComponentOpenWithCallbacksProc](audiofilecomponentopenwithcallbacksproc.md)
- [AudioFileComponentOpenURLProc](audiofilecomponentopenurlproc.md)
- [AudioFileComponentCloseProc](audiofilecomponentcloseproc.md)
- [AudioFileComponentOptimizeProc](audiofilecomponentoptimizeproc.md)
