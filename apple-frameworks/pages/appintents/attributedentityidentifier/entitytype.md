> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/attributedentityidentifier/entitytype

# entityType

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The type identifier that defines what kind of entity this is.

## Declaration

```swift
let entityType: AttributedTypeIdentifier
```

<a id="discussion"></a>

## Discussion

This identifier includes information about the entity’s type and any relevant attributes associated with it, uniquely identifying the entity type within the application’s bundle.
