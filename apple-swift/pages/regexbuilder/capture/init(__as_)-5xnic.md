> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/regexbuilder/capture/init(_:as:)-5xnic](https://developer.apple.com/documentation/regexbuilder/capture/init(_:as:)-5xnic)

# init(\_:as:)

**Framework:** RegexBuilder  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Creates a capture for the given component using the specified reference.

## Declaration

```swift
init<W, C1>(_ component: some RegexComponent, as reference: Reference<W>) where Output == (Substring, W, C1)
```

## Parameters

- `component`: The regex component to capture.
- `reference`: The reference to use for anything captured by `component`.
