> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/xpc/xpc_listener_set_peer_code_signing_requirement(_:_:)

# xpc_listener_set_peer_code_signing_requirement(\_:\_:) (Swift)

**Framework:** XPC  
**Kind:** Function  
**Availability:** macOS 14.4+

## Declaration

```swift
func xpc_listener_set_peer_code_signing_requirement(_ listener: xpc_listener_t, _ requirement: UnsafePointer<CChar>) -> Int32
```

# xpc_listener_set_peer_code_signing_requirement (Objective-C)

**Framework:** XPC  
**Kind:** Function  
**Availability:** macOS 14.4+

## Declaration

```objectivec
extern int xpc_listener_set_peer_code_signing_requirement(xpc_listener_t listener, const char *requirement);
```
