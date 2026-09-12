> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/regexbuilder/oneormore/init(_:_:)-6fm8e](https://developer.apple.com/documentation/regexbuilder/oneormore/init(_:_:)-6fm8e)

# init(\_:\_:)

**Framework:** RegexBuilder  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Creates a regex component that matches the given component one or more times.

## Declaration

```swift
init<W, C1, C2, C3, C4, C5>(_ behavior: RegexRepetitionBehavior? = nil, @RegexComponentBuilder _ componentBuilder: () -> some RegexComponent) where Output == (Substring, C1, C2, C3, C4, C5)
```

## Parameters

- `behavior`: The repetition behavior to use when repeating `component` in the match. If `behavior` is `nil`, the default repetition behavior is used, which can be changed from `eager` by calling `repetitionBehavior(_:)` on the resulting `Regex`.
- `componentBuilder`: A builder closure that generates a regex component.
