> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1464005-iconreftohishape](https://developer.apple.com/documentation/applicationservices/1464005-iconreftohishape)

# IconRefToHIShape(\_:\_:\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.5+

## Declaration

```swift
func IconRefToHIShape(_ iconRect: UnsafePointer<CGRect>!, _ align: IconAlignmentType, _ iconServicesUsageFlags: IconServicesUsageFlags, _ theIconRef: IconRef!) -> Unmanaged<HIShape>!
```

# IconRefToHIShape (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.5+

## Declaration

```objectivec
HIShapeRef IconRefToHIShape(const CGRect *iconRect, IconAlignmentType align, IconServicesUsageFlags iconServicesUsageFlags, IconRef theIconRef);
```
