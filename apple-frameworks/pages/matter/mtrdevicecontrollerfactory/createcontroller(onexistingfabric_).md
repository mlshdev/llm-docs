> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrdevicecontrollerfactory/createcontroller(onexistingfabric:)

# createController(onExistingFabric:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func createController(onExistingFabric startupParams: MTRDeviceControllerStartupParams) throws -> MTRDeviceController
```

## Mentioned In

- [Onboarding a Matter device](../onboarding-a-matter-device.md)

# createControllerOnExistingFabric:error: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (MTRDeviceController *) createControllerOnExistingFabric:(MTRDeviceControllerStartupParams *) startupParams error:(NSError **) error;
```

## Mentioned In

- [Onboarding a Matter device](../onboarding-a-matter-device.md)
