> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofilecomponentgetproperty(_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiofilecomponentgetproperty(_:_:_:_:))

# AudioFileComponentGetProperty(\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```swift
func AudioFileComponentGetProperty(_ inComponent: AudioFileComponent, _ inPropertyID: AudioFileComponentPropertyID, _ ioPropertyDataSize: UnsafeMutablePointer<UInt32>, _ outPropertyData: UnsafeMutableRawPointer) -> OSStatus
```

## See Also

### Accessing Properties

- [AudioFileComponentGetPropertyInfo(\_:\_:\_:\_:)](audiofilecomponentgetpropertyinfo%28________%29.md)
- [AudioFileComponentSetProperty(\_:\_:\_:\_:)](audiofilecomponentsetproperty%28________%29.md)
- [AudioFileComponentGetPropertyInfoProc](audiofilecomponentgetpropertyinfoproc.md)
- [AudioFileComponentGetPropertyProc](audiofilecomponentgetpropertyproc.md)
- [AudioFileComponentSetPropertyProc](audiofilecomponentsetpropertyproc.md)
- [Audio File Component Specific Properties](1404186-audio-file-component-specific-pr.md)

# AudioFileComponentGetProperty (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```objectivec
extern OSStatus AudioFileComponentGetProperty(AudioFileComponent inComponent, AudioFileComponentPropertyID inPropertyID, UInt32 *ioPropertyDataSize, void *outPropertyData);
```

## See Also

### Accessing Properties

- [AudioFileComponentGetPropertyInfo](audiofilecomponentgetpropertyinfo%28________%29.md)
- [AudioFileComponentSetProperty](audiofilecomponentsetproperty%28________%29.md)
- [AudioFileComponentGetPropertyInfoProc](audiofilecomponentgetpropertyinfoproc.md)
- [AudioFileComponentGetPropertyProc](audiofilecomponentgetpropertyproc.md)
- [AudioFileComponentSetPropertyProc](audiofilecomponentsetpropertyproc.md)
- [Audio File Component Specific Properties](1404186-audio-file-component-specific-pr.md)
