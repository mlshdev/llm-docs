> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1444037-csidentitycreatepersistentrefere

# CSIdentityCreatePersistentReference(\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

## Declaration

```swift
func CSIdentityCreatePersistentReference(_ allocator: CFAllocator!, _ identity: CSIdentity!) -> Unmanaged<CFData>!
```

# CSIdentityCreatePersistentReference (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

## Declaration

```objectivec
CFDataRef CSIdentityCreatePersistentReference(CFAllocatorRef allocator, CSIdentityRef identity);
```
