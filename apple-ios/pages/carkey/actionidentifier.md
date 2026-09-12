> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carkey/actionidentifier](https://developer.apple.com/documentation/carkey/actionidentifier)

# ActionIdentifier

**Framework:** CarKey  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.3+ · watchOS 9.0+

A type that stores the designation code for one of the actions that a vehicle feature supports.

## Declaration

```swift
struct ActionIdentifier
```

<a id="overview"></a>

## Overview

An [ActionIdentifier](actionidentifier.md) type wraps a vehicle-specific code you define. This code — known as the action identifier — corresponds to an action your vehicle can take for a particular feature. For example, you might define actions to lock or unlock the vehicle’s doors. Use this type in conjunction with a specific [FunctionIdentifier](functionidentifier.md) type to specify the complete action you want to perform on a vehicle.

## Topics

### Creating the Action Identifier

- [init(rawValue:)](actionidentifier/init%28rawvalue_%29.md): Creates and returns a new action identifier with the specified value.
- [init(\_:)](actionidentifier/init%28__%29.md): Creates and returns a new action identifier with the specified value.

### Getting the Value

- [rawValue](actionidentifier/rawvalue.md): The raw value that corresponds to the feature-specific action.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)

## See Also

### Vehicle Actions

- [RemoteKeylessEntryAction](remotekeylessentryaction.md): An automatically ending action that you want to perform on a vehicle.
- [RemoteKeylessEntryEnduringAction](remotekeylessentryenduringaction.md): Deprecated. An action with an optional stopping point that you want to perform on a vehicle.
- [FunctionIdentifier](functionidentifier.md): A type that stores the designation code for one of your vehicle’s features.
