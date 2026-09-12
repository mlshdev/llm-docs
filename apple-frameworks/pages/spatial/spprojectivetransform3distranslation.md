> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spprojectivetransform3distranslation](https://developer.apple.com/documentation/spatial/spprojectivetransform3distranslation)

# SPProjectiveTransform3DIsTranslation

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```objectivec
static bool SPProjectiveTransform3DIsTranslation(SPProjectiveTransform3D transform);
```

## Parameters

- `transform`: The source transform.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the transform only contains a translation.

<a id="discussion"></a>

## Discussion

Returns a Boolean value that indicates whether the transform only contains a translation.
