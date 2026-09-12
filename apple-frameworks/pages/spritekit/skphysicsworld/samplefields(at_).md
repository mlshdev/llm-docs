> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skphysicsworld/samplefields(at:)](https://developer.apple.com/documentation/spritekit/skphysicsworld/samplefields(at:))

# sampleFields(at:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Samples all of the field nodes in the scene and returns the summation of their forces at that point.

## Declaration

```swift
func sampleFields(at position: vector_float3) -> vector_float3
```

## Parameters

- `position`: A position in scene coordinates.

<a id="return-value"></a>

## Return Value

The summation of forces exerted on that point.

<a id="Discussion"></a>

## Discussion

The sample is calculated as if a physics body is placed at that position in the scene. The body is assumed to have a mass of `1.0`, with no charge or velocity. The body is affected by all field nodes.

# sampleFieldsAt: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Samples all of the field nodes in the scene and returns the summation of their forces at that point.

## Declaration

```objectivec
- (vector_float3) sampleFieldsAt:(vector_float3) position;
```

## Parameters

- `position`: A position in scene coordinates.

<a id="return-value"></a>

## Return Value

The summation of forces exerted on that point.

<a id="Discussion"></a>

## Discussion

The sample is calculated as if a physics body is placed at that position in the scene. The body is assumed to have a mass of `1.0`, with no charge or velocity. The body is affected by all field nodes.
