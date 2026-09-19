> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/audiotoolbox/audiofilecomponentextensionisthisformatproc

# AudioFileComponentExtensionIsThisFormatProc (Swift)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** macOS

## Declaration

```swift
typealias AudioFileComponentExtensionIsThisFormatProc = (UnsafeMutableRawPointer, CFString, UnsafeMutablePointer<UInt32>) -> OSStatus
```

## See Also

### Checking the File Format

- [AudioFileComponentFileDataIsThisFormat(\_:\_:\_:\_:)](audiofilecomponentfiledataisthisformat%28________%29.md)
- [AudioFileComponentExtensionIsThisFormat(\_:\_:\_:)](audiofilecomponentextensionisthisformat%28______%29.md)
- [AudioFileComponentFileDataIsThisFormatProc](audiofilecomponentfiledataisthisformatproc.md)
- [GetPropertyFDF](getpropertyfdf.md)
- [GetPropertyInfoFDF](getpropertyinfofdf.md)

# AudioFileComponentExtensionIsThisFormatProc (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Type Alias  
**Availability:** macOS

## Declaration

```objectivec
typedef int (*)(void *, const struct __CFString *, unsigned int *) AudioFileComponentExtensionIsThisFormatProc;
```

## See Also

### Checking the File Format

- [AudioFileComponentFileDataIsThisFormat](audiofilecomponentfiledataisthisformat%28________%29.md)
- [AudioFileComponentExtensionIsThisFormat](audiofilecomponentextensionisthisformat%28______%29.md)
- [AudioFileComponentFileDataIsThisFormatProc](audiofilecomponentfiledataisthisformatproc.md)
- [GetPropertyFDF](getpropertyfdf.md)
- [GetPropertyInfoFDF](getpropertyinfofdf.md)
