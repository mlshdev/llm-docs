> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/entitycollection/contains(_:)-i6hb](https://developer.apple.com/documentation/appintents/entitycollection/contains(_:)-i6hb)

# contains(\_:)

**Framework:** App Intents  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns a Boolean value that indicates whether the collection contains the specified entity identifier.

## Declaration

```swift
func contains(_ identifier: Entity.ID) -> Bool
```

<a id="return-value"></a>

## Return Value

`true` if the identifier is in the collection, or `false` if it isn’t.

<a id="discussion"></a>

## Discussion

- Parameter:

  - identifier: The identifier to look for in the collection.
