> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cssm_realloc](https://developer.apple.com/documentation/security/cssm_realloc)

# CSSM_REALLOC (Swift)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```swift
typealias CSSM_REALLOC = (UnsafeMutableRawPointer?, CSSM_SIZE, UnsafeMutableRawPointer?) -> UnsafeMutableRawPointer?
```

# CSSM_REALLOC (Objective-C)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```objectivec
typedef void *(*)(void *, unsigned long, void *) CSSM_REALLOC;
```
