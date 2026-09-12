> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/regexbuilder/repeat/init(_:count:)-8cqm4](https://developer.apple.com/documentation/regexbuilder/repeat/init(_:count:)-8cqm4)

# init(\_:count:)

**Framework:** RegexBuilder  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Creates a regex component that matches the given component repeated the specified number of times.

## Declaration

```swift
init<W, C1, C2, C3, C4>(_ component: some RegexComponent, count: Int) where Output == (Substring, C1?, C2?, C3?, C4?)
```

## Parameters

- `component`: The regex component to repeat.
- `count`: The number of times to repeat `component`. `count` must be greater than or equal to zero.
