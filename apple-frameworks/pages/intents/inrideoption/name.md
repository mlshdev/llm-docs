> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrideoption/name](https://developer.apple.com/documentation/intents/inrideoption/name)

# name (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

The name of this ride option.

## Declaration

```swift
var name: String { get set }
```

<a id="Discussion"></a>

## Discussion

Siri displays this string to the user during the ride selection process and when confirming the ride. The [init(name:estimatedPickupDate:)](init%28name_estimatedpickupdate_%29.md) method sets this property at initialization time.

## See Also

### Specifying the Ride Information

- [estimatedPickupDate](estimatedpickupdate.md): The date and time when a ride of this type could be at the user’s location.
- [disclaimerMessage](disclaimermessage.md): A localized disclaimer message to display to the user before confirming the ride.
- [availablePartySizeOptions](availablepartysizeoptions.md): An array of size options for the user to choose from.
- [availablePartySizeOptionsSelectionPrompt](availablepartysizeoptionsselectionprompt.md): The localized text to display for selecting party size options.

# name (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

The name of this ride option.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite) NSString * name;
```

```objectivec
@property (atomic, copy, readwrite) NSString * name;
```

<a id="Discussion"></a>

## Discussion

Siri displays this string to the user during the ride selection process and when confirming the ride. The [initWithName:estimatedPickupDate:](init%28name_estimatedpickupdate_%29.md) method sets this property at initialization time.

## See Also

### Specifying the Ride Information

- [estimatedPickupDate](estimatedpickupdate.md): The date and time when a ride of this type could be at the user’s location.
- [disclaimerMessage](disclaimermessage.md): A localized disclaimer message to display to the user before confirming the ride.
- [availablePartySizeOptions](availablepartysizeoptions.md): An array of size options for the user to choose from.
- [availablePartySizeOptionsSelectionPrompt](availablepartysizeoptionsselectionprompt.md): The localized text to display for selecting party size options.
