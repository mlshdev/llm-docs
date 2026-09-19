> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1443553-csidentitycreatecopy

# CSIdentityCreateCopy(\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

## Declaration

```swift
func CSIdentityCreateCopy(_ allocator: CFAllocator!, _ identity: CSIdentity!) -> Unmanaged<CSIdentity>!
```

# CSIdentityCreateCopy (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

## Declaration

```objectivec
CSIdentityRef CSIdentityCreateCopy(CFAllocatorRef allocator, CSIdentityRef identity);
```
