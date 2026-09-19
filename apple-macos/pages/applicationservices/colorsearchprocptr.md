> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/colorsearchprocptr

# ColorSearchProcPtr (Swift)

**Framework:** Application Services  
**Kind:** Type Alias  
**Availability:** macOS 10.0+

## Declaration

```swift
typealias ColorSearchProcPtr = (UnsafeMutablePointer<RGBColor>?, UnsafeMutablePointer<Int>?) -> DarwinBoolean
```

# ColorSearchProcPtr (Objective-C)

**Framework:** Application Services  
**Kind:** Type Alias  
**Availability:** macOS 10.0+

## Declaration

```objectivec
typedef Boolean (*ColorSearchProcPtr)(RGBColor *rgb, long *position);
```
