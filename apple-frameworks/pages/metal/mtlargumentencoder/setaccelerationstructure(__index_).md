> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlargumentencoder/setaccelerationstructure(_:index:)](https://developer.apple.com/documentation/metal/mtlargumentencoder/setaccelerationstructure(_:index:))

# setAccelerationStructure(\_:index:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Encodes a reference to an acceleration structure into the argument buffer.

## Declaration

```swift
func setAccelerationStructure(_ accelerationStructure: (any MTLAccelerationStructure)?, index: Int)
```

## Parameters

- `accelerationStructure`: An acceleration structure the method encodes.
- `index`: The index of an acceleration structure within the argument buffer. The value corresponds to either the index ID of a declaration in Metal Shading Language (MSL) or the [index](../mtlargumentdescriptor/index.md) property of an [MTLArgumentDescriptor](../mtlargumentdescriptor.md) instance.

# setAccelerationStructure:atIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Encodes a reference to an acceleration structure into the argument buffer.

## Declaration

```objectivec
- (void) setAccelerationStructure:(id<MTLAccelerationStructure>) accelerationStructure atIndex:(NSUInteger) index;
```

## Parameters

- `accelerationStructure`: An acceleration structure the method encodes.
- `index`: The index of an acceleration structure within the argument buffer. The value corresponds to either the index ID of a declaration in Metal Shading Language (MSL) or the [index](../mtlargumentdescriptor/index.md) property of an [MTLArgumentDescriptor](../mtlargumentdescriptor.md) instance.
