> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrideoption/disclaimermessage](https://developer.apple.com/documentation/intents/inrideoption/disclaimermessage)

# disclaimerMessage (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

A localized disclaimer message to display to the user before confirming the ride.

## Declaration

```swift
var disclaimerMessage: String? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to specify disclaimers about the ride you are offering. For example, you might use this property to present terms and conditions of the ride or to emphasize specific conditions such as when the user might share the ride with other users.

## See Also

### Specifying the Ride Information

- [name](name.md): The name of this ride option.
- [estimatedPickupDate](estimatedpickupdate.md): The date and time when a ride of this type could be at the user’s location.
- [availablePartySizeOptions](availablepartysizeoptions.md): An array of size options for the user to choose from.
- [availablePartySizeOptionsSelectionPrompt](availablepartysizeoptionsselectionprompt.md): The localized text to display for selecting party size options.

# disclaimerMessage (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

A localized disclaimer message to display to the user before confirming the ride.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSString * disclaimerMessage;
```

```objectivec
@property (atomic, copy, readwrite, nullable) NSString * disclaimerMessage;
```

<a id="Discussion"></a>

## Discussion

Use this property to specify disclaimers about the ride you are offering. For example, you might use this property to present terms and conditions of the ride or to emphasize specific conditions such as when the user might share the ride with other users.

## See Also

### Specifying the Ride Information

- [name](name.md): The name of this ride option.
- [estimatedPickupDate](estimatedpickupdate.md): The date and time when a ride of this type could be at the user’s location.
- [availablePartySizeOptions](availablepartysizeoptions.md): An array of size options for the user to choose from.
- [availablePartySizeOptionsSelectionPrompt](availablepartysizeoptionsselectionprompt.md): The localized text to display for selecting party size options.
