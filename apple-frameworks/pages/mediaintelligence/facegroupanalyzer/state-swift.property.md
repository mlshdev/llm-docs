> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaintelligence/facegroupanalyzer/state-swift.property](https://developer.apple.com/documentation/mediaintelligence/facegroupanalyzer/state-swift.property)

# state

**Framework:** Media Intelligence  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A value describing the current processing state of the analyzer.

## Declaration

```swift
nonisolated(nonsending) final var state: FaceGroupAnalyzer.State { get async }
```

## Mentioned In

- [Detecting and grouping faces in images](../detecting-and-grouping-faces-in-images.md)

## See Also

### Updating the gallery

- [FaceGroupAnalyzer.State](state-swift.enum.md): The current processing state of a face group analyzer.
- [update(subprogress:)](update%28subprogress_%29.md): Clusters faces into entities and updates their assignments.
