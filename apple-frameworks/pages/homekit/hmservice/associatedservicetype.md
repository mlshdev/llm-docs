> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmservice/associatedservicetype](https://developer.apple.com/documentation/homekit/hmservice/associatedservicetype)

# associatedServiceType (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The type of the service associated with an outlet or a switch.

## Declaration

```swift
var associatedServiceType: String? { get }
```

<a id="Discussion"></a>

## Discussion

Because different things can be plugged into outlets or controlled by switches, there is a tight association between a switch or outlet service and another service that it controls—for example, a lamp plugged into an outlet associates a lightbulb service with the outlet, even if the lamp itself is not a supported HomeKit accessory.

The associated service can be any service defined by the HomeKit Accessory Profile that supports [HMCharacteristicTypePowerState](../hmcharacteristictypepowerstate.md), other than [HMServiceTypeOutlet](../hmservicetypeoutlet.md) or [HMServiceTypeSwitch](../hmservicetypeswitch.md).

See [Accessory Service Types](../accessory-service-types.md) for a list of service types.

## See Also

### Associating a secondary service

- [updateAssociatedServiceType(\_:completionHandler:)](updateassociatedservicetype%28__completionhandler_%29.md): Associates the service type of the plugged-in device with a switch or an outlet service.

# associatedServiceType (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The type of the service associated with an outlet or a switch.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * associatedServiceType;
```

<a id="Discussion"></a>

## Discussion

Because different things can be plugged into outlets or controlled by switches, there is a tight association between a switch or outlet service and another service that it controls—for example, a lamp plugged into an outlet associates a lightbulb service with the outlet, even if the lamp itself is not a supported HomeKit accessory.

The associated service can be any service defined by the HomeKit Accessory Profile that supports [HMCharacteristicTypePowerState](../hmcharacteristictypepowerstate.md), other than [HMServiceTypeOutlet](../hmservicetypeoutlet.md) or [HMServiceTypeSwitch](../hmservicetypeswitch.md).

See [Accessory Service Types](../accessory-service-types.md) for a list of service types.

## See Also

### Associating a secondary service

- [updateAssociatedServiceType:completionHandler:](updateassociatedservicetype%28__completionhandler_%29.md): Associates the service type of the plugged-in device with a switch or an outlet service.
