> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/regexbuilder/capture/init(_:)-3o4p2](https://developer.apple.com/documentation/regexbuilder/capture/init(_:)-3o4p2)

# init(\_:)

**Framework:** RegexBuilder  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Creates a capture for the given component.

## Declaration

```swift
init<W>(@RegexComponentBuilder _ componentBuilder: () -> some RegexComponent) where Output == (Substring, W)
```

## Parameters

- `componentBuilder`: A builder closure that generates a regex component to capture.
