> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/evaluations/argumentmatcher/naturallanguage(argumentname:criteria:)

# ArgumentMatcher.naturalLanguage(argumentName:criteria:)

**Framework:** Evaluations  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

A value that indicates that the argument must be present and semantically match the given criteria.

## Declaration

```swift
case naturalLanguage(argumentName: String, criteria: String)
```

## Parameters

- `argumentName`: The name of the argument to validate.
- `criteria`: The semantic criteria the argument’s value must satisfy.
