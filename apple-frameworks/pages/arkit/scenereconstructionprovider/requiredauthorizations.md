> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/scenereconstructionprovider/requiredauthorizations

# requiredAuthorizations

**Framework:** ARKit  
**Kind:** Type Property  
**Availability:** visionOS 1.0+

The types of authorizations necessary for running scene reconstruction.

## Declaration

```swift
static var requiredAuthorizations: [ARKitSession.AuthorizationType] { get }
```

## See Also

### Inspecting a scene reconstruction provider

- [description](description.md): A textual representation of this scene reconstruction provider.
- [allAnchors](allanchors.md): An array that contains the mesh anchors the scene reconstruction provider is tracking.
