> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/tabulartransformertoupdatableestimatoradaptor/update(_:with:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/tabulartransformertoupdatableestimatoradaptor/update(_:with:eventhandler:))

# update(\_:with:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Does nothing since this estimator uses a pre-defined transformer.

## Declaration

```swift
func update(_ transformer: inout Transformer, with input: DataFrame, eventHandler: EventHandler? = nil) async throws
```

## See Also

### Fitting

- [fitted(to:eventHandler:)](fitted%28to_eventhandler_%29.md): Returns the pre-defined transformer.
