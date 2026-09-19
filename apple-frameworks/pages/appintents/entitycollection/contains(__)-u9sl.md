> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/entitycollection/contains(_:)-u9sl

# contains(\_:)

**Framework:** App Intents  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns a Boolean value that indicates whether the collection contains the identifier for the specified entity.

## Declaration

```swift
func contains(_ entity: Entity) -> Bool
```

<a id="return-value"></a>

## Return Value

`true` if the identifier for the entity is in the collection, or `false` if it isn’t.

<a id="discussion"></a>

## Discussion

- Parameter:

  - entity: The entity to look for in the collection.
