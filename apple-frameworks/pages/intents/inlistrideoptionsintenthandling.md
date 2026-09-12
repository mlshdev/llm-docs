> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inlistrideoptionsintenthandling](https://developer.apple.com/documentation/intents/inlistrideoptionsintenthandling)

# INListRideOptionsIntentHandling (Swift)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The handler interface for fetching the list of rides currently available from your ride-booking service.

## Declaration

```swift
protocol INListRideOptionsIntentHandling : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Use the methods of the [INListRideOptionsIntentHandling](inlistrideoptionsintenthandling.md) protocol to resolve, confirm, and handle requests for information about the types of rides available from your service right now. Maps asks for this information when the user searches for a ride between the specified pickup and drop-off locations. Adopt this protocol in an object of your Intents extension that is capable of retrieving the ride information from your servers.

Ride options represent the categories of vehicles that your service offers and do not represent specific vehicles in your fleet. Each ride option contains information about the passenger capacity and pricing of the corresponding vehicles. You should also provide an estimated time at which one or more vehicles of that type could pick up the user.

Maps may deliver an [INListRideOptionsIntent](inlistrideoptionsintent.md) object to your handler object at any time. Maps does not require you to resolve or confirm the contents of a list ride options intent before handling it. User interactions drive the selection of data in Maps, ensuring that the data Maps places into an intent object is already valid.

## Topics

### Resolving the Intent Parameters

- [resolvePickupLocation(for:with:)](inlistrideoptionsintenthandling/resolvepickuplocation%28for_with_%29.md): Resolves the user’s pickup location.
- [resolveDropOffLocation(for:with:)](inlistrideoptionsintenthandling/resolvedropofflocation%28for_with_%29.md): Resolves the user’s drop-off location.

### Confirming the Response

- [confirm(intent:completion:)](inlistrideoptionsintenthandling/confirm%28intent_completion_%29.md): Confirms that you can provide the list of ride options.

### Handling the Intent

- [handle(intent:completion:)](inlistrideoptionsintenthandling/handle%28intent_completion_%29.md): Handles providing the list of ride options.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INRidesharingDomainHandling](inridesharingdomainhandling.md)

## See Also

### List Ride Options

- [Generating a List of Ride Options](../sirikit/generating-a-list-of-ride-options.md): Generate ride options for Maps to display to the user.
- [INListRideOptionsIntent](inlistrideoptionsintent.md): An intent for getting the types of rides available from a ride-booking service.
- [INListRideOptionsIntentResponse](inlistrideoptionsintentresponse.md): Your app’s response to a list ride options intent.

# INListRideOptionsIntentHandling (Objective-C)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The handler interface for fetching the list of rides currently available from your ride-booking service.

## Declaration

```objectivec
@protocol INListRideOptionsIntentHandling <NSObject>
```

<a id="overview"></a>

## Overview

Use the methods of the [INListRideOptionsIntentHandling](inlistrideoptionsintenthandling.md) protocol to resolve, confirm, and handle requests for information about the types of rides available from your service right now. Maps asks for this information when the user searches for a ride between the specified pickup and drop-off locations. Adopt this protocol in an object of your Intents extension that is capable of retrieving the ride information from your servers.

Ride options represent the categories of vehicles that your service offers and do not represent specific vehicles in your fleet. Each ride option contains information about the passenger capacity and pricing of the corresponding vehicles. You should also provide an estimated time at which one or more vehicles of that type could pick up the user.

Maps may deliver an [INListRideOptionsIntent](inlistrideoptionsintent.md) object to your handler object at any time. Maps does not require you to resolve or confirm the contents of a list ride options intent before handling it. User interactions drive the selection of data in Maps, ensuring that the data Maps places into an intent object is already valid.

## Topics

### Resolving the Intent Parameters

- [resolvePickupLocationForListRideOptions:withCompletion:](inlistrideoptionsintenthandling/resolvepickuplocation%28for_with_%29.md): Resolves the user’s pickup location.
- [resolveDropOffLocationForListRideOptions:withCompletion:](inlistrideoptionsintenthandling/resolvedropofflocation%28for_with_%29.md): Resolves the user’s drop-off location.

### Confirming the Response

- [confirmListRideOptions:completion:](inlistrideoptionsintenthandling/confirm%28intent_completion_%29.md): Confirms that you can provide the list of ride options.

### Handling the Intent

- [handleListRideOptions:completion:](inlistrideoptionsintenthandling/handle%28intent_completion_%29.md): Handles providing the list of ride options.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INRidesharingDomainHandling](inridesharingdomainhandling.md)

## See Also

### List Ride Options

- [Generating a List of Ride Options](../sirikit/generating-a-list-of-ride-options.md): Generate ride options for Maps to display to the user.
- [INListRideOptionsIntent](inlistrideoptionsintent.md): An intent for getting the types of rides available from a ride-booking service.
- [INListRideOptionsIntentResponse](inlistrideoptionsintentresponse.md): Your app’s response to a list ride options intent.
