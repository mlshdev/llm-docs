> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/argumentmatcher/partiallygenerated/init(_:)](https://developer.apple.com/documentation/evaluations/argumentmatcher/partiallygenerated/init(_:))

# init(\_:)

**Framework:** Evaluations  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

Creates a partial argument matcher from the given generated content.

## Declaration

```swift
nonisolated init(_ content: GeneratedContent) throws
```

## Parameters

- `content`: The generated content to decode.

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if the content doesn’t match a known matcher type.
