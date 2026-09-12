> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcomputepipelinestate/imageblockmemorylength(fordimensions:)](https://developer.apple.com/documentation/metal/mtlcomputepipelinestate/imageblockmemorylength(fordimensions:))

# imageblockMemoryLength(forDimensions:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.5+ · visionOS 1.0+

Returns the length of reserved memory for an imageblock of a given size.

## Declaration

```swift
func imageblockMemoryLength(forDimensions imageblockDimensions: MTLSize) -> Int
```

## Parameters

- `imageblockDimensions`: An [MTLSize](../mtlsize.md) instance that represents the dimensions of an imageblock.

<a id="return-value"></a>

## Return Value

The length, in bytes, occupied by the image block in memory.

# imageblockMemoryLengthForDimensions: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.5+ · visionOS 1.0+

Returns the length of reserved memory for an imageblock of a given size.

## Declaration

```objectivec
- (NSUInteger) imageblockMemoryLengthForDimensions:(MTLSize) imageblockDimensions;
```

## Parameters

- `imageblockDimensions`: An [MTLSize](../mtlsize.md) instance that represents the dimensions of an imageblock.

<a id="return-value"></a>

## Return Value

The length, in bytes, occupied by the image block in memory.
