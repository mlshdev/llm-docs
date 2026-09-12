> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrdevicecontroller/commissiondevice(_:commissioningparams:)](https://developer.apple.com/documentation/matter/mtrdevicecontroller/commissiondevice(_:commissioningparams:))

# commissionDevice(\_:commissioningParams:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use commissionNodeWithID:commissioningParams:error:

## Declaration

```swift
func commissionDevice(_ deviceId: UInt64, commissioningParams: MTRCommissioningParameters) throws
```

# commissionDevice:commissioningParams:error: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use commissionNodeWithID:commissioningParams:error:

## Declaration

```objectivec
- (BOOL) commissionDevice:(uint64_t) deviceId commissioningParams:(MTRCommissioningParameters *) commissioningParams error:(NSError **) error;
```
