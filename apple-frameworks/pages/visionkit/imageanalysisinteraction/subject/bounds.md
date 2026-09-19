> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/visionkit/imageanalysisinteraction/subject/bounds

# bounds

**Framework:** VisionKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

A rectangle that identifies the extremities of a subject within an image in relation to the interaction view’s bounds.

## Declaration

```swift
@MainActor var bounds: CGRect { get }
```

<a id="discussion"></a>

## Discussion

This property will always return `CGRect.zero` if the interaction isn’t added to the view.
