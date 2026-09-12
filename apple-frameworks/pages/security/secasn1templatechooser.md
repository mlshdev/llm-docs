> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secasn1templatechooser](https://developer.apple.com/documentation/security/secasn1templatechooser)

# SecAsn1TemplateChooser (Swift)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** macOS 10.0+ (deprecated in 12.0)

Dynamically provides the sub-template to use during encode or decode.

> SecAsn1 is not supported

## Declaration

```swift
typealias SecAsn1TemplateChooser = (UnsafeMutableRawPointer, DarwinBoolean, UnsafePointer<CChar>, Int, UnsafeMutableRawPointer) -> UnsafePointer<SecAsn1Template>?
```

# SecAsn1TemplateChooser (Objective-C)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** macOS 10.0+ (deprecated in 12.0)

Dynamically provides the sub-template to use during encode or decode.

> SecAsn1 is not supported

## Declaration

```objectivec
typedef const struct SecAsn1Template_struct *(void *, unsigned char, const char *, unsigned long, void *) SecAsn1TemplateChooser;
```
