> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrdevicecontrollerserverprotocol/getdevicecontroller(withfabricid:completion:)](https://developer.apple.com/documentation/matter/mtrdevicecontrollerserverprotocol/getdevicecontroller(withfabricid:completion:))

# getDeviceController(withFabricId:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> This never called.

## Declaration

```swift
optional func getDeviceController(withFabricId fabricId: UInt64, completion: @escaping @Sendable (Any?, (any Error)?) -> Void)
```

```swift
optional func deviceController(withFabricId fabricId: UInt64) async throws -> Any
```

# getDeviceControllerWithFabricId:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> This never called.

## Declaration

```objectivec
- (void) getDeviceControllerWithFabricId:(uint64_t) fabricId completion:(MTRDeviceControllerGetterHandler) completion;
```
