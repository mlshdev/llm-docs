> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmodelconfiguration/allowlowprecisionaccumulationongpu](https://developer.apple.com/documentation/coreml/mlmodelconfiguration/allowlowprecisionaccumulationongpu)

# allowLowPrecisionAccumulationOnGPU (Swift)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A Boolean value that determines whether to allow low-precision accumulation on a GPU.

## Declaration

```swift
var allowLowPrecisionAccumulationOnGPU: Bool { get set }
```

## See Also

### Configuring GPU usage

- [preferredMetalDevice](preferredmetaldevice.md): The metal device you prefer this model use to make predictions (inference) and update the model.

# allowLowPrecisionAccumulationOnGPU (Objective-C)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A Boolean value that determines whether to allow low-precision accumulation on a GPU.

## Declaration

```objectivec
@property (readwrite) BOOL allowLowPrecisionAccumulationOnGPU;
```

## See Also

### Configuring GPU usage

- [preferredMetalDevice](preferredmetaldevice.md): The metal device you prefer this model use to make predictions (inference) and update the model.
