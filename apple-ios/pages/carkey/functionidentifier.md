> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carkey/functionidentifier](https://developer.apple.com/documentation/carkey/functionidentifier)

# FunctionIdentifier

**Framework:** CarKey  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.3+ · watchOS 9.0+

A type that stores the designation code for one of your vehicle’s features.

## Declaration

```swift
struct FunctionIdentifier
```

<a id="overview"></a>

## Overview

A [FunctionIdentifier](functionidentifier.md) type wraps a vehicle-specific code you define. This code — known as the function identifier — corresponds to a particular feature of your vehicle. For example, one function identifier might represent the vehicle’s door locks and another represent the vehicle’s window system. Use this type in conjunction with an [ActionIdentifier](actionidentifier.md) type to specify the complete action you want to perform on a vehicle.

## Topics

### Creating a Function Identifier

- [init(rawValue:)](functionidentifier/init%28rawvalue_%29.md): Creates and returns a new function identifier with the specified value.
- [init(\_:)](functionidentifier/init%28__%29.md): Creates and returns a new function identifier with the specified value.

### Getting the Value

- [rawValue](functionidentifier/rawvalue.md): The raw value that corresponds to the specific feature of your vehicle.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)

## See Also

### Vehicle Actions

- [RemoteKeylessEntryAction](remotekeylessentryaction.md): An automatically ending action that you want to perform on a vehicle.
- [RemoteKeylessEntryEnduringAction](remotekeylessentryenduringaction.md): Deprecated. An action with an optional stopping point that you want to perform on a vehicle.
- [ActionIdentifier](actionidentifier.md): A type that stores the designation code for one of the actions that a vehicle feature supports.
