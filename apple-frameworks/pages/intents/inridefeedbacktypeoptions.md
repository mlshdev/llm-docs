> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inridefeedbacktypeoptions](https://developer.apple.com/documentation/intents/inridefeedbacktypeoptions)

# INRideFeedbackTypeOptions (Swift)

**Framework:** Intents  
**Kind:** Structure  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Constants indicating the type of feedback needed.

## Declaration

```swift
struct INRideFeedbackTypeOptions
```

## Topics

### Constants

- [rate](inridefeedbacktypeoptions/rate.md): A constant indicating that the user must rate the driver.
- [tip](inridefeedbacktypeoptions/tip.md): A constant indicating that the user must specify a tip amount.

### Initializers

- [init(rawValue:)](inridefeedbacktypeoptions/init%28rawvalue_%29.md)

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

### Requesting Feedback About the Ride

- [feedbackType](inridecompletionstatus/feedbacktype.md): The type of feedback required for the ride before the user books a new ride can.
- [defaultTippingOptions](inridecompletionstatus/defaulttippingoptions.md): An array of default tip amounts to display to the user.

# INRideFeedbackTypeOptions (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Constants indicating the type of feedback needed.

## Declaration

```objectivec
enum INRideFeedbackTypeOptions : NSUInteger;
```

## Topics

### Constants

- [INRideFeedbackTypeOptionRate](inridefeedbacktypeoptions/rate.md): A constant indicating that the user must rate the driver.
- [INRideFeedbackTypeOptionTip](inridefeedbacktypeoptions/tip.md): A constant indicating that the user must specify a tip amount.

## See Also

### Requesting Feedback About the Ride

- [feedbackType](inridecompletionstatus/feedbacktype.md): The type of feedback required for the ride before the user books a new ride can.
- [defaultTippingOptions](inridecompletionstatus/defaulttippingoptions.md): An array of default tip amounts to display to the user.
