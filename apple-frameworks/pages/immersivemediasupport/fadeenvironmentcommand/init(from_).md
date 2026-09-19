> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/immersivemediasupport/fadeenvironmentcommand/init(from:)

# init(from:)

**Framework:** Immersive Media Support  
**Kind:** Initializer  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.0+ · visionOS 26.0+

Creates a `FadeEnvironmentCommand` instance from the specified decoder.

## Declaration

```swift
init(from decoder: any Decoder) throws
```

## Parameters

- `decoder`: The decoder that contains a command to parse.
