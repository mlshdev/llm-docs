> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlstate](https://developer.apple.com/documentation/coreml/mlstate)

# MLState (Swift)

**Framework:** Core ML  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Handle to the state buffers.

## Declaration

```swift
class MLState
```

<a id="overview"></a>

## Overview

A stateful model maintains a state from one prediction to another by storing the information in the state buffers. To use such a model, the client must request the model to create state buffers and get `MLState` object, which is the handle to those buffers. Then, at the prediction time, pass the `MLState` object in one of the stateful prediction functions.

```swift
// Load a stateful model
let modelAsset = try MLModelAsset(url: modelURL)
let model = try await MLModel.load(asset: modelAsset, configuration: MLModelConfiguration())

// Request a state
let state = model.newState()

// Run predictions
for _ in 0 ..< 42 {
  _ = try await model.prediction(from: inputFeatures, using: state)
}

// Access the state buffer.
state.withMultiArray(for: "accumulator") { stateMultiArray in
  ...
}
```

The object is a handle to the state buffers. The client shall not read or write the buffers while a prediction is in-flight.

Each stateful prediction that uses the same `MLState` must be serialized. Otherwise, if two such predictions run concurrently, the behavior is undefined.

## Topics

### Getting a state buffer

- [withMultiArray(for:\_:)](mlstate/withmultiarray%28for___%29.md)
- [withMultiArray(\_:)](mlstate/withmultiarray%28__%29.md): Deprecated.

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
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Model state

- [MLStateConstraint](mlstateconstraint.md): Constraint of a state feature value.

# MLState (Objective-C)

**Framework:** Core ML  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Handle to the state buffers.

## Declaration

```objectivec
@interface MLState : NSObject
```

<a id="overview"></a>

## Overview

A stateful model maintains a state from one prediction to another by storing the information in the state buffers. To use such a model, the client must request the model to create state buffers and get `MLState` object, which is the handle to those buffers. Then, at the prediction time, pass the `MLState` object in one of the stateful prediction functions.

```swift
// Load a stateful model
let modelAsset = try MLModelAsset(url: modelURL)
let model = try await MLModel.load(asset: modelAsset, configuration: MLModelConfiguration())

// Request a state
let state = model.newState()

// Run predictions
for _ in 0 ..< 42 {
  _ = try await model.prediction(from: inputFeatures, using: state)
}

// Access the state buffer.
state.withMultiArray(for: "accumulator") { stateMultiArray in
  ...
}
```

The object is a handle to the state buffers. The client shall not read or write the buffers while a prediction is in-flight.

Each stateful prediction that uses the same `MLState` must be serialized. Otherwise, if two such predictions run concurrently, the behavior is undefined.

## Topics

### Getting a state buffer

- [getMultiArrayForStateNamed:handler:](mlstate/getmultiarrayforstatenamed_handler_.md): Gets a mutable view into a state buffer.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Model state

- [MLStateConstraint](mlstateconstraint.md): Constraint of a state feature value.
