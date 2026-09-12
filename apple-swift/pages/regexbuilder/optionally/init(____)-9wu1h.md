> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/regexbuilder/optionally/init(_:_:)-9wu1h](https://developer.apple.com/documentation/regexbuilder/optionally/init(_:_:)-9wu1h)

# init(\_:\_:)

**Framework:** RegexBuilder  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Creates a regex component that matches the given component zero or one times.

## Declaration

```swift
init<W, C1>(_ component: some RegexComponent, _ behavior: RegexRepetitionBehavior? = nil) where Output == (Substring, C1?)
```

## Parameters

- `component`: The regex component.
- `behavior`: The repetition behavior to use when repeating `component` in the match. If `behavior` is `nil`, the default repetition behavior is used, which can be changed from `eager` by calling `repetitionBehavior(_:)` on the resulting `Regex`.
