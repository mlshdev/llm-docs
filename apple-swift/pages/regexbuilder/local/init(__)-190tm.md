> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/regexbuilder/local/init(_:)-190tm](https://developer.apple.com/documentation/regexbuilder/local/init(_:)-190tm)

# init(\_:)

**Framework:** RegexBuilder  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Creates an atomic group with the given regex component.

## Declaration

```swift
init(_ component: some RegexComponent) where Output == Substring
```

## Parameters

- `component`: The regex component to wrap in an atomic group.
