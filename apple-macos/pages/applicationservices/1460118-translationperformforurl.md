> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1460118-translationperformforurl](https://developer.apple.com/documentation/applicationservices/1460118-translationperformforurl)

# TranslationPerformForURL(\_:\_:\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.3+

## Declaration

```swift
func TranslationPerformForURL(_ inTranslation: Translation!, _ inSourceURL: CFURL!, _ inDestinationURL: CFURL!, _ outTranslatedURL: UnsafeMutablePointer<Unmanaged<CFURL>?>!) -> OSStatus
```

# TranslationPerformForURL (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.3+

## Declaration

```objectivec
OSStatus TranslationPerformForURL(TranslationRef inTranslation, CFURLRef inSourceURL, CFURLRef inDestinationURL, CFURLRef *outTranslatedURL);
```
