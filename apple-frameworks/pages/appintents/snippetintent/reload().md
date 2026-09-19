> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/snippetintent/reload()

# reload()

**Framework:** App Intents  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Refreshes the intent’s snippet presentation.

## Declaration

```swift
static func reload()
```

## Mentioned In

- [Displaying static and interactive snippets](../displaying-static-and-interactive-snippets.md)

<a id="discussion"></a>

## Discussion

Call this function when information that appears in the snippet has changed and you need to update its representation.
