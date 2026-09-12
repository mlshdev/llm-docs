> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisymboleffectcompletioncontext-c.class/sender](https://developer.apple.com/documentation/uikit/uisymboleffectcompletioncontext-c.class/sender)

# sender

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

The object, an image view or bar button item, that received the symbol effect.

## Declaration

```objectivec
@property (nonatomic, weak, readonly, nullable) id sender;
```

## See Also

### Determining completion status

- [contentTransition](contenttransition.md): The symbol content transition that completed.
- [effect](effect.md): The symbol effect that completed.
- [finished](finished.md): A Boolean value that indicates whether the symbol effect finished completely.
