> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/extensionfoundation/appextensionidentity/matching(appextensionpointids:)

# matching(appExtensionPointIDs:)

**Framework:** ExtensionFoundation  
**Kind:** Type Method  
**Availability:** macOS 13.0+ (deprecated in 26.0)

The asynchronous sequence of extension identities which target the specified extension point identifiers.

> Replaced with AppExtensionPoint.Monitor

## Declaration

```swift
static func matching(appExtensionPointIDs: String...) throws -> AppExtensionIdentity.Identities
```

## See Also

### Deprecated

- [AppExtensionIdentity.Availability](availability.md): Deprecated. An object that contains information about available extensions.
- [availabilityUpdates](availabilityupdates.md): Deprecated.
- [AppExtensionIdentity.Identities](identities.md): Deprecated. An asynchronous sequence that returns the enabled extensions that match provided constraints.
