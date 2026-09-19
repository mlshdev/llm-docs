> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/csidentitystatusupdatedcallback

# CSIdentityStatusUpdatedCallback (Swift)

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

## Declaration

```swift
typealias CSIdentityStatusUpdatedCallback = (CSIdentity?, CFIndex, CFError?, UnsafeMutableRawPointer?) -> Void
```

# CSIdentityStatusUpdatedCallback (Objective-C)

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

## Declaration

```objectivec
typedef void (*CSIdentityStatusUpdatedCallback)(CSIdentityRef identity, CFIndex status, CFErrorRef error, void *info);
```
