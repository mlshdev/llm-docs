> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/numericimputer/update(_:with:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/numericimputer/update(_:with:eventhandler:))

# update(\_:with:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

Updates an impute transformer with a new sequence of examples.

## Declaration

```swift
func update(_ transformer: inout ImputeTransformer<Element>, with input: some Sequence<Optional<Element>>, eventHandler: EventHandler? = nil) throws
```

## Parameters

- `transformer`: A transformer to update.
- `input`: A sequence of examples.
- `eventHandler`: An event handler.

<a id="discussion"></a>

## Discussion

> **Note**

> You can’t update an impute transformer when using the `median` strategy.
