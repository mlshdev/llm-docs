> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/view/asyncimageurlsession(_:)

# asyncImageURLSession(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A modifier that adds a URL session for asynchronous images contained in the view to use when fetching image data.

## Declaration

```swift
nonisolated func asyncImageURLSession(_ urlSession: URLSession) -> some View

```

## Parameters

- `urlSession`: An instance of [URLSession](https://developer.apple.com/documentation/foundation/urlsession) for [AsyncImage](../asyncimage.md) instances to use for image download data tasks.
