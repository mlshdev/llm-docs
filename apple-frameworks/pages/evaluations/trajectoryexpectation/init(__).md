> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/evaluations/trajectoryexpectation/init(_:)

# init(\_:)

**Framework:** Evaluations  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

Creates a trajectory expectation from generated content.

## Declaration

```swift
nonisolated init(_ content: GeneratedContent) throws
```

## Parameters

- `content`: The generated content to decode.

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if the content is malformed or missing required properties.
