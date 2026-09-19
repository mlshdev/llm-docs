> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/homekit/hmerror/enterprisenetworknotsupported

# enterpriseNetworkNotSupported

**Framework:** HomeKit  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

An enterprise network doesn’t support this accessory.

## Declaration

```swift
static var enterpriseNetworkNotSupported: HMError.Code { get }
```

## See Also

### Detecting network errors

- [failedToJoinNetwork](failedtojoinnetwork.md): The accessory failed to join the network.
- [incompatibleNetwork](incompatiblenetwork.md): An error indicating an incompatible network.
- [networkUnavailable](networkunavailable.md): An error indicating the network is unavailable.
- [wiFiCredentialGenerationFailed](wificredentialgenerationfailed.md): WiFi credential generation failed.
