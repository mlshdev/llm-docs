> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4argumenttable/setsamplerstate(_:index:)](https://developer.apple.com/documentation/metal/mtl4argumenttable/setsamplerstate(_:index:))

# setSamplerState(\_:index:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Binds a sampler state to a sampler state binding slot.

## Declaration

```swift
func setSamplerState(_ resourceID: MTLResourceID, index bindingIndex: Int)
```

## Parameters

- `resourceID`: The [MTLResourceID](../mtlresourceid.md) of the [MTLSamplerState](../mtlsamplerstate.md) instance to bind.
- `bindingIndex`: A valid binding index in the sampler binding range. It is an error for this value to match or exceed the value of property [maxSamplerStateBindCount](../mtl4argumenttabledescriptor/maxsamplerstatebindcount.md) on the descriptor from which you created this argument table.

## Mentioned In

- [Understanding the Metal 4 core API](../understanding-the-metal-4-core-api.md)

# setSamplerState:atIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Binds a sampler state to a sampler state binding slot.

## Declaration

```objectivec
- (void) setSamplerState:(MTLResourceID) resourceID atIndex:(NSUInteger) bindingIndex;
```

## Parameters

- `resourceID`: The [MTLResourceID](../mtlresourceid.md) of the [MTLSamplerState](../mtlsamplerstate.md) instance to bind.
- `bindingIndex`: A valid binding index in the sampler binding range. It is an error for this value to match or exceed the value of property [maxSamplerStateBindCount](../mtl4argumenttabledescriptor/maxsamplerstatebindcount.md) on the descriptor from which you created this argument table.

## Mentioned In

- [Understanding the Metal 4 core API](../understanding-the-metal-4-core-api.md)
