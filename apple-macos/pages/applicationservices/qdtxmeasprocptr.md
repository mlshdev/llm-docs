> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/qdtxmeasprocptr](https://developer.apple.com/documentation/applicationservices/qdtxmeasprocptr)

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
