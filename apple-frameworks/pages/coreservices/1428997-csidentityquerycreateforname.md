> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1428997-csidentityquerycreateforname](https://developer.apple.com/documentation/coreservices/1428997-csidentityquerycreateforname)

# CSIdentityQueryCreateForName(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

## Declaration

```swift
func CSIdentityQueryCreateForName(_ allocator: CFAllocator!, _ name: CFString!, _ comparisonMethod: CSIdentityQueryStringComparisonMethod, _ identityClass: CSIdentityClass, _ authority: CSIdentityAuthority!) -> Unmanaged<CSIdentityQuery>!
```

# CSIdentityQueryCreateForName (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

## Declaration

```objectivec
CSIdentityQueryRef CSIdentityQueryCreateForName(CFAllocatorRef allocator, CFStringRef name, CSIdentityQueryStringComparisonMethod comparisonMethod, CSIdentityClass identityClass, CSIdentityAuthorityRef authority);
```
