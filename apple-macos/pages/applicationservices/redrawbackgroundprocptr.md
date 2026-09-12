> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/redrawbackgroundprocptr](https://developer.apple.com/documentation/applicationservices/redrawbackgroundprocptr)

# RedrawBackgroundProcPtr (Swift)

**Framework:** Application Services  
**Kind:** Type Alias  
**Availability:** macOS 10.0+

## Declaration

```swift
typealias RedrawBackgroundProcPtr = (ATSUTextLayout?, UniCharArrayOffset, Int, UnsafeMutablePointer<ATSTrapezoid>?, Int) -> DarwinBoolean
```

# RedrawBackgroundProcPtr (Objective-C)

**Framework:** Application Services  
**Kind:** Type Alias  
**Availability:** macOS 10.0+

## Declaration

```objectivec
typedef Boolean (*RedrawBackgroundProcPtr)(ATSUTextLayout iLayout, UniCharArrayOffset iTextOffset, UniCharCount iTextLength, ATSTrapezoid iUnhighlightArea[], ItemCount iTrapezoidCount);
```
