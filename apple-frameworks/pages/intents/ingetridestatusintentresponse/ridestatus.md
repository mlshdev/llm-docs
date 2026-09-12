> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetridestatusintentresponse/ridestatus](https://developer.apple.com/documentation/intents/ingetridestatusintentresponse/ridestatus)

# rideStatus (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The current status of the ride.

## Declaration

```swift
@NSCopying var rideStatus: INRideStatus? { get set }
```

<a id="Discussion"></a>

## Discussion

Siri uses the information in this object to communicate the ride status to the user. Always provide as much information as you can for the current ride. If the user does not have an active ride, set this property to `nil`.

The default value of this property is `nil`.

# rideStatus (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The current status of the ride.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) INRideStatus * rideStatus;
```

```objectivec
@property (atomic, copy, readwrite, nullable) INRideStatus * rideStatus;
```

<a id="Discussion"></a>

## Discussion

Siri uses the information in this object to communicate the ride status to the user. Always provide as much information as you can for the current ride. If the user does not have an active ride, set this property to `nil`.

The default value of this property is `nil`.
