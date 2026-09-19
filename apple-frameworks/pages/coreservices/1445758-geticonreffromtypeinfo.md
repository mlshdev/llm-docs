> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1445758-geticonreffromtypeinfo

# GetIconRefFromTypeInfo(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.3+ (deprecated in 10.15)

## Declaration

```swift
func GetIconRefFromTypeInfo(_ inCreator: OSType, _ inType: OSType, _ inExtension: CFString!, _ inMIMEType: CFString!, _ inUsageFlags: IconServicesUsageFlags, _ outIconRef: UnsafeMutablePointer<IconRef?>!) -> OSErr
```

# GetIconRefFromTypeInfo (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.3+ (deprecated in 10.15)

## Declaration

```objectivec
OSErr GetIconRefFromTypeInfo(OSType inCreator, OSType inType, CFStringRef inExtension, CFStringRef inMIMEType, IconServicesUsageFlags inUsageFlags, IconRef *outIconRef);
```
