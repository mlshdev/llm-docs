> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofilecomponentsetproperty(_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiofilecomponentsetproperty(_:_:_:_:))

# AudioFileComponentSetProperty(\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```swift
func AudioFileComponentSetProperty(_ inComponent: AudioFileComponent, _ inPropertyID: AudioFileComponentPropertyID, _ inPropertyDataSize: UInt32, _ inPropertyData: UnsafeRawPointer) -> OSStatus
```

## See Also

### Accessing Properties

- [AudioFileComponentGetProperty(\_:\_:\_:\_:)](audiofilecomponentgetproperty%28________%29.md)
- [AudioFileComponentGetPropertyInfo(\_:\_:\_:\_:)](audiofilecomponentgetpropertyinfo%28________%29.md)
- [AudioFileComponentGetPropertyInfoProc](audiofilecomponentgetpropertyinfoproc.md)
- [AudioFileComponentGetPropertyProc](audiofilecomponentgetpropertyproc.md)
- [AudioFileComponentSetPropertyProc](audiofilecomponentsetpropertyproc.md)
- [Audio File Component Specific Properties](1404186-audio-file-component-specific-pr.md)

# AudioFileComponentSetProperty (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```objectivec
extern OSStatus AudioFileComponentSetProperty(AudioFileComponent inComponent, AudioFileComponentPropertyID inPropertyID, UInt32 inPropertyDataSize, const void *inPropertyData);
```

## See Also

### Accessing Properties

- [AudioFileComponentGetProperty](audiofilecomponentgetproperty%28________%29.md)
- [AudioFileComponentGetPropertyInfo](audiofilecomponentgetpropertyinfo%28________%29.md)
- [AudioFileComponentGetPropertyInfoProc](audiofilecomponentgetpropertyinfoproc.md)
- [AudioFileComponentGetPropertyProc](audiofilecomponentgetpropertyproc.md)
- [AudioFileComponentSetPropertyProc](audiofilecomponentsetpropertyproc.md)
- [Audio File Component Specific Properties](1404186-audio-file-component-specific-pr.md)
