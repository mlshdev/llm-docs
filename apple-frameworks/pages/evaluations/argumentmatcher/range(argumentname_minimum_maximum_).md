> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/argumentmatcher/range(argumentname:minimum:maximum:)](https://developer.apple.com/documentation/evaluations/argumentmatcher/range(argumentname:minimum:maximum:))

# ArgumentMatcher.range(argumentName:minimum:maximum:)

**Framework:** Evaluations  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

A value that indicates that the argument must be present and its numeric value must be within the specified range.

## Declaration

```swift
case range(argumentName: String, minimum: Double?, maximum: Double?)
```

## Parameters

- `argumentName`: The name of the argument to validate.
- `minimum`: The lower bound of the allowed range, or `nil` for no lower bound.
- `maximum`: The upper bound of the allowed range, or `nil` for no upper bound.

## Mentioned In

- [Evaluating tool-calling behavior](../evaluating-tool-calling-behavior.md)

## See Also

### Set and range matching

- [ArgumentMatcher.oneOf(argumentName:allowedValues:)](oneof%28argumentname_allowedvalues_%29.md): A value that indicates the argument must be present with a value that matches one of the allowed values.
