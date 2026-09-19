> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/musickit/musicusertokenprovider/usertoken(for:options:)

# userToken(for:options:)

**Framework:** MusicKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Fetches and returns a user token for Apple Music API.

## Declaration

```swift
func userToken(for developerToken: String, options: MusicTokenRequestOptions) async throws -> String
```
