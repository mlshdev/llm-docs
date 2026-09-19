> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/imagetrackingprovider/init(referenceimages:)

# init(referenceImages:)

**Framework:** ARKit  
**Kind:** Initializer  
**Availability:** visionOS 1.0+

Creates an image-tracking provider that tracks the reference images you supply.

## Declaration

```swift
init(referenceImages: [ReferenceImage])
```

## Parameters

- `referenceImages`: An array of known images to track in a person’s surroundings.

## See Also

### Creating an image-tracking provider

- [isSupported](issupported.md): A Boolean value that indicates whether the current runtime environment supports image-tracking providers.
- [requiredAuthorizations](requiredauthorizations.md): The types of authorizations necessary for tracking images.
