> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtlrendercommandencoder/setfragmentaccelerationstructure(_:bufferindex:)

# setFragmentAccelerationStructure(\_:bufferIndex:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

Assigns an acceleration structure to an entry in the fragment shader argument table.

## Declaration

```swift
func setFragmentAccelerationStructure(_ accelerationStructure: (any MTLAccelerationStructure)?, bufferIndex: Int)
```

## Parameters

- `accelerationStructure`: An [MTLAccelerationStructure](../mtlaccelerationstructure.md) instance the command assigns to an entry in the fragment shader argument table for acceleration structures.
- `bufferIndex`: An integer that represents the entry in the fragment shader argument table for acceleration structures that stores a record of `accelerationStructure`.

<a id="discussion"></a>

## Discussion

By default, the acceleration structure at each index is `nil`.

# setFragmentAccelerationStructure:atBufferIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

Assigns an acceleration structure to an entry in the fragment shader argument table.

## Declaration

```objectivec
- (void) setFragmentAccelerationStructure:(id<MTLAccelerationStructure>) accelerationStructure atBufferIndex:(NSUInteger) bufferIndex;
```

## Parameters

- `accelerationStructure`: An [MTLAccelerationStructure](../mtlaccelerationstructure.md) instance the command assigns to an entry in the fragment shader argument table for acceleration structures.
- `bufferIndex`: An integer that represents the entry in the fragment shader argument table for acceleration structures that stores a record of `accelerationStructure`.

<a id="discussion"></a>

## Discussion

By default, the acceleration structure at each index is `nil`.
