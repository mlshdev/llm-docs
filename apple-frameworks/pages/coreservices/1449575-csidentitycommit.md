> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1449575-csidentitycommit](https://developer.apple.com/documentation/coreservices/1449575-csidentitycommit)

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
