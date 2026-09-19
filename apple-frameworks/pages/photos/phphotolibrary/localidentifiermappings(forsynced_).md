> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/photos/phphotolibrary/localidentifiermappings(forsynced:)

# localIdentifierMappings(forSynced:)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```swift
func localIdentifierMappings(forSynced cloudIdentifiers: [PHCloudIdentifier]) -> [PHCloudIdentifier : Result<String, any Error>]
```
