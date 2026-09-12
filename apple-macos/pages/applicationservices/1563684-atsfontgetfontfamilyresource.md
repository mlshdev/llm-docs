> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1563684-atsfontgetfontfamilyresource](https://developer.apple.com/documentation/applicationservices/1563684-atsfontgetfontfamilyresource)

# ATSFontGetFontFamilyResource(\_:\_:\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1)

## Declaration

```swift
func ATSFontGetFontFamilyResource(_ iFont: ATSFontRef, _ iBufferSize: Int, _ ioBuffer: UnsafeMutableRawPointer!, _ oSize: UnsafeMutablePointer<Int>!) -> OSStatus
```

# ATSFontGetFontFamilyResource (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1)

## Declaration

```objectivec
OSStatus ATSFontGetFontFamilyResource(ATSFontRef iFont, ByteCount iBufferSize, void *ioBuffer, ByteCount *oSize);
```
