> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofilecomponentsetpropertyproc](https://developer.apple.com/documentation/audiotoolbox/audiofilecomponentsetpropertyproc)

# AudioFileComponentSetPropertyProc (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** macOS

## Declaration

```swift
typealias AudioFileComponentSetPropertyProc = (UnsafeMutableRawPointer, AudioFileComponentPropertyID, UInt32, UnsafeRawPointer) -> OSStatus
```

## See Also

### Accessing Properties

- [AudioFileComponentGetProperty(\_:\_:\_:\_:)](audiofilecomponentgetproperty%28________%29.md)
- [AudioFileComponentGetPropertyInfo(\_:\_:\_:\_:)](audiofilecomponentgetpropertyinfo%28________%29.md)
- [AudioFileComponentSetProperty(\_:\_:\_:\_:)](audiofilecomponentsetproperty%28________%29.md)
- [AudioFileComponentGetPropertyInfoProc](audiofilecomponentgetpropertyinfoproc.md)
- [AudioFileComponentGetPropertyProc](audiofilecomponentgetpropertyproc.md)
- [Audio File Component Specific Properties](1404186-audio-file-component-specific-pr.md)

# AudioFileComponentSetPropertyProc (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** macOS

## Declaration

```objectivec
typedef int (*)(void *, unsigned int, unsigned int, const void *) AudioFileComponentSetPropertyProc;
```

## See Also

### Accessing Properties

- [AudioFileComponentGetProperty](audiofilecomponentgetproperty%28________%29.md)
- [AudioFileComponentGetPropertyInfo](audiofilecomponentgetpropertyinfo%28________%29.md)
- [AudioFileComponentSetProperty](audiofilecomponentsetproperty%28________%29.md)
- [AudioFileComponentGetPropertyInfoProc](audiofilecomponentgetpropertyinfoproc.md)
- [AudioFileComponentGetPropertyProc](audiofilecomponentgetpropertyproc.md)
- [Audio File Component Specific Properties](1404186-audio-file-component-specific-pr.md)
