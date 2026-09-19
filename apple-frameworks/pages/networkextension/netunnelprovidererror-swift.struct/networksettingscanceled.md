> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkextension/netunnelprovidererror-swift.struct/networksettingscanceled

# networkSettingsCanceled

**Framework:** Network Extension  
**Kind:** Type Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The request to set or clear the tunnel network settings was canceled.

## Declaration

```swift
static var networkSettingsCanceled: NETunnelProviderError.Code { get }
```

## See Also

### Error codes

- [networkSettingsInvalid](networksettingsinvalid.md): The provided tunnel network settings are invalid.
- [networkSettingsFailed](networksettingsfailed.md): The request to set or clear the tunnel network settings failed.
