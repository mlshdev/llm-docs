> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdltransformcomponent/localtransform(attime:)](https://developer.apple.com/documentation/modelio/mdltransformcomponent/localtransform(attime:))

# localTransform(atTime:) (Swift)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the local transform matrix as of the specified time sample.

## Declaration

```swift
optional func localTransform(atTime time: TimeInterval) -> matrix_float4x4
```

## Parameters

- `time`: The time sample for which to request information.

<a id="return-value"></a>

## Return Value

The local transformation matrix for the specified time sample.

<a id="Discussion"></a>

## Discussion

This matrix defines the position, orientation, shear, and scale for any object affected by the transform component, relative to the coordinate space of its parent, as of the specified time sample.

Requesting a sample outside the time range clamps returned values using the [minimumTime](minimumtime.md) and [maximumTime](maximumtime.md) properties. Some asset formats support continuous sampling, with interpolation for times between the samples stored in the asset; others are discrete. For an asset with discrete time information, requesting a sample time in between the samples stored in the asset returns data for the immediately preceding time.

## See Also

### Working with Animated Transforms

- [minimumTime](minimumtime.md): The timestamp for the first timed data sample in the transform component.
- [maximumTime](maximumtime.md): The timestamp for the last timed data sample in the transform component.
- [setLocalTransform(\_:forTime:)](setlocaltransform%28__fortime_%29.md): Sets a new local transform matrix for the specified time sample.

# localTransformAtTime: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns the local transform matrix as of the specified time sample.

## Declaration

```objectivec
- (matrix_float4x4) localTransformAtTime:(NSTimeInterval) time;
```

## Parameters

- `time`: The time sample for which to request information.

<a id="return-value"></a>

## Return Value

The local transformation matrix for the specified time sample.

<a id="Discussion"></a>

## Discussion

This matrix defines the position, orientation, shear, and scale for any object affected by the transform component, relative to the coordinate space of its parent, as of the specified time sample.

Requesting a sample outside the time range clamps returned values using the [minimumTime](minimumtime.md) and [maximumTime](maximumtime.md) properties. Some asset formats support continuous sampling, with interpolation for times between the samples stored in the asset; others are discrete. For an asset with discrete time information, requesting a sample time in between the samples stored in the asset returns data for the immediately preceding time.

## See Also

### Working with Animated Transforms

- [minimumTime](minimumtime.md): The timestamp for the first timed data sample in the transform component.
- [maximumTime](maximumtime.md): The timestamp for the last timed data sample in the transform component.
- [setLocalTransform:forTime:](setlocaltransform%28__fortime_%29.md): Sets a new local transform matrix for the specified time sample.
