> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/regexbuilder/capture/init(_:)-7gbb2

# init(\_:)

**Framework:** RegexBuilder  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Creates a capture for the given component.

## Declaration

```swift
init<W, C1>(@RegexComponentBuilder _ componentBuilder: () -> some RegexComponent) where Output == (Substring, W, C1)
```

## Parameters

- `componentBuilder`: A builder closure that generates a regex component to capture.
