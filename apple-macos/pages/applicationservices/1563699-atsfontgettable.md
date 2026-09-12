> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1563699-atsfontgettable](https://developer.apple.com/documentation/applicationservices/1563699-atsfontgettable)

# ATSFontGetTable(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1)

## Declaration

```swift
func ATSFontGetTable(_ iFont: ATSFontRef, _ iTag: FourCharCode, _ iOffset: ByteOffset, _ iBufferSize: Int, _ ioBuffer: UnsafeMutableRawPointer!, _ oSize: UnsafeMutablePointer<Int>!) -> OSStatus
```

# ATSFontGetTable (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1)

## Declaration

```objectivec
OSStatus ATSFontGetTable(ATSFontRef iFont, FourCharCode iTag, ByteOffset iOffset, ByteCount iBufferSize, void *ioBuffer, ByteCount *oSize);
```
