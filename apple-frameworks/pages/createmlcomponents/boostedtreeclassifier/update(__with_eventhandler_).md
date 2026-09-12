> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/boostedtreeclassifier/update(_:with:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/boostedtreeclassifier/update(_:with:eventhandler:))

# update(\_:with:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

Updates a transformer with a new sequence of examples.

## Declaration

```swift
func update(_ transformer: inout TreeClassifierModel<Label>, with input: DataFrame, eventHandler: EventHandler?) async throws
```

## Parameters

- `transformer`: A transformer to update.
- `input`: A data frame containing examples.
- `eventHandler`: An event handler.
