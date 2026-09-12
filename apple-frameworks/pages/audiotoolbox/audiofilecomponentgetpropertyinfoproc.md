> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofilecomponentgetpropertyinfoproc](https://developer.apple.com/documentation/audiotoolbox/audiofilecomponentgetpropertyinfoproc)

# AudioFileComponentGetPropertyInfoProc (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** macOS

## Declaration

```swift
typealias AudioFileComponentGetPropertyInfoProc = (UnsafeMutableRawPointer, AudioFileComponentPropertyID, UnsafeMutablePointer<UInt32>?, UnsafeMutablePointer<UInt32>?) -> OSStatus
```

## See Also

### Accessing Properties

- [AudioFileComponentGetProperty(\_:\_:\_:\_:)](audiofilecomponentgetproperty%28________%29.md)
- [AudioFileComponentGetPropertyInfo(\_:\_:\_:\_:)](audiofilecomponentgetpropertyinfo%28________%29.md)
- [AudioFileComponentSetProperty(\_:\_:\_:\_:)](audiofilecomponentsetproperty%28________%29.md)
- [AudioFileComponentGetPropertyProc](audiofilecomponentgetpropertyproc.md)
- [AudioFileComponentSetPropertyProc](audiofilecomponentsetpropertyproc.md)
- [Audio File Component Specific Properties](1404186-audio-file-component-specific-pr.md)

# AudioFileComponentGetPropertyInfoProc (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** macOS

## Declaration

```objectivec
typedef int (*)(void *, unsigned int, unsigned int *, unsigned int *) AudioFileComponentGetPropertyInfoProc;
```

## See Also

### Accessing Properties

- [AudioFileComponentGetProperty](audiofilecomponentgetproperty%28________%29.md)
- [AudioFileComponentGetPropertyInfo](audiofilecomponentgetpropertyinfo%28________%29.md)
- [AudioFileComponentSetProperty](audiofilecomponentsetproperty%28________%29.md)
- [AudioFileComponentGetPropertyProc](audiofilecomponentgetpropertyproc.md)
- [AudioFileComponentSetPropertyProc](audiofilecomponentsetpropertyproc.md)
- [Audio File Component Specific Properties](1404186-audio-file-component-specific-pr.md)
