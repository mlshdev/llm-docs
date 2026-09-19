> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1429007-csidentityquerycreateforuuid

# CSIdentityQueryCreateForUUID(\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.5+

## Declaration

```swift
func CSIdentityQueryCreateForUUID(_ allocator: CFAllocator!, _ uuid: CFUUID!, _ authority: CSIdentityAuthority!) -> Unmanaged<CSIdentityQuery>!
```

# CSIdentityQueryCreateForUUID (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.5+

## Declaration

```objectivec
CSIdentityQueryRef CSIdentityQueryCreateForUUID(CFAllocatorRef allocator, CFUUIDRef uuid, CSIdentityAuthorityRef authority);
```
