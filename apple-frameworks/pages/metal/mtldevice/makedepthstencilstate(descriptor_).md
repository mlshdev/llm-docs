> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/makedepthstencilstate(descriptor:)](https://developer.apple.com/documentation/metal/mtldevice/makedepthstencilstate(descriptor:))

# makeDepthStencilState(descriptor:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Creates a depth-stencil state instance.

## Declaration

```swift
func makeDepthStencilState(descriptor: MTLDepthStencilDescriptor) -> (any MTLDepthStencilState)?
```

## Parameters

- `descriptor`: An [MTLDepthStencilDescriptor](../mtldepthstencildescriptor.md) instance.

<a id="return-value"></a>

## Return Value

A new [MTLDepthStencilState](../mtldepthstencilstate.md) instance if the method completed successfully; otherwise `nil`.

# newDepthStencilStateWithDescriptor: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Creates a depth-stencil state instance.

## Declaration

```objectivec
- (id<MTLDepthStencilState>) newDepthStencilStateWithDescriptor:(MTLDepthStencilDescriptor *) descriptor;
```

## Parameters

- `descriptor`: An [MTLDepthStencilDescriptor](../mtldepthstencildescriptor.md) instance.

<a id="return-value"></a>

## Return Value

A new [MTLDepthStencilState](../mtldepthstencilstate.md) instance if the method completed successfully; otherwise `nil`.
