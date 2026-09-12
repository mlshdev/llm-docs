> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/onehotencoder/transformer/applied(_:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/onehotencoder/transformer/applied(_:eventhandler:))

# applied(\_:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Performs a one-hot encoding on a sequence of inputs.

## Declaration

```swift
func applied<S>(_ input: S, eventHandler: EventHandler? = nil) throws -> [[Int]] where S : Sequence, S.Element == Category?
```

## Parameters

- `input`: A sequence of input values.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

An array of one-hot encoded arrays.

## See Also

### Performing the transformation

- [applied(to:eventHandler:)](applied%28to_eventhandler_%29.md): Performs a one-hot encoding on a single input.
