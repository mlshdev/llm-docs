> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.developer.driverkit.userclient-access](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.driverkit.userclient-access)

# com.apple.developer.driverkit.userclient-access

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** macOS 10.15+

An array of strings that represent macOS driver extensions that may communicate with other DriverKit services.

## Details

`com.apple.developer.driverkit.userclient-access`

<a id="Discussion"></a>

## Discussion

Add this entitlement to your app that opens the [IOUserClient](../../driverkit/iouserclient.md). Set its value to an array of bundle IDs of driver extensions that you want to use with DriverKit. If you have only one bundle ID, you can use either a single string or a one-element array.

On iPadOS, use the [Communicates with Drivers](com.apple.developer.driverkit.communicates-with-drivers.md) entitlement instead.

## See Also

### User client entitlements

- [com.apple.developer.driverkit.allow-any-userclient-access](com.apple.developer.driverkit.allow-any-userclient-access.md): A Boolean value that determines whether a macOS driver accepts user client connections from any application.
- [Communicates with Drivers](com.apple.developer.driverkit.communicates-with-drivers.md): A Boolean value that indicates whether an iPadOS app can communicate with drivers.
- [DriverKit Allow Third Party User Clients](com.apple.developer.driverkit.allow-third-party-userclients.md): A Boolean value that indicates whether an iPadOS driver accepts calls from third-party user clients.
