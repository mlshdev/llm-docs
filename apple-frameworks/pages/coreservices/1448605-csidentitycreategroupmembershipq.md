> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1448605-csidentitycreategroupmembershipq

# CSIdentityCreateGroupMembershipQuery(\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.5+

## Declaration

```swift
func CSIdentityCreateGroupMembershipQuery(_ allocator: CFAllocator!, _ group: CSIdentity!) -> Unmanaged<CSIdentityQuery>!
```

# CSIdentityCreateGroupMembershipQuery (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.5+

## Declaration

```objectivec
CSIdentityQueryRef CSIdentityCreateGroupMembershipQuery(CFAllocatorRef allocator, CSIdentityRef group);
```
