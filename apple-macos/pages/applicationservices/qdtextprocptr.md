> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/qdtextprocptr

# QDTextProcPtr (Swift)

**Framework:** Application Services  
**Kind:** Type Alias  
**Availability:** macOS 10.0+

## Declaration

```swift
typealias QDTextProcPtr = (Int16, UnsafeRawPointer?, Point, Point) -> Void
```

# QDTextProcPtr (Objective-C)

**Framework:** Application Services  
**Kind:** Type Alias  
**Availability:** macOS 10.0+

## Declaration

```objectivec
typedef void (*QDTextProcPtr)(short byteCount, const void *textBuf, Point numer, Point denom);
```
