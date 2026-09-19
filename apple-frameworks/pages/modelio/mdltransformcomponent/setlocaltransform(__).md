> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/modelio/mdltransformcomponent/setlocaltransform(_:)

# setLocalTransform(\_:) (Swift)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Sets a new static transform matrix, overriding any time-based transform information.

## Declaration

```swift
optional func setLocalTransform(_ transform: matrix_float4x4)
```

## Parameters

- `transform`: A new static transform matrix.

<a id="Discussion"></a>

## Discussion

Calling this method sets both the [minimumTime](minimumtime.md) and [maximumTime](maximumtime.md) properties to zero.

## See Also

### Working with Static Transforms

- [matrix](matrix.md): The transform matrix that defines the local coordinate space relative to a parent coordinate space.

# setLocalTransform: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Sets a new static transform matrix, overriding any time-based transform information.

## Declaration

```objectivec
- (void) setLocalTransform:(matrix_float4x4) transform;
```

## Parameters

- `transform`: A new static transform matrix.

<a id="Discussion"></a>

## Discussion

Calling this method sets both the [minimumTime](minimumtime.md) and [maximumTime](maximumtime.md) properties to zero.

## See Also

### Working with Static Transforms

- [matrix](matrix.md): The transform matrix that defines the local coordinate space relative to a parent coordinate space.
