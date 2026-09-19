> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/1459344-translationcopysourcetype

# TranslationCopySourceType(\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.3+

## Declaration

```swift
func TranslationCopySourceType(_ inTranslation: Translation!, _ outSourceType: UnsafeMutablePointer<Unmanaged<CFString>?>!) -> OSStatus
```

# TranslationCopySourceType (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.3+

## Declaration

```objectivec
OSStatus TranslationCopySourceType(TranslationRef inTranslation, CFStringRef *outSourceType);
```
