> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nspositionalspecifier/evaluate()](https://developer.apple.com/documentation/foundation/nspositionalspecifier/evaluate())

# evaluate() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Causes the receiver to evaluate its position.

## Declaration

```swift
func evaluate()
```

<a id="Discussion"></a>

## Discussion

Calling [insertionContainer](insertioncontainer.md), [insertionKey](insertionkey.md), [insertionIndex](insertionindex.md), or [insertionReplaces](insertionreplaces.md) also causes the receiver to be evaluated, if it hasn’t already been evaluated.

# evaluate (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Causes the receiver to evaluate its position.

## Declaration

```objectivec
- (void) evaluate;
```

<a id="Discussion"></a>

## Discussion

Calling [insertionContainer](insertioncontainer.md), [insertionKey](insertionkey.md), [insertionIndex](insertionindex.md), or [insertionReplaces](insertionreplaces.md) also causes the receiver to be evaluated, if it hasn’t already been evaluated.
