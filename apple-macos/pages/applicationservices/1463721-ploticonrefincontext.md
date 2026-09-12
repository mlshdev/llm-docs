> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1463721-ploticonrefincontext](https://developer.apple.com/documentation/applicationservices/1463721-ploticonrefincontext)

# PlotIconRefInContext(\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.1+

## Declaration

```swift
func PlotIconRefInContext(_ inContext: CGContext!, _ inRect: UnsafePointer<CGRect>!, _ inAlign: IconAlignmentType, _ inTransform: IconTransformType, _ inLabelColor: UnsafePointer<RGBColor>!, _ inFlags: PlotIconRefFlags, _ inIconRef: IconRef!) -> OSStatus
```

# PlotIconRefInContext (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.1+

## Declaration

```objectivec
OSStatus PlotIconRefInContext(CGContextRef inContext, const CGRect *inRect, IconAlignmentType inAlign, IconTransformType inTransform, const RGBColor *inLabelColor, PlotIconRefFlags inFlags, IconRef inIconRef);
```
