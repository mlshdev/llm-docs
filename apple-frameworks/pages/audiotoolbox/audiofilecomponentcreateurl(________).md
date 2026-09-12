> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofilecomponentcreateurl(_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiofilecomponentcreateurl(_:_:_:_:))

# AudioFileComponentCreateURL(\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.5+

## Declaration

```swift
func AudioFileComponentCreateURL(_ inComponent: AudioFileComponent, _ inFileRef: CFURL, _ inFormat: UnsafePointer<AudioStreamBasicDescription>, _ inFlags: UInt32) -> OSStatus
```

## See Also

### Opening and Closing Audio Files

- [AudioFileComponentOpenURL(\_:\_:\_:\_:)](audiofilecomponentopenurl%28________%29.md)
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

# AudioFileComponentCreateURL (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.5+

## Declaration

```objectivec
extern OSStatus AudioFileComponentCreateURL(AudioFileComponent inComponent, CFURLRef inFileRef, const AudioStreamBasicDescription *inFormat, UInt32 inFlags);
```

## See Also

### Opening and Closing Audio Files

- [AudioFileComponentOpenURL](audiofilecomponentopenurl%28________%29.md)
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
