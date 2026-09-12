> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.developer.driverkit.allow-any-userclient-access](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.driverkit.allow-any-userclient-access)

# com.apple.developer.driverkit.allow-any-userclient-access

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** macOS 10.15+

A Boolean value that determines whether a macOS driver accepts user client connections from any application.

## Details

`com.apple.developer.driverkit.allow-any-userclient-access`

<a id="Discussion"></a>

## Discussion

Add this entitlement to your dext that contains an [IOUserClient](../../driverkit/iouserclient.md) implementation. This entitlement allows any application to connect to the dext without having to specify bundle IDs, as [com.apple.developer.driverkit.userclient-access](com.apple.developer.driverkit.userclient-access.md) requires.

## See Also

### User client entitlements

- [com.apple.developer.driverkit.userclient-access](com.apple.developer.driverkit.userclient-access.md): An array of strings that represent macOS driver extensions that may communicate with other DriverKit services.
- [Communicates with Drivers](com.apple.developer.driverkit.communicates-with-drivers.md): A Boolean value that indicates whether an iPadOS app can communicate with drivers.
- [DriverKit Allow Third Party User Clients](com.apple.developer.driverkit.allow-third-party-userclients.md): A Boolean value that indicates whether an iPadOS driver accepts calls from third-party user clients.
