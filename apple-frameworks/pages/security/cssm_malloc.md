> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cssm_malloc](https://developer.apple.com/documentation/security/cssm_malloc)

# CSSM_MALLOC (Swift)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```swift
typealias CSSM_MALLOC = (CSSM_SIZE, UnsafeMutableRawPointer?) -> UnsafeMutableRawPointer?
```

# CSSM_MALLOC (Objective-C)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```objectivec
typedef void *(*)(unsigned long, void *) CSSM_MALLOC;
```
