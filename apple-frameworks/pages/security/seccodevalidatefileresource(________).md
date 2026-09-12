> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seccodevalidatefileresource(_:_:_:_:)](https://developer.apple.com/documentation/security/seccodevalidatefileresource(_:_:_:_:))

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
