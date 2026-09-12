> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inlistcarsintent](https://developer.apple.com/documentation/intents/inlistcarsintent)

# INListCarsIntent (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+ · watchOS 7.0+

An intent for retrieving a list of the user’s electric vehicles.

## Declaration

```swift
class INListCarsIntent
```

<a id="overview"></a>

## Overview

Maps creates instances of `INListCarsIntent` when it needs to display a list of the user’s electric vehicles, usually before or during route planning.

To handle this intent, you create an object that conforms to the [INListCarsIntentHandling](inlistcarsintenthandling.md) protocol. The object handles, and optionally confirms, the request by providing an instance of [INListCarsIntentResponse](inlistcarsintentresponse.md). The response contains an array of [INCar](incar.md) objects, one for each of the user’s electric vehicles. Maps requires that each vehicle responds to [INGetCarPowerLevelStatusIntent](ingetcarpowerlevelstatusintent.md) requests so that it can use the information the intent provides—current charge, battery capacity, distance remaining, and so forth—to more accurately plan the route.

## Topics

### Creating an Intent

- [init()](inlistcarsintent/init%28%29.md): Creates an intent that represents a request for a list of the user’s electric vehicles.

## Relationships

### Inherits From

- [INIntent](inintent.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [INIntentSetImageKeyPath](inintentsetimagekeypath.md)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### List Cars

- [INListCarsIntentHandling](inlistcarsintenthandling.md): The handler interface for requesting a list of the user’s electric vehicles.
- [INListCarsIntentResponse](inlistcarsintentresponse.md): Your app’s response to a request to list the user’s electric vehicles.

# INListCarsIntent (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+ · watchOS 7.0+

An intent for retrieving a list of the user’s electric vehicles.

## Declaration

```objectivec
@interface INListCarsIntent : INIntent
```

<a id="overview"></a>

## Overview

Maps creates instances of `INListCarsIntent` when it needs to display a list of the user’s electric vehicles, usually before or during route planning.

To handle this intent, you create an object that conforms to the [INListCarsIntentHandling](inlistcarsintenthandling.md) protocol. The object handles, and optionally confirms, the request by providing an instance of [INListCarsIntentResponse](inlistcarsintentresponse.md). The response contains an array of [INCar](incar.md) objects, one for each of the user’s electric vehicles. Maps requires that each vehicle responds to [INGetCarPowerLevelStatusIntent](ingetcarpowerlevelstatusintent.md) requests so that it can use the information the intent provides—current charge, battery capacity, distance remaining, and so forth—to more accurately plan the route.

## Topics

### Creating an Intent

- [init](inlistcarsintent/init%28%29.md): Creates an intent that represents a request for a list of the user’s electric vehicles.

## Relationships

### Inherits From

- [INIntent](inintent.md)

## See Also

### List Cars

- [INListCarsIntentHandling](inlistcarsintenthandling.md): The handler interface for requesting a list of the user’s electric vehicles.
- [INListCarsIntentResponse](inlistcarsintentresponse.md): Your app’s response to a request to list the user’s electric vehicles.
