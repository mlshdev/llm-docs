> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/1462553-iconrefintersectscgrect

# IconRefIntersectsCGRect(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.5+

## Declaration

```swift
func IconRefIntersectsCGRect(_ testRect: UnsafePointer<CGRect>!, _ iconRect: UnsafePointer<CGRect>!, _ align: IconAlignmentType, _ iconServicesUsageFlags: IconServicesUsageFlags, _ theIconRef: IconRef!) -> Bool
```

# IconRefIntersectsCGRect (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.5+

## Declaration

```objectivec
Boolean IconRefIntersectsCGRect(const CGRect *testRect, const CGRect *iconRect, IconAlignmentType align, IconServicesUsageFlags iconServicesUsageFlags, IconRef theIconRef);
```
