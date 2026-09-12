> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationsourceinformation/init(softwaresimulationstate:andexternalaccessorystate:)](https://developer.apple.com/documentation/corelocation/cllocationsourceinformation/init(softwaresimulationstate:andexternalaccessorystate:))

# init(softwareSimulationState:andExternalAccessoryState:) (Swift)

**Framework:** Core Location  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates an instance of location source information.

## Declaration

```swift
init(softwareSimulationState isSoftware: Bool, andExternalAccessoryState isAccessory: Bool)
```

## Parameters

- `isSoftware`: A Boolean value that indicates software is generating or simulating the location information.
- `isAccessory`: A Boolean value that indicates an external device is providing the location information.

# initWithSoftwareSimulationState:andExternalAccessoryState: (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates an instance of location source information.

## Declaration

```objectivec
- (instancetype) initWithSoftwareSimulationState:(BOOL) isSoftware andExternalAccessoryState:(BOOL) isAccessory;
```

## Parameters

- `isSoftware`: A Boolean value that indicates software is generating or simulating the location information.
- `isAccessory`: A Boolean value that indicates an external device is providing the location information.
