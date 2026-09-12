> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/arview/keydown(with:)](https://developer.apple.com/documentation/realitykit/arview/keydown(with:))

# keyDown(with:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** macOS

Informs the view that the user has pressed a key.

## Declaration

```swift
@MainActor @preconcurrency override dynamic func keyDown(with event: NSEvent)
```

## Parameters

- `event`: An object encapsulating information about the key-down event.

<a id="discussion"></a>

## Discussion

The view handles the event instead of passing it to the next responder. See [NSResponder](https://developer.apple.com/documentation/appkit/nsresponder) for more information about the responder chain.

## See Also

### Handling keyboard input

- [acceptsFirstResponder](acceptsfirstresponder.md): A Boolean value that indicates whether the view accepts first responder status.
- [keyUp(with:)](keyup%28with_%29.md): Informs the view that the user has released a key.
