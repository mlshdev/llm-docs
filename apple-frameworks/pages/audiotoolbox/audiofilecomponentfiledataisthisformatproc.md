> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofilecomponentfiledataisthisformatproc](https://developer.apple.com/documentation/audiotoolbox/audiofilecomponentfiledataisthisformatproc)

# AudioFileComponentFileDataIsThisFormatProc (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** macOS

## Declaration

```swift
typealias AudioFileComponentFileDataIsThisFormatProc = (UnsafeMutableRawPointer, UInt32, UnsafeRawPointer, UnsafeMutablePointer<UInt32>) -> OSStatus
```

## See Also

### Checking the File Format

- [AudioFileComponentFileDataIsThisFormat(\_:\_:\_:\_:)](audiofilecomponentfiledataisthisformat%28________%29.md)
- [AudioFileComponentExtensionIsThisFormat(\_:\_:\_:)](audiofilecomponentextensionisthisformat%28______%29.md)
- [AudioFileComponentExtensionIsThisFormatProc](audiofilecomponentextensionisthisformatproc.md)
- [GetPropertyFDF](getpropertyfdf.md)
- [GetPropertyInfoFDF](getpropertyinfofdf.md)

# AudioFileComponentFileDataIsThisFormatProc (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** macOS

## Declaration

```objectivec
typedef int (*)(void *, unsigned int, const void *, unsigned int *) AudioFileComponentFileDataIsThisFormatProc;
```

## See Also

### Checking the File Format

- [AudioFileComponentFileDataIsThisFormat](audiofilecomponentfiledataisthisformat%28________%29.md)
- [AudioFileComponentExtensionIsThisFormat](audiofilecomponentextensionisthisformat%28______%29.md)
- [AudioFileComponentExtensionIsThisFormatProc](audiofilecomponentextensionisthisformatproc.md)
- [GetPropertyFDF](getpropertyfdf.md)
- [GetPropertyInfoFDF](getpropertyinfofdf.md)
