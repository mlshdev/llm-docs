> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkglasseslensspecification/farpupillarydistance](https://developer.apple.com/documentation/healthkit/hkglasseslensspecification/farpupillarydistance)

# farPupillaryDistance (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

The distance between the pupil and the center of the nose when looking at an object far away, measured in mm.

## Declaration

```swift
@NSCopying var farPupillaryDistance: HKQuantity? { get }
```

## See Also

### Accessing the specification’s data

- [nearPupillaryDistance](nearpupillarydistance.md): The distance between the pupil and the center of the nose when looking at a nearby object, measured in mm.
- [prism](prism.md): An object that contains information about the eye alignment correction.
- [vertexDistance](vertexdistance.md): The distance between the back of the lens and the eye, measured in mm.

# farPupillaryDistance (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

The distance between the pupil and the center of the nose when looking at an object far away, measured in mm.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) HKQuantity * farPupillaryDistance;
```

## See Also

### Accessing the specification’s data

- [nearPupillaryDistance](nearpupillarydistance.md): The distance between the pupil and the center of the nose when looking at a nearby object, measured in mm.
- [prism](prism.md): An object that contains information about the eye alignment correction.
- [vertexDistance](vertexdistance.md): The distance between the back of the lens and the eye, measured in mm.
