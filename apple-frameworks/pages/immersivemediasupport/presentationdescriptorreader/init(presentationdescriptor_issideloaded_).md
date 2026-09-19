> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/immersivemediasupport/presentationdescriptorreader/init(presentationdescriptor:issideloaded:)

# init(presentationDescriptor:isSideloaded:)

**Framework:** Immersive Media Support  
**Kind:** Initializer  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.0+ · visionOS 26.0+

Initializes an instance that contains the specified presentation descriptor.

## Declaration

```swift
init(presentationDescriptor: PresentationDescriptor, isSideloaded: Bool = false)
```

## Parameters

- `presentationDescriptor`: The current presentation commands to use or parse.
- `isSideloaded`: Signals the player this is a sideloaded dynamic metadata and not real-time - in that case the player will not delete old commands as playback continues (to support seek)
