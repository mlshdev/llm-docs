> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inridecompletionstatus](https://developer.apple.com/documentation/intents/inridecompletionstatus)

# INRideCompletionStatus (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Additional details about whether a ride completed successfully or someone canceled the ride.

## Declaration

```swift
class INRideCompletionStatus
```

<a id="overview"></a>

## Overview

An [INRideCompletionStatus](inridecompletionstatus.md) object contains detailed information about the status of a completed ride. Use this object to provide details about whether the ride was successful or canceled. You can also provide details related to the cost of the ride and whether the rider made payment.

When updating the status of a ride, you provide a response object that contains an [INRideStatus](inridestatus.md) object with details about the status. When the ride reaches the completed phase, create an instance of this class and assign it to the [completionStatus](inridestatus/completionstatus.md) property of the ride status object.

## Topics

### Creating a Ride Completion Status Object

- [completed()](inridecompletionstatus/completed%28%29.md): Creates an instance of this class that indicates the ride completed successfully.
- [completed(settled:)](inridecompletionstatus/completed%28settled_%29.md): Creates an instance of this class that indicates the ride completed successfully and with the specified cost.
- [completed(outstanding:)](inridecompletionstatus/completed%28outstanding_%29.md): Creates an instance of this class that indicates the ride completed successfully but still requires payment from the user.
- [completed(feedbackType:)](inridecompletionstatus/completed%28feedbacktype_%29.md): Creates an instance of this class that indicates the ride completed successfully but still requires feedback from the user.
- [canceledByService()](inridecompletionstatus/canceledbyservice%28%29.md): Creates an instance of this class that indicates your service canceled the ride.
- [canceledByUser()](inridecompletionstatus/canceledbyuser%28%29.md): Creates an instance of this class that indicates the user canceled the ride.
- [canceledMissedPickup()](inridecompletionstatus/canceledmissedpickup%28%29.md): Creates an instance of this class that indicates someone canceled the ride because of a missed pickup.

### Providing a User Activity Object

- [completionUserActivity](inridecompletionstatus/completionuseractivity.md): The user activity object indicating any additional steps the user needs to be take in your app.

### Getting the Status Information

- [isCompleted](inridecompletionstatus/iscompleted.md): A Boolean value indicating whether the ride completed successfully.
- [isCanceled](inridecompletionstatus/iscanceled.md): A Boolean value indicating whether someone canceled the ride for any reason.
- [isMissedPickup](inridecompletionstatus/ismissedpickup.md): A Boolean value indicating whether someone canceled the ride because the user was never picked up.
- [isOutstanding](inridecompletionstatus/isoutstanding.md): A Boolean indicating whether payment is still outstanding.
- [paymentAmount](inridecompletionstatus/paymentamount.md): The amount paid or still outstanding for the ride.

### Requesting Feedback About the Ride

- [feedbackType](inridecompletionstatus/feedbacktype.md): The type of feedback required for the ride before the user books a new ride can.
- [INRideFeedbackTypeOptions](inridefeedbacktypeoptions.md): Constants indicating the type of feedback needed.
- [defaultTippingOptions](inridecompletionstatus/defaulttippingoptions.md): An array of default tip amounts to display to the user.

### Initializers

- [init(coder:)](inridecompletionstatus/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Data Objects

- [INRideOption](inrideoption.md): Details about a type of ride offered by your ride-booking service.
- [INRideStatus](inridestatus.md): The status of a ride booked through a ride-booking service.
- [INRideDriver](inridedriver.md): Identifying information about a driver of a ride service.
- [INRideVehicle](inridevehicle.md): A specific vehicle used by a ride-booking service.
- [INRideFareLineItem](inridefarelineitem.md): A specific type of ride-related charge.
- [INRidePartySizeOption](inridepartysizeoption.md): The price of a ride involving the specified number of people.

# INRideCompletionStatus (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Additional details about whether a ride completed successfully or someone canceled the ride.

## Declaration

```objectivec
@interface INRideCompletionStatus : NSObject
```

<a id="overview"></a>

## Overview

An [INRideCompletionStatus](inridecompletionstatus.md) object contains detailed information about the status of a completed ride. Use this object to provide details about whether the ride was successful or canceled. You can also provide details related to the cost of the ride and whether the rider made payment.

When updating the status of a ride, you provide a response object that contains an [INRideStatus](inridestatus.md) object with details about the status. When the ride reaches the completed phase, create an instance of this class and assign it to the [completionStatus](inridestatus/completionstatus.md) property of the ride status object.

## Topics

### Creating a Ride Completion Status Object

- [completed](inridecompletionstatus/completed%28%29.md): Creates an instance of this class that indicates the ride completed successfully.
- [completedWithSettledPaymentAmount:](inridecompletionstatus/completed%28settled_%29.md): Creates an instance of this class that indicates the ride completed successfully and with the specified cost.
- [completedWithOutstandingPaymentAmount:](inridecompletionstatus/completed%28outstanding_%29.md): Creates an instance of this class that indicates the ride completed successfully but still requires payment from the user.
- [completedWithOutstandingFeedbackType:](inridecompletionstatus/completed%28feedbacktype_%29.md): Creates an instance of this class that indicates the ride completed successfully but still requires feedback from the user.
- [canceledByService](inridecompletionstatus/canceledbyservice%28%29.md): Creates an instance of this class that indicates your service canceled the ride.
- [canceledByUser](inridecompletionstatus/canceledbyuser%28%29.md): Creates an instance of this class that indicates the user canceled the ride.
- [canceledMissedPickup](inridecompletionstatus/canceledmissedpickup%28%29.md): Creates an instance of this class that indicates someone canceled the ride because of a missed pickup.

### Providing a User Activity Object

- [completionUserActivity](inridecompletionstatus/completionuseractivity.md): The user activity object indicating any additional steps the user needs to be take in your app.

### Getting the Status Information

- [completed](inridecompletionstatus/iscompleted.md): A Boolean value indicating whether the ride completed successfully.
- [canceled](inridecompletionstatus/iscanceled.md): A Boolean value indicating whether someone canceled the ride for any reason.
- [missedPickup](inridecompletionstatus/ismissedpickup.md): A Boolean value indicating whether someone canceled the ride because the user was never picked up.
- [outstanding](inridecompletionstatus/isoutstanding.md): A Boolean indicating whether payment is still outstanding.
- [paymentAmount](inridecompletionstatus/paymentamount.md): The amount paid or still outstanding for the ride.

### Requesting Feedback About the Ride

- [feedbackType](inridecompletionstatus/feedbacktype.md): The type of feedback required for the ride before the user books a new ride can.
- [INRideFeedbackTypeOptions](inridefeedbacktypeoptions.md): Constants indicating the type of feedback needed.
- [defaultTippingOptions](inridecompletionstatus/defaulttippingoptions.md): An array of default tip amounts to display to the user.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Data Objects

- [INRideOption](inrideoption.md): Details about a type of ride offered by your ride-booking service.
- [INRideStatus](inridestatus.md): The status of a ride booked through a ride-booking service.
- [INRideDriver](inridedriver.md): Identifying information about a driver of a ride service.
- [INRideVehicle](inridevehicle.md): A specific vehicle used by a ride-booking service.
- [INRideFareLineItem](inridefarelineitem.md): A specific type of ride-related charge.
- [INRidePartySizeOption](inridepartysizeoption.md): The price of a ride involving the specified number of people.
