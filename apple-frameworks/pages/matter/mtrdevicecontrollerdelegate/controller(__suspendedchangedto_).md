> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrdevicecontrollerdelegate/controller(_:suspendedchangedto:)](https://developer.apple.com/documentation/matter/mtrdevicecontrollerdelegate/controller(_:suspendedchangedto:))

# controller(\_:suspendedChangedTo:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS 15.2+ · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

Notify the delegate when the suspended state changed of the controller, after this happens the controller will be in the specified state.

## Declaration

```swift
optional func controller(_ controller: MTRDeviceController, suspendedChangedTo suspended: Bool)
```

# controller:suspendedChangedTo: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS 15.2+ · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

Notify the delegate when the suspended state changed of the controller, after this happens the controller will be in the specified state.

## Declaration

```objectivec
- (void) controller:(MTRDeviceController *) controller suspendedChangedTo:(BOOL) suspended;
```
