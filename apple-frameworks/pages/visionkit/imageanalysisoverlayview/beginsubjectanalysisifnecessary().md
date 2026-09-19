> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/visionkit/imageanalysisoverlayview/beginsubjectanalysisifnecessary()

# beginSubjectAnalysisIfNecessary()

**Framework:** VisionKit  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Begins subject analysis on the overlay view’s image.

## Declaration

```swift
@MainActor final func beginSubjectAnalysisIfNecessary()
```

<a id="discussion"></a>

## Discussion

Subject analysis begins automatically without calling this method moments after the overlay view’s image displays onscreen. The framework ignores calls to this method if subject analysis is already in progress or complete.

> **Note**

> For subject analysis to begin, [preferredInteractionTypes](preferredinteractiontypes.md) needs to contain a subject-related option, such as [automatic](interactiontypes/automatic.md), [imageSubject](interactiontypes/imagesubject.md), or [visualLookUp](interactiontypes/visuallookup.md).

## See Also

### Managing image subjects

- [highlightedSubjects](highlightedsubjects.md): All highlighted subjects in the overlay view’s image.
