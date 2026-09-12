> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrdevicecontrollerserverprotocol/getanydevicecontroller(completion:)](https://developer.apple.com/documentation/matter/mtrdevicecontrollerserverprotocol/getanydevicecontroller(completion:))

# getAnyDeviceController(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```swift
func getAnyDeviceController(completion: @escaping @Sendable (Any?, (any Error)?) -> Void)
```

```swift
func anyDeviceController() async throws -> Any
```

# getAnyDeviceControllerWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```objectivec
- (void) getAnyDeviceControllerWithCompletion:(MTRDeviceControllerGetterHandler) completion;
```
