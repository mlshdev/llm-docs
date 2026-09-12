> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.developer.driverkit.allow-third-party-userclients](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.driverkit.allow-third-party-userclients)

# DriverKit Allow Third Party User Clients

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 16.0+ · iPadOS 16.0+

A Boolean value that indicates whether an iPadOS driver accepts calls from third-party user clients.

## Details

`com.apple.developer.driverkit.allow-third-party-userclients`

<a id="Discussion"></a>

## Discussion

By default, an iPadOS driver accepts user-client connections from apps signed with the same team ID and the [Communicates with Drivers](com.apple.developer.driverkit.communicates-with-drivers.md) entitlement. Set this entitlement to `true` on a driver to allow connections apps with other team IDs. The connecting apps must still have the [Communicates with Drivers](com.apple.developer.driverkit.communicates-with-drivers.md) entitlement.

## See Also

### User client entitlements

- [com.apple.developer.driverkit.userclient-access](com.apple.developer.driverkit.userclient-access.md): An array of strings that represent macOS driver extensions that may communicate with other DriverKit services.
- [com.apple.developer.driverkit.allow-any-userclient-access](com.apple.developer.driverkit.allow-any-userclient-access.md): A Boolean value that determines whether a macOS driver accepts user client connections from any application.
- [Communicates with Drivers](com.apple.developer.driverkit.communicates-with-drivers.md): A Boolean value that indicates whether an iPadOS app can communicate with drivers.
