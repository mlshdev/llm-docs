> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetcarpowerlevelstatusintentresponse](https://developer.apple.com/documentation/intents/ingetcarpowerlevelstatusintentresponse)

# INGetCarPowerLevelStatusIntentResponse (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Your app’s response to a request for the vehicle power level.

## Declaration

```swift
class INGetCarPowerLevelStatusIntentResponse
```

<a id="overview"></a>

## Overview

Use an `INGetCarPowerLevelStatusIntentResponse` object to specify the result of a request for a vehicle’s current power level. You create instances of this class when confirming or handling a power level status intent, or when reporting abrupt changes in an electric vehicle’s battery charge. Use this object to confirm that the request is valid, to communicate whether the app receives the power level data from the vehicle, or to report any errors that occur.

You create an `INGetCarPowerLevelStatusIntentResponse` object in the [confirm(intent:completion:)](ingetcarpowerlevelstatusintenthandling/confirm%28intent_completion_%29.md) and [handle(intent:completion:)](ingetcarpowerlevelstatusintenthandling/handle%28intent_completion_%29.md) methods of your intent handler object, and when calling [didUpdate(getCarPowerLevelStatus:)](ingetcarpowerlevelstatusintentresponseobserver/didupdate%28getcarpowerlevelstatus_%29.md) to notify Maps about abrupt battery charge changes in the user’s electric vehicle.

For more information about implementing your intent handler object, see [INGetCarPowerLevelStatusIntentHandling](ingetcarpowerlevelstatusintenthandling.md).

## Topics

### Creating a Response Object

- [init(code:userActivity:)](ingetcarpowerlevelstatusintentresponse/init%28code_useractivity_%29.md): Initializes the response object with the specified code and user activity.

### Getting the Response Code

- [code](ingetcarpowerlevelstatusintentresponse/code.md): The code that indicates success or failure when confirming or handling an intent.
- [INGetCarPowerLevelStatusIntentResponseCode](ingetcarpowerlevelstatusintentresponsecode.md): Constants that indicate the status of the response.

### Identifying the Vehicle

- [carIdentifier](ingetcarpowerlevelstatusintentresponse/caridentifier.md): A unique identifier for the vehicle.

### Providing Fuel, Charge, and Distance Information

- [chargePercentRemaining](ingetcarpowerlevelstatusintentresponse/chargepercentremaining-51zwv.md): The percentage of charge that remains for the electric vehicle.
- [fuelPercentRemaining](ingetcarpowerlevelstatusintentresponse/fuelpercentremaining-56xw3.md): The percentage of fuel that remains for the fuel-powered vehicle.
- [maximumDistance](ingetcarpowerlevelstatusintentresponse/maximumdistance.md): The maximum rated distance the vehicle can travel with full resources.
- [distanceRemaining](ingetcarpowerlevelstatusintentresponse/distanceremaining.md): The maximum distance the vehicle can travel with the remaining resources.
- [maximumDistanceElectric](ingetcarpowerlevelstatusintentresponse/maximumdistanceelectric.md): The maximum rated distance the electric vehicle can travel on a full charge.
- [distanceRemainingElectric](ingetcarpowerlevelstatusintentresponse/distanceremainingelectric.md): The maximum distance the electric vehicle can travel with the remaining charge.
- [maximumDistanceFuel](ingetcarpowerlevelstatusintentresponse/maximumdistancefuel.md): The maximum rated distance the fuel-powered vehicle can travel with a full tank of fuel.
- [distanceRemainingFuel](ingetcarpowerlevelstatusintentresponse/distanceremainingfuel.md): The maximum distance the fuel-powered vehicle can travel with the remaining fuel.

### Providing the Charge Status

- [activeConnector](ingetcarpowerlevelstatusintentresponse/activeconnector.md): The type of connector that’s currently delivering charge to the electric vehicle’s battery.
- [charging](ingetcarpowerlevelstatusintentresponse/charging-6xnqj.md): A Boolean value that indicates whether the electric vehicle is currently charging.
- [minutesToFull](ingetcarpowerlevelstatusintentresponse/minutestofull-2kbt6.md): The number of minutes it takes to fully charge the electric vehicle’s battery.
- [dateOfLastStateUpdate](ingetcarpowerlevelstatusintentresponse/dateoflaststateupdate.md): A timestamp that indicates the most recent charge status for the electric vehicle.

### Providing Battery Capacity

- [minimumBatteryCapacity](ingetcarpowerlevelstatusintentresponse/minimumbatterycapacity.md): A user-facing value that represents the minimum battery capacity of the electric vehicle.
- [maximumBatteryCapacity](ingetcarpowerlevelstatusintentresponse/maximumbatterycapacity.md): A user-facing value that represents the maximum battery capacity of the electric vehicle.
- [currentBatteryCapacity](ingetcarpowerlevelstatusintentresponse/currentbatterycapacity.md): A user-facing value that represents the current battery capacity of the electric vehicle.

### Providing Formula Arguments

- [chargingFormulaArguments](ingetcarpowerlevelstatusintentresponse/chargingformulaarguments.md): The parameters the electric vehicle’s charging model uses to calculate the duration of a charge.
- [consumptionFormulaArguments](ingetcarpowerlevelstatusintentresponse/consumptionformulaarguments.md): The parameters the electric vehicle’s consumption model uses to calculate its energy consumption.

## Relationships

### Inherits From

- [INIntentResponse](inintentresponse.md)

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

### Get Car Power Level Status

- [INGetCarPowerLevelStatusIntentHandling](ingetcarpowerlevelstatusintenthandling.md): The handler interface for requesting a car’s current power level.
- [INGetCarPowerLevelStatusIntent](ingetcarpowerlevelstatusintent.md): A request for the current power level of the user’s car.
- [INGetCarPowerLevelStatusIntentResponseObserver](ingetcarpowerlevelstatusintentresponseobserver.md): The interface for providing updates of a vehicle’s power level.

# INGetCarPowerLevelStatusIntentResponse (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Your app’s response to a request for the vehicle power level.

## Declaration

```objectivec
@interface INGetCarPowerLevelStatusIntentResponse : INIntentResponse
```

<a id="overview"></a>

## Overview

Use an `INGetCarPowerLevelStatusIntentResponse` object to specify the result of a request for a vehicle’s current power level. You create instances of this class when confirming or handling a power level status intent, or when reporting abrupt changes in an electric vehicle’s battery charge. Use this object to confirm that the request is valid, to communicate whether the app receives the power level data from the vehicle, or to report any errors that occur.

You create an `INGetCarPowerLevelStatusIntentResponse` object in the [confirmGetCarPowerLevelStatus:completion:](ingetcarpowerlevelstatusintenthandling/confirm%28intent_completion_%29.md) and [handleGetCarPowerLevelStatus:completion:](ingetcarpowerlevelstatusintenthandling/handle%28intent_completion_%29.md) methods of your intent handler object, and when calling [getCarPowerLevelStatusResponseDidUpdate:](ingetcarpowerlevelstatusintentresponseobserver/didupdate%28getcarpowerlevelstatus_%29.md) to notify Maps about abrupt battery charge changes in the user’s electric vehicle.

For more information about implementing your intent handler object, see [INGetCarPowerLevelStatusIntentHandling](ingetcarpowerlevelstatusintenthandling.md).

## Topics

### Creating a Response Object

- [initWithCode:userActivity:](ingetcarpowerlevelstatusintentresponse/init%28code_useractivity_%29.md): Initializes the response object with the specified code and user activity.

### Getting the Response Code

- [code](ingetcarpowerlevelstatusintentresponse/code.md): The code that indicates success or failure when confirming or handling an intent.
- [INGetCarPowerLevelStatusIntentResponseCode](ingetcarpowerlevelstatusintentresponsecode.md): Constants that indicate the status of the response.

### Identifying the Vehicle

- [carIdentifier](ingetcarpowerlevelstatusintentresponse/caridentifier.md): A unique identifier for the vehicle.

### Providing Fuel, Charge, and Distance Information

- [chargePercentRemaining](https://developer.apple.com/documentation/intents/ingetcarpowerlevelstatusintentresponse/chargepercentremaining-30zol): The percentage of charge that remains for the electric vehicle.
- [fuelPercentRemaining](https://developer.apple.com/documentation/intents/ingetcarpowerlevelstatusintentresponse/fuelpercentremaining-6mdv4): The percentage of fuel remaining for the fuel-powered vehicle.
- [maximumDistance](ingetcarpowerlevelstatusintentresponse/maximumdistance.md): The maximum rated distance the vehicle can travel with full resources.
- [distanceRemaining](ingetcarpowerlevelstatusintentresponse/distanceremaining.md): The maximum distance the vehicle can travel with the remaining resources.
- [maximumDistanceElectric](ingetcarpowerlevelstatusintentresponse/maximumdistanceelectric.md): The maximum rated distance the electric vehicle can travel on a full charge.
- [distanceRemainingElectric](ingetcarpowerlevelstatusintentresponse/distanceremainingelectric.md): The maximum distance the electric vehicle can travel with the remaining charge.
- [maximumDistanceFuel](ingetcarpowerlevelstatusintentresponse/maximumdistancefuel.md): The maximum rated distance the fuel-powered vehicle can travel with a full tank of fuel.
- [distanceRemainingFuel](ingetcarpowerlevelstatusintentresponse/distanceremainingfuel.md): The maximum distance the fuel-powered vehicle can travel with the remaining fuel.

### Providing the Charge Status

- [activeConnector](ingetcarpowerlevelstatusintentresponse/activeconnector.md): The type of connector that’s currently delivering charge to the electric vehicle’s battery.
- [charging](https://developer.apple.com/documentation/intents/ingetcarpowerlevelstatusintentresponse/charging-7aamu): A Boolean value that indicates whether the electric vehicle is currently charging.
- [minutesToFull](https://developer.apple.com/documentation/intents/ingetcarpowerlevelstatusintentresponse/minutestofull-25vcb): The number of minutes it will take to fully charge the electric vehicle’s battery.
- [dateOfLastStateUpdate](ingetcarpowerlevelstatusintentresponse/dateoflaststateupdate.md): A timestamp that indicates the most recent charge status for the electric vehicle.

### Providing Battery Capacity

- [minimumBatteryCapacity](ingetcarpowerlevelstatusintentresponse/minimumbatterycapacity.md): A user-facing value that represents the minimum battery capacity of the electric vehicle.
- [maximumBatteryCapacity](ingetcarpowerlevelstatusintentresponse/maximumbatterycapacity.md): A user-facing value that represents the maximum battery capacity of the electric vehicle.
- [currentBatteryCapacity](ingetcarpowerlevelstatusintentresponse/currentbatterycapacity.md): A user-facing value that represents the current battery capacity of the electric vehicle.

### Providing Formula Arguments

- [chargingFormulaArguments](ingetcarpowerlevelstatusintentresponse/chargingformulaarguments.md): The parameters the electric vehicle’s charging model uses to calculate the duration of a charge.
- [consumptionFormulaArguments](ingetcarpowerlevelstatusintentresponse/consumptionformulaarguments.md): The parameters the electric vehicle’s consumption model uses to calculate its energy consumption.

## Relationships

### Inherits From

- [INIntentResponse](inintentresponse.md)

## See Also

### Get Car Power Level Status

- [INGetCarPowerLevelStatusIntentHandling](ingetcarpowerlevelstatusintenthandling.md): The handler interface for requesting a car’s current power level.
- [INGetCarPowerLevelStatusIntent](ingetcarpowerlevelstatusintent.md): A request for the current power level of the user’s car.
- [INGetCarPowerLevelStatusIntentResponseObserver](ingetcarpowerlevelstatusintentresponseobserver.md): The interface for providing updates of a vehicle’s power level.
