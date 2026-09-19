> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkextension/nehotspotmanager/isenabled

# isEnabled

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · visionOS 26.0+

A Boolean value that indicates whether the configuration is enabled.

## Declaration

```swift
final var isEnabled: Bool { get set }
```

<a id="discussion"></a>

## Discussion

The system starts the providers only when this property is `true`.

## See Also

### Accessing provider properties

- [evaluationProviderBundleIdentifier](evaluationproviderbundleidentifier.md): The bundle identifier of the hotspot evaluation provider.
- [authenticationProviderBundleIdentifier](authenticationproviderbundleidentifier.md): The bundle identifier of the hotspot authentication provider.
