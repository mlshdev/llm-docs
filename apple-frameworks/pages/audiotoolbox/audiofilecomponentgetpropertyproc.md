> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofilecomponentgetpropertyproc](https://developer.apple.com/documentation/audiotoolbox/audiofilecomponentgetpropertyproc)

# AudioFileComponentGetPropertyProc (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** macOS

## Declaration

```swift
typealias AudioFileComponentGetPropertyProc = (UnsafeMutableRawPointer, AudioFileComponentPropertyID, UnsafeMutablePointer<UInt32>, UnsafeMutableRawPointer) -> OSStatus
```

## See Also

### Accessing Properties

- [AudioFileComponentGetProperty(\_:\_:\_:\_:)](audiofilecomponentgetproperty%28________%29.md)
- [AudioFileComponentGetPropertyInfo(\_:\_:\_:\_:)](audiofilecomponentgetpropertyinfo%28________%29.md)
- [AudioFileComponentSetProperty(\_:\_:\_:\_:)](audiofilecomponentsetproperty%28________%29.md)
- [AudioFileComponentGetPropertyInfoProc](audiofilecomponentgetpropertyinfoproc.md)
- [AudioFileComponentSetPropertyProc](audiofilecomponentsetpropertyproc.md)
- [Audio File Component Specific Properties](1404186-audio-file-component-specific-pr.md)

# AudioFileComponentGetPropertyProc (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** macOS

## Declaration

```objectivec
typedef int (*)(void *, unsigned int, unsigned int *, void *) AudioFileComponentGetPropertyProc;
```

## See Also

### Accessing Properties

- [AudioFileComponentGetProperty](audiofilecomponentgetproperty%28________%29.md)
- [AudioFileComponentGetPropertyInfo](audiofilecomponentgetpropertyinfo%28________%29.md)
- [AudioFileComponentSetProperty](audiofilecomponentsetproperty%28________%29.md)
- [AudioFileComponentGetPropertyInfoProc](audiofilecomponentgetpropertyinfoproc.md)
- [AudioFileComponentSetPropertyProc](audiofilecomponentsetpropertyproc.md)
- [Audio File Component Specific Properties](1404186-audio-file-component-specific-pr.md)
