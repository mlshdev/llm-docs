> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/entityidentifier/hash(into:)

# hash(into:)

**Framework:** App Intents  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Hashes the entity identifier.

## Declaration

```swift
func hash(into hasher: inout Hasher)
```

<a id="discussion"></a>

## Discussion

> **Important**

> This implementation **intentionally ignores** the `stableIdentifier` field. Only `typeIdentifier` and `identifier` are used for hashing.
>
> This ensures that the same entity on different devices (same local ID, different stable ID) has the same hash, enabling correct behavior in `Set` and `Dictionary`.
