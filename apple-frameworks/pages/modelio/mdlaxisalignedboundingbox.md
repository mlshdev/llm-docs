> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlaxisalignedboundingbox](https://developer.apple.com/documentation/modelio/mdlaxisalignedboundingbox)

# MDLAxisAlignedBoundingBox (Swift)

**Framework:** Model I/O  
**Kind:** Structure  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The minimal volume containing an object, used by the [boundingBox(atTime:)](mdlobject/boundingbox%28attime_%29.md) method.

## Declaration

```swift
struct MDLAxisAlignedBoundingBox
```

## Topics

### Initializers

- [init()](mdlaxisalignedboundingbox/init%28%29.md)
- [init(maxBounds:minBounds:)](mdlaxisalignedboundingbox/init%28maxbounds_minbounds_%29.md)

### Instance Properties

- [maxBounds](mdlaxisalignedboundingbox/maxbounds.md): The corner of the bounding box with the highest x-, y-, and z-coordinate values.
- [minBounds](mdlaxisalignedboundingbox/minbounds.md): The corner of the bounding box with the lowest x-, y-, and z-coordinate values.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

# MDLAxisAlignedBoundingBox (Objective-C)

**Framework:** Model I/O  
**Kind:** Structure  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The minimal volume containing an object, used by the [boundingBoxAtTime:](mdlobject/boundingbox%28attime_%29.md) method.

## Declaration

```objectivec
typedef struct { ... } MDLAxisAlignedBoundingBox;
```

## Topics

### Instance Properties

- [maxBounds](mdlaxisalignedboundingbox/maxbounds.md): The corner of the bounding box with the highest x-, y-, and z-coordinate values.
- [minBounds](mdlaxisalignedboundingbox/minbounds.md): The corner of the bounding box with the lowest x-, y-, and z-coordinate values.
