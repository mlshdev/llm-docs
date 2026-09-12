> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1446733-lssetitemattribute](https://developer.apple.com/documentation/coreservices/1446733-lssetitemattribute)

# LSSetItemAttribute(\_:\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.5+ (deprecated in 10.10)

## Declaration

```swift
func LSSetItemAttribute(_ inItem: UnsafePointer<FSRef>!, _ inRoles: LSRolesMask, _ inAttributeName: CFString!, _ inValue: CFTypeRef!) -> OSStatus
```

# LSSetItemAttribute (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.5+ (deprecated in 10.10)

## Declaration

```objectivec
OSStatus LSSetItemAttribute(const FSRef *inItem, LSRolesMask inRoles, CFStringRef inAttributeName, CFTypeRef inValue);
```
