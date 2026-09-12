> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributedstring/markdownparsingoptions/failurepolicy-swift.enum/returnpartiallyparsedifpossible](https://developer.apple.com/documentation/foundation/attributedstring/markdownparsingoptions/failurepolicy-swift.enum/returnpartiallyparsedifpossible)

# AttributedString.MarkdownParsingOptions.FailurePolicy.returnPartiallyParsedIfPossible

**Framework:** Foundation  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A policy to return a partially-parsed string, if possible.

## Declaration

```swift
case returnPartiallyParsedIfPossible
```

<a id="Discussion"></a>

## Discussion

With this policy, the returned string may include unparsed markup. If returning a partially parsed string isn’t possible, the parser may throw an error anyway.

## See Also

### Declaring Failure Policies

- [AttributedString.MarkdownParsingOptions.FailurePolicy.throwError](throwerror.md): A policy to throw an error from the initializer if parsing fails.
