> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitouch/properties](https://developer.apple.com/documentation/uikit/uitouch/properties)

# UITouch.Properties (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A bit mask of touch properties that may get updated.

## Declaration

```swift
struct Properties
```

## Topics

### Constants

- [force](properties/force.md): A touch property, representing force, in a bit mask.
- [azimuth](properties/azimuth.md): A touch property, representing azimuth, in a bit mask.
- [altitude](properties/altitude.md): A touch property, representing altitude, in a bit mask.
- [location](properties/location.md): A touch property, representing location, in a bit mask.
- [roll](properties/roll.md): A touch property, representing barrel-roll angle, in a bit mask.

### Initializers

- [init(rawValue:)](properties/init%28rawvalue_%29.md): Creates a structure that represents the properties of a touch object.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Managing estimated touch attributes

- [estimatedProperties](estimatedproperties.md): A set of touch properties whose values contain only estimates.
- [estimatedPropertiesExpectingUpdates](estimatedpropertiesexpectingupdates.md): The set of touch properties for which updated values are expected in the future.
- [estimationUpdateIndex](estimationupdateindex.md): An index number that lets you correlate an updated touch with the original touch.

# UITouchProperties (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

A bit mask of touch properties that may get updated.

## Declaration

```objectivec
enum UITouchProperties : NSInteger;
```

## Topics

### Constants

- [UITouchPropertyForce](properties/force.md): A touch property, representing force, in a bit mask.
- [UITouchPropertyAzimuth](properties/azimuth.md): A touch property, representing azimuth, in a bit mask.
- [UITouchPropertyAltitude](properties/altitude.md): A touch property, representing altitude, in a bit mask.
- [UITouchPropertyLocation](properties/location.md): A touch property, representing location, in a bit mask.
- [UITouchPropertyRoll](properties/roll.md): A touch property, representing barrel-roll angle, in a bit mask.

## See Also

### Managing estimated touch attributes

- [estimatedProperties](estimatedproperties.md): A set of touch properties whose values contain only estimates.
- [estimatedPropertiesExpectingUpdates](estimatedpropertiesexpectingupdates.md): The set of touch properties for which updated values are expected in the future.
- [estimationUpdateIndex](estimationupdateindex.md): An index number that lets you correlate an updated touch with the original touch.
