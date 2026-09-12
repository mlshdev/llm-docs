> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrideoption/estimatedpickupdate](https://developer.apple.com/documentation/intents/inrideoption/estimatedpickupdate)

# estimatedPickupDate (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

The date and time when a ride of this type could be at the user’s location.

## Declaration

```swift
var estimatedPickupDate: Date { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the time at which you could pick up the user using a ride of this type. Always try to specify a date and time that is as close to the current time as possible. The [init(name:estimatedPickupDate:)](init%28name_estimatedpickupdate_%29.md) method sets this property at initialization time.

## See Also

### Specifying the Ride Information

- [name](name.md): The name of this ride option.
- [disclaimerMessage](disclaimermessage.md): A localized disclaimer message to display to the user before confirming the ride.
- [availablePartySizeOptions](availablepartysizeoptions.md): An array of size options for the user to choose from.
- [availablePartySizeOptionsSelectionPrompt](availablepartysizeoptionsselectionprompt.md): The localized text to display for selecting party size options.

# estimatedPickupDate (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

The date and time when a ride of this type could be at the user’s location.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite) NSDate * estimatedPickupDate;
```

```objectivec
@property (atomic, copy, readwrite) NSDate * estimatedPickupDate;
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the time at which you could pick up the user using a ride of this type. Always try to specify a date and time that is as close to the current time as possible. The [initWithName:estimatedPickupDate:](init%28name_estimatedpickupdate_%29.md) method sets this property at initialization time.

## See Also

### Specifying the Ride Information

- [name](name.md): The name of this ride option.
- [disclaimerMessage](disclaimermessage.md): A localized disclaimer message to display to the user before confirming the ride.
- [availablePartySizeOptions](availablepartysizeoptions.md): An array of size options for the user to choose from.
- [availablePartySizeOptionsSelectionPrompt](availablepartysizeoptionsselectionprompt.md): The localized text to display for selecting party size options.
