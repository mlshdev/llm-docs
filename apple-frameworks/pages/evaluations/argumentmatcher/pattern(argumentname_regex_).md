> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/argumentmatcher/pattern(argumentname:regex:)](https://developer.apple.com/documentation/evaluations/argumentmatcher/pattern(argumentname:regex:))

# ArgumentMatcher.pattern(argumentName:regex:)

**Framework:** Evaluations  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

A value that indicates that the argument must be present and its string value must match the specified regex pattern.

## Declaration

```swift
case pattern(argumentName: String, regex: String)
```

## Parameters

- `argumentName`: The name of the argument to validate.
- `regex`: The regular expression the argument’s string value must match.

## See Also

### String matching

- [ArgumentMatcher.contains(argumentName:substring:)](contains%28argumentname_substring_%29.md): A value that indicates that the argument must be present and its string value must contain the specified substring.
- [ArgumentMatcher.hasPrefix(argumentName:prefix:)](hasprefix%28argumentname_prefix_%29.md): A value that indicates that the argument must be present and its string value must start with the specified prefix.
- [ArgumentMatcher.hasSuffix(argumentName:suffix:)](hassuffix%28argumentname_suffix_%29.md): A value that indicates that the argument must be present and its string value must end with the specified suffix.
