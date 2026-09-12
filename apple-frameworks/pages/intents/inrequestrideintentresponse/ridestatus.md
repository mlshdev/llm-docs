> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrequestrideintentresponse/ridestatus](https://developer.apple.com/documentation/intents/inrequestrideintentresponse/ridestatus)

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

You must assign a value to this property for any newly booked rides. The contents of this object convey important information to the user about the status and details of the ride. Siri and Maps display much of this information to the user. If you were unable to book the ride, you may leave this property set to `nil`.

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

You must assign a value to this property for any newly booked rides. The contents of this object convey important information to the user about the status and details of the ride. Siri and Maps display much of this information to the user. If you were unable to book the ride, you may leave this property set to `nil`.

The default value of this property is `nil`.
