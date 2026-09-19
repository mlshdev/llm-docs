> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/attributedentityidentifier/instanceidentifier

# instanceIdentifier

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The string that uniquely identifies this specific entity instance.

## Declaration

```swift
let instanceIdentifier: String
```

<a id="discussion"></a>

## Discussion

This identifier distinguishes between different instances of the same entity type. It must be unique within the scope of its entity type.
