> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkglasseslensspecification/init(sphere:cylinder:axis:addpower:vertexdistance:prism:farpupillarydistance:nearpupillarydistance:)](https://developer.apple.com/documentation/healthkit/hkglasseslensspecification/init(sphere:cylinder:axis:addpower:vertexdistance:prism:farpupillarydistance:nearpupillarydistance:))

# init(sphere:cylinder:axis:addPower:vertexDistance:prism:farPupillaryDistance:nearPupillaryDistance:) (Swift)

**Framework:** HealthKit  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a new glasses lens specification, containing the prescription data for one eye.

## Declaration

```swift
init(sphere: HKQuantity, cylinder: HKQuantity?, axis: HKQuantity?, addPower: HKQuantity?, vertexDistance: HKQuantity?, prism: HKVisionPrism?, farPupillaryDistance: HKQuantity?, nearPupillaryDistance: HKQuantity?)
```

## Parameters

- `sphere`: The correction for farsightedness, measured in [diopter()](../hkunit/diopter%28%29.md) units. The range is -10.5 to +6.5.
- `cylinder`: Part of the correction for astigmatism. This property measures the strength of the correction in [diopter()](../hkunit/diopter%28%29.md) units. The range is -3.0 to 3.0.
- `axis`: Part of the correction for astigmatism. This property measures the orientation of the correction in [degreeAngle()](../hkunit/degreeangle%28%29.md) units.
- `addPower`: The correction for nearsightedness, measured in [diopter()](../hkunit/diopter%28%29.md) units. The range is from 0.25 to 2.5. The right and left eyes should have the same value.
- `vertexDistance`: The distance between the back of the lens and the eye, measured in mm. The range is 12 to 14 mm.
- `prism`: An object that contains information about the correction for eye alignment. For more information, see [HKVisionPrism](../hkvisionprism.md).
- `farPupillaryDistance`: The distance between the pupil and the center of the nose when looking at an object far away, measured in mm.
- `nearPupillaryDistance`: The distance between the pupil and the center of the nose when looking at a nearby object, measured in mm.

# initWithSphere:cylinder:axis:addPower:vertexDistance:prism:farPupillaryDistance:nearPupillaryDistance: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a new glasses lens specification, containing the prescription data for one eye.

## Declaration

```objectivec
- (instancetype) initWithSphere:(HKQuantity *) sphere cylinder:(HKQuantity *) cylinder axis:(HKQuantity *) axis addPower:(HKQuantity *) addPower vertexDistance:(HKQuantity *) vertexDistance prism:(HKVisionPrism *) prism farPupillaryDistance:(HKQuantity *) farPupillaryDistance nearPupillaryDistance:(HKQuantity *) nearPupillaryDistance;
```

## Parameters

- `sphere`: The correction for farsightedness, measured in [diopterUnit](../hkunit/diopter%28%29.md) units. The range is -10.5 to +6.5.
- `cylinder`: Part of the correction for astigmatism. This property measures the strength of the correction in [diopterUnit](../hkunit/diopter%28%29.md) units. The range is -3.0 to 3.0.
- `axis`: Part of the correction for astigmatism. This property measures the orientation of the correction in [degreeAngleUnit](../hkunit/degreeangle%28%29.md) units.
- `addPower`: The correction for nearsightedness, measured in [diopterUnit](../hkunit/diopter%28%29.md) units. The range is from 0.25 to 2.5. The right and left eyes should have the same value.
- `vertexDistance`: The distance between the back of the lens and the eye, measured in mm. The range is 12 to 14 mm.
- `prism`: An object that contains information about the correction for eye alignment. For more information, see [HKVisionPrism](../hkvisionprism.md).
- `farPupillaryDistance`: The distance between the pupil and the center of the nose when looking at an object far away, measured in mm.
- `nearPupillaryDistance`: The distance between the pupil and the center of the nose when looking at a nearby object, measured in mm.
