> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkglasseslensspecification/vertexdistance](https://developer.apple.com/documentation/healthkit/hkglasseslensspecification/vertexdistance)

# vertexDistance (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

The distance between the back of the lens and the eye, measured in mm.

## Declaration

```swift
@NSCopying var vertexDistance: HKQuantity? { get }
```

<a id="Discussion"></a>

## Discussion

This property’s range is from 12 to 14 mm.

## See Also

### Accessing the specification’s data

- [farPupillaryDistance](farpupillarydistance.md): The distance between the pupil and the center of the nose when looking at an object far away, measured in mm.
- [nearPupillaryDistance](nearpupillarydistance.md): The distance between the pupil and the center of the nose when looking at a nearby object, measured in mm.
- [prism](prism.md): An object that contains information about the eye alignment correction.

# vertexDistance (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

The distance between the back of the lens and the eye, measured in mm.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) HKQuantity * vertexDistance;
```

<a id="Discussion"></a>

## Discussion

This property’s range is from 12 to 14 mm.

## See Also

### Accessing the specification’s data

- [farPupillaryDistance](farpupillarydistance.md): The distance between the pupil and the center of the nose when looking at an object far away, measured in mm.
- [nearPupillaryDistance](nearpupillarydistance.md): The distance between the pupil and the center of the nose when looking at a nearby object, measured in mm.
- [prism](prism.md): An object that contains information about the eye alignment correction.
