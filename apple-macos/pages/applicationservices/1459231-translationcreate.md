> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/1459231-translationcreate

# TranslationCreate(\_:\_:\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.3+

## Declaration

```swift
func TranslationCreate(_ inSourceType: CFString!, _ inDestinationType: CFString!, _ inTranslationFlags: TranslationFlags, _ outTranslation: UnsafeMutablePointer<Unmanaged<Translation>?>!) -> OSStatus
```

# TranslationCreate (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.3+

## Declaration

```objectivec
OSStatus TranslationCreate(CFStringRef inSourceType, CFStringRef inDestinationType, TranslationFlags inTranslationFlags, TranslationRef *outTranslation);
```
