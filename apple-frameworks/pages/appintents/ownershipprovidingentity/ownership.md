> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/ownershipprovidingentity/ownership

# ownership

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The sharing and ownership state of the entity.

## Declaration

```swift
var ownership: EntityOwnership { get }
```

<a id="discussion"></a>

## Discussion

Return a value that identifies the entity’s owner, its collaborators, and whether the entity is publicly accessible.
