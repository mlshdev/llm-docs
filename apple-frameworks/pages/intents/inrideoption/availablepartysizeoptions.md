> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrideoption/availablepartysizeoptions](https://developer.apple.com/documentation/intents/inrideoption/availablepartysizeoptions)

# availablePartySizeOptions (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

An array of size options for the user to choose from.

## Declaration

```swift
var availablePartySizeOptions: [INRidePartySizeOption]? { get set }
```

## Mentioned In

- [Generating a List of Ride Options](../../sirikit/generating-a-list-of-ride-options.md)

<a id="Discussion"></a>

## Discussion

Use this property to specify the carrying capacities for vehicles of this type and any capacity-based pricing information.

## See Also

### Specifying the Ride Information

- [name](name.md): The name of this ride option.
- [estimatedPickupDate](estimatedpickupdate.md): The date and time when a ride of this type could be at the user’s location.
- [disclaimerMessage](disclaimermessage.md): A localized disclaimer message to display to the user before confirming the ride.
- [availablePartySizeOptionsSelectionPrompt](availablepartysizeoptionsselectionprompt.md): The localized text to display for selecting party size options.

# availablePartySizeOptions (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

An array of size options for the user to choose from.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSArray<INRidePartySizeOption *> * availablePartySizeOptions;
```

```objectivec
@property (atomic, copy, readwrite, nullable) NSArray<INRidePartySizeOption *> * availablePartySizeOptions;
```

## Mentioned In

- [Generating a List of Ride Options](../../sirikit/generating-a-list-of-ride-options.md)

<a id="Discussion"></a>

## Discussion

Use this property to specify the carrying capacities for vehicles of this type and any capacity-based pricing information.

## See Also

### Specifying the Ride Information

- [name](name.md): The name of this ride option.
- [estimatedPickupDate](estimatedpickupdate.md): The date and time when a ride of this type could be at the user’s location.
- [disclaimerMessage](disclaimermessage.md): A localized disclaimer message to display to the user before confirming the ride.
- [availablePartySizeOptionsSelectionPrompt](availablepartysizeoptionsselectionprompt.md): The localized text to display for selecting party size options.
