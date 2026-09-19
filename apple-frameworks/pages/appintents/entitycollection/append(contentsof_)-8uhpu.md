> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/entitycollection/append(contentsof:)-8uhpu

# append(contentsOf:)

**Framework:** App Intents  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Adds multiple entity identifiers to the collection.

## Declaration

```swift
mutating func append(contentsOf newIdentifiers: [Entity.ID])
```

<a id="discussion"></a>

## Discussion

- Parameter:

  - newIdentifiers: An array of entity identifiers to add to the collection.
