> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltensorauxiliaryplane](https://developer.apple.com/documentation/metal/mtltensorauxiliaryplane)

# MTLTensorAuxiliaryPlane (Swift)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A type that represents the configuration and storage of an auxiliary plane in a multi-plane tensor.

## Declaration

```swift
protocol MTLTensorAuxiliaryPlane : NSObjectProtocol
```

## Topics

### Instance Properties

- [blockFactors](mtltensorauxiliaryplane/blockfactors.md): The number of data plane elements that correspond to one element in this auxiliary plane.
- [buffer](mtltensorauxiliaryplane/buffer.md): The buffer that provides the underlying storage for this plane, or `nil` if no buffer was provided at initialization.
- [bufferOffset](mtltensorauxiliaryplane/bufferoffset.md): The byte offset into [buffer](mtltensorauxiliaryplane/buffer.md) where this plane’s data begins, or `0` if no buffer was provided at initialization.
- [dataType](mtltensorauxiliaryplane/datatype.md): The data format of all elements in the plane.
- [planeType](mtltensorauxiliaryplane/planetype.md): The type of information this plane stores.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# MTLTensorAuxiliaryPlane (Objective-C)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A type that represents the configuration and storage of an auxiliary plane in a multi-plane tensor.

## Declaration

```objectivec
@protocol MTLTensorAuxiliaryPlane <NSObject>
```

## Topics

### Instance Properties

- [blockFactors](mtltensorauxiliaryplane/blockfactors.md): The number of data plane elements that correspond to one element in this auxiliary plane.
- [buffer](mtltensorauxiliaryplane/buffer.md): The buffer that provides the underlying storage for this plane, or `nil` if no buffer was provided at initialization.
- [bufferOffset](mtltensorauxiliaryplane/bufferoffset.md): The byte offset into [buffer](mtltensorauxiliaryplane/buffer.md) where this plane’s data begins, or `0` if no buffer was provided at initialization.
- [dataType](mtltensorauxiliaryplane/datatype.md): The data format of all elements in the plane.
- [planeType](mtltensorauxiliaryplane/planetype.md): The type of information this plane stores.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)
