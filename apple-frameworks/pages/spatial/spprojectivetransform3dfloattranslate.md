> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spprojectivetransform3dfloattranslate](https://developer.apple.com/documentation/spatial/spprojectivetransform3dfloattranslate)

# SPProjectiveTransform3DFloatTranslate

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPProjectiveTransform3DFloat SPProjectiveTransform3DFloatTranslate(SPProjectiveTransform3DFloat transform, SPVector3DFloat offset);
```

## Parameters

- `transform`: The source transform.
- `offset`: A vector that defines the translation.

<a id="return-value"></a>

## Return Value

A transform that’s offset by the @p width, @p height, and @p depth of the size.

<a id="discussion"></a>

## Discussion

Returns a projective transform that’s constructed by concatenating an existing projective transform and a translation.
