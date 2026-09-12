> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/numericimputer/fitted(to:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/numericimputer/fitted(to:eventhandler:))

# fitted(to:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Fits a numeric imputer to a sequence of elements.

## Declaration

```swift
func fitted<S>(to input: S, eventHandler: EventHandler? = nil) -> NumericImputer<Element>.Transformer where S : Sequence, S.Element == Element?
```

## Parameters

- `input`: A sequence of elements.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

The fitted transformer.

## See Also

### Fitting

- [Transformer](../transformer.md): A transformer that takes an input and produces an output.
- [NumericImputer.Strategy](strategy-swift.enum.md): An imputation strategy.
