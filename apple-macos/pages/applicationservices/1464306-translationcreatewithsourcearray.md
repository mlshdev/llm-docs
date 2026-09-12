> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1464306-translationcreatewithsourcearray](https://developer.apple.com/documentation/applicationservices/1464306-translationcreatewithsourcearray)

# TranslationCreateWithSourceArray(\_:\_:\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.3+

## Declaration

```swift
func TranslationCreateWithSourceArray(_ inSourceTypes: CFArray!, _ inTranslationFlags: TranslationFlags, _ outDestinationTypes: UnsafeMutablePointer<Unmanaged<CFArray>?>!, _ outTranslations: UnsafeMutablePointer<Unmanaged<CFDictionary>?>!) -> OSStatus
```

# TranslationCreateWithSourceArray (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.3+

## Declaration

```objectivec
OSStatus TranslationCreateWithSourceArray(CFArrayRef inSourceTypes, TranslationFlags inTranslationFlags, CFArrayRef *outDestinationTypes, CFDictionaryRef *outTranslations);
```
