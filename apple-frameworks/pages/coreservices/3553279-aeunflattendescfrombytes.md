> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/3553279-aeunflattendescfrombytes](https://developer.apple.com/documentation/coreservices/3553279-aeunflattendescfrombytes)

# AEUnflattenDescFromBytes(\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 11.0+

## Declaration

```swift
func AEUnflattenDescFromBytes(_ buffer: UnsafeRawPointer!, _ bufferLen: Int, _ result: UnsafeMutablePointer<AEDesc>!) -> OSStatus
```

# AEUnflattenDescFromBytes (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 11.0+

## Declaration

```objectivec
OSStatus AEUnflattenDescFromBytes(const void *buffer, size_t bufferLen, AEDesc *result);
```
