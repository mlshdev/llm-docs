> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/colorsearchprocptr](https://developer.apple.com/documentation/applicationservices/colorsearchprocptr)

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
