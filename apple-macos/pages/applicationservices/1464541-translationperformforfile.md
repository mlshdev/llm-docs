> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1464541-translationperformforfile](https://developer.apple.com/documentation/applicationservices/1464541-translationperformforfile)

# TranslationPerformForFile(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.3+

## Declaration

```swift
func TranslationPerformForFile(_ inTranslation: Translation!, _ inSourceFile: UnsafePointer<FSRef>!, _ inDestinationDirectory: UnsafePointer<FSRef>!, _ inDestinationName: CFString!, _ outTranslatedFile: UnsafeMutablePointer<FSRef>!) -> OSStatus
```

# TranslationPerformForFile (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.3+

## Declaration

```objectivec
OSStatus TranslationPerformForFile(TranslationRef inTranslation, const FSRef *inSourceFile, const FSRef *inDestinationDirectory, CFStringRef inDestinationName, FSRef *outTranslatedFile);
```
