> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_session_set_peer_code_signing_requirement(_:_:)](https://developer.apple.com/documentation/xpc/xpc_session_set_peer_code_signing_requirement(_:_:))

# xpc_session_set_peer_code_signing_requirement(\_:\_:) (Swift)

**Framework:** XPC  
**Kind:** Function  
**Availability:** macOS 14.4+

## Declaration

```swift
func xpc_session_set_peer_code_signing_requirement(_ session: xpc_session_t, _ requirement: UnsafePointer<CChar>) -> Int32
```

# xpc_session_set_peer_code_signing_requirement (Objective-C)

**Framework:** XPC  
**Kind:** Function  
**Availability:** macOS 14.4+

## Declaration

```objectivec
extern int xpc_session_set_peer_code_signing_requirement(xpc_session_t session, const char *requirement);
```
