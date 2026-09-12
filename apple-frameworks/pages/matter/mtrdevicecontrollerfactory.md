> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrdevicecontrollerfactory](https://developer.apple.com/documentation/matter/mtrdevicecontrollerfactory)

# MTRDeviceControllerFactory (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
class MTRDeviceControllerFactory
```

## Mentioned In

- [Onboarding a Matter device](onboarding-a-matter-device.md)

## Topics

### Instance Properties

- [isRunning](mtrdevicecontrollerfactory/isrunning.md)
- [knownFabrics](mtrdevicecontrollerfactory/knownfabrics.md)

### Instance Methods

- [createController(onExistingFabric:)](mtrdevicecontrollerfactory/createcontroller%28onexistingfabric_%29.md)
- [createController(onNewFabric:)](mtrdevicecontrollerfactory/createcontroller%28onnewfabric_%29.md)
- [preWarmCommissioningSession()](mtrdevicecontrollerfactory/prewarmcommissioningsession%28%29.md)
- [start(\_:)](mtrdevicecontrollerfactory/start%28__%29.md)
- [stop()](mtrdevicecontrollerfactory/stop%28%29.md)

### Type Methods

- [sharedInstance()](mtrdevicecontrollerfactory/sharedinstance%28%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# MTRDeviceControllerFactory (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
@interface MTRDeviceControllerFactory : NSObject
```

## Mentioned In

- [Onboarding a Matter device](onboarding-a-matter-device.md)

## Topics

### Instance Properties

- [running](mtrdevicecontrollerfactory/isrunning.md)
- [knownFabrics](mtrdevicecontrollerfactory/knownfabrics.md)

### Instance Methods

- [createControllerOnExistingFabric:error:](mtrdevicecontrollerfactory/createcontroller%28onexistingfabric_%29.md)
- [createControllerOnNewFabric:error:](mtrdevicecontrollerfactory/createcontroller%28onnewfabric_%29.md)
- [preWarmCommissioningSession](mtrdevicecontrollerfactory/prewarmcommissioningsession%28%29.md)
- [startControllerFactory:error:](mtrdevicecontrollerfactory/start%28__%29.md)
- [stopControllerFactory](mtrdevicecontrollerfactory/stop%28%29.md)

### Type Methods

- [sharedInstance](mtrdevicecontrollerfactory/sharedinstance%28%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
