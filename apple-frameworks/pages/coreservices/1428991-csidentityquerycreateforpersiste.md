> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1428991-csidentityquerycreateforpersiste

# CSIdentityQueryCreateForPersistentReference(\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

## Declaration

```swift
func CSIdentityQueryCreateForPersistentReference(_ allocator: CFAllocator!, _ referenceData: CFData!) -> Unmanaged<CSIdentityQuery>!
```

# CSIdentityQueryCreateForPersistentReference (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

## Declaration

```objectivec
CSIdentityQueryRef CSIdentityQueryCreateForPersistentReference(CFAllocatorRef allocator, CFDataRef referenceData);
```
