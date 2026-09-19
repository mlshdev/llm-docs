> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrdevicecontrollerfactory/createcontroller(onnewfabric:)

# createController(onNewFabric:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func createController(onNewFabric startupParams: MTRDeviceControllerStartupParams) throws -> MTRDeviceController
```

## Mentioned In

- [Onboarding a Matter device](../onboarding-a-matter-device.md)

# createControllerOnNewFabric:error: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (MTRDeviceController *) createControllerOnNewFabric:(MTRDeviceControllerStartupParams *) startupParams error:(NSError **) error;
```

## Mentioned In

- [Onboarding a Matter device](../onboarding-a-matter-device.md)
