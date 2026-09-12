> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hvf/partrenderer/axisvalues](https://developer.apple.com/documentation/hvf/partrenderer/axisvalues)

# PartRenderer.AxisValues

**Framework:** hvf  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

All the axis values applied to a part. The index is the axis number (determined by the loader). Axis values are in design space (-1.0…1.0)

## Declaration

```swift
class AxisValues
```

## Topics

### Instance Properties

- [isNested](axisvalues/isnested.md): Whether the axis values apply to a nested subpart or not

### Instance Methods

- [blendedValue(axis:)](axisvalues/blendedvalue%28axis_%29.md): The final axis values applied to this subpart after the part has been rendered This is useful for detecting axes going out of range (-1.0…1.0)

## Relationships

### Conforms To

- [Collection](https://developer.apple.com/documentation/swift/collection)
- [MutableCollection](https://developer.apple.com/documentation/swift/mutablecollection)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)
