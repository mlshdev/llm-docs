> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/onehotencoder/transformer/applied(to:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/onehotencoder/transformer/applied(to:eventhandler:))

# applied(to:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Performs a one-hot encoding on a single input.

## Declaration

```swift
func applied(to input: Category?, eventHandler: EventHandler? = nil) throws -> [Int]
```

<a id="return-value"></a>

## Return Value

A one-hot encoded array.

<a id="discussion"></a>

## Discussion

- Parameters

  - input: A category to encode.
  - eventHandler: An event handler.

## See Also

### Performing the transformation

- [applied(\_:eventHandler:)](applied%28__eventhandler_%29.md): Performs a one-hot encoding on a sequence of inputs.
