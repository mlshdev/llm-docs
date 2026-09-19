> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/1514403-ioconnectcallasyncstructmethod

# IOConnectCallAsyncStructMethod(\_:\_:\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** IOKit  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · visionOS 1.0+

## Declaration

```swift
func IOConnectCallAsyncStructMethod(_ connection: mach_port_t, _ selector: UInt32, _ wake_port: mach_port_t, _ reference: UnsafeMutablePointer<UInt64>!, _ referenceCnt: UInt32, _ inputStruct: UnsafeRawPointer!, _ inputStructCnt: Int, _ outputStruct: UnsafeMutableRawPointer!, _ outputStructCnt: UnsafeMutablePointer<Int>!) -> kern_return_t
```

# IOConnectCallAsyncStructMethod (Objective-C)

**Framework:** IOKit  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · visionOS 1.0+

## Declaration

```objectivec
kern_return_t IOConnectCallAsyncStructMethod(mach_port_t connection, uint32_t selector, mach_port_t wake_port, uint64_t *reference, uint32_t referenceCnt, const void *inputStruct, size_t inputStructCnt, void *outputStruct, size_t *outputStructCnt);
```
