> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/regexbuilder/trycapture/init(_:transform:)-55y26](https://developer.apple.com/documentation/regexbuilder/trycapture/init(_:transform:)-55y26)

# init(\_:transform:)

**Framework:** RegexBuilder  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Creates a capture for the given component, attempting to transform with the given closure.

## Declaration

```swift
init<W, C1, C2, C3, C4, NewCapture>(_ component: some RegexComponent, transform: @escaping (W) throws -> NewCapture?) where Output == (Substring, NewCapture, C1, C2, C3, C4)
```

## Parameters

- `component`: The regex component to capture.
- `transform`: A closure that takes the substring matched by `component` and returns a new value to capture, or `nil` if matching should proceed, backtracking if allowed. If `transform` throws an error, matching is abandoned and the error is returned to the caller.
