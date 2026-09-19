> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/entitycollection/identifiers

# identifiers

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The entity identifiers in the collection.

## Declaration

```swift
var identifiers: [Entity.ID]
```

<a id="discussion"></a>

## Discussion

Use this property to retrieve the entity identifiers from the collection. You might use an identifier to retrieve an individual [AppEntity](../appentity.md) instance from your app.
