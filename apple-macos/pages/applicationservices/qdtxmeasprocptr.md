> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/qdtxmeasprocptr

# QDTxMeasProcPtr (Swift)

**Framework:** Application Services  
**Kind:** Type Alias  
**Availability:** macOS 10.0+

## Declaration

```swift
typealias QDTxMeasProcPtr = (Int16, UnsafeRawPointer?, UnsafeMutablePointer<Point>?, UnsafeMutablePointer<Point>?, UnsafeMutablePointer<FontInfo>?) -> Int16
```

# QDTxMeasProcPtr (Objective-C)

**Framework:** Application Services  
**Kind:** Type Alias  
**Availability:** macOS 10.0+

## Declaration

```objectivec
typedef short (*QDTxMeasProcPtr)(short byteCount, const void *textAddr, Point *numer, Point *denom, FontInfo *info);
```
