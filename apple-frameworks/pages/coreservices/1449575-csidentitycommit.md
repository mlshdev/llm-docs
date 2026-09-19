> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1449575-csidentitycommit

# CSIdentityCommit(\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.5+

## Declaration

```swift
func CSIdentityCommit(_ identity: CSIdentity!, _ authorization: AuthorizationRef!, _ error: UnsafeMutablePointer<Unmanaged<CFError>?>!) -> Bool
```

# CSIdentityCommit (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.5+

## Declaration

```objectivec
Boolean CSIdentityCommit(CSIdentityRef identity, AuthorizationRef authorization, CFErrorRef *error);
```
