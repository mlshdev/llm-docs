> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/charts/annotationoverflowresolution/init(x:y:)

# init(x:y:)

**Framework:** Swift Charts  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates an AnnotationOverflowResolution with strategies for the X and Y dimensions.

## Declaration

```swift
nonisolated init(x: AnnotationOverflowResolution.Strategy = .automatic, y: AnnotationOverflowResolution.Strategy = .automatic)
```

<a id="discussion"></a>

## Discussion

Parameters:

- x: The strategy to resolve X overflow.
- y: The strategy to resolve Y overflow.
