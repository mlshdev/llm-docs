> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carkey/executionstatus](https://developer.apple.com/documentation/carkey/executionstatus)

# ExecutionStatus

**Framework:** CarKey  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.3+ · watchOS 9.0+

A type that contains the status code a vehicle returns after executing an action.

## Declaration

```swift
struct ExecutionStatus
```

<a id="overview"></a>

## Overview

An [ExecutionStatus](executionstatus.md) type wraps a code that indicates how your vehicle responded to a particular request. The Car Connectivity Consortium specifications define the meaning of most execution status codes, but you can define custom codes as needed for your vehicles.

## Topics

### Creating the Execution Status

- [init(rawValue:)](executionstatus/init%28rawvalue_%29.md): Creates and returns a new execution status with the specified value.
- [init(\_:)](executionstatus/init%28__%29.md): Creates and returns a new execution status with the specified value.

### Getting the Value

- [rawValue](executionstatus/rawvalue.md): The raw value that corresponds to the feature-specific status.

## Relationships

### Conforms To

- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the Vehicle’s Response

- [results()](remotekeylessentryaction/executionrequest/results%28%29.md): Returns the results of a preceding action request.
