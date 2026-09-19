> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/inridecompletionstatus/feedbacktype

# feedbackType (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

The type of feedback required for the ride before the user books a new ride can.

## Declaration

```swift
var feedbackType: INRideFeedbackTypeOptions { get }
```

## See Also

### Requesting Feedback About the Ride

- [INRideFeedbackTypeOptions](../inridefeedbacktypeoptions.md): Constants indicating the type of feedback needed.
- [defaultTippingOptions](defaulttippingoptions.md): An array of default tip amounts to display to the user.

# feedbackType (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

The type of feedback required for the ride before the user books a new ride can.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) INRideFeedbackTypeOptions feedbackType;
```

```objectivec
@property (atomic, assign, readonly) INRideFeedbackTypeOptions feedbackType;
```

## See Also

### Requesting Feedback About the Ride

- [INRideFeedbackTypeOptions](../inridefeedbacktypeoptions.md): Constants indicating the type of feedback needed.
- [defaultTippingOptions](defaulttippingoptions.md): An array of default tip amounts to display to the user.
