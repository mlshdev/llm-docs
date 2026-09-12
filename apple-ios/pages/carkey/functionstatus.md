> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carkey/functionstatus](https://developer.apple.com/documentation/carkey/functionstatus)

# FunctionStatus

**Framework:** CarKey  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.3+ · watchOS 9.0+

A value that the vehicle can return to indicate the status of a particular vehicle feature.

## Declaration

```swift
struct FunctionStatus
```

<a id="overview"></a>

## Overview

A [FunctionStatus](functionstatus.md) type wraps the custom code that the vehicle returns. You define the status codes and their meanings for your vehicle’s features. For example, you might define status codes to represent the locked, unlocked, and unknown states of your vehicle’s door-locking system.

## Topics

### Creating a Function Status Type

- [init(rawValue:)](functionstatus/init%28rawvalue_%29.md): Creates and returns a new function status with the specified value.
- [init(\_:)](functionstatus/init%28__%29.md): Creates and returns a new function status with the specified value.

### Getting the Value

- [rawValue](functionstatus/rawvalue.md): The raw value that corresponds to the feature-specific status.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)

## See Also

### Getting the Vehicle’s Supported Functions

- [supportedFunctions](vehiclereport/supportedfunctions.md): An array of function identifiers that indicates the features the vehicle supports, populated only after the first BLE connection with the vehicle.
- [status(for:)](vehiclereport/status%28for_%29.md): Returns the current status of the specified vehicle function.
