> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/argumentmatcher/keyonly(argumentname:)](https://developer.apple.com/documentation/evaluations/argumentmatcher/keyonly(argumentname:))

# ArgumentMatcher.keyOnly(argumentName:)

**Framework:** Evaluations  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

A value that indicates that the argument must be present with this key and no specific value.

## Declaration

```swift
case keyOnly(argumentName: String)
```

## Parameters

- `argumentName`: The name of the argument that must be present.

## See Also

### Exact matching

- [ArgumentMatcher.exact(argumentName:value:)](exact%28argumentname_value_%29.md): A value that indicates that the argument must be present with this exact key and value.
