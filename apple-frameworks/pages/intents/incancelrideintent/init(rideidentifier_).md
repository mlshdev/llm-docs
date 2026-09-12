> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incancelrideintent/init(rideidentifier:)](https://developer.apple.com/documentation/intents/incancelrideintent/init(rideidentifier:))

# init(rideIdentifier:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes the intent object with the specified ride identifier.

## Declaration

```swift
init(rideIdentifier: String)
```

## Parameters

- `rideIdentifier`: The unique string that you use to identify the ride.

<a id="return-value"></a>

## Return Value

An initialized intent object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Normally, you do not create instances of this class yourself. Instead, SiriKit creates instances when the user tries to cancel a ride. However, you can use this method during testing to create intent objects in order to validate your intent handling code paths.

# initWithRideIdentifier: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes the intent object with the specified ride identifier.

## Declaration

```objectivec
- (instancetype) initWithRideIdentifier:(NSString *) rideIdentifier;
```

## Parameters

- `rideIdentifier`: The unique string that you use to identify the ride.

<a id="return-value"></a>

## Return Value

An initialized intent object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Normally, you do not create instances of this class yourself. Instead, SiriKit creates instances when the user tries to cancel a ride. However, you can use this method during testing to create intent objects in order to validate your intent handling code paths.
