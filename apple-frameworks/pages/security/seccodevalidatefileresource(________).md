> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/seccodevalidatefileresource(_:_:_:_:)

# SecCodeValidateFileResource(\_:\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.13+

## Declaration

```swift
func SecCodeValidateFileResource(_ code: SecStaticCode, _ relativePath: CFString, _ fileData: CFData, _ flags: SecCSFlags) -> OSStatus
```

# SecCodeValidateFileResource (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.13+

## Declaration

```objectivec
OSStatus SecCodeValidateFileResource(SecStaticCodeRef code, CFStringRef relativePath, CFDataRef fileData, SecCSFlags flags);
```
