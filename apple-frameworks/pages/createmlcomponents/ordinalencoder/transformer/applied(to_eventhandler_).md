> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/ordinalencoder/transformer/applied(to:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/ordinalencoder/transformer/applied(to:eventhandler:))

# applied(to:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Performs an ordinal encoding on a single input.

## Declaration

```swift
func applied(to input: Category?, eventHandler: EventHandler? = nil) throws -> Int
```

## Parameters

- `input`: A category to encode.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

A ordinal encoded value.

## See Also

### Applying the transformation

- [applied(\_:eventHandler:)](applied%28__eventhandler_%29.md): Performs an ordinal encoding on a sequence of inputs.
