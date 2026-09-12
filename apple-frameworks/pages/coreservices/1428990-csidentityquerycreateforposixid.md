> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1428990-csidentityquerycreateforposixid](https://developer.apple.com/documentation/coreservices/1428990-csidentityquerycreateforposixid)

# CSIdentityQueryCreateForPosixID(\_:\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.5+

## Declaration

```swift
func CSIdentityQueryCreateForPosixID(_ allocator: CFAllocator!, _ posixID: id_t, _ identityClass: CSIdentityClass, _ authority: CSIdentityAuthority!) -> Unmanaged<CSIdentityQuery>!
```

# CSIdentityQueryCreateForPosixID (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.5+

## Declaration

```objectivec
CSIdentityQueryRef CSIdentityQueryCreateForPosixID(CFAllocatorRef allocator, id_t posixID, CSIdentityClass identityClass, CSIdentityAuthorityRef authority);
```
