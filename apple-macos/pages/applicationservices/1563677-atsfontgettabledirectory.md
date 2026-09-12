> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1563677-atsfontgettabledirectory](https://developer.apple.com/documentation/applicationservices/1563677-atsfontgettabledirectory)

# ATSFontGetTableDirectory(\_:\_:\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1)

## Declaration

```swift
func ATSFontGetTableDirectory(_ iFont: ATSFontRef, _ iBufferSize: Int, _ ioBuffer: UnsafeMutableRawPointer!, _ oSize: UnsafeMutablePointer<Int>!) -> OSStatus
```

# ATSFontGetTableDirectory (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1)

## Declaration

```objectivec
OSStatus ATSFontGetTableDirectory(ATSFontRef iFont, ByteCount iBufferSize, void *ioBuffer, ByteCount *oSize);
```
