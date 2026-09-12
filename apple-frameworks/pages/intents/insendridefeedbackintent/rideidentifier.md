> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insendridefeedbackintent/rideidentifier](https://developer.apple.com/documentation/intents/insendridefeedbackintent/rideidentifier)

# rideIdentifier (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The unique identifier that you assigned to the ride.

## Declaration

```swift
var rideIdentifier: String { get }
```

<a id="Discussion"></a>

## Discussion

SiriKit sets this property to the ride identifier you provided in your [INRideStatus](../inridestatus.md) object when booking the ride or supplying its status.

# rideIdentifier (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The unique identifier that you assigned to the ride.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * rideIdentifier;
```

```objectivec
@property (atomic, copy, readonly) NSString * rideIdentifier;
```

<a id="Discussion"></a>

## Discussion

SiriKit sets this property to the ride identifier you provided in your [INRideStatus](../inridestatus.md) object when booking the ride or supplying its status.
