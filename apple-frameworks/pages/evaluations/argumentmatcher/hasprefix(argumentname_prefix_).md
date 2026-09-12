> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/argumentmatcher/hasprefix(argumentname:prefix:)](https://developer.apple.com/documentation/evaluations/argumentmatcher/hasprefix(argumentname:prefix:))

# ArgumentMatcher.hasPrefix(argumentName:prefix:)

**Framework:** Evaluations  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

A value that indicates that the argument must be present and its string value must start with the specified prefix.

## Declaration

```swift
case hasPrefix(argumentName: String, prefix: String)
```

## Parameters

- `argumentName`: The name of the argument to validate.
- `prefix`: The string the argument’s value must start with.

## See Also

### String matching

- [ArgumentMatcher.pattern(argumentName:regex:)](pattern%28argumentname_regex_%29.md): A value that indicates that the argument must be present and its string value must match the specified regex pattern.
- [ArgumentMatcher.contains(argumentName:substring:)](contains%28argumentname_substring_%29.md): A value that indicates that the argument must be present and its string value must contain the specified substring.
- [ArgumentMatcher.hasSuffix(argumentName:suffix:)](hassuffix%28argumentname_suffix_%29.md): A value that indicates that the argument must be present and its string value must end with the specified suffix.
