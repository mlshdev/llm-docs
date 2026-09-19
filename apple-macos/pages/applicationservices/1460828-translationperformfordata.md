> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/1460828-translationperformfordata

# TranslationPerformForData(\_:\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.3+

## Declaration

```swift
func TranslationPerformForData(_ inTranslation: Translation!, _ inSourceData: CFData!, _ outDestinationData: UnsafeMutablePointer<Unmanaged<CFData>?>!) -> OSStatus
```

# TranslationPerformForData (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.3+

## Declaration

```objectivec
OSStatus TranslationPerformForData(TranslationRef inTranslation, CFDataRef inSourceData, CFDataRef *outDestinationData);
```
