> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/argumentmatcher/exact(argumentname:value:)](https://developer.apple.com/documentation/evaluations/argumentmatcher/exact(argumentname:value:))

# ArgumentMatcher.exact(argumentName:value:)

**Framework:** Evaluations  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

A value that indicates that the argument must be present with this exact key and value.

## Declaration

```swift
case exact(argumentName: String, value: ArgumentValue)
```

## Parameters

- `argumentName`: The name of the argument to validate.
- `value`: The exact value the argument must equal.

## Mentioned In

- [Evaluating tool-calling behavior](../evaluating-tool-calling-behavior.md)

## See Also

### Exact matching

- [ArgumentMatcher.keyOnly(argumentName:)](keyonly%28argumentname_%29.md): A value that indicates that the argument must be present with this key and no specific value.
