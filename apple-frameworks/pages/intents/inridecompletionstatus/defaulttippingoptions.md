> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/inridecompletionstatus/defaulttippingoptions

# defaultTippingOptions (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

An array of default tip amounts to display to the user.

## Declaration

```swift
var defaultTippingOptions: Set<INCurrencyAmount>? { get set }
```

<a id="Discussion"></a>

## Discussion

When requesting tip feedback, use this property to specify a set of default tip amounts. Specify up to three tip amounts. Siri or Maps display this information when gathering feedback from the user.

## See Also

### Requesting Feedback About the Ride

- [feedbackType](feedbacktype.md): The type of feedback required for the ride before the user books a new ride can.
- [INRideFeedbackTypeOptions](../inridefeedbacktypeoptions.md): Constants indicating the type of feedback needed.

# defaultTippingOptions (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

An array of default tip amounts to display to the user.

## Declaration

```objectivec
@property (nonatomic, strong, readwrite, nullable) NSSet<INCurrencyAmount *> * defaultTippingOptions;
```

```objectivec
@property (atomic, strong, readwrite, nullable) NSSet<INCurrencyAmount *> * defaultTippingOptions;
```

<a id="Discussion"></a>

## Discussion

When requesting tip feedback, use this property to specify a set of default tip amounts. Specify up to three tip amounts. Siri or Maps display this information when gathering feedback from the user.

## See Also

### Requesting Feedback About the Ride

- [feedbackType](feedbacktype.md): The type of feedback required for the ride before the user books a new ride can.
- [INRideFeedbackTypeOptions](../inridefeedbacktypeoptions.md): Constants indicating the type of feedback needed.
