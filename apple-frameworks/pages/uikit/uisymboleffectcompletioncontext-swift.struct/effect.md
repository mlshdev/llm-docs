> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisymboleffectcompletioncontext-swift.struct/effect](https://developer.apple.com/documentation/uikit/uisymboleffectcompletioncontext-swift.struct/effect)

# effect

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS

The symbol effect that completed.

## Declaration

```swift
@MainActor var effect: any SymbolEffect { get }
```

<a id="Discussion"></a>

## Discussion

For a symbol effect completion, this property may not be the same instance as the original effect.

For a content transition completion, this property is `nil.`

## See Also

### Determining completion status

- [isFinished](isfinished.md): A Boolean value that indicates whether the symbol effect finished completely.
- [sender](sender.md): The object, an image view or bar button item, that received the symbol effect.
