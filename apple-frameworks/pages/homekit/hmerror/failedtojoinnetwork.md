> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/homekit/hmerror/failedtojoinnetwork

# failedToJoinNetwork

**Framework:** HomeKit  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The accessory failed to join the network.

## Declaration

```swift
static var failedToJoinNetwork: HMError.Code { get }
```

## See Also

### Detecting network errors

- [enterpriseNetworkNotSupported](enterprisenetworknotsupported.md): An enterprise network doesn’t support this accessory.
- [incompatibleNetwork](incompatiblenetwork.md): An error indicating an incompatible network.
- [networkUnavailable](networkunavailable.md): An error indicating the network is unavailable.
- [wiFiCredentialGenerationFailed](wificredentialgenerationfailed.md): WiFi credential generation failed.
