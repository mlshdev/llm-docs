> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkglasseslensspecification/prism](https://developer.apple.com/documentation/healthkit/hkglasseslensspecification/prism)

# prism (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

An object that contains information about the eye alignment correction.

## Declaration

```swift
@NSCopying var prism: HKVisionPrism? { get }
```

## See Also

### Accessing the specification’s data

- [farPupillaryDistance](farpupillarydistance.md): The distance between the pupil and the center of the nose when looking at an object far away, measured in mm.
- [nearPupillaryDistance](nearpupillarydistance.md): The distance between the pupil and the center of the nose when looking at a nearby object, measured in mm.
- [vertexDistance](vertexdistance.md): The distance between the back of the lens and the eye, measured in mm.

# prism (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

An object that contains information about the eye alignment correction.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) HKVisionPrism * prism;
```

## See Also

### Accessing the specification’s data

- [farPupillaryDistance](farpupillarydistance.md): The distance between the pupil and the center of the nose when looking at an object far away, measured in mm.
- [nearPupillaryDistance](nearpupillarydistance.md): The distance between the pupil and the center of the nose when looking at a nearby object, measured in mm.
- [vertexDistance](vertexdistance.md): The distance between the back of the lens and the eye, measured in mm.
