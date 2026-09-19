> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/syncableentityidentifier/hash(into:)

# hash(into:)

**Framework:** App Intents  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Hashes based on the local ID if present, otherwise the stable ID.

## Declaration

```swift
func hash(into hasher: inout Hasher)
```

<a id="discussion"></a>

## Discussion

This ensures consistent hashing with equality - identifiers that are equal will produce the same hash value.
