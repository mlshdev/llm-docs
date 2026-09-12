> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inridestatus/rideidentifier](https://developer.apple.com/documentation/intents/inridestatus/rideidentifier)

# rideIdentifier (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

The unique string that you use to identify the ride.

## Declaration

```swift
var rideIdentifier: String? { get set }
```

## Mentioned In

- [Providing Live Status Updates](../../sirikit/providing-live-status-updates.md)

<a id="Discussion"></a>

## Discussion

Use this property to store an app-specific identifier for the ride. Use this string to identify the ride in your own data structures. This string is not displayed to the user.

After the user books a ride, any status updates related to that ride must include a status object with the same identifier as the originally booked ride. Returning a status object with a different identifier causes Siri and Maps to change their UI, under the assumption that the user completed or canceled the previous ride.

# rideIdentifier (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

The unique string that you use to identify the ride.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSString * rideIdentifier;
```

```objectivec
@property (atomic, copy, readwrite, nullable) NSString * rideIdentifier;
```

## Mentioned In

- [Providing Live Status Updates](../../sirikit/providing-live-status-updates.md)

<a id="Discussion"></a>

## Discussion

Use this property to store an app-specific identifier for the ride. Use this string to identify the ride in your own data structures. This string is not displayed to the user.

After the user books a ride, any status updates related to that ride must include a status object with the same identifier as the originally booked ride. Returning a status object with a different identifier causes Siri and Maps to change their UI, under the assumption that the user completed or canceled the previous ride.
