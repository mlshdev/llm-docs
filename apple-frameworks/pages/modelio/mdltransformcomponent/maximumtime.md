> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdltransformcomponent/maximumtime](https://developer.apple.com/documentation/modelio/mdltransformcomponent/maximumtime)

# maximumTime (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The timestamp for the last timed data sample in the transform component.

## Declaration

```swift
var maximumTime: TimeInterval { get }
```

<a id="Discussion"></a>

## Discussion

Timed data is clamped to the minimum and maximum times. If you request transform data for a time sample after the maximum time, Model I/O returns the transform at the maximum time.

If the transform component does not contain timed information, this property’s value is zero.

## See Also

### Working with Animated Transforms

- [minimumTime](minimumtime.md): The timestamp for the first timed data sample in the transform component.
- [localTransform(atTime:)](localtransform%28attime_%29.md): Returns the local transform matrix as of the specified time sample.
- [setLocalTransform(\_:forTime:)](setlocaltransform%28__fortime_%29.md): Sets a new local transform matrix for the specified time sample.

# maximumTime (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The timestamp for the last timed data sample in the transform component.

## Declaration

```objectivec
@property (nonatomic, readonly) NSTimeInterval maximumTime;
```

<a id="Discussion"></a>

## Discussion

Timed data is clamped to the minimum and maximum times. If you request transform data for a time sample after the maximum time, Model I/O returns the transform at the maximum time.

If the transform component does not contain timed information, this property’s value is zero.

## See Also

### Working with Animated Transforms

- [minimumTime](minimumtime.md): The timestamp for the first timed data sample in the transform component.
- [localTransformAtTime:](localtransform%28attime_%29.md): Returns the local transform matrix as of the specified time sample.
- [setLocalTransform:forTime:](setlocaltransform%28__fortime_%29.md): Sets a new local transform matrix for the specified time sample.
