> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/tensorsizeandalign(descriptor:)](https://developer.apple.com/documentation/metal/mtldevice/tensorsizeandalign(descriptor:))

# tensorSizeAndAlign(descriptor:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Determines the size and alignment required to hold the data plane of a tensor you create with a descriptor in a buffer.

## Declaration

```swift
func tensorSizeAndAlign(descriptor: MTLTensorDescriptor) -> MTLSizeAndAlign
```

## Parameters

- `descriptor`: The tensor descriptor configuring the data plane.

<a id="return-value"></a>

## Return Value

The size and alignment required to hold the data plane of a tensor you create with `descriptor` in a buffer.

<a id="discussion"></a>

## Discussion

This method requires that `descriptor` does not configure any auxiliary planes.

# tensorSizeAndAlignWithDescriptor: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Determines the size and alignment required to hold the data plane of a tensor you create with a descriptor in a buffer.

## Declaration

```objectivec
- (MTLSizeAndAlign) tensorSizeAndAlignWithDescriptor:(MTLTensorDescriptor *) descriptor;
```

## Parameters

- `descriptor`: The tensor descriptor configuring the data plane.

<a id="return-value"></a>

## Return Value

The size and alignment required to hold the data plane of a tensor you create with `descriptor` in a buffer.

<a id="discussion"></a>

## Discussion

This method requires that `descriptor` does not configure any auxiliary planes.
