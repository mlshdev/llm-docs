> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/musickit/musiclibrarysectionedrequest/response()

# response()

**Framework:** MusicKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Fetches items grouped by sections from the user’s music library.

## Declaration

```swift
func response() async throws -> MusicLibrarySectionedResponse<SectionType, MusicItemType>
```
