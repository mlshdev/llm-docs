> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1447616-csidentitycreate](https://developer.apple.com/documentation/coreservices/1447616-csidentitycreate)

# CSIdentityCreate(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.5+

## Declaration

```swift
func CSIdentityCreate(_ allocator: CFAllocator!, _ identityClass: CSIdentityClass, _ fullName: CFString!, _ posixName: CFString!, _ flags: CSIdentityFlags, _ authority: CSIdentityAuthority!) -> Unmanaged<CSIdentity>!
```

# CSIdentityCreate (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.5+

## Declaration

```objectivec
CSIdentityRef CSIdentityCreate(CFAllocatorRef allocator, CSIdentityClass identityClass, CFStringRef fullName, CFStringRef posixName, CSIdentityFlags flags, CSIdentityAuthorityRef authority);
```
