> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltensor/auxiliaryplanes](https://developer.apple.com/documentation/metal/mtltensor/auxiliaryplanes)

# auxiliaryPlanes (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The auxiliary planes of this tensor.

## Declaration

```swift
var auxiliaryPlanes: [any MTLTensorAuxiliaryPlane] { get }
```

<a id="discussion"></a>

## Discussion

Returns an array of [MTLTensorAuxiliaryPlane](../mtltensorauxiliaryplane.md) objects describing each auxiliary plane configured on this tensor. For single-plane tensors, this array is empty.

# auxiliaryPlanes (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The auxiliary planes of this tensor.

## Declaration

```objectivec
@property (readonly) NSArray<id<MTLTensorAuxiliaryPlane>> * auxiliaryPlanes;
```

<a id="discussion"></a>

## Discussion

Returns an array of [MTLTensorAuxiliaryPlane](../mtltensorauxiliaryplane.md) objects describing each auxiliary plane configured on this tensor. For single-plane tensors, this array is empty.
