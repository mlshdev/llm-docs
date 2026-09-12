> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkuserpreferencesdidchangenotification](https://developer.apple.com/documentation/healthkit/hkuserpreferencesdidchangenotification)

# HKUserPreferencesDidChangeNotification

**Interface language:** Objective-C

**Framework:** HealthKit  
**Kind:** Global Variable  
**Availability:** iOS 8.2+ · iPadOS 8.2+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Notifies observers whenever the user changes his or her preferred units.

## Declaration

```objectivec
extern NSString * const HKUserPreferencesDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

The preferred units are the units that the user prefers for a given measurement type. By default, the preferred units are based on the device’s current locale. For example, in the US, the preferred units for the [HKQuantityTypeIdentifierBodyMass](hkquantitytypeidentifier/bodymass.md) identifier are pounds. Other regions may use kilograms or stones. However, users can change their preferred units in the Health app at any time.

Each `HKHealthStore` object posts its own `HKUserPreferencesDidChangeNotification` notification. To avoid receiving duplicate notifications, always pass a health store instance to the notification center when adding observers.

## See Also

### Accessing the preferred units

- [preferredUnitsForQuantityTypes:completion:](hkhealthstore/preferredunits%28for_completion_%29.md): Returns the user’s preferred units for the given quantity types.
