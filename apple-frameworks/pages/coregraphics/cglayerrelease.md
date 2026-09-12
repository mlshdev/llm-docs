> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cglayerrelease](https://developer.apple.com/documentation/coregraphics/cglayerrelease)

# CGLayerRelease

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Decrements the retain count of a layer object.

## Declaration

```objectivec
extern void CGLayerRelease(CGLayerRef layer);
```

## Parameters

- `layer`: The layer to release.

<a id="Discussion"></a>

## Discussion

This function is equivalent to calling [CFRelease](../corefoundation/cfrelease.md) except that it does not crash if the `layer` parameter is `null`.

## See Also

### Retaining and Releasing Color Objects

- [CGLayerRetain](cglayerretain.md): Increments the retain count of a layer object.
