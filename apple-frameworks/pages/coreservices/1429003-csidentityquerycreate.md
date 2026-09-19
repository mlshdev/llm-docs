> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1429003-csidentityquerycreate

# CSIdentityQueryCreate(\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.5+

## Declaration

```swift
func CSIdentityQueryCreate(_ allocator: CFAllocator!, _ identityClass: CSIdentityClass, _ authority: CSIdentityAuthority!) -> Unmanaged<CSIdentityQuery>!
```

# CSIdentityQueryCreate (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.5+

## Declaration

```objectivec
CSIdentityQueryRef CSIdentityQueryCreate(CFAllocatorRef allocator, CSIdentityClass identityClass, CSIdentityAuthorityRef authority);
```
