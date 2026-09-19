> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtltensorreferencetype/auxiliaryplanes

# auxiliaryPlanes (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The auxiliary planes that this tensor reference requires.

## Declaration

```swift
var auxiliaryPlanes: [MTLTensorAuxiliaryPlaneType] { get }
```

<a id="discussion"></a>

## Discussion

Returns an array of [MTLTensorAuxiliaryPlaneType](../mtltensorauxiliaryplanetype.md) objects describing each auxiliary plane the shader expects. Empty if the tensor has no auxiliary planes.

# auxiliaryPlanes (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The auxiliary planes that this tensor reference requires.

## Declaration

```objectivec
@property (readonly) NSArray<MTLTensorAuxiliaryPlaneType *> * auxiliaryPlanes;
```

<a id="discussion"></a>

## Discussion

Returns an array of [MTLTensorAuxiliaryPlaneType](../mtltensorauxiliaryplanetype.md) objects describing each auxiliary plane the shader expects. Empty if the tensor has no auxiliary planes.
