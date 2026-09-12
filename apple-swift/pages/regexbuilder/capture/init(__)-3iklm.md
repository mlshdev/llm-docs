> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/regexbuilder/capture/init(_:)-3iklm](https://developer.apple.com/documentation/regexbuilder/capture/init(_:)-3iklm)

# init(\_:)

**Framework:** RegexBuilder  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Creates a capture for the given component.

## Declaration

```swift
init<W, C1, C2, C3, C4, C5>(_ component: some RegexComponent) where Output == (Substring, W, C1, C2, C3, C4, C5)
```

## Parameters

- `component`: The regex component to capture.
