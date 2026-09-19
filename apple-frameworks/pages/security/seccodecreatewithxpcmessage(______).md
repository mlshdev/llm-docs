> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/seccodecreatewithxpcmessage(_:_:_:)

# SecCodeCreateWithXPCMessage(\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+

## Declaration

```swift
func SecCodeCreateWithXPCMessage(_ message: xpc_object_t, _ flags: SecCSFlags, _ target: UnsafeMutablePointer<SecCode?>) -> OSStatus
```

# SecCodeCreateWithXPCMessage (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+

## Declaration

```objectivec
OSStatus SecCodeCreateWithXPCMessage(xpc_object_t message, SecCSFlags flags, SecCodeRef*target);
```
