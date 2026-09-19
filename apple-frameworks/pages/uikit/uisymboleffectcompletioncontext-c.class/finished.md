> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uisymboleffectcompletioncontext-c.class/finished

# finished

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

A Boolean value that indicates whether the symbol effect finished completely.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isFinished) BOOL finished;
```

## See Also

### Determining completion status

- [contentTransition](contenttransition.md): The symbol content transition that completed.
- [effect](effect.md): The symbol effect that completed.
- [sender](sender.md): The object, an image view or bar button item, that received the symbol effect.
