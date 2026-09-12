> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/reshaper/applied(_:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/reshaper/applied(_:eventhandler:))

# applied(\_:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Reshapes a sequence of inputs.

## Declaration

```swift
func applied<S>(_ input: S, eventHandler: EventHandler? = nil) throws -> [MLShapedArray<Scalar>] where S : Sequence, S.Element == MLShapedArray<Scalar>
```

## Parameters

- `input`: A sequence of input shaped arrays.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

An array of shaped arrays.

## See Also

### Performing the transformation

- [applied(to:eventHandler:)](applied%28to_eventhandler_%29.md): Reshapes the input.
