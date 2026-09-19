> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphtensordata/mpsndarray()

# mpsndarray() (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Return an mpsndarray object will copy contents if the contents are not stored in an MPS ndarray.

## Declaration

```swift
func mpsndarray() -> MPSNDArray
```

<a id="return-value"></a>

## Return Value

A valid MPSNDArray, or nil if allocation fails.

# mpsndarray (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Return an mpsndarray object will copy contents if the contents are not stored in an MPS ndarray.

## Declaration

```objectivec
- (MPSNDArray *) mpsndarray;
```

<a id="return-value"></a>

## Return Value

A valid MPSNDArray, or nil if allocation fails.
