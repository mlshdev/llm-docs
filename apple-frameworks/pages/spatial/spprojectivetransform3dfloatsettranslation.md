> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/spprojectivetransform3dfloatsettranslation

# SPProjectiveTransform3DFloatSetTranslation

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static void SPProjectiveTransform3DFloatSetTranslation(SPProjectiveTransform3DFloat *transform, SPVector3DFloat offset);
```

## Parameters

- `transform`: The transform.
- `offset`: The translation.

<a id="discussion"></a>

## Discussion

Sets the translation component on the specified transform.
