> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/3553279-aeunflattendescfrombytes

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
