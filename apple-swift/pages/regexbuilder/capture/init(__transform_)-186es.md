> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/regexbuilder/capture/init(_:transform:)-186es](https://developer.apple.com/documentation/regexbuilder/capture/init(_:transform:)-186es)

# init(\_:transform:)

**Framework:** RegexBuilder  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Creates a capture for the given component, transforming with the given closure.

## Declaration

```swift
init<W, C1, C2, C3, C4, C5, C6, NewCapture>(_ component: some RegexComponent, transform: @escaping (W) throws -> NewCapture) where Output == (Substring, NewCapture, C1, C2, C3, C4, C5, C6)
```

## Parameters

- `component`: The regex component to capture.
- `transform`: A closure that takes the substring matched by `component` and returns a new value to capture. If `transform` throws an error, matching is abandoned and the error is returned to the caller.
