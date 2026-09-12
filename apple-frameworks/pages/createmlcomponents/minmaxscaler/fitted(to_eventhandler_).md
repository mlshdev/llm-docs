> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/minmaxscaler/fitted(to:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/minmaxscaler/fitted(to:eventhandler:))

# fitted(to:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Fits a min max scaler to a sequence of elements.

## Declaration

```swift
func fitted<S>(to input: S, eventHandler: EventHandler? = nil) throws -> MinMaxScaler<Element>.Transformer where Element == S.Element, S : Sequence
```

## Parameters

- `input`: A sequence of elements.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

The fitted transformer.
