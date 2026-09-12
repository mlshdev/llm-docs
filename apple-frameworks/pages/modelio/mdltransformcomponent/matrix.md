> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdltransformcomponent/matrix](https://developer.apple.com/documentation/modelio/mdltransformcomponent/matrix)

# matrix (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The transform matrix that defines the local coordinate space relative to a parent coordinate space.

## Declaration

```swift
var matrix: matrix_float4x4 { get set }
```

<a id="Discussion"></a>

## Discussion

This matrix defines the position, orientation, shear, and scale for any object affected by the transform component, relative to the coordinate space of its parent.

If the transform component includes time-based transform information, this method returns the local transform matrix as of the earliest time sample (as reported by the [minimumTime](minimumtime.md) property).

## See Also

### Working with Static Transforms

- [setLocalTransform(\_:)](setlocaltransform%28__%29.md): Sets a new static transform matrix, overriding any time-based transform information.

# matrix (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The transform matrix that defines the local coordinate space relative to a parent coordinate space.

## Declaration

```objectivec
@property (nonatomic, assign) matrix_float4x4 matrix;
```

<a id="Discussion"></a>

## Discussion

This matrix defines the position, orientation, shear, and scale for any object affected by the transform component, relative to the coordinate space of its parent.

If the transform component includes time-based transform information, this method returns the local transform matrix as of the earliest time sample (as reported by the [minimumTime](minimumtime.md) property).

## See Also

### Working with Static Transforms

- [setLocalTransform:](setlocaltransform%28__%29.md): Sets a new static transform matrix, overriding any time-based transform information.
