> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrideoption/init(name:estimatedpickupdate:)](https://developer.apple.com/documentation/intents/inrideoption/init(name:estimatedpickupdate:))

# init(name:estimatedPickupDate:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

Initializes and returns a ride option object with the specified name and pickup information.

## Declaration

```swift
init(name: String, estimatedPickupDate: Date)
```

## Parameters

- `name`: The name of the ride option as a user-readable string. The system displays this string to the user during the ride selection process and when confirming the ride. Use this string to provide a unique description of the ride being offered.
- `estimatedPickupDate`: The estimated time of arrival for the ride at the user’s location. This information is presented to the user during the ride selection process.

<a id="return-value"></a>

## Return Value

An initialized ride option object or `nil` if the object could not be initialized.

<a id="Discussion"></a>

## Discussion

After initializing the object, fill in the other properties of the newly created object before adding it to your response object.

## See Also

### Initializing a Ride Option

- [init(coder:)](init%28coder_%29.md)

# initWithName:estimatedPickupDate: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

Initializes and returns a ride option object with the specified name and pickup information.

## Declaration

```objectivec
- (instancetype) initWithName:(NSString *) name estimatedPickupDate:(NSDate *) estimatedPickupDate;
```

## Parameters

- `name`: The name of the ride option as a user-readable string. The system displays this string to the user during the ride selection process and when confirming the ride. Use this string to provide a unique description of the ride being offered.
- `estimatedPickupDate`: The estimated time of arrival for the ride at the user’s location. This information is presented to the user during the ride selection process.

<a id="return-value"></a>

## Return Value

An initialized ride option object or `nil` if the object could not be initialized.

<a id="Discussion"></a>

## Discussion

After initializing the object, fill in the other properties of the newly created object before adding it to your response object.

## See Also

### Initializing a Ride Option

- [initWithCoder:](init%28coder_%29.md)
