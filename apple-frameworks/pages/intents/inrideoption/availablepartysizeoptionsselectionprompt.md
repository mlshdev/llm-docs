> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrideoption/availablepartysizeoptionsselectionprompt](https://developer.apple.com/documentation/intents/inrideoption/availablepartysizeoptionsselectionprompt)

# availablePartySizeOptionsSelectionPrompt (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

The localized text to display for selecting party size options.

## Declaration

```swift
var availablePartySizeOptionsSelectionPrompt: String? { get set }
```

## Mentioned In

- [Generating a List of Ride Options](../../sirikit/generating-a-list-of-ride-options.md)

<a id="Discussion"></a>

## Discussion

Use this property to customize the text that Siri and Maps display to the user for party size selection. Display the text you provide as an option for the user to tap in the Siri or Maps interface. When tapped, display the party size options from the [availablePartySizeOptions](availablepartysizeoptions.md) property so that the user can select one.

## See Also

### Specifying the Ride Information

- [name](name.md): The name of this ride option.
- [estimatedPickupDate](estimatedpickupdate.md): The date and time when a ride of this type could be at the user’s location.
- [disclaimerMessage](disclaimermessage.md): A localized disclaimer message to display to the user before confirming the ride.
- [availablePartySizeOptions](availablepartysizeoptions.md): An array of size options for the user to choose from.

# availablePartySizeOptionsSelectionPrompt (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

The localized text to display for selecting party size options.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSString * availablePartySizeOptionsSelectionPrompt;
```

```objectivec
@property (atomic, copy, readwrite, nullable) NSString * availablePartySizeOptionsSelectionPrompt;
```

## Mentioned In

- [Generating a List of Ride Options](../../sirikit/generating-a-list-of-ride-options.md)

<a id="Discussion"></a>

## Discussion

Use this property to customize the text that Siri and Maps display to the user for party size selection. Display the text you provide as an option for the user to tap in the Siri or Maps interface. When tapped, display the party size options from the [availablePartySizeOptions](availablepartysizeoptions.md) property so that the user can select one.

## See Also

### Specifying the Ride Information

- [name](name.md): The name of this ride option.
- [estimatedPickupDate](estimatedpickupdate.md): The date and time when a ride of this type could be at the user’s location.
- [disclaimerMessage](disclaimermessage.md): A localized disclaimer message to display to the user before confirming the ride.
- [availablePartySizeOptions](availablepartysizeoptions.md): An array of size options for the user to choose from.
