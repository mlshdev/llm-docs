> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/bundleresources/information-property-list/nslocalnetworkusagedescription

# NSLocalNetworkUsageDescription

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A message that tells people why the app is requesting access to the local network.

## Details

`NSLocalNetworkUsageDescription`

<a id="Discussion"></a>

## Discussion

Any app that uses the local network, directly or indirectly, should include this description. This includes apps that use Bonjour and services implemented with Bonjour, as well as direct unicast or multicast connections to local hosts.

## See Also

### Networking

- [NSNearbyInteractionUsageDescription](nsnearbyinteractionusagedescription.md): A request for user permission to begin an interaction session with nearby devices.
- [NSNearbyInteractionAllowOnceUsageDescription](nsnearbyinteractionallowonceusagedescription.md): Deprecated. A one-time request for user permission to begin an interaction session with nearby devices.
