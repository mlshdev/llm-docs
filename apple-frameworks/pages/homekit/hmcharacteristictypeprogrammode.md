> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmcharacteristictypeprogrammode](https://developer.apple.com/documentation/homekit/hmcharacteristictypeprogrammode)

# HMCharacteristicTypeProgramMode (Swift)

**Framework:** HomeKit  
**Kind:** Global Variable  
**Availability:** iOS 11.2+ · iPadOS 11.2+ · Mac Catalyst 11.2+ · tvOS 11.2+ · visionOS 1.0+ · watchOS 4.2+

The current mode of the accessory’s scheduled programs.

## Declaration

```swift
let HMCharacteristicTypeProgramMode: String
```

<a id="Discussion"></a>

## Discussion

The corresponding value is one of the constants in the [HMCharacteristicValueProgramMode](hmcharacteristicvalueprogrammode.md) enumeration.

> **Note**

>  This characteristic type doesn’t add, modify, or delete the schedule itself. The user must set or modify the schedule through the accessory’s user interface, or using an app designed to communicate directly with the accessory (for example, using an API provided by the accessory’s manufacturer).

## Topics

### Values

- [HMCharacteristicValueProgramMode](hmcharacteristicvalueprogrammode.md): Possible values for scheduled programs.

## See Also

### General state

- [HMCharacteristicTypeActive](hmcharacteristictypeactive.md): The current status of an accessory.
- [HMCharacteristicTypeStatusTampered](hmcharacteristictypestatustampered.md): An indicator of whether an accessory has been tampered with.
- [HMCharacteristicTypeStatusFault](hmcharacteristictypestatusfault.md): An indicator of whether the accessory has experienced a fault.
- [HMCharacteristicTypeStatusActive](hmcharacteristictypestatusactive.md): An indicator of whether the service is working.
- [HMCharacteristicTypeInUse](hmcharacteristictypeinuse.md): The current usage state of an accessory.
- [HMCharacteristicTypeIsConfigured](hmcharacteristictypeisconfigured.md): The configuration state of an accessory.
- [HMCharacteristicTypeRemainingDuration](hmcharacteristictyperemainingduration.md): The number of seconds remaining for the activity being carried out by the accessory.
- [HMCharacteristicTypeSetDuration](hmcharacteristictypesetduration.md): The duration of the activity being carried out by the accessory.
- [HMCharacteristicTypeWiFiSatelliteStatus](hmcharacteristictypewifisatellitestatus.md): The network status of the WiFi satellite accessory.
- [HMCharacteristicTypeWANStatusList](hmcharacteristictypewanstatuslist.md): The WAN status list of an accessory.
- [HMCharacteristicTypeTargetMediaState](hmcharacteristictypetargetmediastate.md): The target media state.
- [HMCharacteristicTypeRouterStatus](hmcharacteristictyperouterstatus.md): The current status of the router.
- [HMCharacteristicTypeCurrentMediaState](hmcharacteristictypecurrentmediastate.md): The current state of the media.
- [HMCharacteristicTypeCurrentVisibilityState](hmcharacteristictypecurrentvisibilitystate.md): The current visibility state for a service.
- [HMCharacteristicTypeTargetVisibilityState](hmcharacteristictypetargetvisibilitystate.md): The target visibility state for a service.

# HMCharacteristicTypeProgramMode (Objective-C)

**Framework:** HomeKit  
**Kind:** Global Variable  
**Availability:** iOS 11.2+ · iPadOS 11.2+ · Mac Catalyst 14.0+ · tvOS 11.2+ · visionOS 1.0+ · watchOS 4.2+

The current mode of the accessory’s scheduled programs.

## Declaration

```objectivec
extern NSString * const HMCharacteristicTypeProgramMode;
```

<a id="Discussion"></a>

## Discussion

The corresponding value is one of the constants in the [HMCharacteristicValueProgramMode](hmcharacteristicvalueprogrammode.md) enumeration.

> **Note**

>  This characteristic type doesn’t add, modify, or delete the schedule itself. The user must set or modify the schedule through the accessory’s user interface, or using an app designed to communicate directly with the accessory (for example, using an API provided by the accessory’s manufacturer).

## Topics

### Values

- [HMCharacteristicValueProgramMode](hmcharacteristicvalueprogrammode.md): Possible values for scheduled programs.

## See Also

### General state

- [HMCharacteristicTypeActive](hmcharacteristictypeactive.md): The current status of an accessory.
- [HMCharacteristicTypeStatusTampered](hmcharacteristictypestatustampered.md): An indicator of whether an accessory has been tampered with.
- [HMCharacteristicTypeStatusFault](hmcharacteristictypestatusfault.md): An indicator of whether the accessory has experienced a fault.
- [HMCharacteristicTypeStatusActive](hmcharacteristictypestatusactive.md): An indicator of whether the service is working.
- [HMCharacteristicTypeInUse](hmcharacteristictypeinuse.md): The current usage state of an accessory.
- [HMCharacteristicTypeIsConfigured](hmcharacteristictypeisconfigured.md): The configuration state of an accessory.
- [HMCharacteristicTypeRemainingDuration](hmcharacteristictyperemainingduration.md): The number of seconds remaining for the activity being carried out by the accessory.
- [HMCharacteristicTypeSetDuration](hmcharacteristictypesetduration.md): The duration of the activity being carried out by the accessory.
- [HMCharacteristicTypeWiFiSatelliteStatus](hmcharacteristictypewifisatellitestatus.md): The network status of the WiFi satellite accessory.
- [HMCharacteristicTypeWANStatusList](hmcharacteristictypewanstatuslist.md): The WAN status list of an accessory.
- [HMCharacteristicTypeTargetMediaState](hmcharacteristictypetargetmediastate.md): The target media state.
- [HMCharacteristicTypeRouterStatus](hmcharacteristictyperouterstatus.md): The current status of the router.
- [HMCharacteristicTypeCurrentMediaState](hmcharacteristictypecurrentmediastate.md): The current state of the media.
- [HMCharacteristicTypeCurrentVisibilityState](hmcharacteristictypecurrentvisibilitystate.md): The current visibility state for a service.
- [HMCharacteristicTypeTargetVisibilityState](hmcharacteristictypetargetvisibilitystate.md): The target visibility state for a service.
