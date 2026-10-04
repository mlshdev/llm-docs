> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/attributedtypeidentifier/init(persistentidentifier:bundleidentifier:)

# init(persistentIdentifier:bundleIdentifier:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates a new attributed type identifier.

## Declaration

```swift
init(persistentIdentifier: String, bundleIdentifier: String? = nil)
```

## Parameters

- `persistentIdentifier`: The persistent identifier for the entity type, typically the struct name.
- `bundleIdentifier`: The optional bundle identifier that contains this entity type.
