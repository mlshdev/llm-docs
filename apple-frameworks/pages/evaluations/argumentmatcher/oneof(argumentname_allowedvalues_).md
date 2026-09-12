> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/argumentmatcher/oneof(argumentname:allowedvalues:)](https://developer.apple.com/documentation/evaluations/argumentmatcher/oneof(argumentname:allowedvalues:))

# ArgumentMatcher.oneOf(argumentName:allowedValues:)

**Framework:** Evaluations  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

A value that indicates the argument must be present with a value that matches one of the allowed values.

## Declaration

```swift
case oneOf(argumentName: String, allowedValues: [ArgumentValue])
```

## Parameters

- `argumentName`: The name of the argument to validate.
- `allowedValues`: The set of values the argument must match one of.

## Mentioned In

- [Evaluating tool-calling behavior](../evaluating-tool-calling-behavior.md)

## See Also

### Set and range matching

- [ArgumentMatcher.range(argumentName:minimum:maximum:)](range%28argumentname_minimum_maximum_%29.md): A value that indicates that the argument must be present and its numeric value must be within the specified range.
