> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corenfc/cardsession/invalidate()

# invalidate()

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

Invalidates the current card emulation session.

## Declaration

```swift
func invalidate()
```

<a id="Discussion"></a>

## Discussion

This call stops any currently-running card emulation.

To restart, create a new [CardSession](../cardsession.md) instance with `startSession()`.
