> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/imagetrackingprovider/issupported

# isSupported

**Framework:** ARKit  
**Kind:** Type Property  
**Availability:** visionOS 1.0+

A Boolean value that indicates whether the current runtime environment supports image-tracking providers.

## Declaration

```swift
static var isSupported: Bool { get }
```

## See Also

### Creating an image-tracking provider

- [init(referenceImages:)](init%28referenceimages_%29.md): Creates an image-tracking provider that tracks the reference images you supply.
- [requiredAuthorizations](requiredauthorizations.md): The types of authorizations necessary for tracking images.
