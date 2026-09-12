> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofilecomponentextensionisthisformat(_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiofilecomponentextensionisthisformat(_:_:_:))

# AudioFileComponentExtensionIsThisFormat(\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```swift
func AudioFileComponentExtensionIsThisFormat(_ inComponent: AudioFileComponent, _ inExtension: CFString, _ outResult: UnsafeMutablePointer<UInt32>) -> OSStatus
```

## See Also

### Checking the File Format

- [AudioFileComponentFileDataIsThisFormat(\_:\_:\_:\_:)](audiofilecomponentfiledataisthisformat%28________%29.md)
- [AudioFileComponentExtensionIsThisFormatProc](audiofilecomponentextensionisthisformatproc.md)
- [AudioFileComponentFileDataIsThisFormatProc](audiofilecomponentfiledataisthisformatproc.md)
- [GetPropertyFDF](getpropertyfdf.md)
- [GetPropertyInfoFDF](getpropertyinfofdf.md)

# AudioFileComponentExtensionIsThisFormat (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```objectivec
extern OSStatus AudioFileComponentExtensionIsThisFormat(AudioFileComponent inComponent, CFStringRef inExtension, UInt32 *outResult);
```

## See Also

### Checking the File Format

- [AudioFileComponentFileDataIsThisFormat](audiofilecomponentfiledataisthisformat%28________%29.md)
- [AudioFileComponentExtensionIsThisFormatProc](audiofilecomponentextensionisthisformatproc.md)
- [AudioFileComponentFileDataIsThisFormatProc](audiofilecomponentfiledataisthisformatproc.md)
- [GetPropertyFDF](getpropertyfdf.md)
- [GetPropertyInfoFDF](getpropertyinfofdf.md)
