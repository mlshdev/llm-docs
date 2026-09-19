> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1447936-csidentitycommitasynchronously

# CSIdentityCommitAsynchronously(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.5+

## Declaration

```swift
func CSIdentityCommitAsynchronously(_ identity: CSIdentity!, _ clientContext: UnsafePointer<CSIdentityClientContext>!, _ runLoop: CFRunLoop!, _ runLoopMode: CFString!, _ authorization: AuthorizationRef!) -> Bool
```

# CSIdentityCommitAsynchronously (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.5+

## Declaration

```objectivec
Boolean CSIdentityCommitAsynchronously(CSIdentityRef identity, const CSIdentityClientContext *clientContext, CFRunLoopRef runLoop, CFStringRef runLoopMode, AuthorizationRef authorization);
```
