> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seccodecreatewithxpcmessage(_:_:_:)](https://developer.apple.com/documentation/security/seccodecreatewithxpcmessage(_:_:_:))

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
