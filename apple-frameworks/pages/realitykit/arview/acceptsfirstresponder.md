> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/arview/acceptsfirstresponder](https://developer.apple.com/documentation/realitykit/arview/acceptsfirstresponder)

# acceptsFirstResponder

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the view accepts first responder status.

## Declaration

```swift
@MainActor @preconcurrency override dynamic var acceptsFirstResponder: Bool { get }
```

<a id="discussion"></a>

## Discussion

An [ARView](../arview.md) instance sets this value to `true` by default to indicate that it does accept first responder status. See [NSResponder](https://developer.apple.com/documentation/appkit/nsresponder) for more information about the responder chain.

## See Also

### Handling keyboard input

- [keyDown(with:)](keydown%28with_%29.md): Informs the view that the user has pressed a key.
- [keyUp(with:)](keyup%28with_%29.md): Informs the view that the user has released a key.
