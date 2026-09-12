> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdltransformcomponent/setlocaltransform(_:fortime:)](https://developer.apple.com/documentation/modelio/mdltransformcomponent/setlocaltransform(_:fortime:))

# setLocalTransform(\_:forTime:) (Swift)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Sets a new local transform matrix for the specified time sample.

## Declaration

```swift
optional func setLocalTransform(_ transform: matrix_float4x4, forTime time: TimeInterval)
```

## Parameters

- `transform`: The local transformation matrix for the specified time sample.
- `time`: The time sample with which to associate transform information.

<a id="Discussion"></a>

## Discussion

Calling this method updates the [minimumTime](minimumtime.md) and [maximumTime](maximumtime.md) properties to reflect the range of sample values stored in the transform component.

## See Also

### Working with Animated Transforms

- [minimumTime](minimumtime.md): The timestamp for the first timed data sample in the transform component.
- [maximumTime](maximumtime.md): The timestamp for the last timed data sample in the transform component.
- [localTransform(atTime:)](localtransform%28attime_%29.md): Returns the local transform matrix as of the specified time sample.

# setLocalTransform:forTime: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Sets a new local transform matrix for the specified time sample.

## Declaration

```objectivec
- (void) setLocalTransform:(matrix_float4x4) transform forTime:(NSTimeInterval) time;
```

## Parameters

- `transform`: The local transformation matrix for the specified time sample.
- `time`: The time sample with which to associate transform information.

<a id="Discussion"></a>

## Discussion

Calling this method updates the [minimumTime](minimumtime.md) and [maximumTime](maximumtime.md) properties to reflect the range of sample values stored in the transform component.

## See Also

### Working with Animated Transforms

- [minimumTime](minimumtime.md): The timestamp for the first timed data sample in the transform component.
- [maximumTime](maximumtime.md): The timestamp for the last timed data sample in the transform component.
- [localTransformAtTime:](localtransform%28attime_%29.md): Returns the local transform matrix as of the specified time sample.
