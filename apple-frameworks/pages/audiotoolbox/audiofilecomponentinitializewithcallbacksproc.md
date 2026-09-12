> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofilecomponentinitializewithcallbacksproc](https://developer.apple.com/documentation/audiotoolbox/audiofilecomponentinitializewithcallbacksproc)

# AudioFileComponentInitializeWithCallbacksProc (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** macOS

## Declaration

```swift
typealias AudioFileComponentInitializeWithCallbacksProc = (UnsafeMutableRawPointer, UnsafeMutableRawPointer, AudioFile_ReadProc, AudioFile_WriteProc, AudioFile_GetSizeProc, AudioFile_SetSizeProc, UInt32, UnsafePointer<AudioStreamBasicDescription>, UInt32) -> OSStatus
```

## See Also

### Configuring the Callbacks

- [AudioFileComponentInitializeWithCallbacks(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](audiofilecomponentinitializewithcallbacks%28__________________%29.md)
- [Audio File Component Selectors](1404047-audio-file-component-selectors.md)

# AudioFileComponentInitializeWithCallbacksProc (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** macOS

## Declaration

```objectivec
typedef int (*)(void *, void *, int (*)(void *, long long, unsigned int, void *, unsigned int *), int (*)(void *, long long, unsigned int, const void *, unsigned int *), long long (*)(void *), int (*)(void *, long long), unsigned int, const struct AudioStreamBasicDescription *, unsigned int) AudioFileComponentInitializeWithCallbacksProc;
```

## See Also

### Configuring the Callbacks

- [AudioFileComponentInitializeWithCallbacks](audiofilecomponentinitializewithcallbacks%28__________________%29.md)
- [Audio File Component Selectors](1404047-audio-file-component-selectors.md)
