> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlmodelconfiguration/preferredmetaldevice](https://developer.apple.com/documentation/coreml/mlmodelconfiguration/preferredmetaldevice)

# preferredMetalDevice (Swift)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The metal device you prefer this model use to make predictions (inference) and update the model.

## Declaration

```swift
var preferredMetalDevice: (any MTLDevice)? { get set }
```

<a id="Discussion"></a>

## Discussion

If [preferredMetalDevice](preferredmetaldevice.md) is `nil`, the default value, Core ML chooses a metal device for you.

## See Also

### Configuring GPU usage

- [allowLowPrecisionAccumulationOnGPU](allowlowprecisionaccumulationongpu.md): A Boolean value that determines whether to allow low-precision accumulation on a GPU.

# preferredMetalDevice (Objective-C)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The metal device you prefer this model use to make predictions (inference) and update the model.

## Declaration

```objectivec
@property (nonatomic, readwrite, nullable) id<MTLDevice> preferredMetalDevice;
```

<a id="Discussion"></a>

## Discussion

If [preferredMetalDevice](preferredmetaldevice.md) is `nil`, the default value, Core ML chooses a metal device for you.

## See Also

### Configuring GPU usage

- [allowLowPrecisionAccumulationOnGPU](allowlowprecisionaccumulationongpu.md): A Boolean value that determines whether to allow low-precision accumulation on a GPU.
