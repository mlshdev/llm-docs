> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foveatedstreaming/foveatedstreamingsession/immersivepresentationbehaviors-swift.struct/automatic(_:_:)](https://developer.apple.com/documentation/foveatedstreaming/foveatedstreamingsession/immersivepresentationbehaviors-swift.struct/automatic(_:_:))

# automatic(\_:\_:)

**Framework:** Foveated Streaming  
**Kind:** Type Method  
**Availability:** visionOS 26.4+

Opens the immersive space when the session connects or resumes and dismisses the immersive space when the session pauses or disconnects.

## Declaration

```swift
static func automatic(_ open: OpenImmersiveSpaceAction, _ dismiss: DismissImmersiveSpaceAction) -> FoveatedStreamingSession.ImmersivePresentationBehaviors
```

## Parameters

- `open`: The action that opens the immersive space.
- `dismiss`: The action that dismisses the immersive space.
