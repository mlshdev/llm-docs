> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/displayrepresentation/init(title:subtitle:synonyms:image:)

# init(title:subtitle:synonyms:image:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates a display representation whose image is produced lazily by the given closure.

## Declaration

```swift
init(title: LocalizedStringResource, subtitle: LocalizedStringResource? = nil, synonyms: [LocalizedStringResource] = [], image: @escaping @Sendable () async throws -> DisplayRepresentation.Image?)
```
