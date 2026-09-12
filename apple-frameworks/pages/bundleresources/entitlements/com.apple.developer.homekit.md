> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.developer.homekit](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.homekit)

# HomeKit Entitlement

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether users of the app may manage HomeKit-compatible accessories.

## Details

`com.apple.developer.homekit`

<a id="Discussion"></a>

## Discussion

This key Indicates whether the users of an app may manage HomeKit-compatible accessories, such as switches, lights, fans, locks, and thermostats.

To add this entitlement to your app, enable the HomeKit capability in Xcode. For more information, see [Enabling HomeKit in your app](../../homekit/enabling-homekit-in-your-app.md).

## See Also

### Home automation

- [Matter Allow Setup Payload](com.apple.developer.matter.allow-setup-payload.md): A Boolean value that allows an app to provide an optional Matter Setup payload while setting up a Matter device in an ecosystem.
