> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/cardsession/invalidate()](https://developer.apple.com/documentation/corenfc/cardsession/invalidate())

# invalidate()

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+

Invalidates the current card emulation session.

## Declaration

```swift
func invalidate()
```

<a id="Discussion"></a>

## Discussion

This call stops any currently-running card emulation.

To restart, create a new [CardSession](../cardsession.md) instance with `startSession()`.
