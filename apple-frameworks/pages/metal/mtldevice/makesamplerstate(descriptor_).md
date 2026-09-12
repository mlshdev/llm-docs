> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/makesamplerstate(descriptor:)](https://developer.apple.com/documentation/metal/mtldevice/makesamplerstate(descriptor:))

# makeSamplerState(descriptor:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Creates a sampler state instance.

## Declaration

```swift
func makeSamplerState(descriptor: MTLSamplerDescriptor) -> (any MTLSamplerState)?
```

## Parameters

- `descriptor`: An [MTLSamplerDescriptor](../mtlsamplerdescriptor.md) instance.

<a id="return-value"></a>

## Return Value

A new [MTLSamplerState](../mtlsamplerstate.md) instance if the method completed successfully; otherwise `nil`.

## See Also

### Creating samplers

- [supportsTextureSampleCount(\_:)](supportstexturesamplecount%28__%29.md): Returns a Boolean value that indicates whether the GPU can sample a texture with a specific number of sample points.
- [getDefaultSamplePositions(sampleCount:)](getdefaultsamplepositions%28samplecount_%29.md): Returns the default sample locations based on the number of samples.

# newSamplerStateWithDescriptor: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Creates a sampler state instance.

## Declaration

```objectivec
- (id<MTLSamplerState>) newSamplerStateWithDescriptor:(MTLSamplerDescriptor *) descriptor;
```

## Parameters

- `descriptor`: An [MTLSamplerDescriptor](../mtlsamplerdescriptor.md) instance.

<a id="return-value"></a>

## Return Value

A new [MTLSamplerState](../mtlsamplerstate.md) instance if the method completed successfully; otherwise `nil`.

## See Also

### Creating samplers

- [supportsTextureSampleCount:](supportstexturesamplecount%28__%29.md): Returns a Boolean value that indicates whether the GPU can sample a texture with a specific number of sample points.
- [getDefaultSamplePositions:count:](getdefaultsamplepositions_count_.md): Retrieves the default sample positions for a specific sample count.
