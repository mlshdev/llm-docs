> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrdevicecontroller/pairdevice(_:address:port:setuppincode:)](https://developer.apple.com/documentation/matter/mtrdevicecontroller/pairdevice(_:address:port:setuppincode:))

# pairDevice(\_:address:port:setupPINCode:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use setupCommissioningSessionWithPayload:newNodeID:error:

## Declaration

```swift
func pairDevice(_ deviceID: UInt64, address: String, port: UInt16, setupPINCode: UInt32) throws
```

# pairDevice:address:port:setupPINCode:error: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use setupCommissioningSessionWithPayload:newNodeID:error:

## Declaration

```objectivec
- (BOOL) pairDevice:(uint64_t) deviceID address:(NSString *) address port:(uint16_t) port setupPINCode:(uint32_t) setupPINCode error:(NSError **) error;
```
