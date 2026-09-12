> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/regexbuilder/local/init(_:)-3igqu](https://developer.apple.com/documentation/regexbuilder/local/init(_:)-3igqu)

# init(\_:)

**Framework:** RegexBuilder  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Creates an atomic group with the given regex component.

## Declaration

```swift
init<W, C1, C2, C3>(_ component: some RegexComponent) where Output == (Substring, C1, C2, C3)
```

## Parameters

- `component`: The regex component to wrap in an atomic group.
