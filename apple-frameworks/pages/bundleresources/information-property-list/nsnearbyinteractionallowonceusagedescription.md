> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/nsnearbyinteractionallowonceusagedescription](https://developer.apple.com/documentation/bundleresources/information-property-list/nsnearbyinteractionallowonceusagedescription)

# NSNearbyInteractionAllowOnceUsageDescription

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 14.0+ (deprecated in 15.0) · iPadOS 14.0+ (deprecated in 15.0)

A one-time request for user permission to begin an interaction session with nearby devices.

## Details

`NSNearbyInteractionAllowOnceUsageDescription`

<a id="Discussion"></a>

## Discussion

> **Warning**

>  Define this property in the `Info.plist` only for apps that deploy to iOS 14. [NSNearbyInteractionUsageDescription](nsnearbyinteractionusagedescription.md) replaces this property in iOS 15 and later.

Before an app starts an interaction session, the system requests permission to share the user’s relative distance and direction with a nearby peer. The framework presents a prompt that displays the value of this key contained in your project’s `Info.plist`. Define text that explains your interaction session’s purpose to the user. For more information, see [Initiating and maintaining a session](../../nearbyinteraction/initiating-and-maintaining-a-session.md).

## See Also

### Networking

- [NSLocalNetworkUsageDescription](nslocalnetworkusagedescription.md): A message that tells people why the app is requesting access to the local network.
- [NSNearbyInteractionUsageDescription](nsnearbyinteractionusagedescription.md): A request for user permission to begin an interaction session with nearby devices.
