> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/toolexpectation/init(_:arguments:)](https://developer.apple.com/documentation/evaluations/toolexpectation/init(_:arguments:))

# init(\_:arguments:)

**Framework:** Evaluations  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

Creates a new tool expectation.

## Declaration

```swift
init(_ name: String, arguments: [ArgumentMatcher] = [])
```

## Parameters

- `name`: The name of the tool.
- `arguments`: The argument matchers to validate against the tool call.
