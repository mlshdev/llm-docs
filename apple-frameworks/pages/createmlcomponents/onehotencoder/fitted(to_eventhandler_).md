> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/onehotencoder/fitted(to:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/onehotencoder/fitted(to:eventhandler:))

# fitted(to:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Fits a one-hot encoder to a sequence of categories.

## Declaration

```swift
func fitted<S>(to input: S, eventHandler: EventHandler? = nil) throws -> OneHotEncoder<Category>.Transformer where S : Sequence, S.Element == Category?
```

## Parameters

- `input`: A sequence of categories.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

The fitted transformer.
