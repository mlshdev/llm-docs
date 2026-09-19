> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/audiocontext/workout

# workout

**Framework:** AppIntents  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A workout session of any type.

## Declaration

```swift
static var workout: AudioContext { get }
```

<a id="discussion"></a>

## Discussion

Use this to donate entities relevant to any workout, regardless of activity type or intensity.

You can donate entities to multiple workout contexts simultaneously. More specific contexts (e.g., a specific activity type) give the system stronger hints than broader ones (e.g., any workout). The system considers all matching entities and their relevance when determining what to suggest.
