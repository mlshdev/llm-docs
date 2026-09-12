> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/tabulartransformertoupdatableestimatoradaptor/fitted(to:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/tabulartransformertoupdatableestimatoradaptor/fitted(to:eventhandler:))

# fitted(to:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Returns the pre-defined transformer.

## Declaration

```swift
func fitted(to input: DataFrame, eventHandler: EventHandler? = nil) async throws -> Transformer
```

## Parameters

- `input`: A data frame containing examples.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

The pre-defined transformer.

## See Also

### Fitting

- [update(\_:with:eventHandler:)](update%28__with_eventhandler_%29.md): Does nothing since this estimator uses a pre-defined transformer.
