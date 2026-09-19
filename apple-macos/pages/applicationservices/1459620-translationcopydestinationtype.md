> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/1459620-translationcopydestinationtype

# TranslationCopyDestinationType(\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.3+

## Declaration

```swift
func TranslationCopyDestinationType(_ inTranslation: Translation!, _ outDestinationType: UnsafeMutablePointer<Unmanaged<CFString>?>!) -> OSStatus
```

# TranslationCopyDestinationType (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.3+

## Declaration

```objectivec
OSStatus TranslationCopyDestinationType(TranslationRef inTranslation, CFStringRef *outDestinationType);
```
