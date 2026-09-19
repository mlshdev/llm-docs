> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/imagetrackingprovider/requiredauthorizations

# requiredAuthorizations

**Framework:** ARKit  
**Kind:** Type Property  
**Availability:** visionOS 1.0+

The types of authorizations necessary for tracking images.

## Declaration

```swift
static var requiredAuthorizations: [ARKitSession.AuthorizationType] { get }
```

## See Also

### Creating an image-tracking provider

- [init(referenceImages:)](init%28referenceimages_%29.md): Creates an image-tracking provider that tracks the reference images you supply.
- [isSupported](issupported.md): A Boolean value that indicates whether the current runtime environment supports image-tracking providers.
