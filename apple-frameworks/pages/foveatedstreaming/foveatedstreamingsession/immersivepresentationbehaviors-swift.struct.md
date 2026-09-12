> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foveatedstreaming/foveatedstreamingsession/immersivepresentationbehaviors-swift.struct](https://developer.apple.com/documentation/foveatedstreaming/foveatedstreamingsession/immersivepresentationbehaviors-swift.struct)

# FoveatedStreamingSession.ImmersivePresentationBehaviors

**Framework:** Foveated Streaming  
**Kind:** Structure  
**Availability:** visionOS 26.4+

The presentation behaviors describing when the immersive space that hosts the streamed content is presented and dismissed.

## Declaration

```swift
struct ImmersivePresentationBehaviors
```

<a id="overview"></a>

## Overview

Use `ImmersivePresentationBehaviors` to automatically present the immersive space when the foveated streaming session connects or resumes, as well as automatically dismiss the immersive space when the foveated streaming session pauses or disconnects.

## Topics

### Initializers

- [init()](immersivepresentationbehaviors-swift.struct/init%28%29.md)

### Type Methods

- [automatic(\_:\_:)](immersivepresentationbehaviors-swift.struct/automatic%28____%29.md): Opens the immersive space when the session connects or resumes and dismisses the immersive space when the session pauses or disconnects.
- [dismissOnDisconnect(\_:)](immersivepresentationbehaviors-swift.struct/dismissondisconnect%28__%29.md): Dismisses the immersive space when the session disconnects.
- [dismissOnPause(\_:)](immersivepresentationbehaviors-swift.struct/dismissonpause%28__%29.md): Dismisses the immersive space when the session pauses.
- [presentOnConnect(\_:)](immersivepresentationbehaviors-swift.struct/presentonconnect%28__%29.md): Opens the immersive space when the session connects.
- [presentOnResume(\_:)](immersivepresentationbehaviors-swift.struct/presentonresume%28__%29.md): Opens the immersive space when the session resumes.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
