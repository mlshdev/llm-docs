> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/qdbitsprocptr

# QDBitsProcPtr (Swift)

**Framework:** Application Services  
**Kind:** Type Alias  
**Availability:** macOS 10.0+

## Declaration

```swift
typealias QDBitsProcPtr = (UnsafePointer<BitMap>?, UnsafePointer<Rect>?, UnsafePointer<Rect>?, Int16, RgnHandle?) -> Void
```

# QDBitsProcPtr (Objective-C)

**Framework:** Application Services  
**Kind:** Type Alias  
**Availability:** macOS 10.0+

## Declaration

```objectivec
typedef void (*QDBitsProcPtr)(const BitMap *srcBits, const Rect *srcRect, const Rect *dstRect, short mode, RgnHandle maskRgn);
```
