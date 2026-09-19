> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uisymboleffectcompletioncontext-c.class/contenttransition

# contentTransition

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

The symbol content transition that completed.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSSymbolContentTransition * contentTransition;
```

<a id="Discussion"></a>

## Discussion

For a content transition completion, this property may not be the same instance as the original content transition.

For a symbol effect completion, this property is `nil.`

## See Also

### Determining completion status

- [effect](effect.md): The symbol effect that completed.
- [finished](finished.md): A Boolean value that indicates whether the symbol effect finished completely.
- [sender](sender.md): The object, an image view or bar button item, that received the symbol effect.
