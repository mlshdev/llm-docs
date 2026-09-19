> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/extensionfoundation/appextensionidentity/availabilityupdates

# availabilityUpdates

**Framework:** ExtensionFoundation  
**Kind:** Type Property  
**Availability:** macOS 13.0+ (deprecated in 26.0)

> Replaced with AppExtensionPoint.Monitor

## Declaration

```swift
static var availabilityUpdates: AsyncStream<AppExtensionIdentity.Availability> { get }
```

## See Also

### Deprecated

- [AppExtensionIdentity.Availability](availability.md): Deprecated. An object that contains information about available extensions.
- [matching(appExtensionPointIDs:)](matching%28appextensionpointids_%29.md): Deprecated. The asynchronous sequence of extension identities which target the specified extension point identifiers.
- [AppExtensionIdentity.Identities](identities.md): Deprecated. An asynchronous sequence that returns the enabled extensions that match provided constraints.
