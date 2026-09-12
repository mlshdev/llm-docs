> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/symbols/nssymbolreplacecontenttransition/replaceoffuptransition](https://developer.apple.com/documentation/symbols/nssymbolreplacecontenttransition/replaceoffuptransition)

# replaceOffUpTransition

**Interface language:** Objective-C

**Framework:** Symbols  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

An effect that replaces a symbol by removing it, and scaling a different symbol up.

## Declaration

```objectivec
+ (instancetype) replaceOffUpTransition;
```

<a id="return-value"></a>

## Return Value

A new instance of the transition that uses the Off-Up animation.

<a id="Discussion"></a>

## Discussion

The initial symbol is removed with no animation, and the new symbol scales up as it’s added.

## See Also

### Accessing symbol effects

- [transition](transition.md): An effect that replaces the layers of one symbol-based image with those of another.
- [replaceDownUpTransition](replacedownuptransition.md): An effect that replaces a symbol by scaling it down, and scaling a different symbol up.
- [replaceUpUpTransition](replaceupuptransition.md): An effect that replaces a symbol by scaling it up, and scaling a different symbol up.
