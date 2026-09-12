> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrequestrideintenthandling](https://developer.apple.com/documentation/intents/inrequestrideintenthandling)

# INRequestRideIntentHandling (Swift)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The handler interface for booking a ride for the user.

## Declaration

```swift
protocol INRequestRideIntentHandling : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Use the methods of the [INRequestRideIntentHandling](inrequestrideintenthandling.md) protocol to resolve, confirm, and handle requests to book a ride using your service. Adopt this protocol in an object of your Intents extension that is capable of initiating the booking process with your service. SiriKit calls the methods of your object to resolve the parameters to your ride-related information and to book the ride upon confirmation by the user.

Ride requests have many items to resolve. You should resolve all options in some manner, but you may omit options that are not relevant to your service. For example, if your service transports cargo instead of passengers, you might ignore the party size option. For ride requests, you must resolve the following items:

- Pickup location
- Drop-off location
- Party size
- Ride option
- Payment method

> **Note**

>  Maps does not require you to confirm the contents of a get ride status intent before handling it. User interactions drive the selection of data in Maps, ensuring that the data Maps places into an intent object is already valid.

<a id="Handling-a-Ride-Request"></a>

### Handling a Ride Request

Handling a ride request involves booking the ride with your service and providing SiriKit with the status of the booking. The details of how you book rides through your service are up to you. You need to schedule the ride, find a vehicle and a driver, and arrange payment from the user. The [INRequestRideIntent](inrequestrideintent.md) object contains information about what the user needs. Pass the information in that object to your service and use the results to configure the response object you return to SiriKit.

The code listing below is an example of how you might book a ride and provide a response. Because booking the actual ride is a custom process, the example calls several custom methods to implement key phases of that process. The first of these methods uses information from the intent object to register the request with a fictional service and retrieve an ID string identifying the request. Use that ID string to retrieve specific information from the service regarding the vehicle type, driver, and ride option. Use all of the retrieved information to build the [INRideStatus](inridestatus.md) object that and add the status object to the [INRequestRideIntentResponse](inrequestrideintentresponse.md) object passed back to SiriKit.

**Swift**

```swift
func handle(requestRide intent: INRequestRideIntent, completion: (INRequestRideIntentResponse) -> Void) {
    let status = INRideStatus()
    
    // Configure the ride request internally and get its ID
    status.rideIdentifier = self.createNewRideRequest(withStartingLocation: intent.pickupLocation!,
                                                      endingLocation: intent.dropOffLocation!,
                                                      partySize: intent.partySize!,
                                                      paymentMethod: intent.paymentMethod!)
    
    // Configure the pickup and dropoff information.
    status.estimatedPickupDate = self.estimatedPickupDateForRideRequest(identifier: status.rideIdentifier!)
    status.pickupLocation = intent.pickupLocation
    status.dropOffLocation = intent.dropOffLocation
    
    // Retrieve the ride details that the user needs.
    status.vehicle = self.vehicleForRideRequest(identifier: status.rideIdentifier!)
    status.driver = self.driverForRideRequest(identifier: status.rideIdentifier!)
    
    // Configure the vehicle type and pricing.
    status.rideOption = self.rideOptionForRideRequest(identifier: status.rideIdentifier!)
    
    // Commit the request and get the current status.
    status.phase = self.completeBookingForRideRequest(identifier: status.rideIdentifier!)
    
    var responseCode : INRequestRideIntentResponseCode
    if status.phase == .received {
        responseCode = .inProgress
    }
    else if status.phase == .confirmed {
        responseCode = .success
    }
    else {
        responseCode = .failure
    }
    
    let response = INRequestRideIntentResponse.init(code: responseCode, userActivity: nil)
    response.rideStatus = status
    
    completion(response)
}
```

**Objective-C**

```objc
- (void)handleRequestRide:(INRequestRideIntent *)requestRideIntent
       completion:(void (^)(INRequestRideIntentResponse *requestRideIntentResponse))completion {
   INRideStatus* status = [[INRideStatus alloc] init];
 
   // Create the request in my app's ride booking software.
   // Get the resulting request ID to use for configuring the response.
   status.rideIdentifier =
      [self createNewRideRequestWithStartingLocation:requestRideIntent.pickupLocation
                                      endingLocation:requestRideIntent.dropOffLocation
                                           partySize:requestRideIntent.partySize
                                       paymentMethod:requestRideIntent.paymentMethod];
 
   // Configure the pickup and dropoff information.
   status.estimatedPickupDate = [self estimatedPickupDateForRideRequest:status.rideIdentifier];
   status.pickupLocation = requestRideIntent.pickupLocation;
   status.dropOffLocation = requestRideIntent.dropOffLocation;
 
   // Retrieve information about the assigned vehicle and driver (if any).
   status.vehicle = [self vehicleForRideRequest:status.rideIdentifier];
   status.driver = [self driverForRideRequest:status.rideIdentifier];
 
   // Configure the vehicle type and pricing.
    status.rideOption = [self rideOptionForRideRequest:status.rideIdentifier];
 
   // Commit the request and get the current status.
   status.phase = [self completeBookingForRideRequest:status.rideIdentifier];
 
   // Use the status to determine the success or failure of the request.
   INRequestRideIntentResponseCode responseCode;
   if (status.phase == INRidePhaseReceived)
      responseCode = INRequestRideIntentResponseCodeInProgress;
   else if (status.phase == INRidePhaseConfirmed)
      responseCode = INRequestRideIntentResponseCodeSuccess;
   else
      responseCode = INRequestRideIntentResponseCodeFailure;
 
   // Create the response object and fill it with the status information.
   INRequestRideIntentResponse* response = [[INRequestRideIntentResponse alloc]
                          initWithCode:responseCode userActivity:nil];
   response.rideStatus = status;
 
   // Return the response to SiriKit.
   completion(response);
}
```

When creating responses, providing an [NSUserActivity](../foundation/nsuseractivity.md) object is optional and necessary only when you want to include custom information for your app. If you specify `nil`, SiriKit creates a user activity object for you as needed. For more information on configuring the response object, see [INRequestRideIntentResponse](inrequestrideintentresponse.md).

## Topics

### Resolving the Intent Parameters

- [resolvePickupLocation(for:with:)](inrequestrideintenthandling/resolvepickuplocation%28for_with_%29.md): Resolves the pickup location for the ride.
- [resolveScheduledPickupTime(for:with:)](inrequestrideintenthandling/resolvescheduledpickuptime%28for_with_%29.md): Resolves the pickup time for the ride.
- [resolveDropOffLocation(for:with:)](inrequestrideintenthandling/resolvedropofflocation%28for_with_%29.md): Resolves the drop-off location for the ride.
- [resolveRideOptionName(for:with:)](inrequestrideintenthandling/resolverideoptionname%28for_with_%29.md): Resolves the user’s selected ride option.
- [resolvePartySize(for:with:)](inrequestrideintenthandling/resolvepartysize%28for_with_%29.md): Resolves the number of passengers for the ride.

### Confirming the Response

- [confirm(intent:completion:)](inrequestrideintenthandling/confirm%28intent_completion_%29.md): Confirms that you can book the ride.

### Handling the Intent

- [handle(intent:completion:)](inrequestrideintenthandling/handle%28intent_completion_%29.md): Handles the booking of the ride.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INRidesharingDomainHandling](inridesharingdomainhandling.md)

## See Also

### Request a Ride

- [INRequestRideIntent](inrequestrideintent.md): A request to book the specified ride from your service.
- [INRequestRideIntentResponse](inrequestrideintentresponse.md): Your app’s response to a request ride intent.

# INRequestRideIntentHandling (Objective-C)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The handler interface for booking a ride for the user.

## Declaration

```objectivec
@protocol INRequestRideIntentHandling <NSObject>
```

<a id="overview"></a>

## Overview

Use the methods of the [INRequestRideIntentHandling](inrequestrideintenthandling.md) protocol to resolve, confirm, and handle requests to book a ride using your service. Adopt this protocol in an object of your Intents extension that is capable of initiating the booking process with your service. SiriKit calls the methods of your object to resolve the parameters to your ride-related information and to book the ride upon confirmation by the user.

Ride requests have many items to resolve. You should resolve all options in some manner, but you may omit options that are not relevant to your service. For example, if your service transports cargo instead of passengers, you might ignore the party size option. For ride requests, you must resolve the following items:

- Pickup location
- Drop-off location
- Party size
- Ride option
- Payment method

> **Note**

>  Maps does not require you to confirm the contents of a get ride status intent before handling it. User interactions drive the selection of data in Maps, ensuring that the data Maps places into an intent object is already valid.

<a id="Handling-a-Ride-Request"></a>

### Handling a Ride Request

Handling a ride request involves booking the ride with your service and providing SiriKit with the status of the booking. The details of how you book rides through your service are up to you. You need to schedule the ride, find a vehicle and a driver, and arrange payment from the user. The [INRequestRideIntent](inrequestrideintent.md) object contains information about what the user needs. Pass the information in that object to your service and use the results to configure the response object you return to SiriKit.

The code listing below is an example of how you might book a ride and provide a response. Because booking the actual ride is a custom process, the example calls several custom methods to implement key phases of that process. The first of these methods uses information from the intent object to register the request with a fictional service and retrieve an ID string identifying the request. Use that ID string to retrieve specific information from the service regarding the vehicle type, driver, and ride option. Use all of the retrieved information to build the [INRideStatus](inridestatus.md) object that and add the status object to the [INRequestRideIntentResponse](inrequestrideintentresponse.md) object passed back to SiriKit.

**Swift**

```swift
func handle(requestRide intent: INRequestRideIntent, completion: (INRequestRideIntentResponse) -> Void) {
    let status = INRideStatus()
    
    // Configure the ride request internally and get its ID
    status.rideIdentifier = self.createNewRideRequest(withStartingLocation: intent.pickupLocation!,
                                                      endingLocation: intent.dropOffLocation!,
                                                      partySize: intent.partySize!,
                                                      paymentMethod: intent.paymentMethod!)
    
    // Configure the pickup and dropoff information.
    status.estimatedPickupDate = self.estimatedPickupDateForRideRequest(identifier: status.rideIdentifier!)
    status.pickupLocation = intent.pickupLocation
    status.dropOffLocation = intent.dropOffLocation
    
    // Retrieve the ride details that the user needs.
    status.vehicle = self.vehicleForRideRequest(identifier: status.rideIdentifier!)
    status.driver = self.driverForRideRequest(identifier: status.rideIdentifier!)
    
    // Configure the vehicle type and pricing.
    status.rideOption = self.rideOptionForRideRequest(identifier: status.rideIdentifier!)
    
    // Commit the request and get the current status.
    status.phase = self.completeBookingForRideRequest(identifier: status.rideIdentifier!)
    
    var responseCode : INRequestRideIntentResponseCode
    if status.phase == .received {
        responseCode = .inProgress
    }
    else if status.phase == .confirmed {
        responseCode = .success
    }
    else {
        responseCode = .failure
    }
    
    let response = INRequestRideIntentResponse.init(code: responseCode, userActivity: nil)
    response.rideStatus = status
    
    completion(response)
}
```

**Objective-C**

```objc
- (void)handleRequestRide:(INRequestRideIntent *)requestRideIntent
       completion:(void (^)(INRequestRideIntentResponse *requestRideIntentResponse))completion {
   INRideStatus* status = [[INRideStatus alloc] init];
 
   // Create the request in my app's ride booking software.
   // Get the resulting request ID to use for configuring the response.
   status.rideIdentifier =
      [self createNewRideRequestWithStartingLocation:requestRideIntent.pickupLocation
                                      endingLocation:requestRideIntent.dropOffLocation
                                           partySize:requestRideIntent.partySize
                                       paymentMethod:requestRideIntent.paymentMethod];
 
   // Configure the pickup and dropoff information.
   status.estimatedPickupDate = [self estimatedPickupDateForRideRequest:status.rideIdentifier];
   status.pickupLocation = requestRideIntent.pickupLocation;
   status.dropOffLocation = requestRideIntent.dropOffLocation;
 
   // Retrieve information about the assigned vehicle and driver (if any).
   status.vehicle = [self vehicleForRideRequest:status.rideIdentifier];
   status.driver = [self driverForRideRequest:status.rideIdentifier];
 
   // Configure the vehicle type and pricing.
    status.rideOption = [self rideOptionForRideRequest:status.rideIdentifier];
 
   // Commit the request and get the current status.
   status.phase = [self completeBookingForRideRequest:status.rideIdentifier];
 
   // Use the status to determine the success or failure of the request.
   INRequestRideIntentResponseCode responseCode;
   if (status.phase == INRidePhaseReceived)
      responseCode = INRequestRideIntentResponseCodeInProgress;
   else if (status.phase == INRidePhaseConfirmed)
      responseCode = INRequestRideIntentResponseCodeSuccess;
   else
      responseCode = INRequestRideIntentResponseCodeFailure;
 
   // Create the response object and fill it with the status information.
   INRequestRideIntentResponse* response = [[INRequestRideIntentResponse alloc]
                          initWithCode:responseCode userActivity:nil];
   response.rideStatus = status;
 
   // Return the response to SiriKit.
   completion(response);
}
```

When creating responses, providing an [NSUserActivity](../foundation/nsuseractivity.md) object is optional and necessary only when you want to include custom information for your app. If you specify `nil`, SiriKit creates a user activity object for you as needed. For more information on configuring the response object, see [INRequestRideIntentResponse](inrequestrideintentresponse.md).

## Topics

### Resolving the Intent Parameters

- [resolvePickupLocationForRequestRide:withCompletion:](inrequestrideintenthandling/resolvepickuplocation%28for_with_%29.md): Resolves the pickup location for the ride.
- [resolveScheduledPickupTimeForRequestRide:withCompletion:](inrequestrideintenthandling/resolvescheduledpickuptime%28for_with_%29.md): Resolves the pickup time for the ride.
- [resolveDropOffLocationForRequestRide:withCompletion:](inrequestrideintenthandling/resolvedropofflocation%28for_with_%29.md): Resolves the drop-off location for the ride.
- [resolveRideOptionNameForRequestRide:withCompletion:](inrequestrideintenthandling/resolverideoptionname%28for_with_%29.md): Resolves the user’s selected ride option.
- [resolvePartySizeForRequestRide:withCompletion:](inrequestrideintenthandling/resolvepartysize%28for_with_%29.md): Resolves the number of passengers for the ride.

### Confirming the Response

- [confirmRequestRide:completion:](inrequestrideintenthandling/confirm%28intent_completion_%29.md): Confirms that you can book the ride.

### Handling the Intent

- [handleRequestRide:completion:](inrequestrideintenthandling/handle%28intent_completion_%29.md): Handles the booking of the ride.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INRidesharingDomainHandling](inridesharingdomainhandling.md)

## See Also

### Request a Ride

- [INRequestRideIntent](inrequestrideintent.md): A request to book the specified ride from your service.
- [INRequestRideIntentResponse](inrequestrideintentresponse.md): Your app’s response to a request ride intent.
