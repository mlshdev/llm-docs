> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uisymboleffectcompletioncontext-swift.struct/sender

# sender

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS

The object, an image view or bar button item, that received the symbol effect.

## Declaration

```swift
@MainActor weak var sender: AnyObject? { get }
```

## See Also

### Determining completion status

- [effect](effect.md): The symbol effect that completed.
- [isFinished](isfinished.md): A Boolean value that indicates whether the symbol effect finished completely.
