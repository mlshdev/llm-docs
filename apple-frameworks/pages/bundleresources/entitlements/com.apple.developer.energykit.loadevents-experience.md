> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.developer.energykit.loadevents-experience](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.energykit.loadevents-experience)

# EnergyKit LoadEvents Entitlement

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 27.0+ · iPadOS 27.0+

An entitlement that works with the EnergyKit framework to share energy data and usage insights in the Home app.

## Details

`com.apple.developer.energykit.loadevents-experience`

<a id="discussion"></a>

## Discussion

When you adopt this entitlement, the framework displays device names and energy usage context in the Home app. The information derives from the two load events, [ElectricVehicleLoadEvent](https://developer.apple.com/documentation/energykit/electricvehicleloadevent) and [ElectricHVACLoadEvent](https://developer.apple.com/documentation/energykit/electrichvacloadevent), that your app submits to the system. The Home app displays the data in the form of activity logs, historical charts, and trend notifications.

To enable this entitlement, add the EnergyKit LoadEvents capability and the base EnergyKit capability (see [EnergyKit Entitlement](com.apple.developer.energykit.md)) to your app’s target in Xcode.

For more information, see [Adding capabilities to your app](https://developer.apple.com/documentation/xcode/adding-capabilities-to-your-app).

## See Also

### EnergyKit

- [EnergyKit Entitlement](com.apple.developer.energykit.md): The entitlement the system requires for an app to use the EnergyKit framework.
